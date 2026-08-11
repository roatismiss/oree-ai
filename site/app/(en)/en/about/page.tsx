import type { Metadata } from "next";
import { AboutPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.en.meta.about,
  alternates: alternates("en", "/about"),
};

export default function About() {
  return <AboutPage locale="en" />;
}
