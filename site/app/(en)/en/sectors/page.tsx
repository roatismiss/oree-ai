import type { Metadata } from "next";
import { SectorsPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.en.meta.sectors,
  alternates: alternates("en", "/sectors"),
};

export default function Sectors() {
  return <SectorsPage locale="en" />;
}
