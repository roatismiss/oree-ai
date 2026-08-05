"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const rise = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } };
const ease = [0.16, 1, 0.3, 1] as const;

export function DetailHero({
  eyebrow,
  titleTop,
  titleBottom,
  lede,
  backHref,
  backLabel,
}: {
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  lede: string;
  backHref: string;
  backLabel: string;
}) {
  return (
    <section className="px-[10px] pt-[10px]">
      <div className="relative flex min-h-[360px] flex-col justify-center overflow-hidden rounded-[20px] bg-light px-6 py-24 sm:px-12 lg:min-h-[440px] lg:px-[130px] lg:py-[90px]">
        <div className="relative max-w-[820px]">
          <motion.div {...rise} transition={{ duration: 0.7, ease }}>
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.06em] text-grey transition-opacity hover:opacity-60"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path
                  d="M7.5 2 3.5 6l4 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {backLabel}
            </Link>
            <p className="eyebrow mt-5 text-amber-ink">{eyebrow}</p>
          </motion.div>

          <motion.h1
            {...rise}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="h-display-tight mt-5 text-ink"
          >
            {titleTop}
          </motion.h1>

          <motion.h1
            {...rise}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="h-display-tight italic text-olive-deep"
          >
            {titleBottom}
          </motion.h1>

          <motion.p
            {...rise}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-8 max-w-[620px] text-[15px] leading-[23px] text-ecorce"
          >
            {lede}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
