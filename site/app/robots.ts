import type { MetadataRoute } from "next";

const BASE_URL = "https://oreeconseil.ca";

/**
 * The site had no robots.txt at all, which left the AI crawlers to an implicit
 * default rather than a stated position. Orée's visibility case rests on being
 * quotable inside ChatGPT, Claude, Perplexity and Google's AI Overviews, so
 * those crawlers are named and allowed explicitly:
 *
 *   GPTBot           OpenAI — ChatGPT answers and browsing
 *   OAI-SearchBot    OpenAI — ChatGPT search index
 *   ClaudeBot        Anthropic — Claude's retrieval
 *   PerplexityBot    Perplexity — its answer index
 *   Google-Extended  Gemini and AI Overviews grounding (distinct from Googlebot)
 *   CCBot            Common Crawl, which many smaller models train and ground on
 *
 * Google-Extended is worth its own note: blocking it does not remove the site
 * from Google Search, and allowing it does not add it — it governs only whether
 * the pages may ground AI answers. It is listed so that choice stays deliberate
 * rather than inherited.
 *
 * The API route is disallowed because /api/contact only accepts form posts and
 * has nothing to index.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
