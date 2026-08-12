import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { copy, localePath, type Locale } from "@/content/copy";

/* Soft closing panel: pale khaki, no photography. */
export function Cta({ locale, title }: { locale: Locale; title?: string }) {
  const { cta } = copy[locale];
  const heading = title ?? cta.title;

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="panel-wash relative overflow-hidden rounded-[20px] border border-hairline bg-mousse px-6 py-16 sm:px-10 lg:px-[130px] lg:py-[70px]">
        <div className="relative">
          <Reveal>
            <h2 className="h-display text-ink">{heading}</h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-[440px] text-[15px] leading-[22px] text-ecorce">{cta.body}</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="dark" href={localePath(locale, "/contact")}>
                  {cta.primary}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
