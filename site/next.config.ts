import type { NextConfig } from "next";

/* Redirects from the old oree-conseil.ca URLs, so the pages Google already
   indexed keep their ranking once the domain points here. Explicit 301 rather
   than `permanent: true` (which emits 308) because that is what the launch
   plan specifies; both are equivalent to search engines. */
const legacyRedirects = [
  { source: "/index.dc", destination: "/" },
  { source: "/methode.dc", destination: "/approach" },
  { source: "/a-propos.dc", destination: "/approach#bio" },
  { source: "/pourquoi-oree.dc", destination: "/#stats" },
  { source: "/offre.dc", destination: "/services" },
  { source: "/contact.dc", destination: "/contact" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map((r) => ({ ...r, statusCode: 301 }));
  },
};

export default nextConfig;
