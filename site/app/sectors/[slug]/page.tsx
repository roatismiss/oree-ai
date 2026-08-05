import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { DetailHero } from "@/components/detail/DetailHero";
import { Overview } from "@/components/detail/Overview";
import { Process } from "@/components/detail/Process";
import { Deliverables } from "@/components/detail/Deliverables";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { sectorDetails } from "@/content/sector-details";
import { detailCta } from "@/content/service-details";

export function generateStaticParams() {
  return sectorDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectorDetails.find((s) => s.slug === slug);
  if (!sector) return { title: "Sectors · Orée" };
  return { title: `${sector.name} · Orée`, description: sector.lede };
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = sectorDetails.find((s) => s.slug === slug);
  if (!sector) notFound();

  return (
    <>
      <Nav />
      <main>
        <DetailHero
          eyebrow={sector.eyebrow}
          titleTop={sector.titleTop}
          titleBottom={sector.titleBottom}
          lede={sector.lede}

          backHref="/sectors"
          backLabel="All sectors"
        />
        <Overview
          eyebrow="The situation"
          paragraphs={sector.situation}
          facts={sector.facts}
        />
        <Process
          eyebrow="Where a mandate starts"
          title="Starting points"
          steps={sector.startingPoints}
        />
        <Deliverables
          title="What changes"
          items={sector.outcomes}
          notThis={sector.notThis}
        />
        <Cta title={detailCta.title} />
      </main>
      <Footer />
    </>
  );
}
