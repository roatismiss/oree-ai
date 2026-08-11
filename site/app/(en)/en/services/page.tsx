import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.en.meta.services,
  alternates: alternates("en", "/services"),
};

export default function Services() {
  return <ServicesPage locale="en" />;
}
