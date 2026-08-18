/**
 * "The cost of inaction", restored from oree-conseil.ca. Two pieces:
 *
 *  - `costOfInaction` is the four-statement block that sat under the Quebec
 *    figures on the old "Pourquoi Orée" page. It goes back on the homepage,
 *    directly after the same figures.
 *  - the rest recreates /risques.dc, the page that argued the point with four
 *    historical cases.
 *
 * The intro line and the case-study dates and facts are carried over as
 * written. Em dashes here are the client's own punctuation, kept verbatim
 * rather than converted to house style.
 */

export const costOfInaction = {
  eyebrow: "Why Orée",
  title: "The cost of inaction",
  items: [
    {
      title: "The widening gap",
      body: "It compounds — it doesn't level off.",
    },
    {
      title: "Catching up costs more than waiting did",
      body: "Economic history confirms this again and again.",
    },
    {
      title: "Ungoverned AI, not absent AI",
      body:
        "Without a structured approach, teams are likely already using public AI tools, with no framework or oversight.",
    },
    {
      title: "Decisions made blind",
      body: "Without firsthand exposure, intuition replaces facts.",
    },
  ],
  cta: "See examples from history",
};

export const risksHero = {
  eyebrow: "Why Orée",
  titleTop: "The cost",
  titleBottom: "Of inaction",
  intro: "The real risk isn't acting on AI too soon — it's acting too late.",
};

/** The same four statements, in the fuller form the standalone page used. */
export const risksReasons = [
  {
    title: "The widening gap",
    body: "SMEs adopt AI at half the rate of large enterprises.",
    note: "a starting gap, not a finish line.",
  },
  {
    title: "Catching up costs more than waiting did",
    body: "Economic history confirms it again and again.",
    note: "see Blockbuster vs. Netflix, below.",
  },
  {
    title: "Ungoverned AI, not absent AI",
    body:
      "The real risk for a regulated practice: informal, ungoverned use among your teams.",
  },
  {
    title: "Decisions made blind",
    body: "Without firsthand exposure, intuition replaces facts.",
  },
];

export const risksCases = {
  /* Target of the "See examples from history" button on /why-oree. Without an
     anchor it dropped the visitor at the top of /risks, in front of content
     they had just read. The anchor is per-locale because the URL is too. */
  anchor: "every-revolution",
  title: "Every technological revolution has faced this same gap",
  items: [
    {
      period: "1879-1920s",
      name: "Electricity",
      body:
        "By 1899, less than 5% of factory power came from electric motors. Real gains only arrived in the 1920s, once factories were redesigned, forty years after invention.",
    },
    {
      period: "1970-2003",
      name: "Enterprise computing",
      body:
        "In 1987, Solow's paradox: computers were everywhere except in the productivity statistics. The gain only arrived between 1995 and 2003.",
    },
    {
      period: "2007-2016",
      name: "Nokia · BlackBerry",
      body:
        "The iPhone launches in 2007. Late responses (BlackBerry Storm, the Nokia-Microsoft alliance) fail. By 2013-2016, both exit the phone business, nine years later.",
    },
    {
      period: "2000-2010",
      name: "Blockbuster vs. Netflix",
      body:
        "Netflix offers to sell itself to Blockbuster for $50M in 2000, rejected. By 2010, Blockbuster files for bankruptcy; its stock had lost 91% of its value.",
    },
  ],
  closing:
    "The problem was never the investment, it's what you do, or don't do, in the weeks that follow.",
};

export const risksCta = {
  title: "Book your Orée diagnostic",
};
