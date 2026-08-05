"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/* Opening splash: the wordmark assembles on the Basalte panel, holds a beat,
   then the curtain lifts and hands over to the page. Plays once per browser
   session — an inline script in the layout hides it pre-hydration on repeat
   loads so there is no flash either way. */

const SEEN_KEY = "oree-splash-seen";

// One shared ease for every reveal; the curtain uses a heavier exit curve.
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const CURTAIN: [number, number, number, number] = [0.76, 0, 0.24, 1];

const LETTERS = ["O", "R", "É", "E"];

export function Splash() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(true);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    let already = false;
    try {
      already = sessionStorage.getItem(SEEN_KEY) === "1";
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* storage unavailable — play the splash and move on */
    }
    if (already) {
      setSeen(true);
      setShow(false);
      return;
    }
    // Lock scroll while the curtain is down.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), reduced ? 900 : 2450);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
    };
  }, [reduced]);

  // Already seen this session: render nothing (the inline script has hidden
  // the SSR markup before hydration, so there is no flash).
  if (seen) return null;

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {show && (
        <motion.div
          data-splash
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
          initial={false}
          exit={
            reduced
              ? { opacity: 0, transition: { duration: 0.4 } }
              : { y: "-100%", transition: { duration: 0.85, ease: CURTAIN } }
          }
        >
          {/* Faint khaki hairline that draws across behind the mark */}
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-px -translate-x-1/2 bg-olive-deep/20"
            initial={{ width: 0 }}
            animate={{ width: "min(560px, 78vw)" }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.15 }}
          />

          <motion.div
            className="relative flex flex-col items-center"
            exit={reduced ? undefined : { y: -40, opacity: 0.6, transition: { duration: 0.5, ease: CURTAIN } }}
          >
            {/* The three bars, grown from the baseline */}
            <div className="flex items-end gap-[6px]" aria-hidden>
              {[
                { h: 26, cls: "bg-ink/55", d: 0.1 },
                { h: 38, cls: "bg-olive-deep", d: 0.2 },
                { h: 26, cls: "bg-ink/55", d: 0.3 },
              ].map((b, i) => (
                <motion.span
                  key={i}
                  className={`block w-[5px] origin-bottom ${b.cls}`}
                  style={{ height: b.h }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.55, ease: EASE, delay: b.d }}
                />
              ))}
            </div>

            {/* ORÉE — letters rise out of a clipped line. Size lives on the
                container so the em padding (room for the É accent and the
                italic overhang) scales with it. */}
            <div
              className="mt-6 flex overflow-hidden px-[0.06em] pt-[0.14em] text-[clamp(64px,12vw,124px)]"
              aria-label="Orée"
            >
              {LETTERS.map((ch, i) => (
                <motion.span
                  key={i}
                  className="font-display font-semibold italic leading-none tracking-[0.05em] text-ink"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.4 + i * 0.07 }}
                >
                  {ch}
                </motion.span>
              ))}
            </div>

            {/* CONSEIL — fades in while the tracking settles */}
            <motion.span
              className="mt-4 text-[12px] font-medium uppercase leading-none text-grey"
              style={{ fontFamily: "var(--font-mono)" }}
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.62em" }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
            >
              Conseil
            </motion.span>

            {/* Tagline */}
            <motion.p
              className="mt-9 text-[13px] leading-none text-olive-deep"
              style={{ fontFamily: "var(--font-mono)" }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 1.25 }}
            >
              L&rsquo;IA r&eacute;dige. L&rsquo;humain d&eacute;cide.
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
