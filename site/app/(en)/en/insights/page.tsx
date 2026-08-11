import type { Metadata } from "next";
import { InsightsPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.en.meta.insights,
  alternates: alternates("en", "/insights"),
};

export default function Insights() {
  return <InsightsPage locale="en" />;
}
