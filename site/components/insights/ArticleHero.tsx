"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { copy, localePath, type Locale } from "@/content/copy";

const rise = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } };
const ease = [0.16, 1, 0.3, 1] as const;

export function ArticleHero({
  title,
  date,
  readingTime,
  locale,
}: {
  title: string;
  date: string;
  readingTime: string;
  locale: Locale;
}) {
  const { insights } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[20px] bg-light px-6 pb-16 pt-32 sm:px-12 lg:min-h-[380px] lg:px-[130px] lg:pb-[70px]">
        <div className="relative max-w-[860px]">
          <motion.p {...rise} transition={{ duration: 0.7, ease }} className="eyebrow text-amber-ink">
            <Link
              href={localePath(locale, "/insights")}
              className="transition-opacity hover:opacity-70"
            >
              {insights.eyebrow}
            </Link>{" "}
            · {date} · {readingTime}
          </motion.p>

          <motion.h1
            {...rise}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="h-display-tight mt-5 text-ink"
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
