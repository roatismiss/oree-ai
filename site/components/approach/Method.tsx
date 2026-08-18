import { Reveal } from "../Reveal";
import { SectionMark } from "../SectionMark";
import { copy, type Locale } from "@/content/copy";

export function Method({ locale, index }: { locale: Locale; index: string }) {
  const { method } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="panel-wash relative overflow-hidden rounded-[20px] bg-craie px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[80px]">
        <div className="relative">
          <Reveal>
            <SectionMark index={index} label={method.eyebrow} tone="amber" className="mb-10" />
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <div>
              <Reveal delay={0.06}>
                <h2 className="h-display text-ink">{method.title}</h2>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <p className="text-[15px] leading-[22px] text-ecorce lg:pt-6">{method.intro}</p>
            </Reveal>
          </div>

          {/* Observer · Relever · Évaluer · Engager — the four initials are the
              practice's name, and the step list never showed them, so the one
              page devoted to the method kept its mnemonic a secret. The letter
              is taken from the step's own French verb rather than stored again
              beside it, which keeps the two from ever drifting apart. */}
          <ol className="mt-14">
            {method.steps.map((s, i) => (
              <Reveal key={s.n} delay={0.06 * i}>
                <li className="grid gap-4 border-t border-hairline py-10 sm:grid-cols-[104px_minmax(0,1fr)] sm:gap-8 lg:gap-14 [&:last-child]:border-b">
                  <div className="flex items-baseline gap-5 sm:block">
                    {/* Grey, not amber: the section mark above this list is an
                        amber "01" in the same eyebrow face, and a step numbered
                        the same way read as the section number repeated. The
                        step's real marker is the letter beneath it. */}
                    <p className="eyebrow text-grey">{s.n}</p>
                    <p
                      aria-hidden
                      className="font-display text-[52px] italic leading-none text-olive-deep sm:mt-4 lg:text-[68px]"
                    >
                      {s.fr.charAt(0)}
                    </p>
                  </div>

                  <div>
                    <h3 className="h-row text-ink">
                      {s.fr}
                      <span className="ml-3 text-grey">{s.en}</span>
                    </h3>
                    <p className="mt-3 max-w-[720px] text-[15px] leading-[22px] text-ecorce">
                      {s.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
