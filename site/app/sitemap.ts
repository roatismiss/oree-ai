import type { MetadataRoute } from "next";
import { copy, localePath } from "@/content/copy";

const BASE_URL = "https://oreeconseil.ca";

/* Canonical paths for every static page. Both locales share this list;
   `localePath` maps each one to its French or English URL segment. */
const staticPaths = [
  "/",
  "/approach",
  "/about",
  "/why",
  "/services",
  "/deliverables",
  "/sectors",
  "/insights",
  "/risks",
  "/contact",
];

function urlEntry(
  loc: string,
  frPath: string,
  enPath: string
): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE_URL}${loc}`,
    alternates: {
      languages: {
        fr: `${BASE_URL}${frPath}`,
        en: `${BASE_URL}${enPath}`,
        "x-default": `${BASE_URL}${frPath}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of staticPaths) {
    const fr = localePath("fr", path);
    const en = localePath("en", path);
    entries.push(urlEntry(fr, fr, en));
    entries.push(urlEntry(en, fr, en));
  }

  const detailSections: {
    head: string;
    fr: { key: string; slug: string }[];
    en: { key: string; slug: string }[];
  }[] = [
    { head: "sectors", fr: copy.fr.sectorDetails, en: copy.en.sectorDetails },
    { head: "services", fr: copy.fr.serviceDetails, en: copy.en.serviceDetails },
    { head: "insights", fr: copy.fr.articles, en: copy.en.articles },
  ];

  for (const section of detailSections) {
    const enByKey = new Map(section.en.map((item) => [item.key, item.slug]));
    for (const item of section.fr) {
      const enSlug = enByKey.get(item.key);
      if (!enSlug) continue;
      const frUrl = localePath("fr", `/${section.head}/${item.slug}`);
      const enUrl = localePath("en", `/${section.head}/${enSlug}`);
      entries.push(urlEntry(frUrl, frUrl, enUrl));
      entries.push(urlEntry(enUrl, frUrl, enUrl));
    }
  }

  return entries;
}
