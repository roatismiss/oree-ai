import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { copy, localePath, type Locale } from "@/content/copy";

/* Sits directly after the Quebec figures, the position it held on the old
   "Pourquoi Orée" page. The four statements are the argument for acting now,
   so they stay on the homepage rather than only on /risks. */
export function CostOfInaction({ locale }: { locale: Locale }) {
  const { costOfInaction } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="overflow-hidden rounded-[20px] bg-light px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[80px]">
        <Reveal>
          <p className="eyebrow text-amber-ink">{costOfInaction.eyebrow}</p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="h-display mt-3 text-ink">{costOfInaction.title}</h2>
        </Reveal>

        <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {costOfInaction.items.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <div className="border-t border-hairline pt-6">
                <p className="h-row text-ink">{item.title}</p>
                <p className="mt-3 max-w-[420px] text-[15px] leading-[22px] text-ecorce">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <div className="mt-12">
            <Button variant="dark" href={localePath(locale, "/risks")}>
              {costOfInaction.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
