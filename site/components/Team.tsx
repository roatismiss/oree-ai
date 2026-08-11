import Image from "next/image";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { copy, localePath, type Locale } from "@/content/copy";

/* LinkedIn icon for the bio section */
function LinkedInMark() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

type Item = { title: string; note: string };

function Card({ item }: { item: Item }) {
  return (
    <div className="mr-5 flex w-[380px] shrink-0 flex-col justify-center rounded-[12px] bg-light/90 px-8 py-5">
      <p className="h-row text-ink">{item.title}</p>
      <p className="mt-2 text-[13px] leading-[18px] text-grey">{item.note}</p>
    </div>
  );
}

function Marquee({ items, dir }: { items: Item[]; dir: "left" | "right" }) {
  return (
    <div className="marquee overflow-hidden">
      <div className={`marquee-track marquee-${dir}`}>
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <Card key={`${item.title}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function Team({ locale }: { locale: Locale }) {
  const { practice, ui, footer } = copy[locale];
  const { linkedin } = footer.social;

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="overflow-hidden rounded-[20px] bg-sand py-20 lg:py-[100px]">
        <div className="px-6 sm:px-10 lg:px-[130px]">
          <Reveal>
            <p className="eyebrow text-olive-deep">{practice.eyebrow}</p>
          </Reveal>

          <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:items-start">
            <Reveal delay={0.06}>
              <div className="overflow-hidden rounded-[20px]">
                <Image
                  src="/img/aminata-diabate.jpg"
                  alt={ui.portraitAlt}
                  width={1142}
                  height={1280}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="h-row mt-5 text-ink">{practice.name}</p>
              <p className="eyebrow mt-2 text-olive-deep">{practice.role}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="h-display-tight text-ink">{practice.titleTop}</h2>
                  <h2 className="h-display-tight text-ink">{practice.titleBottom}</h2>
                </div>
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={linkedin.title}
                  title={linkedin.title}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-300 hover:border-olive-deep hover:text-olive-deep"
                >
                  <LinkedInMark />
                </a>
              </div>

              <p className="mt-8 max-w-[520px] text-[16px] leading-[23px] text-ink">
                {practice.body}
              </p>

              {/* Career background, never presented as a client list. The
                  sector label and the clarifying note both carry meaning: they
                  are what stop the list being misread. */}
              <div className="mt-7 max-w-[520px] rounded-[14px] bg-mousse px-6 py-6">
                <p className="eyebrow text-olive-deep">{practice.backgroundLabel}</p>
                <ul className="mt-4 divide-y divide-olive-deep/15">
                  {practice.background.map((b) => (
                    <li
                      key={b.org}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-2.5"
                    >
                      <span className="text-[14px] leading-[20px] text-ink">{b.org}</span>
                      <span className="text-[13px] leading-[20px] text-grey">{b.sector}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] leading-[19px] text-grey">
                  {practice.backgroundNote}
                </p>
              </div>

              <div className="mt-9">
                <Button variant="yellow" href={localePath(locale, "/approach")}>{practice.cta}</Button>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 space-y-5">
          <Marquee items={practice.rowOne} dir="left" />
          <Marquee items={practice.rowTwo} dir="right" />
        </div>
      </div>
    </section>
  );
}
