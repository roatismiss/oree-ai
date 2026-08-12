import type { Metadata } from "next";
import { ArticlePage } from "@/components/pages";
import { copy, detailAlternates } from "@/content/copy";

export function generateStaticParams() {
  return copy.en.articles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = copy.en.articles.find((i) => i.slug === slug);
  if (!item) return copy.en.meta.insights;
  return {
    title: `${item.title} · Orée`,
    description: item.excerpt,
    alternates: detailAlternates("en", "insights", slug),
  };
}

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticlePage locale="en" slug={slug} />;
}
