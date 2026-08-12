"use client";

import { useState } from "react";
import { copy, type Locale } from "@/content/copy";

type Values = Record<string, string>;

type Status = "idle" | "sending" | "sent" | "error";

/**
 * The message is posted to /api/contact, which relays it to Aminata's inbox.
 * If that call fails for any reason — relay down, key missing — the visitor is
 * offered their own mail client instead, so a written message is never lost to
 * an error the practice caused. See app/api/contact/route.ts.
 */
async function sendEnquiry(values: Values, locale: Locale) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...values, locale }),
  });
  if (!response.ok) throw new Error(`Contact relay responded ${response.status}`);
}

/** The fallback offered on failure: the message, composed in their own client. */
function mailtoHref(
  values: Values,
  to: { email: string; subject: string; labels: Record<string, string> }
) {
  const lines = [
    `${to.labels.name}: ${values.name}`,
    `${to.labels.organization}: ${values.organization || "—"}`,
    `${to.labels.email}: ${values.email}`,
    `${to.labels.phone}: ${values.phone || "—"}`,
    "",
    values.message,
  ];
  return (
    `mailto:${to.email}` +
    `?subject=${encodeURIComponent(`${to.subject} — ${values.name}`)}` +
    `&body=${encodeURIComponent(lines.join("\n"))}`
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  optionalNote,
  disabled,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  optionalNote?: string;
  disabled?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] uppercase tracking-[0.04em] text-grey">
        {label}
        {optionalNote && <span className="ml-2 normal-case text-ink/40">({optionalNote})</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        autoComplete={
          name === "name"
            ? "name"
            : name === "email"
              ? "email"
              : name === "phone"
                ? "tel"
                : name === "organization"
                  ? "organization"
                  : "off"
        }
        className="mt-3 w-full border-b border-hairline bg-transparent pb-2 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-olive-deep disabled:opacity-50"
      />
    </label>
  );
}

export function ContactForm({ locale }: { locale: Locale }) {
  const { contactForm, contact } = copy[locale];

  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState<Values>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submitted = Object.fromEntries(new FormData(e.currentTarget).entries()) as Values;
    setValues(submitted);
    setStatus("sending");
    try {
      await sendEnquiry(submitted, locale);
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  // The confirmation the old site showed once a message went out.
  if (status === "sent") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-[14px] border border-olive-deep/25 bg-light/70 px-7 py-8"
      >
        <p className="h-row max-w-[560px] text-ink">{contactForm.confirmation.title}</p>
        <p className="mt-4 max-w-[560px] text-[14px] leading-[21px] text-grey">
          {contactForm.confirmation.body}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-[14px] uppercase tracking-[0.04em] text-olive-deep underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          {contactForm.confirmation.again}
        </button>
      </div>
    );
  }

  // Nothing typed is thrown away: the message is still in `values`, and the
  // link hands it to their mail client already composed.
  if (status === "error") {
    return (
      <div
        role="alert"
        className="rounded-[14px] border border-hairline bg-light/70 px-7 py-8"
      >
        <p className="h-row max-w-[560px] text-ink">{contactForm.failure.title}</p>
        <p className="mt-4 max-w-[560px] text-[14px] leading-[21px] text-grey">
          {contactForm.failure.body}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
          <a
            href={mailtoHref(values, {
              email: contact.email,
              subject: contactForm.subject,
              labels: contactForm.fields,
            })}
            className="text-[14px] uppercase tracking-[0.04em] text-olive-deep underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            {contactForm.failure.mailto}
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-[14px] uppercase tracking-[0.04em] text-grey underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            {contactForm.failure.retry}
          </button>
        </div>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate={false}>
      <div className="grid gap-8 sm:grid-cols-2">
        <Field name="name" label={contactForm.fields.name} required disabled={sending} />
        <Field
          name="organization"
          label={contactForm.fields.organization}
          disabled={sending}
        />
        <Field
          name="email"
          label={contactForm.fields.email}
          type="email"
          required
          disabled={sending}
        />
        <Field
          name="phone"
          label={contactForm.fields.phone}
          type="tel"
          optionalNote={contactForm.optional}
          disabled={sending}
        />
      </div>

      <label className="mt-8 block">
        <span className="block text-[12px] uppercase tracking-[0.04em] text-grey">
          {contactForm.fields.message}
        </span>
        <textarea
          name="message"
          rows={3}
          required
          disabled={sending}
          className="mt-3 w-full resize-y border-b border-hairline bg-transparent pb-2 text-[15px] leading-[23px] text-ink outline-none transition-colors focus:border-olive-deep disabled:opacity-50"
        />
      </label>

      {/* Honeypot. Hidden from people and from assistive technology, so only a
          bot filling every field will complete it. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Company website
          <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-light transition-transform duration-300 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
      >
        <span className="btn-label whitespace-nowrap">
          {sending ? contactForm.sending : contactForm.submit}
        </span>
        <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-light/45 transition-transform duration-300 group-hover:translate-x-0.5">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <path
              d="M1.5 5h7M6 2.5 8.5 5 6 7.5"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </form>
  );
}
