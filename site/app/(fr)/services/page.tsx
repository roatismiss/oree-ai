import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.fr.meta.services,
  alternates: alternates("fr", "/services"),
};

export default function Services() {
  return <ServicesPage locale="fr" />;
}
