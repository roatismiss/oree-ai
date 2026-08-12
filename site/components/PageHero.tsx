"use client";

import { motion } from "framer-motion";
import { TreeLine } from "./TreeLine";

const rise = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } };
const ease = [0.16, 1, 0.3, 1] as const;

/**
 * The opening panel of an inner page.
 *
 * Méthode, Offre, Secteurs and Publications each carried their own copy of this
 * component — four files identical but for the copy key they read, which is why
 * a fix to one of them never reached the other three. They are now four thin
 * delegates onto this.
 *
 * The treatment follows the home page's hero: the khaki atmosphere, and the
 * tree line the practice is named for. A visitor landing on /offre from a search
 * result should meet the same page the home page promised, not a plain panel.
 */
export function PageHero({
  eyebrow,
  titleTop,
  titleBottom,
  body,
  height = "tall",
}: {
  eyebrow: string;
  titleTop: string;
  /** Omitted where the page's title is a single line, as on Publications. */
  titleBottom?: string;
  body: string;
  height?: "tall" | "short";
}) {
  const min = height === "short" ? "min-h-[340px] lg:min-h-[420px]" : "min-h-[380px] lg:min-h-[460px]";

  return (
    <section className="px-[10px] pt-[10px]">
      <div
        className={`relative flex flex-col justify-center overflow-hidden rounded-[20px] bg-light px-6 py-24 sm:px-12 lg:px-[130px] lg:py-[90px] ${min}`}
      >
        <div className="hero-horizon absolute inset-0" aria-hidden />
        <TreeLine className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] w-full" />

        <div className="relative max-w-[820px]">
          <motion.div
            {...rise}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-4 sm:gap-6"
          >
            <p className="eyebrow shrink-0 text-amber-ink">{eyebrow}</p>
            {/* Grès, the palette's rule colour — "filets, bordures,
                séparateurs — jamais du noir". */}
            <span className="h-px min-w-0 flex-1 bg-hairline" aria-hidden />
          </motion.div>

          <motion.h1
            {...rise}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="h-display mt-6 text-ink"
          >
            {titleTop}
          </motion.h1>

          {titleBottom && (
            <motion.h1
              {...rise}
              transition={{ duration: 0.8, delay: 0.16, ease }}
              className="h-display italic text-olive-deep"
            >
              {titleBottom}
            </motion.h1>
          )}

          <motion.p
            {...rise}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-8 max-w-[620px] text-[15px] leading-[22px] text-ecorce"
          >
            {body}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
