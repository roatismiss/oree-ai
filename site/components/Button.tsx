import Link from "next/link";

type Variant = "yellow" | "dark" | "light" | "outline";

/* Per DESIGN.md: primary is basalte with white text; secondary is card bg with
   ink text for use on dark panels; outline is a hairline pill for light
   surfaces. Khaki is reserved for the logo bar and decorative marks, so it is
   deliberately not a button fill. */
const styles: Record<Variant, { pill: string; ring: string }> = {
  yellow: { pill: "bg-ink text-light", ring: "border-light/45 text-light" },
  dark: { pill: "bg-ink text-light", ring: "border-light/45 text-light" },
  light: { pill: "bg-light text-ink", ring: "border-ink/45 text-ink" },
  outline: {
    pill: "border border-hairline bg-transparent text-ink",
    ring: "border-ink/45 text-ink",
  },
};

export function Button({
  children,
  href = "#",
  variant = "yellow",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
}) {
  const s = styles[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-8 py-4 transition-transform duration-300 hover:-translate-y-0.5 ${s.pill} ${className}`}
    >
      <span className="btn-label whitespace-nowrap">{children}</span>
      <span
        className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:translate-x-0.5 ${s.ring}`}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path
            d="M1.5 5h7M6 2.5 8.5 5 6 7.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
