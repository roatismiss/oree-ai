import type { Metadata } from "next";
import { DeliverablesPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.fr.meta.deliverables,
  alternates: alternates("fr", "/deliverables"),
};

export default function DeliverablesRoute() {
  return <DeliverablesPage locale="fr" />;
}
