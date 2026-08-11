import Image from "next/image";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";
import { Button } from "./Button";
import { copy, localePath, type Locale } from "@/content/copy";

const icons = [
  "/img/icon-card-1.png",
  "/img/icon-card-2.png",
  "/img/icon-card-3.png",
  "/img/icon-card-4.png",
];

export function WhyFirm({ locale }: { locale: Locale }) {
  const { why } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="relative overflow-hidden rounded-[20px] bg-sand px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[80px]">
        <div className="relative">
          <Reveal>
            <p className="eyebrow text-olive-deep">{why.eyebrow}</p>
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
            {why.cards.map((label, i) => (
              <Reveal key={label} delay={0.06 * i}>
                <div className="h-full rounded-[14px] bg-light/85 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand/70">
                    <Image src={icons[i]} alt="" width={18} height={18} />
                  </span>
                  <p className="h-row mt-12 text-ink">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <Button variant="yellow" href={localePath(locale, "/contact")}>{why.cta}</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
