import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { ArticleGrid } from "@/components/insights/ArticleGrid";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { insightsIndexCta } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights · Orée",
  description:
    "Sourced articles on AI and the obligations of regulated practice in Quebec: Barreau guidance, Law 25 registers, and the notariat's digital shift.",
};

export default function Insights() {
  return (
    <>
      <Nav />
      <main>
        <InsightsHero />
        <ArticleGrid />
        <Cta title={insightsIndexCta.title} />
      </main>
      <Footer />
    </>
  );
}
