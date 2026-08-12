import { Reveal } from "../Reveal";
import { copy, type Locale } from "@/content/copy";

/* LinkedIn icon for the bio section */
function LinkedInMark() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Story({ locale }: { locale: Locale }) {
  const { story, footer } = copy[locale];
  const { linkedin } = footer.social;

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="panel-wash overflow-hidden rounded-[20px] bg-light px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[90px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-grey">{story.eyebrow}</p>
            </Reveal>

            <Reveal delay={0.06}>
              <figure className="mt-6 rounded-[14px] bg-sand/70 px-8 py-7">
                <blockquote className="h-row text-[22px] leading-[1.25] text-ink">
                  {story.quote}
                </blockquote>
                <figcaption className="mt-4 text-[14px] leading-[18px] text-grey">
                  {story.attribution}
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 space-y-6 text-[16px] leading-[22px] text-ink">
                {story.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:pt-10">
            <Reveal delay={0.08}>
              <h2 className="h-display text-ink">{story.titleTop}</h2>
              <h2 className="h-display text-ink">{story.titleBottom}</h2>
            </Reveal>

            {/* The full-length biography, in Aminata's own voice. */}
            <Reveal delay={0.14}>
              <div className="flex items-center justify-between">
                <p className="eyebrow mt-12 text-olive-deep">{story.bioEyebrow}</p>
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={linkedin.title}
                  title={linkedin.title}
                  className="mt-12 flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-300 hover:border-olive-deep hover:text-olive-deep"
                >
                  <LinkedInMark />
                </a>
              </div>
              <div className="mt-5 space-y-6 text-[16px] leading-[24px] text-ink">
                {story.bio.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Why the practice is called Orée. This explains the name and stays
            on the page. */}
        <Reveal delay={0.1}>
          <div className="mt-16 rounded-[14px] bg-mousse px-8 py-9 lg:px-10">
            <p className="eyebrow text-olive-deep">{story.nameLabel}</p>
            <p className="refrain mt-4 max-w-[820px] text-[21px] leading-[1.4] text-ink">
              {story.nameMetaphor}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
