import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { DetailHero } from "@/components/detail/DetailHero";
import { Overview } from "@/components/detail/Overview";
import { Process } from "@/components/detail/Process";
import { Deliverables } from "@/components/detail/Deliverables";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { serviceDetails, detailCta } from "@/content/service-details";

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails.find((s) => s.slug === slug);
  if (!service) return { title: "Services · Orée" };
  return { title: `${service.name} · Orée`, description: service.lede };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Nav />
      <main>
        <DetailHero
          eyebrow={service.eyebrow}
          titleTop={service.titleTop}
          titleBottom={service.titleBottom}
          lede={service.lede}

          backHref="/services"
          backLabel="All services"
        />
        <Overview
          eyebrow="What it answers"
          paragraphs={service.problem}
          facts={service.facts}
        />
        <Process eyebrow="How it runs" title="The process" steps={service.process} />
        <Deliverables
          title="What you keep"
          items={service.deliverables}
          notThis={service.notThis}
        />
        <Cta title={detailCta.title} />
      </main>
      <Footer />
    </>
  );
}
