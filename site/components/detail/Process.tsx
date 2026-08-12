import { Reveal } from "../Reveal";

/**
 * A numbered row per step, with the number set large in the accent colour on
 * the left and a phase pill on the right. Light surface, per the soft look.
 */
export function Process({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: string;
  steps: { n: string; title: string; body: string; phase: string }[];
}) {
  return (
    <section className="px-[10px] pt-[10px]">
      <div className="panel-wash overflow-hidden rounded-[20px] bg-craie px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[80px]">
        <Reveal>
          <p className="eyebrow text-amber-ink">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="h-display-tight mt-3 text-ink">{title}</h2>
        </Reveal>

        <ol className="mt-12 space-y-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={0.06 * i}>
              <li className="rounded-[16px] bg-light p-7 lg:p-9">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
                  <span className="font-display text-[40px] font-light leading-none text-olive-deep lg:w-[70px]">
                    {s.n}
                  </span>

                  <div className="flex-1">
                    <h3 className="h-row text-ink">{s.title}</h3>
                    <p className="mt-2 max-w-[640px] text-[14px] leading-[22px] text-ecorce">
                      {s.body}
                    </p>
                  </div>

                  <span className="shrink-0 self-start rounded-full bg-mousse px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-olive-deep lg:self-center">
                    {s.phase}
                  </span>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
