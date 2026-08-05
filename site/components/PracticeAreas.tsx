import Link from "next/link";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";
import { services } from "@/content/en";

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

export function PracticeAreas() {
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
                  <Row label={b.label} href={b.href} />
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
                  <Row label={b.label} href={b.href} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
