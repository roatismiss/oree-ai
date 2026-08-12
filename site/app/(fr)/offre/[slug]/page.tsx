import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages";
import { copy, detailAlternates } from "@/content/copy";

export function generateStaticParams() {
  return copy.fr.serviceDetails.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = copy.fr.serviceDetails.find((i) => i.slug === slug);
  if (!item) return copy.fr.meta.services;
  return {
    title: `${item.name} · Orée`,
    description: item.lede,
    alternates: detailAlternates("fr", "services", slug),
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServiceDetailPage locale="fr" slug={slug} />;
}
