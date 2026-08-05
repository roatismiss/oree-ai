"use client";

import { motion } from "framer-motion";
import { approachHero } from "@/content/approach";

const rise = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } };
const ease = [0.16, 1, 0.3, 1] as const;

export function ApproachHero() {
  return (
    <section className="px-[10px] pt-[10px]">
      <div className="relative flex min-h-[380px] flex-col justify-center overflow-hidden rounded-[20px] bg-light px-6 py-24 sm:px-12 lg:min-h-[460px] lg:px-[130px] lg:py-[90px]">
        <div className="relative max-w-[820px]">
          <motion.p {...rise} transition={{ duration: 0.7, ease }} className="eyebrow text-amber-ink">
            {approachHero.eyebrow}
          </motion.p>

          <motion.h1
            {...rise}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="h-display mt-6 text-ink"
          >
            {approachHero.titleTop}
          </motion.h1>

          <motion.h1
            {...rise}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="h-display italic text-olive-deep"
          >
            {approachHero.titleBottom}
          </motion.h1>

          <motion.p
            {...rise}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-8 max-w-[600px] text-[15px] leading-[22px] text-ecorce"
          >
            {approachHero.body}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
