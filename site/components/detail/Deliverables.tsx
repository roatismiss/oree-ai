import { Reveal } from "../Reveal";

type Item = { title: string; body: string; phase?: string; points?: string[] };

export function Deliverables({
  title,
  intro,
  items,
  notThis,
  reassurance,
}: {
  /* Optional: on the standalone deliverables page the hero already carries the
     heading, and repeating it put the same words on screen twice. */
  title?: string;
  intro?: string;
  items: Item[];
  notThis: string;
  reassurance?: string;
}) {
  return (
    <section className="px-[10px] pt-[10px]">
      <div className="panel-wash overflow-hidden rounded-[20px] bg-light px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[90px]">
        {title && (
          <Reveal>
            <h2 className="h-display-tight text-ink">{title}</h2>
          </Reveal>
        )}

        {intro && (
          <Reveal delay={0.06}>
            <p className="mt-5 max-w-[560px] text-[16px] leading-[24px] text-grey">{intro}</p>
          </Reveal>
        )}

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((d, i) => (
            <Reveal key={d.title} delay={0.06 * i}>
              <div className="flex h-full flex-col rounded-[14px] bg-cream p-8">
                {/* The stage that produces the deliverable, so the three days
                    and what continues after them stay legible. */}
                {d.phase && <p className="eyebrow mb-4 text-amber-ink">{d.phase}</p>}
                <h3 className="h-row text-[22px] text-ink">{d.title}</h3>
                <p className="mt-4 text-[15px] leading-[23px] text-grey">{d.body}</p>
                {d.points && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {d.points.map((p) => (
                      <li
                        key={p}
                        className="rounded-full bg-mousse px-3 py-1 text-[13px] leading-[18px] text-olive-deep"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Scope limit, stated plainly. The template had no equivalent, but an
            advisory practice that never says what it is not reads as a vendor. */}
        <Reveal delay={0.1}>
          <div className="mt-12 max-w-[760px] space-y-4 border-l-2 border-amber-ink/40 pl-6 text-[15px] leading-[24px] text-grey">
            <p>{notThis}</p>
            {reassurance && <p>{reassurance}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
