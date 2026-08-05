import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { WhyFirm } from "@/components/WhyFirm";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Team } from "@/components/Team";
import { CtaBand } from "@/components/CtaBand";
import { Questions } from "@/components/Questions";
import { Faq } from "@/components/Faq";
import { Frameworks } from "@/components/Frameworks";
import { Cta } from "@/components/Cta";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <WhyFirm />
        <div id="services"><PracticeAreas /></div>
        <Team />
        <CtaBand />
        <Questions />
        <Faq />
        <Frameworks />
        <Cta />
        <div id="insights"><Blog /></div>
      </main>
      <Footer />
    </>
  );
}
