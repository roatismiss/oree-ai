import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceList } from "@/components/services/ServiceList";
import { Included } from "@/components/services/Included";
import { Questions } from "@/components/Questions";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { servicesCta } from "@/content/services";

export const metadata: Metadata = {
  title: "Services · Orée",
  description:
    "Orée Diagnostic, Orée Support and the Law 25 Radar. A deliberately small offer, one method, and a costed plan you keep.",
};

export default function Services() {
  return (
    <>
      <Nav />
      <main>
        <ServicesHero />
        <ServiceList />
        <Included />
        <Questions />
        <Cta title={servicesCta.title} />
      </main>
      <Footer />
    </>
  );
}
