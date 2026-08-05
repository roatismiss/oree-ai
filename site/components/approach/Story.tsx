import { Reveal } from "../Reveal";
import { story } from "@/content/approach";

export function Story() {
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
          </div>
        </div>
      </div>
    </section>
  );
}
