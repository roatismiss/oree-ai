import { Reveal } from "./Reveal";
import { SectionMark } from "./SectionMark";
import { SplitHeading } from "./SplitHeading";
import { Button } from "./Button";
import { marks } from "./Marks";
import { copy, localePath, type Locale } from "@/content/copy";

export function WhyFirm({ locale }: { locale: Locale }) {
  const { why } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="panel-wash relative overflow-hidden rounded-[20px] bg-sand px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[80px]">
        <div className="relative">
          <Reveal>
            <SectionMark index="03" label={why.eyebrow} />
          </Reveal>

          <SplitHeading top={why.titleTop} bottom={why.titleBottom} className="mt-4 text-ink" />

          <Reveal delay={0.12}>
            <div className="mt-14 max-w-[600px] space-y-6 text-[16px] leading-[22px] text-ink">
              {why.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.cards.map((label, i) => {
              const Mark = marks[i % marks.length];
              return (
                <Reveal key={label} delay={0.06 * i}>
                  {/* These four are guarantees, not a story — the one place on
                      the page a mineral texture reads as solidity rather than
                      as decoration. */}
                  <div className="texture-stone h-full rounded-[14px] bg-light/85 p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mousse text-olive-deep">
                      <Mark />
                    </span>
                    <p className="h-row mt-12 text-ink">{label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12">
              {/* This block is the Pourquoi Orée teaser, so it opens that page
                  rather than jumping straight to the booking form. */}
              <Button variant="yellow" href={localePath(locale, "/why")}>{why.cta}</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
