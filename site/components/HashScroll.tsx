"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Lands a cross-page hash link on the section it names.
 *
 * "Voir des exemples dans l'histoire" points at /risques#chaque-revolution,
 * and it was arriving at the top of the page instead — in front of the four
 * statements the visitor had just finished reading, rather than the historical
 * cases the button promises. Three things can eat that scroll: the splash
 * holds `body { overflow: hidden }` for its first two and a half seconds, so a
 * scroll issued underneath it goes nowhere; `html { scroll-behavior: smooth }`
 * turns the router's jump into an animation that a later scroll can interrupt;
 * and the router scrolls as soon as the route renders, which is not
 * necessarily when the section is measurable.
 *
 * So the scroll is re-applied here, on the far side of all three: once the
 * page is mounted, once the body is scrollable again, and instantly rather
 * than smoothly, so nothing is left mid-animation. `scroll-mt` on the target
 * keeps the heading clear of the fixed nav.
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    let frame = 0;
    let tries = 0;

    const settle = () => {
      const target = document.getElementById(decodeURIComponent(hash));
      const locked = document.body.style.overflow === "hidden";

      if (target && !locked) {
        target.scrollIntoView({ behavior: "instant", block: "start" });
        return;
      }
      // ~4s at 60fps: longer than the splash, then we give up quietly.
      if (tries++ < 240) frame = requestAnimationFrame(settle);
    };

    frame = requestAnimationFrame(settle);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
