import { Reveal } from "./Reveal";
import { copy, type Locale } from "@/content/copy";

/**
 * The refrain, alone.
 *
 * Two things bring this section into being. The palette reference names one
 * pairing the site never used — "la craie sur basalte", for bandeaux and pieds
 * de page — so the ink family, a fifth of the palette by the brief's own
 * distribution, existed only as text colour and never as a surface. And every
 * other section is the same object: a 20px-radius panel inside a 10px gutter,
 * eyebrow, display heading, grid of white cards. Ten of them in a row read as
 * something generated rather than composed.
 *
 * So this one is the opposite of its neighbours on both counts: full-bleed
 * rather than inset, dark rather than ivory, and carrying one sentence rather
 * than a grid. The sentence is the practice's verbal signature, which until now
 * was a small span crowded against the hero's button.
 */
export function Refrain({ locale }: { locale: Locale }) {
  const { hero } = copy[locale];

  return (
    <section className="panel-wash-dark mt-[10px] bg-ink px-6 py-24 sm:px-10 lg:py-[150px]">
      <div className="mx-auto max-w-[900px] text-center">
        {/* The three bars are the practice's mark, already used beside the
            refrain on the contact page. Tilleul is the palette's accent for
            dark panels and had nowhere to appear until there was one. */}
        <Reveal>
          <span className="flex items-end justify-center gap-[4px]" aria-hidden>
            <span className="block h-[16px] w-[3px] bg-craie/40" />
            <span className="block h-[24px] w-[3px] bg-yellow" />
            <span className="block h-[16px] w-[3px] bg-craie/40" />
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="refrain mt-10 text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.15] text-craie">
            {hero.refrain}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="eyebrow mt-8 text-galet">{hero.refrainGloss}</p>
        </Reveal>
      </div>
    </section>
  );
}
