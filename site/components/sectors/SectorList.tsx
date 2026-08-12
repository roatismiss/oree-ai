import Link from "next/link";
import { Reveal } from "../Reveal";
import { copy, localePath, type Locale } from "@/content/copy";

export function SectorList({ locale }: { locale: Locale }) {
  const { sectorList } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="overflow-hidden rounded-[20px] bg-sand px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[90px]">
        <Reveal>
          <h2 className="h-display text-ink">{sectorList.title}</h2>
        </Reveal>

        <div className="mt-12 max-w-[760px]">
          {sectorList.items.map((s, i) => (
            <Reveal key={s.slug} delay={0.05 * i}>
              <div className="border-t border-ink/10 py-7 last:border-b">
                <Link
                  href={localePath(locale, `/sectors/${s.slug}`)}
                  className="h-row text-[22px] text-ink underline-offset-[6px] transition-colors duration-300 hover:text-olive-deep hover:underline"
                >
                  {s.name}
                </Link>
                <p className="mt-3 text-[15px] leading-[24px] text-grey">{s.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
