/**
 * One template per page, parameterised by locale.
 *
 * The route tree exists twice (French at the root, English under /en), so the
 * page files in app/ are thin: they set metadata and render the template for
 * their locale. The structure of a page lives here, once.
 */

import Image from "next/image";
import { notFound } from "next/navigation";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/Hero";
import { MethodGlance } from "@/components/MethodGlance";
import { Stats } from "@/components/Stats";
import { CostOfInaction } from "@/components/CostOfInaction";
import { WhyFirm } from "@/components/WhyFirm";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Team } from "@/components/Team";
import { CtaBand } from "@/components/CtaBand";
import { Questions } from "@/components/Questions";
import { Faq } from "@/components/Faq";
import { Frameworks } from "@/components/Frameworks";
import { Cta } from "@/components/Cta";
import { Blog } from "@/components/Blog";
import { ContactForm } from "@/components/ContactForm";
import { ApproachHero } from "@/components/approach/ApproachHero";
import { Story } from "@/components/approach/Story";
import { Method } from "@/components/approach/Method";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceList } from "@/components/services/ServiceList";
import { Included } from "@/components/services/Included";
import { SectorsHero } from "@/components/sectors/SectorsHero";
import { SectorList } from "@/components/sectors/SectorList";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { ArticleGrid } from "@/components/insights/ArticleGrid";
import { ArticleHero } from "@/components/insights/ArticleHero";
import { ArticleBody } from "@/components/insights/ArticleBody";
import { DetailHero } from "@/components/detail/DetailHero";
import { Overview } from "@/components/detail/Overview";
import { Process } from "@/components/detail/Process";
import { Deliverables } from "@/components/detail/Deliverables";

import { copy, localePath, type Locale } from "@/content/copy";

type P = { locale: Locale };

