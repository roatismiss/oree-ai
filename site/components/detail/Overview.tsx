import Image from "next/image";
import { Reveal } from "../Reveal";

const icons = [
  "/img/icon-card-1.png",
  "/img/icon-card-2.png",
  "/img/icon-card-3.png",
  "/img/icon-card-4.png",
];

/**
 * Matches the Framer service-details overview: prose on the left with a
 * supporting object on the right, then a row of fact cards beneath.
 */
export function Overview({
  eyebrow,
  paragraphs,
  facts,
  object,
}: {
  eyebrow: string;
  paragraphs: string[];
  facts: { label: string; value: string }[];
  object?: string;
}) {
  return (
    <section className="px-[10px] pt-[10px]">
      <div className="overflow-hidden rounded-[20px] bg-sand px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[90px]">
        <Reveal>
          <p className="eyebrow text-grey">{eyebrow}</p>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
          <Reveal delay={0.06}>
            <div className="space-y-6 text-[16px] leading-[24px] text-grey">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          {object && (
            <Reveal delay={0.1}>
              <Image
                src={object}
                alt=""
                width={420}
                height={300}
                className="mx-auto h-[220px] w-auto object-contain lg:h-[280px]"
              />
            </Reveal>
          )}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={0.05 * i}>
              <div className="h-full rounded-[14px] bg-light p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream">
                  <Image src={icons[i % icons.length]} alt="" width={18} height={18} />
                </span>
                <p className="mt-10 text-[13px] uppercase tracking-[0.04em] text-grey">
                  {f.label}
                </p>
                <p className="h-row mt-2 text-[20px] text-ink">{f.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
