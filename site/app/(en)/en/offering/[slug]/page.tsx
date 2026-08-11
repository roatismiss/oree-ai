import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export function generateStaticParams() {
  return copy.en.serviceDetails.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = copy.en.serviceDetails.find((i) => i.slug === slug);
  if (!item) return copy.en.meta.services;
  return {
    title: `${item.name} · Orée`,
    description: item.lede,
    alternates: alternates("en", `/services/${slug}`),
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServiceDetailPage locale="en" slug={slug} />;
}
