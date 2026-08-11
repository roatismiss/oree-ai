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
   live and may have been shared, so they keep working rather than 404. */
const renamedRoutes = [
  { source: "/approach", destination: "/methode" },
  { source: "/services", destination: "/offre" },
  { source: "/services/:slug", destination: "/offre/:slug" },
  { source: "/sectors", destination: "/secteurs" },
  { source: "/sectors/:slug", destination: "/secteurs/:slug" },
  { source: "/insights", destination: "/publications" },
  { source: "/insights/:slug", destination: "/publications/:slug" },
  { source: "/risks", destination: "/risques" },
  { source: "/en/approach", destination: "/en/method" },
  { source: "/en/services", destination: "/en/offering" },
  { source: "/en/services/:slug", destination: "/en/offering/:slug" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [...legacyRedirects, ...renamedRoutes].map((r) => ({
      ...r,
      statusCode: 301,
    }));
  },
};

export default nextConfig;
