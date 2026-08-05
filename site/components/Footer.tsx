import Link from "next/link";
import { Reveal } from "./Reveal";
import { footer } from "@/content/en";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-light px-6 pt-20 sm:px-10 lg:px-[130px] lg:pt-[80px]">
      <div className="relative">
        <div className="grid gap-12 lg:grid-cols-3">
          {footer.columns.map((col, i) => {
            const right = i === footer.columns.length - 1;
            return (
              <Reveal key={col.label} delay={0.06 * i}>
                <div className={`flex gap-6 ${right ? "lg:flex-row-reverse lg:text-right" : ""}`}>
                  <p className="eyebrow mt-1 shrink-0 text-olive-deep">{col.label}</p>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="h-row block text-ink transition-opacity hover:opacity-60"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <p className="refrain text-[20px] leading-[28px] text-olive-deep">{footer.refrain}</p>
            <p className="eyebrow mt-3 text-grey">{footer.refrainGloss}</p>
          </div>
        </Reveal>

        <div className="relative mt-10 flex items-end justify-center">
          <h2 className="h-wordmark text-center text-ink">{footer.wordmark}</h2>
        </div>

        <div className="relative mt-8 flex flex-col gap-4 border-t border-hairline py-8 text-[12px] font-medium uppercase leading-[18px] tracking-[0.06em] text-grey sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.legal}</p>
          <div className="flex gap-8">
            {footer.links.map((l) => (
              <Link key={l} href="/contact" className="transition-opacity hover:opacity-60">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
