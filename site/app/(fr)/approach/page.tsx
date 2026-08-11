import type { Metadata } from "next";
import { ApproachPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.fr.meta.approach,
  alternates: alternates("fr", "/approach"),
};

export default function Approach() {
  return <ApproachPage locale="fr" />;
}
