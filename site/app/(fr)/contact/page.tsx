import type { Metadata } from "next";
import { ContactPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.fr.meta.contact,
  alternates: alternates("fr", "/contact"),
};

export default function Contact() {
  return <ContactPage locale="fr" />;
}
