import type { Metadata } from "next";
import { WhyPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.en.meta.why,
  alternates: alternates("en", "/why"),
};

export default function Why() {
  return <WhyPage locale="en" />;
}
