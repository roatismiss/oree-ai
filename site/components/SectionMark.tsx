/**
 * The running head for a section: its number, a rule, its label.
 *
 * Two problems meet here. The palette reference gives Grès a job — "filets,
 * bordures, séparateurs — jamais du noir" — and the site drew almost no rules
 * at all, so every section began with a lone line of small caps floating in
 * space. And the sections had no order to them: nine panels of equal weight,
 * none of which admitted where it stood in the argument.
 *
 * Numbering them in DM Mono is the brand's own habit — its reference document
 * sets "JOUR 1 — IMMERSION" the same way — and a page that counts its own
 * sections reads as edited rather than assembled.
 *
 * The amber numeral in this component is reserved for section marks. List
 * numerals elsewhere (sector rows, article rows, O·R·É·E steps) are set in
 * grey precisely so a list item never reads as a section heading when the two
 * land next to each other — which is what made /methode and /secteurs look
 * misnumbered.
 */
export function SectionMark({
  index,
  label,
  tone = "olive",
  className = "",
}: {
  index: string;
  /** Omitted where the section's own heading follows immediately and a label
      here would only repeat it — the number and the rule still place it. */
  label?: string;
  /** `amber` for the khaki eyebrows, `olive` for the deeper ones, `light` on Basalte. */
  tone?: "olive" | "amber" | "ink" | "light";
  className?: string;
}) {
  const label_ = {
    olive: "text-olive-deep",
    amber: "text-amber-ink",
    ink: "text-ink",
    light: "text-craie",
  }[tone];

  const rule = tone === "light" ? "bg-craie/25" : "bg-hairline";
  const num = tone === "light" ? "text-yellow" : "text-amber";

  return (
    <div className={`flex items-center gap-4 sm:gap-6 ${className}`}>
      <span className={`eyebrow shrink-0 ${num}`}>{index}</span>
      {label && (
        <>
          <span className={`h-px w-8 shrink-0 sm:w-12 ${rule}`} aria-hidden />
          <p className={`eyebrow shrink-0 ${label_}`}>{label}</p>
        </>
      )}
      {/* The rule runs to the edge of the panel, which is what makes the row
          read as a running head rather than as three loose elements. */}
      <span className={`h-px min-w-0 flex-1 ${rule}`} aria-hidden />
    </div>
  );
}
