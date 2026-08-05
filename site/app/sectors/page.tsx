import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { SectorsHero } from "@/components/sectors/SectorsHero";
import { SectorList } from "@/components/sectors/SectorList";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { sectorsCta } from "@/content/sectors";

export const metadata: Metadata = {
  title: "Sectors · Orée",
  description:
    "AI governance for notaries, law firms, CHRPs and investment firms in Quebec. Each profession's obligations, and where the method starts.",
};

export default function Sectors() {
  return (
    <>
      <Nav />
      <main>
        <SectorsHero />
        <SectorList />
        <Cta title={sectorsCta.title} />
      </main>
      <Footer />
    </>
  );
}
