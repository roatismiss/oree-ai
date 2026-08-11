import { Reveal } from "./Reveal";
import { copy, type Locale } from "@/content/copy";

/**
 * Collapsed accordion, plain type, a hairline between entries. Shared `name`
 * makes the browser close the others when one opens, natively.
 *
 * Native <details> rather than React state: it is keyboard operable with no
 * JavaScript, and the answers stay in the markup even while closed, so search
 * engines and assistive technology see all of them. The version before this
 * one rendered only the open item, which hid six answers from both.
 */
export function Faq({ locale }: { locale: Locale }) {
  const { faq } = copy[locale];

  return (
    <section className="px-[10px] pt-[10px]">
      <div className="overflow-hidden rounded-[20px] bg-light px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[100px]">
        <Reveal>
          <p className="eyebrow text-olive-deep">{faq.eyebrow}</p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="h-display-tight mt-4 text-ink">
            {faq.titleTop}
            <br />
            {faq.titleBottom}
          </h2>
        </Reveal>

        <div className="mt-12 max-w-[820px] divide-y divide-hairline border-y border-hairline">
          {faq.items.map((item) => (
            <details key={item.question} name="faq" className="group py-6">
              <summary className="flex cursor-pointer list-none items-baseline gap-3 [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden
                  className="mt-[2px] shrink-0 text-[10px] text-olive-deep transition-transform duration-200 group-open:rotate-0 -rotate-90"
                >
                  ▼
                </span>
                <span className="h-row text-ink">{item.question}</span>
              </summary>

              <p className="mt-4 max-w-[680px] pl-[22px] text-[15px] leading-[24px] text-grey">
                {item.answer}
              </p>

              {item.examples && (
                <ul className="mt-4 max-w-[680px] space-y-2 pl-[22px]">
                  {item.examples.map((ex) => (
                    <li key={ex.title} className="text-[14px] leading-[22px] text-grey">
                      <span className="text-ink">{ex.title}</span> — {ex.note}
                    </li>
                  ))}
                </ul>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
