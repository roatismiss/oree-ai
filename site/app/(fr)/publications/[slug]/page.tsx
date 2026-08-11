import type { Metadata } from "next";
import { ArticlePage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export function generateStaticParams() {
  return copy.fr.articles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = copy.fr.articles.find((i) => i.slug === slug);
  if (!item) return copy.fr.meta.insights;
  return {
    title: `${item.title} · Orée`,
    description: item.excerpt,
    alternates: alternates("fr", `/insights/${slug}`),
  };
}

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticlePage locale="fr" slug={slug} />;
}
