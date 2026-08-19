/**
 * Copy for the Services page. Same voice rules as content/en.ts.
 *
 * Only the diagnostic names a figure, and only as a floor. There is no
 * separate pricing page: with three of the four services scoped to fit, one
 * would read as an empty table, so the entry price lives on the card instead.
 */

export type ServiceCard = {
  name: string;
  summary: string;
  meta: { label: string; value: string }[];
  /** Entry price. Diagnostic only — the others are quoted per mandate. */
  note?: string;
};

export const servicesHero = {
  eyebrow: "The Orée offer",
  titleTop: "What you keep,",
  titleBottom: "after the mandate",
  body:
    "A focused offer, one method. Each mandate ends with something written down that you keep and can act on, whether or not the work continues with us. The diagnostic is where every engagement starts.",
};

const serviceCards: ServiceCard[] = [
  {
    name: "Orée Diagnostic",
    summary:
      "Three days given to your organization — on site or remotely, whichever suits you best. We observe the work as it is actually done, map which tasks AI can carry and which it cannot, and check each candidate against the obligations you already hold.",
    meta: [
      { label: "Format", value: "On site or remote" },
      { label: "Duration", value: "Three days over two weeks" },
      { label: "You end with", value: "A costed action plan" },
    ],
    note: "From $1,500 (nonprofits) or $3,000 — the other services are scoped to fit.",
  },
  {
    name: "Orée Training",
    summary:
      "A custom human-AI collaboration program, built from the diagnostic's findings. Full cohort or condensed session, depending on the size of the organization.",
    meta: [
      { label: "Format", value: "Cohort or condensed session" },
      { label: "Built from", value: "The diagnostic's findings" },
      { label: "You end with", value: "A team self-sufficient on the chosen tools" },
    ],
  },
  {
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
    name: "Law 25 Radar",
    /* Nothing is surveilled: the Radar maps processes and names the factors
       at risk. The previous copy promised an ongoing watch, which the
       practice does not offer. */
    summary:
      "A process-by-process map of every AI-touched use case in your organization. It pinpoints where the privacy impact assessment, notice to affected individuals, and human review of decisions are genuine — or only apparent — and gives each process an operational risk level.",
    meta: [
      { label: "Format", value: "Process mapping" },
      { label: "Scope", value: "The processes AI touches" },
      { label: "You end with", value: "A risk level per process" },
    ],
  },
];

export const serviceList = {
  eyebrow: "In detail",
  title: "The services",
  items: serviceCards,
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
