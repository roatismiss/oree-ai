import Image from "next/image";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { copy, localePath, type Locale } from "@/content/copy";

type Item = { title: string; note: string };

function Card({ item }: { item: Item }) {
  return (
    <div className="mr-5 flex w-[380px] shrink-0 flex-col justify-center rounded-[12px] bg-light/90 px-8 py-5">
      <p className="h-row text-ink">{item.title}</p>
      <p className="mt-2 text-[13px] leading-[18px] text-grey">{item.note}</p>
    </div>
  );
}

function Marquee({ items, dir }: { items: Item[]; dir: "left" | "right" }) {
  return (
    <div className="marquee overflow-hidden">
      <div className={`marquee-track marquee-${dir}`}>
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <Card key={`${item.title}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function Team({ locale }: { locale: Locale }) {
  const { practice, ui } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="overflow-hidden rounded-[20px] bg-sand py-20 lg:py-[100px]">
        <div className="px-6 sm:px-10 lg:px-[130px]">
          <Reveal>
            <p className="eyebrow text-olive-deep">{practice.eyebrow}</p>
          </Reveal>

          <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:items-start">
            <Reveal delay={0.06}>
              <div className="overflow-hidden rounded-[20px]">
                <Image
                  src="/img/aminata-diabate.jpg"
                  alt={ui.portraitAlt}
                  width={1142}
                  height={1280}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="h-row mt-5 text-ink">{practice.name}</p>
              <p className="eyebrow mt-2 text-olive-deep">{practice.role}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="h-display-tight text-ink">{practice.titleTop}</h2>
              <h2 className="h-display-tight text-ink">{practice.titleBottom}</h2>

              <p className="mt-8 max-w-[520px] text-[16px] leading-[23px] text-ink">
                {practice.body}
              </p>

              {/* Career background, never presented as a client list. The
                  sector label and the clarifying note both carry meaning: they
                  are what stop the list being misread. */}
              <div className="mt-7 max-w-[520px] rounded-[14px] bg-mousse px-6 py-6">
                <p className="eyebrow text-olive-deep">{practice.backgroundLabel}</p>
                <ul className="mt-4 divide-y divide-olive-deep/15">
                  {practice.background.map((b) => (
                    <li
                      key={b.org}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-2.5"
                    >
                      <span className="text-[14px] leading-[20px] text-ink">{b.org}</span>
                      <span className="text-[13px] leading-[20px] text-grey">{b.sector}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] leading-[19px] text-grey">
                  {practice.backgroundNote}
                </p>
              </div>

              <div className="mt-9">
                <Button variant="yellow" href={localePath(locale, "/approach")}>{practice.cta}</Button>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 space-y-5">
          <Marquee items={practice.rowOne} dir="left" />
          <Marquee items={practice.rowTwo} dir="right" />
        </div>
      </div>
    </section>
  );
}
