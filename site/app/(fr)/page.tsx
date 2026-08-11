import type { Metadata } from "next";
import { HomePage } from "@/components/pages";
import { alternates } from "@/content/copy";

export const metadata: Metadata = {
  alternates: alternates("fr", "/"),
};

export default function Home() {
  return <HomePage locale="fr" />;
}
