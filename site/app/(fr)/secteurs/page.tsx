import type { Metadata } from "next";
import { SectorsPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.fr.meta.sectors,
  alternates: alternates("fr", "/sectors"),
};

export default function Sectors() {
  return <SectorsPage locale="fr" />;
}
