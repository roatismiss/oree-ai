import { Reveal } from "./Reveal";
import { copy, type Locale } from "@/content/copy";

export function Frameworks({ locale }: { locale: Locale }) {
  const { frameworks } = copy[locale];

  // Repeat the list so the marquee reads as continuous at 1440px.
  const strip = [...frameworks.items, ...frameworks.items, ...frameworks.items];

  return (
    /* Full-bleed rather than an inset rounded panel: the marquee reads better
       running off both edges than stopping short of a 20px radius, and the page
       needs somewhere the repeating panel shape breaks. */
    <section className="mt-[10px]">
      <div className="panel-wash relative overflow-hidden bg-light py-20 lg:py-[80px]">
        <div className="relative">
          <div className="grid gap-8 px-6 sm:px-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:px-[130px]">
            <Reveal>
              <p className="max-w-[380px] text-[16px] leading-[22px] text-ink">{frameworks.body}</p>
              <p className="eyebrow mt-14 text-grey">{frameworks.eyebrow}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="h-display text-ink">{frameworks.titleTop}</h2>
              <h2 className="h-display text-ink">{frameworks.titleBottom}</h2>
            </Reveal>
          </div>

          <div className="marquee mt-14 overflow-hidden">
            <div className="marquee-track marquee-left marquee-slow items-center">
              {strip.map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="h-row mr-4 shrink-0 whitespace-nowrap rounded-full border border-hairline bg-cream/60 px-7 py-3 text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
