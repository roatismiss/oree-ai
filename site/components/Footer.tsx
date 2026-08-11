import Link from "next/link";
import { Reveal } from "./Reveal";
import { copy, localePath, type Locale } from "@/content/copy";

/* The LinkedIn mark, as an inline path so the footer needs no network request
   and the glyph inherits the palette rather than arriving as a blue block. */
function LinkedInMark() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const { footer } = copy[locale];
  const { linkedin } = footer.social;

  return (
    <footer className="relative overflow-hidden bg-light px-6 pt-20 sm:px-10 lg:px-[130px] lg:pt-[80px]">
      <div className="relative">
        {/* The contact column holds the email address, a 30-character token
            with no spaces that cannot wrap. At equal thirds it overflowed into
            the column beside it, in both languages. So it gets more room and a
            step down in size, and `min-w-0` lets the flex children shrink at
            all (their default `min-width:auto` is what let the text escape). */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.85fr)_minmax(0,1.25fr)]">
          {footer.columns.map((col, i) => {
            const right = i === footer.columns.length - 1;
            return (
              <Reveal key={col.label} delay={0.06 * i}>
                {/* On a phone the inline label ate about a third of the row,
                    which left the email too narrow and forced it to break
                    mid-address. Below sm the label sits above its list. */}
                <div
                  className={`flex min-w-0 flex-col gap-2 sm:flex-row sm:gap-6 ${
                    right ? "lg:flex-row-reverse lg:text-right" : ""
                  }`}
                >
                  <p className="eyebrow mt-1 shrink-0 text-olive-deep">{col.label}</p>
                  <ul className="min-w-0 space-y-2">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        {/* The contact column gets its own smaller serif rather
                            than `h-row`: `.h-row` is declared after the
                            Tailwind import in globals.css, so it outranks any
                            `text-[…]` utility and the size could not be
                            overridden. At this size the address fits on one
                            line and never has to break mid-word. */}
                        <Link
                          href={localePath(locale, l.href)}
                          className={`block text-ink transition-opacity hover:opacity-60 ${
                            right
                              ? "font-display text-[15px] font-medium uppercase leading-[25px] tracking-[0.01em] [overflow-wrap:anywhere]"
                              : "h-row"
                          }`}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <p className="refrain text-[20px] leading-[28px] text-olive-deep">{footer.refrain}</p>
            <p className="eyebrow mt-3 text-grey">{footer.refrainGloss}</p>
          </div>
        </Reveal>

        <div className="relative mt-10 flex items-end justify-center">
          <h2 className="h-wordmark text-center text-ink">{footer.wordmark}</h2>
        </div>

        <div className="relative mt-8 flex flex-col gap-4 border-t border-hairline py-8 text-[12px] font-medium uppercase leading-[18px] tracking-[0.06em] text-grey sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.legal}</p>
          <div className="flex items-center gap-8">
            {/* External, so it opens in its own tab and carries its own label
                for anyone navigating by screen reader. */}
            <a
              href={linkedin.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={linkedin.title}
              title={linkedin.title}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-300 hover:border-olive-deep hover:text-olive-deep"
            >
              <LinkedInMark />
            </a>
            {footer.links.map((l) => (
              <Link key={l} href={localePath(locale, "/contact")} className="transition-opacity hover:opacity-60">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
