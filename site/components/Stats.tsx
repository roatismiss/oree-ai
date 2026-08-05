import { Reveal } from "./Reveal";
import { stats } from "@/content/en";

/* Why now: the four sourced Quebec figures, in a clean quiet grid. */
export function Stats() {
  return (
    <section className="px-[10px] pt-[10px]">
      <div className="overflow-hidden rounded-[20px] bg-cream px-6 py-16 sm:px-10 lg:px-[120px] lg:py-[80px]">
        <Reveal>
          <p className="eyebrow text-amber-ink">{stats.eyebrow}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.items.map((s, i) => (
            <Reveal key={s.figure} delay={0.06 * i}>
              <div className="flex h-full flex-col rounded-[14px] bg-light p-7">
                <span className="h-stat text-olive-deep">{s.figure}</span>
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
