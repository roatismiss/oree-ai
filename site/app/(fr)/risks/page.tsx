import type { Metadata } from "next";
import { RisksPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.fr.meta.risks,
  alternates: alternates("fr", "/risks"),
};

export default function Risks() {
  return <RisksPage locale="fr" />;
}
