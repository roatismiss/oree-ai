import { Reveal } from "./Reveal";
import { ctaBand } from "@/content/en";

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <span className="block text-[12px] uppercase tracking-[0.04em] text-grey">{label}</span>
      <input
        type={type}
        className="mt-3 w-full border-b border-ink/25 bg-transparent pb-2 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-olive-deep"
      />
    </label>
  );
}

/* The booking band: soft khaki panel, no photography. */
export function CtaBand() {
  return (
    <section className="px-[10px] pt-[10px]">
      <div className="relative overflow-hidden rounded-[20px] border border-hairline bg-mousse px-6 py-14 sm:px-10 lg:px-[70px] lg:py-[60px]">
        <div className="relative">
          <Reveal>
            <h2 className="h-band text-olive-deep">{ctaBand.titleTop}</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h-band text-ink">{ctaBand.titleBottom}</h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[620px] text-[15px] leading-[22px] text-ecorce">{ctaBand.body}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 grid items-end gap-8 lg:grid-cols-[1fr_1fr_1fr_auto]">
              <Field label={ctaBand.fields.name} />
              <Field label={ctaBand.fields.email} type="email" />
              <Field label={ctaBand.fields.phone} type="tel" />

              <a
                href="mailto:aminata.diabate@oreeconseil.ca?subject=Or%C3%A9e%20Diagnostic"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-light transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="btn-label whitespace-nowrap">{ctaBand.cta}</span>
                <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-light/45 transition-transform duration-300 group-hover:translate-x-0.5">
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
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
