import type { Metadata } from "next";
import { AboutPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.fr.meta.about,
  alternates: alternates("fr", "/about"),
};

export default function About() {
  return <AboutPage locale="fr" />;
}
