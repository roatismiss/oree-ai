import { PageHero } from "../PageHero";
import { copy, type Locale } from "@/content/copy";

export function ServicesHero({ locale }: { locale: Locale }) {
  const { servicesHero } = copy[locale];

  return (
    <PageHero
      eyebrow={servicesHero.eyebrow}
      titleTop={servicesHero.titleTop}
      titleBottom={servicesHero.titleBottom}
      body={servicesHero.body}
    />
  );
}
