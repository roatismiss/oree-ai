/**
 * The four marks for the guarantees on the home page.
 *
 * These positions were carrying `icon-card-1…4.png`, four flat grey glyphs left
 * over from the law-firm template the build started from — a huddle of people
 * with a star over it, and three like it. They meant nothing in particular, in
 * a grey belonging to no part of the palette, which is the sort of detail that
 * makes a page look bought rather than made.
 *
 * Each of these says the thing its card says, and is drawn in Kaki profond at
 * the same weight as the arrow already used in the service list, so the marks
 * read as one family with the rest of the drawing on the site.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden focusable="false">
      {children}
    </svg>
  );
}

/** Independent of any vendor: it stands on its own side of the line. */
function MarkIndependent() {
  return (
    <Frame>
      <circle cx="7.5" cy="12" r="4" {...stroke} />
      <path d="M14 4.5v15" {...stroke} strokeDasharray="2 2.5" />
      <circle cx="19" cy="9" r="1.4" {...stroke} />
      <circle cx="19" cy="15" r="1.4" {...stroke} />
    </Frame>
  );
}

/** A fixed fee: a span with both ends stopped. */
function MarkFixed() {
  return (
    <Frame>
      <path d="M4.5 7.5v9M19.5 7.5v9M4.5 12h15" {...stroke} />
    </Frame>
  );
}

/** Data held inside a border. */
function MarkResidency() {
  return (
    <Frame>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" {...stroke} />
      <path d="M7.5 9.5h9M7.5 12.5h9M7.5 15.5h5.5" {...stroke} />
    </Frame>
  );
}

/** A human signs every step. */
function MarkSignature() {
  return (
    <Frame>
      <path d="M3.5 15.5c2.5-.5 3.2-8 5-8s.8 7 2.6 7 2.6-4.5 4.4-4.5 2.4 2.5 5 1.8" {...stroke} />
      <path d="M3.5 19.5h17" {...stroke} />
    </Frame>
  );
}

/** In the order the guarantee cards are written. */
export const marks = [MarkIndependent, MarkFixed, MarkResidency, MarkSignature];
