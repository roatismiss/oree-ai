import type { Metadata } from "next";
import { HomePage } from "@/components/pages";
import { alternates } from "@/content/copy";

export const metadata: Metadata = {
  alternates: alternates("en", "/"),
};

export default function Home() {
  return <HomePage locale="en" />;
}
