import type { Metadata } from "next";
import { DeliverablesPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.en.meta.deliverables,
  alternates: alternates("en", "/deliverables"),
};

export default function DeliverablesRoute() {
  return <DeliverablesPage locale="en" />;
}
