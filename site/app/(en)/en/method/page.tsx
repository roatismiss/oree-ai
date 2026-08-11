import type { Metadata } from "next";
import { ApproachPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.en.meta.approach,
  alternates: alternates("en", "/approach"),
};

export default function Approach() {
  return <ApproachPage locale="en" />;
}
