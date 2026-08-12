import { PageHero } from "../PageHero";
import { copy, type Locale } from "@/content/copy";

/* One line of title here, not two: the page is simply "Nos publications". */
export function InsightsHero({ locale }: { locale: Locale }) {
  const { insightsHero } = copy[locale];

  return (
    <PageHero
      eyebrow={insightsHero.eyebrow}
      titleTop={insightsHero.titleTop}
      body={insightsHero.body}
      height="short"
    />
  );
}
