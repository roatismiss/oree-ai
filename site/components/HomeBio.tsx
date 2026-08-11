import Image from "next/image";
import { Reveal } from "./Reveal";
import { copy, type Locale } from "@/content/copy";

/* LinkedIn icon for the bio section */
function LinkedInMark() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function HomeBio({ locale }: { locale: Locale }) {
  const { practice, footer, ui } = copy[locale];
  const { linkedin } = footer.social;

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="overflow-hidden rounded-[20px] bg-light px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[90px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <Reveal>
              <div className="overflow-hidden rounded-[20px]">
                <Image
                  src="/img/aminata-diabate.jpg"
                  alt={ui.portraitAlt}
                  width={1142}
                  height={1280}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="eyebrow text-grey">{practice.eyebrow}</p>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="h-display mt-6 text-ink">{practice.titleTop}</h2>
                  <h2 className="h-display text-ink">{practice.titleBottom}</h2>
                </div>
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={linkedin.title}
                  title={linkedin.title}
                  className="mt-6 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-300 hover:border-olive-deep hover:text-olive-deep"
                >
                  <LinkedInMark />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-[14px] bg-mousse p-8">
                <p className="h-row text-ink">{practice.name}</p>
                <p className="mt-2 text-[14px] leading-[20px] text-grey">{practice.role}</p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-8 text-[16px] leading-[24px] text-ink">{practice.body}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8">
                <p className="eyebrow text-olive-deep">{practice.backgroundLabel}</p>
                <p className="mt-3 text-[14px] leading-[20px] italic text-grey">
                  {practice.backgroundNote}
                </p>
                <ul className="mt-4 space-y-2">
                  {practice.background.map((b) => (
                    <li key={b.org} className="flex justify-between border-b border-hairline pb-2">
                      <span className="text-[14px] text-ink">{b.org}</span>
                      <span className="text-[13px] text-grey">{b.sector}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
