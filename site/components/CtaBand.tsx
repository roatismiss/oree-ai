import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { copy, type Locale } from "@/content/copy";

/* The booking band: soft khaki panel, no photography. */
export function CtaBand({ locale }: { locale: Locale }) {
  const { ctaBand } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="relative overflow-hidden rounded-[20px] border border-hairline bg-mousse px-6 py-14 sm:px-10 lg:px-[70px] lg:py-[60px]">
        <div className="relative">
          <Reveal>
            <h2 className="h-band text-olive-deep">{ctaBand.titleTop}</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h-band text-ink">{ctaBand.titleBottom}</h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[620px] text-[15px] leading-[22px] text-ecorce">{ctaBand.body}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 max-w-[860px]">
              <ContactForm locale={locale} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
