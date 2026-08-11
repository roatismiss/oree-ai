import type { Metadata } from "next";
import { ContactPage } from "@/components/pages";
import { alternates, copy } from "@/content/copy";

export const metadata: Metadata = {
  ...copy.en.meta.contact,
  alternates: alternates("en", "/contact"),
};

export default function Contact() {
  return <ContactPage locale="en" />;
}
