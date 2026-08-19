/**
 * The running head for a section: its label, then a rule to the panel edge.
 *
 * The palette reference gives Grès a job — "filets, bordures, séparateurs —
 * jamais du noir" — and the site drew almost no rules at all, so every section
 * began with a lone line of small caps floating in space. The rule is what
 * makes the row read as a running head rather than as loose type.
 *
 * It used to open with an amber numeral, so a page counted its own sections.
 * The numerals are gone at the client's request: every section added or moved
 * meant renumbering the ones after it by hand, and a mark that is wrong is
 * worse than no mark. Nothing on the site is numbered now except the three
 * days of the diagnostic, where the number is the content.
 */
export function SectionMark({
  label,
  tone = "olive",
  className = "",
}: {
  /** Omitted where the section's own heading follows immediately and a label
      here would only repeat it — the rule still opens the section. */
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

  return (
    <div className={`flex items-center gap-4 sm:gap-6 ${className}`}>
      {label && <p className={`eyebrow shrink-0 ${label_}`}>{label}</p>}
      <span className={`h-px min-w-0 flex-1 ${rule}`} aria-hidden />
    </div>
  );
}
