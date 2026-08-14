/**
 * A pine sprig, drawn.
 *
 * Not lifted from a photograph — Aminata's brief rules out photography in the
 * hero, and a stock pine branch would have brought back the stock-photo look
 * this whole pass has been working against. This is a small line drawing
 * instead: two paired needle clusters and a cone, in the palette's own kaki,
 * used once as a colophon rather than scattered as decoration.
 */
export function PineSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      width="34"
      height="30"
      viewBox="0 0 34 30"
      fill="none"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        {/* stem */}
        <path d="M17 4v15" />
        {/* lower needle pair */}
        <path d="M17 17 8 21M17 17l1.5-1M17 17l9 4M17 17l-1.5-1" />
        {/* upper needle pair */}
        <path d="M17 10 9.5 13M17 10l1.3-1M17 10l7.5 3M17 10l-1.3-1" />
        {/* cone at the base */}
        <path d="M13.6 22.5c1-2.4 2.6-2.4 3.4 0 .8-2.4 2.4-2.4 3.4 0-.3 2.6-1.8 5-3.4 5.2-1.6-.2-3.1-2.6-3.4-5.2Z" />
        <path d="M14.9 24.3h4.2M14.5 25.9h5" strokeWidth="0.9" />
      </g>
    </svg>
  );
}
