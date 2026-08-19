import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { SectionMark } from "./SectionMark";
import { copy, localePath, type Locale } from "@/content/copy";

/* The O·R·É·E mnemonic in the position it held on oree-conseil.ca: directly
   under the hero, before the Quebec figures. The letter carries the emphasis
   the old site gave it, so the four verbs read as one mark at a glance. */
export function MethodGlance({ locale }: { locale: Locale }) {
  const { methodGlance } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="panel-wash overflow-hidden rounded-[20px] bg-craie px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[80px]">
        <Reveal>
          <SectionMark label={methodGlance.mnemonic} tone="amber" />
        </Reveal>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal delay={0.06}>
              <h2 className="h-display text-ink">{methodGlance.title}</h2>
            </Reveal>
          </div>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {methodGlance.steps.map((s, i) => (
            <Reveal key={s.letter + s.fr} delay={0.06 * i}>
              <li className="flex h-full flex-col rounded-[14px] bg-light p-7">
                <span
                  aria-hidden
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-mousse font-display text-[30px] font-semibold leading-none text-olive-deep"
                >
                  {s.letter}
                </span>
                <p className="h-row mt-10 text-ink">{s.fr}</p>
                <p className="eyebrow mt-2 text-olive-deep">{s.en}</p>
                <p className="mt-4 text-[14px] leading-[20px] text-ecorce">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.16}>
          <div className="mt-12">
            <Button variant="outline" href={localePath(locale, "/approach")}>
              {methodGlance.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
