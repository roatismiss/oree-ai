import { Reveal } from "../Reveal";

/**
 * Prose on the left, then a row of fact cards beneath.
 *
 * The fact cards used to open with one of the template's four grey glyphs,
 * cycled by position — so a fact about data residency might be introduced by a
 * huddle of people, and the same glyph would reappear three cards later meaning
 * something else. Those were replaced by a numeral, and the numeral is gone
 * too: counting the facts implied an order they do not have (format, duration,
 * who attends and fees are read in any order), and an amber numeral on the
 * detail pages read as a section mark, which is the one thing amber numerals
 * are reserved for. The rule the numeral sat on stays, keeping the card's
 * opening measure and its height.
 *
 * The optional `object` image is gone with them; no caller ever passed one.
 */
export function Overview({
  eyebrow,
  paragraphs,
  facts,
}: {
  eyebrow: string;
  paragraphs: string[];
  facts: { label: string; value: string }[];
}) {
  return (
    <section className="px-[10px] pt-[10px]">
      <div className="panel-wash overflow-hidden rounded-[20px] bg-sand px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[90px]">
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

        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={0.05 * i}>
              <div className="h-full rounded-[14px] bg-light p-7">
                {/* Held at the eyebrow's 18px so dropping the numeral did not
                    raise the label and shorten every card. */}
                <div className="flex h-[18px] items-center">
                  <span className="h-px w-full bg-hairline" aria-hidden />
                </div>
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
