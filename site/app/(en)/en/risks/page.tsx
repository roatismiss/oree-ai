import type { Metadata } from "next";
import { RisksPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.en.meta.risks,
  alternates: alternates("en", "/risks"),
};

export default function Risks() {
  return <RisksPage locale="en" />;
}
