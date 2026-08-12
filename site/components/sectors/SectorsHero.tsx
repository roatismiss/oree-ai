import { PageHero } from "../PageHero";
import { copy, type Locale } from "@/content/copy";

export function SectorsHero({ locale }: { locale: Locale }) {
  const { sectorsHero } = copy[locale];

  return (
    <PageHero
      eyebrow={sectorsHero.eyebrow}
      titleTop={sectorsHero.titleTop}
      titleBottom={sectorsHero.titleBottom}
      body={sectorsHero.body}
    />
  );
}
