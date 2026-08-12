import type { NextConfig } from "next";

/* Redirects from the old oree-conseil.ca URLs, so the pages Google already
   indexed keep their ranking once the domain points here. Explicit 301 rather
   than `permanent: true` (which emits 308) because that is what the launch
   plan specifies; both are equivalent to search engines.

   The French addresses now use the client's own words, so each .dc page lands
   on its direct equivalent in one hop rather than two. */
const legacyRedirects = [
  { source: "/index.dc", destination: "/" },
  { source: "/methode.dc", destination: "/methode" },
  { source: "/a-propos.dc", destination: "/a-propos" },
  { source: "/pourquoi-oree.dc", destination: "/pourquoi-oree" },
  { source: "/risques.dc", destination: "/risques" },
  { source: "/offre.dc", destination: "/offre" },
  { source: "/livrables.dc", destination: "/livrables" },
  { source: "/contact.dc", destination: "/contact" },
];

/* The English slugs Site A carried while it was on the preview URL. They were
   live and may have been shared, so they keep working rather than 404.
   Sector/service/article slugs redirect one by one rather than through a
   `:slug` wildcard, because French URLs now use French words for the tail
   too (/secteurs/notaires, not /secteurs/notaries) — a passthrough would
   send every renamed slug to a 404. */
const renamedRoutes = [
  { source: "/approach", destination: "/methode" },
  { source: "/services", destination: "/offre" },
  { source: "/sectors", destination: "/secteurs" },
  { source: "/insights", destination: "/publications" },
  { source: "/insights/:slug", destination: "/publications/:slug" },
  { source: "/risks", destination: "/risques" },
  { source: "/en/approach", destination: "/en/method" },
  { source: "/en/services", destination: "/en/offering" },
  { source: "/en/services/:slug", destination: "/en/offering/:slug" },
];

/* French routes briefly carried English slugs on sector, service and article
   detail pages before they were translated. Each one gets its own 301 to the
   French slug rather than a 404. */
const frSlugRenames = [
  { source: "/services/diagnostic", destination: "/offre/diagnostic" },
  { source: "/sectors/small-business", destination: "/secteurs/petites-entreprises" },
  { source: "/sectors/notaries", destination: "/secteurs/notaires" },
  { source: "/sectors/law-firms", destination: "/secteurs/cabinets-avocats" },
  { source: "/sectors/hr-advisers", destination: "/secteurs/crha-rh" },
  { source: "/sectors/investment-firms", destination: "/secteurs/firmes-placement" },
  { source: "/sectors/nonprofits", destination: "/secteurs/obnl" },
  { source: "/secteurs/small-business", destination: "/secteurs/petites-entreprises" },
  { source: "/secteurs/notaries", destination: "/secteurs/notaires" },
  { source: "/secteurs/law-firms", destination: "/secteurs/cabinets-avocats" },
  { source: "/secteurs/hr-advisers", destination: "/secteurs/crha-rh" },
  { source: "/secteurs/investment-firms", destination: "/secteurs/firmes-placement" },
  { source: "/secteurs/nonprofits", destination: "/secteurs/obnl" },
  { source: "/services/training", destination: "/offre/formation" },
  { source: "/services/support", destination: "/offre/appui" },
  { source: "/services/law-25-radar", destination: "/offre/radar-loi-25" },
  { source: "/offre/training", destination: "/offre/formation" },
  { source: "/offre/support", destination: "/offre/appui" },
  { source: "/offre/law-25-radar", destination: "/offre/radar-loi-25" },
  {
    source: "/publications/ai-law-firm-client-data",
    destination: "/publications/ia-cabinet-avocats-donnees-clients",
  },
  {
    source: "/publications/what-vision-2030-asks-of-notaries",
    destination: "/publications/vision-2030-notaires",
  },
  {
    source: "/publications/law-25-missing-registers",
    destination: "/publications/loi-25-registres-manquants",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [...legacyRedirects, ...renamedRoutes, ...frSlugRenames].map((r) => ({
      ...r,
      statusCode: 301,
    }));
  },
};

export default nextConfig;
