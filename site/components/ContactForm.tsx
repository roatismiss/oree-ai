"use client";

import { useState } from "react";
import { copy, type Locale } from "@/content/copy";

/**
 * Delivery for the enquiry form.
 *
 * The site has no backend, so the message is handed to the visitor's own mail
 * client rather than collected into a form the practice never receives. When a
 * server endpoint or form service exists, this is the only function to change:
 * make it POST and return once the response is in.
 */
function submitEnquiry(
  values: Record<string, string>,
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
  const href =
    `mailto:${to.email}` +
    `?subject=${encodeURIComponent(`${to.subject} — ${values.name}`)}` +
    `&body=${encodeURIComponent(lines.join("\n"))}`;
  window.location.href = href;
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  optionalNote,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  optionalNote?: string;
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
        className="mt-3 w-full border-b border-ink/25 bg-transparent pb-2 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-olive-deep"
      />
    </label>
  );
}

export function ContactForm({ locale }: { locale: Locale }) {
  const { contactForm, contact } = copy[locale];

  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    submitEnquiry(Object.fromEntries(data.entries()) as Record<string, string>, {
      email: contact.email,
      subject: contactForm.subject,
      labels: contactForm.fields,
    });
    setSent(true);
  }

  // The confirmation the old site showed once a message went out. It also
  // names the fallback, so a visitor with no mail client set up is not left
  // believing something was delivered when it was not.
  if (sent) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-[14px] border border-olive-deep/25 bg-light/70 px-7 py-8"
      >
        <p className="h-row max-w-[560px] text-ink">{contactForm.confirmation.title}</p>
        <p className="mt-4 max-w-[560px] text-[14px] leading-[21px] text-grey">
          {contactForm.confirmation.fallback}
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-[14px] uppercase tracking-[0.04em] text-olive-deep underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          {contactForm.confirmation.again}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false}>
      <div className="grid gap-8 sm:grid-cols-2">
        <Field name="name" label={contactForm.fields.name} required />
        <Field name="organization" label={contactForm.fields.organization} />
        <Field name="email" label={contactForm.fields.email} type="email" required />
        <Field
          name="phone"
          label={contactForm.fields.phone}
          type="tel"
          optionalNote={contactForm.optional}
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
          className="mt-3 w-full resize-y border-b border-ink/25 bg-transparent pb-2 text-[15px] leading-[23px] text-ink outline-none transition-colors focus:border-olive-deep"
        />
      </label>

      <button
        type="submit"
        className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-light transition-transform duration-300 hover:-translate-y-0.5"
      >
        <span className="btn-label whitespace-nowrap">{contactForm.submit}</span>
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
