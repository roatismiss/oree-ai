import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { ArticleHero } from "@/components/insights/ArticleHero";
import { ArticleBody } from "@/components/insights/ArticleBody";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { articles } from "@/content/insights";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Insights · Orée" };
  return {
    title: `${article.title} · Orée`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <Nav />
      <main>
        <ArticleHero
          title={article.title}
          date={article.date}
          readingTime={article.readingTime}

        />
        <ArticleBody article={article} />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
