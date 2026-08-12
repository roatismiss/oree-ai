/**
 * Locale wiring for the site.
 *
 * French is the default locale and lives at the root URLs (/, /approach, ...)
 * because the audience is Quebec. English mirrors it under /en. That split is
 * deliberate: the 301s from the old .dc URLs point at the root paths, so a
 * visitor arriving from Google lands on the French page without a second hop.
 *
 * `Dictionary` is derived from the English modules, so a missing or renamed
 * French export is a compile error rather than a blank section in production.
 */

import * as enMain from "./en/main";
import * as enApproach from "./en/approach";
import * as enServices from "./en/services";
import * as enServiceDetails from "./en/service-details";
import * as enSectors from "./en/sectors";
import * as enSectorDetails from "./en/sector-details";
import * as enInsights from "./en/insights";
import * as enRisks from "./en/risks";

import * as frMain from "./fr/main";
import * as frApproach from "./fr/approach";
import * as frServices from "./fr/services";
import * as frServiceDetails from "./fr/service-details";
import * as frSectors from "./fr/sectors";
import * as frSectorDetails from "./fr/sector-details";
import * as frInsights from "./fr/insights";
import * as frRisks from "./fr/risks";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

const en = {
  ...enMain,
  ...enApproach,
  ...enServices,
  ...enServiceDetails,
  ...enSectors,
  ...enSectorDetails,
  ...enInsights,
  ...enRisks,
};

const fr = {
  ...frMain,
  ...frApproach,
  ...frServices,
  ...frServiceDetails,
  ...frSectors,
  ...frSectorDetails,
  ...frInsights,
  ...frRisks,
};

export type Dictionary = typeof en;

export const copy: Record<Locale, Dictionary> = { en, fr };

/**
 * Top-level URL segment per locale.
 *
 * The client asked for the same structure as oree-conseil.ca, so the French
 * addresses use her own words: methode, offre, risques. English keeps the
 * labels her old site used on its English side (Method, Offering).
 *
 * Content files address pages by the canonical key on the left. Nothing in the
 * copy has to know about the localized segment, and a rename here moves every
 * link on the site at once.
 */
const SEGMENTS: Record<string, Record<Locale, string>> = {
  approach: { fr: "methode", en: "method" },
  about: { fr: "a-propos", en: "about" },
  why: { fr: "pourquoi-oree", en: "why-oree" },
  services: { fr: "offre", en: "offering" },
  deliverables: { fr: "livrables", en: "deliverables" },
  sectors: { fr: "secteurs", en: "sectors" },
  insights: { fr: "publications", en: "insights" },
  risks: { fr: "risques", en: "risks" },
  contact: { fr: "contact", en: "contact" },
};

function split(path: string) {
  const hash = path.includes("#") ? path.slice(path.indexOf("#")) : "";
  const bare = hash ? path.slice(0, path.indexOf("#")) : path;
  const [, head = "", ...rest] = bare.split("/");
  return { head, rest, hash };
}

/** Canonical path in, localized URL out. French sits at the root, English under /en. */
export function localePath(locale: Locale, path: string) {
  const { head, rest, hash } = split(path);
  const translated = SEGMENTS[head]?.[locale] ?? head;
  const segments = [locale === "en" ? "en" : "", translated, ...rest].filter(Boolean);
  return `/${segments.join("/")}${hash}`;
}

/** Localized URL in, canonical path out. The inverse of `localePath`. */
export function canonicalPath(locale: Locale, pathname: string) {
  const stripped =
    locale === "en" ? pathname.replace(/^\/en(?=\/|$)/, "") || "/" : pathname;
  const { head, rest, hash } = split(stripped);
  const key = Object.keys(SEGMENTS).find((k) => SEGMENTS[k][locale] === head);
  const segments = [key ?? head, ...rest].filter(Boolean);
  return `/${segments.join("/")}${hash}`;
}

/**
 * Same as `canonicalPath`, but returns the head key and the remaining
 * segments separately rather than joined. `useLocaleSwap` needs the tail on
 * its own so it can run it through a per-item slug map instead of assuming
 * the tail is locale-invariant, which sector/service/article slugs no longer
 * are.
 */
export function canonicalParts(locale: Locale, pathname: string) {
  const stripped =
    locale === "en" ? pathname.replace(/^\/en(?=\/|$)/, "") || "/" : pathname;
  const { head, rest } = split(stripped);
  const key = Object.keys(SEGMENTS).find((k) => SEGMENTS[k][locale] === head);
  return { head: key ?? head, rest };
}

/** The same page in the other language, for the nav toggle. */
export const otherLocale: Record<Locale, Locale> = { fr: "en", en: "fr" };

/**
 * hreflang pair for a page. The same content lives at two URLs, so each one
 * has to name the other or Google treats them as competing duplicates.
 * x-default points at French: an unmatched visitor gets the Quebec version.
 */
export function alternates(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: {
      fr: localePath("fr", path),
      en: localePath("en", path),
      "x-default": localePath("fr", path),
    },
  };
}

/**
 * Sector, service and article pages carry their own slug per locale (French
 * URLs use French words: /secteurs/notaires, not /secteurs/notaries). `key`
 * is the stable id every fr/en pair shares; these maps let anything holding
 * one locale's slug find the other's, for the language toggle and for
 * hreflang alternates on detail pages.
 */
type SlugPair = Record<Locale, string>;

function buildSlugMap(
  frItems: { key: string; slug: string }[],
  enItems: { key: string; slug: string }[]
): Record<string, SlugPair> {
  const enByKey = new Map(enItems.map((i) => [i.key, i.slug]));
  const map: Record<string, SlugPair> = {};
  for (const f of frItems) {
    const en = enByKey.get(f.key);
    if (en) map[f.key] = { fr: f.slug, en };
  }
  return map;
}

const detailSlugMaps: Record<string, Record<string, SlugPair>> = {
  sectors: buildSlugMap(fr.sectorDetails, en.sectorDetails),
  services: buildSlugMap(fr.serviceDetails, en.serviceDetails),
  insights: buildSlugMap(fr.articles, en.articles),
};

/**
 * Given a detail page's canonical section (`sectors`, `services`,
 * `insights`) and its slug in `fromLocale`, returns the matching slug in
 * `toLocale`. Sections outside the three detail collections, and any slug
 * that fails to match (should not happen for a live page), fall back to the
 * same slug — the previous locale-invariant behaviour.
 */
export function detailSlugFor(
  head: string,
  fromLocale: Locale,
  toLocale: Locale,
  slug: string
) {
  const map = detailSlugMaps[head];
  if (!map) return slug;
  for (const pair of Object.values(map)) {
    if (pair[fromLocale] === slug) return pair[toLocale];
  }
  return slug;
}

/** `alternates`, but for a detail page whose tail is a per-locale slug. */
export function detailAlternates(locale: Locale, head: string, slug: string) {
  const target = otherLocale[locale];
  const otherSlug = detailSlugFor(head, locale, target, slug);
  const path = (loc: Locale, s: string) => localePath(loc, `/${head}/${s}`);
  const frSlug = locale === "fr" ? slug : otherSlug;
  const enSlug = locale === "en" ? slug : otherSlug;
  return {
    canonical: path(locale, slug),
    languages: {
      fr: path("fr", frSlug),
      en: path("en", enSlug),
      "x-default": path("fr", frSlug),
    },
  };
}
