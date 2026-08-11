import type { Metadata } from "next";
import { InsightsPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.fr.meta.insights,
  alternates: alternates("fr", "/insights"),
};

export default function Insights() {
  return <InsightsPage locale="fr" />;
}
