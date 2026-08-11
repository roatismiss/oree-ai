import type { NextRequest } from "next/server";

/**
 * Delivery for the enquiry form.
 *
 * The site has no mailbox of its own, so the message is relayed to Web3Forms,
 * which forwards it to the address the access key was issued for — Aminata's
 * inbox. The key stays server-side: the browser only ever talks to this route,
 * so the form cannot be replayed against the account from elsewhere.
 *
 * Swapping providers (Resend, Postmark, ...) is a change to `deliver()` alone;
 * the request and response shapes the form depends on stay as they are.
 */

const ENDPOINT = "https://api.web3forms.com/submit";

/** Caps, so a bot cannot push a novel through the relay. */
const LIMITS = {
  name: 120,
  organization: 160,
  email: 200,
  phone: 60,
  message: 5000,
} as const;

type Field = keyof typeof LIMITS;

function text(value: unknown, field: Field) {
  return typeof value === "string" ? value.trim().slice(0, LIMITS[field]) : "";
}

/** Deliberately loose: the point is to catch typos, not to police addresses. */
function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export async function POST(request: NextRequest) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    // Not an error the visitor caused. The form falls back to their mail
    // client on any non-2xx, so the message still reaches the practice.
    console.error("Contact form: WEB3FORMS_ACCESS_KEY is not set.");
    return Response.json({ ok: false, reason: "unconfigured" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const values = (body ?? {}) as Record<string, unknown>;

  // Honeypot: a field hidden from people and left empty by them. Anything that
  // fills it is automated, and gets a 200 so it has no signal to retry on.
  if (typeof values.company_website === "string" && values.company_website !== "") {
    return Response.json({ ok: true });
  }

  const name = text(values.name, "name");
  const email = text(values.email, "email");
  const message = text(values.message, "message");
  const organization = text(values.organization, "organization");
  const phone = text(values.phone, "phone");

  if (!name || !message || !looksLikeEmail(email)) {
    return Response.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const locale = values.locale === "en" ? "en" : "fr";
  const labels =
    locale === "en"
      ? { organization: "Organization", phone: "Phone", none: "—", page: "Sent from" }
      : { organization: "Organisation", phone: "Téléphone", none: "—", page: "Envoyé depuis" };

  const subject =
    locale === "en"
      ? `Orée Diagnostic — ${name}`
      : `Diagnostic Orée — ${name}`;

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject,
        from_name: "Orée Conseil — formulaire du site",
        // So a reply in the inbox goes straight back to the visitor.
        replyto: email,
        name,
        email,
        [labels.organization]: organization || labels.none,
        [labels.phone]: phone || labels.none,
        message,
        [labels.page]: locale === "en" ? "/en/contact" : "/contact",
      }),
    });

    const result = (await response.json().catch(() => null)) as { success?: boolean } | null;

    if (!response.ok || !result?.success) {
      console.error("Contact form: relay rejected the message.", response.status, result);
      return Response.json({ ok: false, reason: "relay" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form: relay unreachable.", error);
    return Response.json({ ok: false, reason: "relay" }, { status: 502 });
  }
}
