import { Reveal } from "../Reveal";
import { SectionMark } from "../SectionMark";
import { copy, type Locale } from "@/content/copy";

export function Included({ locale }: { locale: Locale }) {
  const { included } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="panel-wash overflow-hidden rounded-[20px] bg-craie px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[80px]">
        <Reveal>
          {/* No label: the section's own heading is the next thing on the page,
              so a caption here would only say it twice. */}
          <SectionMark index="03" tone="amber" className="mb-10" />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <Reveal>
            <h2 className="h-display text-ink">{included.title}</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[15px] leading-[22px] text-ecorce">{included.intro}</p>
          </Reveal>
        </div>

        <ol className="mt-14">
          {included.items.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i}>
              <li className="grid gap-4 border-t border-hairline py-7 last:border-b lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-10">
                <h3 className="h-row text-ink">{item.title}</h3>
                <p className="text-[14px] leading-[22px] text-ecorce">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
