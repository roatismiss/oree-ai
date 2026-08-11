import Link from "next/link";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";
import { Button } from "./Button";
import { copy, localePath, type Locale } from "@/content/copy";

function Row({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-[10px] bg-light px-7 py-4 transition-colors hover:bg-mousse"
    >
      <span className="h-row text-ink">{label}</span>
      <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-ink/35 text-ink transition-transform duration-300 group-hover:translate-x-0.5">
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
  );
}

export function PracticeAreas({ locale }: { locale: Locale }) {
  const { services } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="overflow-hidden rounded-[20px] bg-craie px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[80px]">
        <Reveal>
          <p className="eyebrow text-amber-ink">{services.eyebrow}</p>
        </Reveal>

        <SplitHeading top={services.titleTop} bottom={services.titleBottom} className="mt-2 text-ink" />

        <div className="mt-14 grid gap-x-5 gap-y-4 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow mb-4 text-olive-deep">{services.leftLabel}</p>
            </Reveal>
            <div className="space-y-4">
              {services.left.map((b, i) => (
                <Reveal key={b.href} delay={0.05 * i}>
                  <Row label={b.label} href={localePath(locale, b.href)} />
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <p className="eyebrow mb-4 text-olive-deep lg:text-right">{services.rightLabel}</p>
            </Reveal>
            <div className="space-y-4">
              {services.right.map((b, i) => (
                <Reveal key={b.href} delay={0.05 * i}>
                  <Row label={b.label} href={localePath(locale, b.href)} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Who it's for, in the old site's own words. Sits under the two
            columns so the audience statement frames both. */}
        <Reveal delay={0.1}>
          <ul className="mt-12 grid gap-4 border-t border-hairline pt-8 sm:grid-cols-3">
            {services.audience.map((a) => (
              <li key={a} className="flex items-start gap-3 text-[15px] leading-[22px] text-ink">
                <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-olive-deep" aria-hidden />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* The rows go to individual services; this opens the offering page
            itself, so the section has a route to its own page. */}
        <Reveal delay={0.14}>
          <div className="mt-10">
            <Button variant="outline" href={localePath(locale, "/services")}>
              {services.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
