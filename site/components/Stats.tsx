import { Reveal } from "./Reveal";
import { copy, type Locale } from "@/content/copy";

/* Why now: the four sourced Quebec figures, in a clean quiet grid. */
export function Stats({ locale }: { locale: Locale }) {
  const { stats } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="panel-wash overflow-hidden rounded-[20px] bg-cream px-6 py-16 sm:px-10 lg:px-[120px] lg:py-[80px]">
        <Reveal>
          <p className="eyebrow text-amber-ink">{stats.eyebrow}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.items.map((s, i) => (
            <Reveal key={s.figure} delay={0.06 * i}>
              <div className="flex h-full flex-col rounded-[14px] bg-light p-7">
                {/* Argile, the palette's figure colour ("chiffres clés, jalons,
                    points d'attention"). These four were khaki like everything
                    else, so the one place the page states a number read no
                    louder than its own labels. Counts as this page's single
                    terracotta zone. */}
                <span className="h-stat text-amber">{s.figure}</span>
                <p className="mt-4 text-[14px] leading-[20px] text-ink">{s.caption}</p>
                <p className="eyebrow mt-auto pt-5 text-grey">{s.source}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="refrain mt-10 max-w-[560px] text-[17px] leading-[26px] text-olive-deep">
            {stats.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
