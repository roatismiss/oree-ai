import { Reveal } from "../Reveal";

/**
 * The Radar Loi 25, told as what it is and what it is not.
 *
 * Its own section rather than another row of deliverable cards, because of
 * what it claims: the Radar reads a client's AI-touched processes against
 * three Law 25 obligations and puts a risk level on each one. A tool that
 * scores legal exposure has to say, in the same breath and at the same size,
 * that the score is operational and not a compliance verdict — and a card
 * three across in a grid is not the place to say it.
 *
 * So the two halves are given equal weight on the page. The limits are not a
 * footnote under the capability; they sit beside it.
 */
export function Radar({
  radar,
}: {
  radar: {
    eyebrow: string;
    title: string;
    intro: string;
    is: { title: string; paragraphs: string[] };
    isNot: { title: string; paragraphs: string[] };
    closing: string;
  };
}) {
  return (
    <section className="px-[10px] pt-[10px]">
      <div className="panel-wash overflow-hidden rounded-[20px] bg-craie px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[90px]">
        <Reveal>
          <p className="eyebrow text-amber-ink">{radar.eyebrow}</p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="h-display-tight mt-3 text-ink">{radar.title}</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[760px] text-[16px] leading-[24px] text-ecorce">
            {radar.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {[radar.is, radar.isNot].map((half, i) => (
            <Reveal key={half.title} delay={0.14 + 0.06 * i}>
              <div className="flex h-full flex-col rounded-[16px] bg-light p-8 lg:p-9">
                <h3 className="h-row text-[22px] text-ink">{half.title}</h3>
                <div className="mt-5 space-y-4 text-[15px] leading-[23px] text-ecorce">
                  {half.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The practice's own refrain, which is also the Radar's limit. */}
        <Reveal delay={0.26}>
          <div className="mt-12 rounded-[14px] bg-mousse px-8 py-9 lg:px-10">
            <p className="refrain max-w-[820px] text-[21px] leading-[1.4] text-ink">
              {radar.closing}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
