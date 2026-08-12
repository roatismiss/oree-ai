import { PageHero } from "../PageHero";
import { copy, type Locale } from "@/content/copy";

export function ApproachHero({ locale }: { locale: Locale }) {
  const { approachHero } = copy[locale];

  return (
    <PageHero
      eyebrow={approachHero.eyebrow}
      titleTop={approachHero.titleTop}
      titleBottom={approachHero.titleBottom}
      body={approachHero.body}
    />
  );
}
