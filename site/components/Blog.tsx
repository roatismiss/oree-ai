import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionMark } from "./SectionMark";
import { Button } from "./Button";
import { copy, localePath, type Locale } from "@/content/copy";

export function Blog({ locale }: { locale: Locale }) {
  const { insights, articles } = copy[locale];

  return (
    <section id="insights" className="px-[10px] pt-[10px]">
      <div className="panel-wash overflow-hidden rounded-[20px] bg-sand px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[100px]">
        <Reveal>
          <SectionMark label={insights.eyebrow} tone="ink" />
        </Reveal>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Reveal delay={0.06}>
            <h2 className="h-display text-ink">{insights.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button variant="dark" href={localePath(locale, "/insights")}>
              {insights.cta}
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={0.07 * i}>
              <Link
                href={localePath(locale, `/insights/${a.slug}`)}
                className="flex h-full flex-col rounded-[14px] bg-light transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[12px] uppercase tracking-[0.1em] text-grey">
                    Article · {a.readingTime}
                  </p>
                  <h3 className="h-row mt-4 text-[19px] leading-[25px] text-ink">{a.title}</h3>
                  <p className="mt-4 text-[14px] leading-[21px] text-grey">{a.excerpt}</p>
                  <div className="mt-auto pt-8">
                    <p className="text-[13px] leading-[16px] text-grey">{a.date}</p>
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
