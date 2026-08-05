import { Reveal } from "../Reveal";

export function Deliverables({
  title,
  items,
  notThis,
}: {
  title: string;
  items: { title: string; body: string }[];
  notThis: string;
}) {
  return (
    <section className="px-[10px] pt-[10px]">
      <div className="overflow-hidden rounded-[20px] bg-light px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[90px]">
        <Reveal>
          <h2 className="h-display-tight text-ink">{title}</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((d, i) => (
            <Reveal key={d.title} delay={0.06 * i}>
              <div className="h-full rounded-[14px] bg-cream p-8">
                <h3 className="h-row text-[22px] text-ink">{d.title}</h3>
                <p className="mt-4 text-[15px] leading-[23px] text-grey">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Scope limit, stated plainly. The template had no equivalent, but an
            advisory practice that never says what it is not reads as a vendor. */}
        <Reveal delay={0.1}>
          <p className="mt-12 max-w-[760px] border-l-2 border-amber-ink/40 pl-6 text-[15px] leading-[24px] text-grey">
            {notThis}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
