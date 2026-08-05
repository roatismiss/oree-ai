"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { hero } from "@/content/en";

const rise = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const ease = [0.16, 1, 0.3, 1] as const;

/* Light, typographic hero: no photography, per the client's wish for a soft,
   people-first look that reads as a small individual practice. */
export function Hero() {
  return (
    <section className="px-[10px] pt-[10px]">
      <div className="relative flex min-h-[480px] flex-col justify-center overflow-hidden rounded-[20px] bg-light px-6 py-24 sm:px-12 lg:min-h-[620px] lg:px-[130px] lg:py-[80px]">
        <div className="relative">
          <motion.p {...rise} transition={{ duration: 0.7, ease }} className="eyebrow text-amber-ink">
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            {...rise}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="h-display-tight mt-6 max-w-[820px] text-ink"
          >
            {hero.titleTop} {hero.titleMid}
          </motion.h1>

          <motion.h1
            {...rise}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="h-display-tight mt-2 italic text-olive-deep"
          >
            {hero.titleBottom}
          </motion.h1>

          <motion.p
            {...rise}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-9 max-w-[560px] text-[15px] leading-[23px] text-ecorce"
          >
            {hero.body}
          </motion.p>

          <motion.div
            {...rise}
            transition={{ duration: 0.8, delay: 0.32, ease }}
            className="mt-9 flex flex-wrap items-center gap-6"
          >
            <Button variant="dark" href="/contact">{hero.cta}</Button>
            <span className="refrain text-[17px] text-olive-deep">{hero.refrain}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
