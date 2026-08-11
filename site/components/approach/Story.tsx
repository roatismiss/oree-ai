import { Reveal } from "../Reveal";
import { copy, type Locale } from "@/content/copy";

export function Story({ locale }: { locale: Locale }) {
  const { story } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="overflow-hidden rounded-[20px] bg-light px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[90px]">
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
              <p className="eyebrow mt-12 text-olive-deep">{story.bioEyebrow}</p>
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
