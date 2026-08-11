import type { Metadata } from "next";
import { SectorDetailPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export function generateStaticParams() {
  return copy.fr.sectorDetails.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = copy.fr.sectorDetails.find((i) => i.slug === slug);
  if (!item) return copy.fr.meta.sectors;
  return {
    title: `${item.name} · Orée`,
    description: item.lede,
    alternates: alternates("fr", `/sectors/${slug}`),
  };
}

export default async function SectorDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SectorDetailPage locale="fr" slug={slug} />;
}
