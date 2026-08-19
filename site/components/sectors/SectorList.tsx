import Link from "next/link";
import { Reveal } from "../Reveal";
import { SectionMark } from "../SectionMark";
import { copy, localePath, type Locale } from "@/content/copy";

export function SectorList({ locale }: { locale: Locale }) {
  const { sectorList } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="panel-wash overflow-hidden rounded-[20px] bg-sand px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[90px]">
        <Reveal>
          <SectionMark className="mb-8" />
        </Reveal>
        <Reveal>
          <h2 className="h-display text-ink">{sectorList.title}</h2>
        </Reveal>

        <div className="mt-12 max-w-[760px]">
          {sectorList.items.map((s, i) => (
            <Reveal key={s.slug} delay={0.05 * i}>
              {/* Grès, not ink at 10% — the palette reference is explicit that
                  rules are never drawn in black. */}
              <div className="border-t border-hairline py-7 last:border-b">
                <div className="flex items-baseline gap-5">
                  <Link
                    href={localePath(locale, `/sectors/${s.slug}`)}
                    className="h-row text-[22px] text-ink underline-offset-[6px] transition-colors duration-300 hover:text-olive-deep hover:underline"
                  >
                    {s.name}
                  </Link>
                </div>
                <p className="mt-3 pl-0 text-[15px] leading-[24px] text-grey sm:pl-[52px]">
                  {s.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
