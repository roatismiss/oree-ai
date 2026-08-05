"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/content/en";

/** Orée Conseil wordmark: three vertical bars (middle khaki, taller) plus caps
    italic serif, CONSEIL tracked out beneath, matching the supplied logo. */
function Wordmark({ tone = "light" }: { tone?: "light" | "ink" }) {
  const color = tone === "light" ? "text-light" : "text-ink";
  const bar = tone === "light" ? "bg-yellow" : "bg-olive-deep";
  return (
    <span className={`flex items-center gap-2.5 ${color}`}>
      <span className="flex items-end gap-[3px]" aria-hidden>
        <span className="block h-[14px] w-[3px] bg-current opacity-60" />
        <span className={`block h-[20px] w-[3px] ${bar}`} />
        <span className="block h-[14px] w-[3px] bg-current opacity-60" />
      </span>
      <span className="flex flex-col">
        <span className="font-display text-[22px] font-semibold italic leading-none tracking-[0.06em] transition-colors duration-300">
          ORÉE
        </span>
        <span
          className="mt-[3px] text-[8px] font-medium uppercase leading-none tracking-[0.5em] opacity-70"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Conseil
        </span>
      </span>
    </span>
  );
}

const allLinks = [...nav.links];

export function Nav({ heroTone = "light" }: { heroTone?: "dark" | "light" }) {
  // On pages with a dark hero the floating wordmark sits on it at rest and on
  // ivory once scrolled, so it swaps tone. Pages with a light hero (home) keep
  // the ink wordmark throughout.
  const [onDark, setOnDark] = useState(heroTone === "dark");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (heroTone === "light") {
      setOnDark(false);
      return;
    }
    // The wordmark sits fixed at top-9 (36px); measure the actual dark hero
    // panel rather than assuming it fills the viewport, since hero heights are
    // fixed pixel values and viewports vary.
    const measure = () => {
      const heroPanel = document.querySelector("[data-hero-dark]");
      if (heroPanel) {
        setOnDark(heroPanel.getBoundingClientRect().bottom > 60);
      } else {
        setOnDark(window.scrollY < window.innerHeight - 120);
      }
    };
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [heroTone]);

  // Lock the page behind the open menu, and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="pointer-events-none fixed left-8 top-9 z-50 hidden lg:block"
      >
        <Link href="/" className="pointer-events-auto">
          <Wordmark tone={onDark ? "light" : "ink"} />
        </Link>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-end gap-2 px-3 sm:top-4 lg:pr-[110px]"
      >
        <div className="pointer-events-auto flex items-center gap-2">
          <div className="hidden items-center gap-7 rounded-full bg-white px-8 py-4 shadow-sm lg:flex">
            {allLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[14px] uppercase leading-[22px] tracking-[-0.1px] text-ink transition-opacity hover:opacity-60"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-1 rounded-full bg-sand/70 px-4 py-3.5 lg:flex">
            <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-ink">EN</span>
            <span className="text-[13px] text-ink/35">/</span>
            <button className="text-[13px] uppercase tracking-[0.08em] text-ink/50 transition-opacity hover:opacity-80">
              FR
            </button>
          </div>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-ink-deep px-6 py-3.5 transition-transform duration-300 hover:-translate-y-0.5 lg:flex"
          >
            <span className="btn-label text-light">{nav.call}</span>
          </Link>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-sm lg:hidden"
          >
            <span className="flex flex-col gap-[5px]" aria-hidden>
              <span className="block h-[1.5px] w-[20px] bg-ink" />
              <span className="block h-[1.5px] w-[20px] bg-ink" />
              <span className="block h-[1.5px] w-[20px] bg-ink" />
            </span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-ink-deep px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Wordmark tone="light" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white/10"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3 3l10 10M13 3L3 13"
                    stroke="#f5f1e9"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-14 flex flex-col">
              {allLinks.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-light/12 py-5 text-[30px] uppercase leading-none text-light"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-10 flex items-center gap-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-light px-7 py-4"
              >
                <span className="btn-label text-ink">{nav.call}</span>
              </Link>
              <div className="flex items-center gap-1 rounded-full bg-white/10 px-5 py-4">
                <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-light">
                  EN
                </span>
                <span className="text-[13px] text-light/35">/</span>
                <button className="text-[13px] uppercase tracking-[0.08em] text-light/50">
                  FR
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
