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

/** Prefix a root-relative path for the given locale. French has no prefix. */
export function localePath(locale: Locale, path: string) {
  if (locale === "fr") return path;
  return path === "/" ? "/en" : `/en${path}`;
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
