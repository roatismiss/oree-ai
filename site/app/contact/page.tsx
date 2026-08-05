import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { contact, hero } from "@/content/en";

export const metadata: Metadata = {
  title: "Contact · Orée Conseil",
  description:
    "Book an Orée diagnostic. Aminata Diabaté, Founder and Principal Consultant. Montréal · Eastern Townships, Québec.",
};

export default function ContactPage() {
  return (
    <>
      <Nav heroTone="light" />
      <main>
        <section className="px-[10px] pt-[10px]">
          <div className="overflow-hidden rounded-[20px] bg-light px-6 pb-20 pt-32 sm:px-10 lg:px-[130px] lg:pb-[100px] lg:pt-[160px]">
            <Reveal>
              <p className="eyebrow text-olive-deep">{contact.eyebrow}</p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="h-display-tight mt-4 max-w-[820px] text-ink">{contact.title}</h1>
            </Reveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
              <Reveal delay={0.1}>
                <p className="max-w-[560px] text-[16px] leading-[24px] text-grey">{contact.body}</p>

                <div className="mt-10 space-y-6">
                  <div>
                    <p className="eyebrow text-olive-deep">{contact.emailLabel}</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="h-row mt-2 block text-ink underline-offset-4 hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div>
                    <p className="eyebrow text-olive-deep">{contact.locationLabel}</p>
                    <p className="h-row mt-2 text-ink">{contact.location}</p>
                  </div>
                  <div>
                    <p className="eyebrow text-olive-deep">{contact.languagesLabel}</p>
                    <p className="h-row mt-2 text-ink">{contact.languages}</p>
                  </div>
                </div>

                <a
                  href={`mailto:${contact.email}?subject=Or%C3%A9e%20Diagnostic`}
                  className="group mt-12 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-light transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="btn-label whitespace-nowrap">{contact.cta}</span>
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

                <div className="mt-14 flex items-center gap-4 border-t border-hairline pt-6">
                  <span className="flex items-end gap-[3px]" aria-hidden>
                    <span className="block h-[14px] w-[3px] bg-galet" />
                    <span className="block h-[20px] w-[3px] bg-olive-deep" />
                    <span className="block h-[14px] w-[3px] bg-galet" />
                  </span>
                  <p className="refrain text-[19px] leading-none text-olive-deep">{hero.refrain}</p>
                  <p className="eyebrow hidden text-grey sm:block">{hero.refrainGloss}</p>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="overflow-hidden rounded-[20px]">
                  <Image
                    src="/img/aminata-diabate.jpg"
                    alt="Aminata Diabaté, Founder and Principal Consultant of Orée Conseil"
                    width={1142}
                    height={1280}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
