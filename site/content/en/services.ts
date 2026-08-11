/**
 * Copy for the Services page. Same voice rules as content/en.ts.
 * Deliberately no prices: Orée's fee schedule is not something to invent here.
 */

export const servicesHero = {
  eyebrow: "The Orée offer",
  titleTop: "What a mandate",
  titleBottom: "Leaves behind",
  body:
    "A deliberately small offer, one method. Each mandate ends with something written down that you keep and can act on, whether or not the work continues with us. The diagnostic is where every engagement starts.",
};

export const serviceList = {
  eyebrow: "In detail",
  title: "The services",
  items: [
    {
      n: "01",
      name: "Orée Diagnostic",
      summary:
        "Three days inside your office. We observe the work as it is actually done, map which tasks AI can carry and which it cannot, and check each candidate against the obligations you already hold.",
      meta: [
        { label: "Format", value: "On site" },
        { label: "Duration", value: "Three days" },
        { label: "You end with", value: "A costed action plan" },
      ],
    },
    {
      n: "02",
      name: "Orée Training",
      summary:
        "A custom human-AI collaboration program, built from the diagnostic's findings. Full cohort or condensed session, depending on the size of the organization.",
      meta: [
        { label: "Format", value: "Cohort or condensed session" },
        { label: "Built from", value: "The diagnostic's findings" },
        { label: "You end with", value: "A team that can run it" },
      ],
    },
    {
      n: "03",
      name: "Orée Support",
      /* Her own wording first: monthly follow-up is what defines the service in
         her own document, and it had gone missing. */
      summary:
        "Monthly follow-up over time to anchor changes into teams' actual practices, with ongoing adjustments. Tools selected, templates written, and the practice handed back to you once it holds without us.",
      meta: [
        { label: "Format", value: "Guided rollout" },
        { label: "Duration", value: "Until it holds" },
        { label: "You end with", value: "Templates and registers" },
      ],
    },
    {
      n: "04",
      name: "Law 25 Radar",
      summary:
        "A continuous watch over the obligations that move: consents, processing registers, incident records. You know where you stand before anyone has occasion to ask.",
      meta: [
        { label: "Format", value: "Ongoing watch" },
        { label: "Scope", value: "Consents, registers, incidents" },
        { label: "You end with", value: "A current position" },
      ],
    },
  ],
};

export const included = {
  title: "In every mandate",
  intro: "These are not add-ons. They are the conditions the practice works under.",
  items: [
    {
      title: "A human checkpoint on every step",
      body: "Each automation names who signs and at what moment. Nothing leaves the office unattributed.",
    },
    {
      title: "Fixed fee, quoted before the work begins",
      body: "You know the cost at the outset. No hourly drift, no scope that widens once the mandate is underway.",
    },
    {
      title: "Independent of every vendor",
      body: "No commissions, no reseller agreements, no software of our own to sell you. The recommendation is the product.",
    },
    {
      title: "Data hosted in Canada",
      body: "Demonstrations run on sample data only. Where real data would sit is settled on paper before anything is deployed.",
    },
    {
      title: "Everything delivered is yours",
      body: "The plan, the templates, the registers. You can carry the work out with us, with someone else, or alone.",
    },
  ],
};

export const servicesCta = {
  title: "Start with the diagnostic",
};