export function HomePage({ locale }: P) {
  return (
    <>
      <Nav locale={locale} />
      <main>
        <Hero locale={locale} />
        <div id="method">
          <MethodGlance locale={locale} />
        </div>
        <div id="bio">
          <Team locale={locale} />
        </div>
        <div id="stats">
          <Stats locale={locale} />
        </div>
        <CostOfInaction locale={locale} />
        <WhyFirm locale={locale} />
        <div id="services">
          <PracticeAreas locale={locale} />
        </div>
        <CtaBand locale={locale} />
        <Questions locale={locale} />
        <Faq locale={locale} />
        <Frameworks locale={locale} />
        <Cta locale={locale} />
        <div id="insights">
          <Blog locale={locale} />
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}

export function ApproachPage({ locale }: P) {
  const { approachCta } = copy[locale];
  return (
    <>
      <Nav locale={locale} />
      <main>
        <ApproachHero locale={locale} />
        <div id="bio">
          <Story locale={locale} />
        </div>
        <Stats locale={locale} />
        <Method locale={locale} />
        <Team locale={locale} />
        <Cta locale={locale} title={approachCta.title} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

export function ServicesPage({ locale }: P) {
  const { servicesCta } = copy[locale];
  return (
    <>
      <Nav locale={locale} />
      <main>
        <ServicesHero locale={locale} />
        <ServiceList locale={locale} />
        <Included locale={locale} />
        <Questions locale={locale} />
        <Cta locale={locale} title={servicesCta.title} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

export function SectorsPage({ locale }: P) {
  const { sectorsCta } = copy[locale];
  return (
    <>
      <Nav locale={locale} />
      <main>
        <SectorsHero locale={locale} />
        <SectorList locale={locale} />
        <Cta locale={locale} title={sectorsCta.title} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

export function InsightsPage({ locale }: P) {
  const { insightsIndexCta } = copy[locale];
  return (
    <>
      <Nav locale={locale} />
      <main>
        <InsightsHero locale={locale} />
        <ArticleGrid locale={locale} />
        <Cta locale={locale} title={insightsIndexCta.title} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

export function ServiceDetailPage({ locale, slug }: P & { slug: string }) {
  const { serviceDetails, detailCta, ui } = copy[locale];
  const service = serviceDetails.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Nav locale={locale} />
      <main>
        <DetailHero
          eyebrow={service.eyebrow}
          titleTop={service.titleTop}
          titleBottom={service.titleBottom}
          lede={service.lede}
          backHref={localePath(locale, "/services")}
          backLabel={ui.allServices}
        />
        <Overview eyebrow={ui.whatItAnswers} paragraphs={service.problem} facts={service.facts} />
        <Process eyebrow={ui.howItRuns} title={ui.theProcess} steps={service.process} />
        <Deliverables
          title={ui.whatYouKeep}
          intro={service.deliverablesIntro}
          items={service.deliverables}
          notThis={service.notThis}
        />
        <Cta locale={locale} title={detailCta.title} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

export function SectorDetailPage({ locale, slug }: P & { slug: string }) {
  const { sectorDetails, detailCta, ui } = copy[locale];
  const sector = sectorDetails.find((s) => s.slug === slug);
  if (!sector) notFound();

  return (
    <>
      <Nav locale={locale} />
      <main>
        <DetailHero
          eyebrow={sector.eyebrow}
          titleTop={sector.titleTop}
          titleBottom={sector.titleBottom}
          lede={sector.lede}
          backHref={localePath(locale, "/sectors")}
          backLabel={ui.allSectors}
        />
        <Overview eyebrow={ui.situation} paragraphs={sector.situation} facts={sector.facts} />
        <Process
          eyebrow={ui.whereMandateStarts}
          title={ui.startingPoints}
          steps={sector.startingPoints}
        />
        <Deliverables title={ui.whatChanges} items={sector.outcomes} notThis={sector.notThis} />
        <Cta locale={locale} title={detailCta.title} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

export function ArticlePage({ locale, slug }: P & { slug: string }) {
  const { articles } = copy[locale];
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <Nav locale={locale} />
      <main>
        <ArticleHero
          locale={locale}
          title={article.title}
          date={article.date}
          readingTime={article.readingTime}
        />
        <ArticleBody locale={locale} article={article} />
        <Cta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

export function RisksPage({ locale }: P) {
  const { risksHero, risksReasons, risksCases, risksCta } = copy[locale];
  return (
    <>
      <Nav locale={locale} heroTone="light" />
      <main>
        <section className="px-[10px] pt-[10px]">
          <div className="overflow-hidden rounded-[20px] bg-light px-6 pb-20 pt-32 sm:px-10 lg:px-[130px] lg:pb-[90px] lg:pt-[160px]">
            <Reveal>
              <p className="eyebrow text-amber-ink">{risksHero.eyebrow}</p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="h-display-tight mt-4 text-ink">{risksHero.titleTop}</h1>
              <h1 className="h-display-tight italic text-olive-deep">{risksHero.titleBottom}</h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="refrain mt-9 max-w-[720px] text-[21px] leading-[1.4] text-ink">
                {risksHero.intro}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-[10px] pt-[10px]">
          <div className="overflow-hidden rounded-[20px] bg-craie px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[80px]">
            <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {risksReasons.map((r, i) => (
                <Reveal key={r.title} delay={0.06 * i}>
                  <div className="flex h-full flex-col rounded-[14px] bg-light p-7">
                    <p className="h-row text-ink">{r.title}</p>
                    <p className="mt-3 text-[15px] leading-[22px] text-ecorce">{r.body}</p>
                    {r.note && (
                      <p className="mt-auto pt-5 text-[14px] leading-[20px] text-olive-deep">
                        <span aria-hidden>→ </span>
                        {r.note}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[10px] pt-[10px]">
          <div className="overflow-hidden rounded-[20px] bg-cream px-6 py-20 sm:px-10 lg:px-[130px] lg:py-[80px]">
            <Reveal>
              <h2 className="h-display max-w-[900px] text-ink">{risksCases.title}</h2>
            </Reveal>

            <ol className="mt-14">
              {risksCases.items.map((c, i) => (
                <Reveal key={c.name} delay={0.06 * i}>
                  <li className="grid gap-x-10 gap-y-3 border-t border-hairline py-8 last:border-b lg:grid-cols-[160px_minmax(0,1fr)]">
                    <span className="eyebrow pt-1 text-sienne">{c.period}</span>
                    <div>
                      <h3 className="h-row text-ink">{c.name}</h3>
                      <p className="mt-3 max-w-[720px] text-[15px] leading-[23px] text-ecorce">
                        {c.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.16}>
              <p className="refrain mt-12 max-w-[720px] text-[19px] leading-[1.45] text-olive-deep">
                {risksCases.closing}
              </p>
            </Reveal>
          </div>
        </section>

        <Cta locale={locale} title={risksCta.title} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

export function ContactPage({ locale }: P) {
  const { contact, contactForm, hero, ui } = copy[locale];

  return (
    <>
      <Nav locale={locale} heroTone="light" />
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

                <div className="mt-12 border-t border-hairline pt-10">
                  <p className="eyebrow text-olive-deep">{contactForm.eyebrow}</p>
                  <div className="mt-7 max-w-[620px]">
                    <ContactForm locale={locale} />
                  </div>
                </div>

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
                    alt={ui.portraitAlt}
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
      <Footer locale={locale} />
    </>
  );
}
