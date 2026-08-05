"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { faq } from "@/content/en";

/** The FAQ mandated by the client brief. Plain disclosure accordion, one open
    at a time, keyboard-native via <button>. */
export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="overflow-hidden rounded-[20px] bg-light px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[100px]">
        <Reveal>
          <p className="eyebrow text-olive-deep">{faq.eyebrow}</p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="h-display-tight mt-4 text-ink">
            {faq.titleTop}
            <br />
            {faq.titleBottom}
          </h2>
        </Reveal>

        <div className="mt-12 max-w-[820px] divide-y divide-hairline border-y border-hairline">
          {faq.items.map((item, i) => {
            const expanded = open === i;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpen(expanded ? -1 : i)}
                  aria-expanded={expanded}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="h-row text-ink">{item.question}</span>
                  <span
                    aria-hidden
                    className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border border-hairline text-ink transition-transform duration-300 ${
                      expanded ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                {expanded && (
                  <div className="pb-7 pr-10">
                    <p className="max-w-[640px] text-[15px] leading-[24px] text-grey">{item.answer}</p>

                    {item.examples && (
                      <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {item.examples.map((ex) => (
                          <div key={ex.title} className="rounded-[12px] bg-sand/60 p-5">
                            <p className="h-row text-[18px] text-ink">{ex.title}</p>
                            <p className="mt-2 text-[13px] leading-[19px] text-grey">{ex.note}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
