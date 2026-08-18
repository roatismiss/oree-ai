import { Reveal } from "../Reveal";

/**
 * A numbered row per step, with the number set large in the accent colour on
 * the left and a phase pill on the right. Light surface, per the soft look.
 */
/** Bookend card. Same surface as a step, but the numeral slot holds a rule
    instead of a number: these frame the sequence, they are not part of it. */
function Bookend({
  phase,
  title,
  body,
  children,
}: {
  phase: string;
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-[16px] border border-hairline bg-craie/60 p-7 lg:p-9">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
        <span aria-hidden className="mt-4 hidden h-px w-[38px] shrink-0 bg-olive-deep/35 lg:block lg:w-[70px]" />

        <div className="flex-1">
          <h3 className="h-row text-ink">{title}</h3>
          <p className="mt-2 max-w-[640px] text-[14px] leading-[22px] text-ecorce">{body}</p>
          {children}
        </div>

        <span className="shrink-0 self-start rounded-full border border-olive-deep/20 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-olive-deep">
          {phase}
        </span>
      </div>
    </div>
  );
}

export function Process({
  eyebrow,
  title,
  steps,
  before,
  after,
}: {
  eyebrow: string;
  title: string;
  steps: { n: string; title: string; body: string; phase: string }[];
  before?: { title: string; body: string; phase: string };
  after?: {
    title: string;
    body: string;
    phase: string;
    paths: { name: string; body: string }[];
  };
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

        {before && (
          <Reveal delay={0.1}>
            <div className="mt-12">
              <Bookend phase={before.phase} title={before.title} body={before.body} />
            </div>
          </Reveal>
        )}

        <ol className={`space-y-5 ${before ? "mt-5" : "mt-12"}`}>
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

        {after && (
          <Reveal>
            <div className="mt-5">
              <Bookend phase={after.phase} title={after.title} body={after.body}>
                {/* The three routes, named rather than sold: the first one is
                    "you do it without us", and it is listed first on purpose. */}
                <ul className="mt-6 space-y-4 border-t border-hairline pt-5">
                  {after.paths.map((p) => (
                    <li key={p.name} className="max-w-[640px]">
                      <p className="text-[14px] font-semibold uppercase tracking-[0.04em] text-ink">
                        {p.name}
                      </p>
                      <p className="mt-1 text-[14px] leading-[22px] text-ecorce">{p.body}</p>
                    </li>
                  ))}
                </ul>
              </Bookend>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
