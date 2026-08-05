import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ApproachHero } from "@/components/approach/ApproachHero";
import { Story } from "@/components/approach/Story";
import { Stats } from "@/components/Stats";
import { Method } from "@/components/approach/Method";
import { Team } from "@/components/Team";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { approachCta } from "@/content/approach";

export const metadata: Metadata = {
  title: "The approach · Orée",
  description:
    "The O·R·É·E method: observe, review, evaluate, engage. Three days inside your practice, ending in a costed plan you approve line by line.",
};

export default function Approach() {
  return (
    <>
      <Nav />
      <main>
        <ApproachHero />
        <Story />
        <Stats />
        <Method />
        <Team />
        <Cta title={approachCta.title} />
      </main>
      <Footer />
    </>
  );
}
