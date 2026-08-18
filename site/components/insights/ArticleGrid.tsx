import Link from "next/link";
import { Reveal } from "../Reveal";
import { copy, localePath, type Locale } from "@/content/copy";

export function ArticleGrid({ locale }: { locale: Locale }) {
  const { articles, ui } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="panel-wash rounded-[20px] bg-sand px-6 py-16 sm:px-10 lg:px-[130px] lg:py-[90px]">
        <div className="grid gap-5 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={0.07 * i}>
              <Link
                href={localePath(locale, `/insights/${a.slug}`)}
                className="group flex h-full flex-col overflow-hidden rounded-[14px] bg-light transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-1 flex-col p-7">
                  {/* The number and rule stand in for the cover image these
                      cards were built to carry — the template's photographs of
                      courtrooms, which were never of this practice. */}
                  <div className="flex items-center gap-4">
                    <span className="eyebrow shrink-0 text-grey">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px min-w-0 flex-1 bg-hairline" aria-hidden />
                  </div>
                  <p className="mt-6 text-[12px] uppercase tracking-[0.1em] text-grey">
                    {a.date} · {a.readingTime}
                  </p>
                  <h2 className="h-row mt-4 text-[19px] leading-[25px] text-ink">{a.title}</h2>
                  <p className="mt-4 text-[15px] leading-[21px] text-grey">{a.excerpt}</p>
                  <div className="mt-auto pt-8">
                    <span className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.08em] text-ink">
                      {/* Was the string "Read the article", in English, on a
                          site whose default language is French. */}
                      {ui.readDetail}
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden>
                        <path
                          d="M1 5h10M7.5 1.5 11 5 7.5 8.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
