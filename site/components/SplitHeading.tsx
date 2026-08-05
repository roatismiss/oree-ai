import { Reveal } from "./Reveal";

/** The template's signature heading: first line flushed right, second line flushed left. */
export function SplitHeading({
  top,
  bottom,
  className = "",
}: {
  top: string;
  bottom: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal>
        <h2 className="h-display text-right">{top}</h2>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="h-display text-left">{bottom}</h2>
      </Reveal>
    </div>
  );
}
