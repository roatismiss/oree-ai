"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";
import { copy, type Locale } from "@/content/copy";

export function Questions({ locale }: { locale: Locale }) {
  const { questions, ui } = copy[locale];

  const [index, setIndex] = useState(0);
  const max = questions.items.length - 2;

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="overflow-hidden rounded-[20px] bg-cream pb-[100px] pt-20 lg:pt-[100px]">
        <div className="px-6 sm:px-10 lg:px-[130px]">
          <Reveal>
            <p className="eyebrow text-ink">{questions.eyebrow}</p>
          </Reveal>
          <SplitHeading top={questions.titleTop} bottom={questions.titleBottom} className="mt-2 text-ink" />
        </div>

        <div className="mt-6 flex justify-end gap-2 px-6 sm:px-10 lg:px-[130px]">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            aria-label={ui.previousQuestion}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-sand/70 text-ink transition-opacity hover:opacity-70 disabled:opacity-30"
            disabled={index === 0}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M9 2 4 7l5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => setIndex((i) => Math.min(max, i + 1))}
            aria-label={ui.nextQuestion}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-sand/70 text-ink transition-opacity hover:opacity-70 disabled:opacity-30"
            disabled={index === max}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="m5 2 5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-10">
          <div className="overflow-hidden px-6 sm:px-10 lg:px-[130px]">
            <motion.div
              className="flex gap-6"
              // One card per step: card width (min(85vw, 420px), line below) plus the 24px gap.
              animate={{ x: `calc(${-index} * (min(85vw, 420px) + 24px))` }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {questions.items.map((q, i) => (
                <div
                  key={q.who}
                  className={`flex w-[min(85vw,420px)] shrink-0 flex-col rounded-[16px] p-8 ${
                    i % 2 === 0 ? "bg-light" : "bg-sand/80"
                  }`}
                >
                  <p className="h-row text-[20px] text-ink-dark">{q.who}</p>
                  <p className="mt-1.5 text-[14px] leading-[22px] text-grey">{q.context}</p>
                  <p className="h-quote mt-6 text-ink/85">{q.quote}</p>
                  <Image src="/img/icon-quote.png" alt="" width={28} height={28} className="mt-8 opacity-25" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
