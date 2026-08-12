import Link from "next/link";
import { Reveal } from "../Reveal";
import { SectionMark } from "../SectionMark";
import { copy, localePath, type Locale } from "@/content/copy";

export function ServiceList({ locale }: { locale: Locale }) {
  const { serviceList, serviceDetails, ui } = copy[locale];

  /** Card names are the join key to the detail pages, per locale. */
  const slugFor = (name: string) =>
    serviceDetails.find((d) => d.name === name)?.slug ?? null;

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="panel-wash overflow-hidden rounded-[20px] bg-sand px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[90px]">
        <Reveal>
          <SectionMark index="02" label={serviceList.eyebrow} tone="ink" />
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="h-display mt-8 text-ink">{serviceList.title}</h2>
        </Reveal>

        <div className="mt-14 space-y-5">
          {serviceList.items.map((s, i) => (
            <Reveal key={s.name} delay={0.05 * i}>
              <article className="rounded-[16px] bg-light p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
                  <div className="flex items-start gap-6">
                    <span className="h-row shrink-0 text-amber-ink">{s.n}</span>
                    <h3 className="h-row text-[34px] leading-[1.05] text-ink">{s.name}</h3>
                  </div>

                  <div>
                    <p className="text-[15px] leading-[23px] text-grey">{s.summary}</p>

                    <dl className="mt-8 grid grid-cols-1 gap-5 border-t border-hairline pt-6 sm:grid-cols-3">
                      {s.meta.map((m) => (
                        <div key={m.label}>
                          <dt className="text-[13px] leading-[18px] text-grey">{m.label}</dt>
                          <dd className="mt-1 text-[15px] font-semibold uppercase leading-[20px] text-ink">
                            {m.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    {slugFor(s.name) && (
                      <Link
                        href={localePath(locale, `/services/${slugFor(s.name)}`)}
                        className="group mt-7 inline-flex items-center gap-3 text-[15px] font-semibold uppercase tracking-[0.04em] text-ink transition-opacity hover:opacity-70"
                      >
                        {ui.readDetail}
                        <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-ink/40 transition-transform duration-300 group-hover:translate-x-0.5">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                            <path
                              d="M1.5 5h7M6 2.5 8.5 5 6 7.5"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
