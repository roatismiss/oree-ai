import type { Metadata } from "next";
import { WhyPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.fr.meta.why,
  alternates: alternates("fr", "/why"),
};

export default function Why() {
  return <WhyPage locale="fr" />;
}
