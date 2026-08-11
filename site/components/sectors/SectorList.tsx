import Link from "next/link";
import { Reveal } from "../Reveal";
import { copy, localePath, type Locale } from "@/content/copy";

export function SectorList({ locale }: { locale: Locale }) {
  const { sectorList } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="overflow-hidden rounded-[20px] bg-sand px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[90px]">
        <Reveal>
          <p className="eyebrow text-grey">{sectorList.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="h-display mt-3 text-ink">{sectorList.title}</h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {sectorList.items.map((s, i) => (
            <Reveal key={s.name} delay={0.05 * i}>
              <Link
                href={localePath(locale, `/sectors/${s.slug}`)}
                className="block rounded-[16px] bg-light p-7 transition-transform duration-300 hover:-translate-y-1 lg:p-9"
              >
                <div>
                  <h3 className="h-row text-[22px] text-ink">{s.name}</h3>
                  <p className="mt-4 max-w-[640px] text-[14px] leading-[22px] text-grey">
                    {s.summary}
                  </p>

                  <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-ink/10 pt-5 sm:grid-cols-3">
                    {s.meta.map((m) => (
                      <div key={m.label}>
                        <dt className="text-[13px] leading-[18px] text-grey">{m.label}</dt>
                        <dd className="mt-1 text-[15px] font-semibold uppercase leading-[20px] text-ink">
                          {m.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
