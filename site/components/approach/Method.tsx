import { Reveal } from "../Reveal";
import { method } from "@/content/approach";

export function Method() {
  return (
    <section className="px-[10px] pt-[10px]">
      <div className="relative overflow-hidden rounded-[20px] bg-craie px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[80px]">
        <div className="relative">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <div>
              <Reveal>
                <p className="eyebrow text-amber-ink">{method.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="h-display mt-4 text-ink">{method.title}</h2>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <p className="text-[15px] leading-[22px] text-ecorce lg:pt-6">{method.intro}</p>
            </Reveal>
          </div>

          <ol className="mt-14">
            {method.steps.map((s, i) => (
              <Reveal key={s.n} delay={0.06 * i}>
                <li className="border-t border-hairline py-8 last:border-b">
                  <div className="flex items-baseline justify-between gap-8">
                    <h3 className="h-row text-ink">
                      {s.fr}
                      <span className="ml-3 text-grey">{s.en}</span>
                    </h3>
                    <span className="h-row shrink-0 text-olive-deep">{s.n}</span>
                  </div>
                  <p className="mt-3 max-w-[720px] text-[15px] leading-[22px] text-ecorce">
                    {s.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
