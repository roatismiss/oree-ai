/**
 * One detail page per service, reached from the pills on /services and the
 * "What we do" rows on the home page.
 *
 * Structure mirrors the Framer service-details page: overview with a fact
 * table, then a numbered process with phase labels, then what you keep.
 *
 * Only the diagnostic carries a price, and it is a range confirmed after the
 * intro call rather than a public quote. No other service invents a figure.
 */

export type ServiceDetail = {
  slug: string;
  n: string;
  name: string;
  eyebrow: string;
  /** Hero lines, split the way the display heading wants them. */
  titleTop: string;
  titleBottom: string;
  lede: string;
  /** The problem this service answers, in the profession's own terms. */
  problem: string[];
  facts: { label: string; value: string }[];
  process: { n: string; title: string; body: string; phase: string }[];
  /**
   * `phase` and `points` exist so the diagnostic's named tools can be shown
   * the way the old site's deliverables page showed them: grouped by the day
   * that produces them, with the Orée grid's five dimensions spelled out.
   */
  deliverables: { title: string; body: string; phase?: string; points?: string[] }[];
  /** Optional lede above the deliverables grid. */
  deliverablesIntro?: string;
  /**
   * Ranges, not quotes. Both tiers are confirmed after the intro call, and the
   * note below them is what stops a range being read as a fixed price.
   */
  pricing?: {
    eyebrow: string;
    tiers: { label: string; body: string }[];
  };
  /** Honest scope limit. Says what the service is not. */
  notThis: string;
  image: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "diagnostic",
    n: "01",
    name: "Orée Diagnostic",
    eyebrow: "Service 01 · The starting point",
    titleTop: "Three days,",
    titleBottom: "with you",
    lede:
      "The diagnostic is where every mandate begins. Three days given to your organization — on site or remotely, whichever suits you best — watching the work as it is actually done, and ending with a costed plan you approve line by line.",
    problem: [
      "Most AI advice arrives as a product demonstration: here is the tool, here is what it does, sign here. That order is backwards for a regulated practice. The tool cannot be assessed until someone has seen how your files actually move, who touches them, and which obligations attach at each step.",
      "So the diagnostic starts with observation rather than software. We sit with the work, including the parts nobody writes down: the workarounds, the double-checking, the tasks that quietly take a whole afternoon.",
      "The optional group workshop is run with the LEGO® Serious Play® method, a facilitation approach known for surfacing the frictions that interviews alone do not reveal.",
      "Whether the session runs on site or remotely, the facilitation draws on a certified qualification in virtual meeting facilitation.",
    ],
    facts: [
      { label: "Format", value: "On site or remote" },
      { label: "Duration", value: "Three consecutive days" },
      { label: "Who takes part", value: "You and the staff who do the work" },
      { label: "Fee", value: "Fixed, quoted before we begin" },
      { label: "You end with", value: "A costed action plan" },
      { label: "Commitment after", value: "None" },
    ],
    process: [
      {
        n: "01",
        title: "Observer",
        body:
          "We watch the work as it is done, not as the procedure manual describes it. Dossiers, handoffs, the steps that exist only in someone's head.",
        phase: "Day 1",
      },
      {
        n: "02",
        title: "Relever",
        body:
          "We map which tasks AI could genuinely carry and which it must not touch. The second list is the one that matters, and it is the one vendors skip.",
        phase: "Day 1 to 2",
      },
      {
        n: "03",
        title: "Évaluer",
        body:
          "Each candidate is checked against the obligations you hold: professional secrecy, Law 25, your order's guidance, and where the data would physically sit.",
        phase: "Day 2 to 3",
      },
      {
        n: "04",
        title: "Engager",
        body:
          "We cost the plan and you approve it line by line. Every step names its human checkpoint, so you know who signs and at what moment.",
        phase: "Day 3",
      },
    ],
    /* The named tools of the method, restored from the old site's deliverables
       page. Each one is called by its own name here: "the Orée grid" and "the
       prioritization matrix" are the practice's own instruments, and naming
       them is the point. */
    deliverablesIntro: "Concrete deliverables, not hollow reports.",
    deliverables: [
      {
        phase: "Day 1 · Observe and uncover",
        title: "Structured interview guide",
        body: "Three interviewee profiles, with calibrated questions carrying their intent and the signals to watch for.",
      },
      {
        phase: "Day 1 · Observe and uncover",
        title: "The Orée grid",
        body: "The practice's own instrument. Every friction is read across five dimensions, so nothing is filed as a tooling problem when it is a governance one.",
        points: ["Cognitive", "Process", "Cultural", "Technical", "Governance"],
      },
      {
        phase: "Day 2 · Evaluate",
        title: "Prioritization matrix",
        body: "Effort, value and risk scored for each lead, so quick wins are separated from the deeper projects rather than mixed in with them.",
        points: ["Effort", "Value", "Risk"],
      },
      {
        phase: "Day 3 · Engage",
        title: "The costed action plan",
        body: "The debrief report: a picture of the findings, three argued action priorities, and a plan with a timeline. Delivered editable, and approved by you line by line.",
      },
      {
        phase: "Day 3 · Engage",
        title: "The task map",
        body: "What can be delegated to a machine, what cannot, and the reasoning for each. Useful even if you adopt nothing.",
      },
      {
        phase: "Day 3 · Engage",
        title: "The obligations register",
        body: "Which rules apply to which task, written down in the form you would show a reviewer.",
      },
      {
        phase: "Ongoing · Beyond the three days",
        title: "Diagnostic map",
        body: "A visual organizational summary, readable at a glance by leadership.",
      },
      {
        phase: "Ongoing · Beyond the three days",
        title: "Progress tracker",
        body: "Custom indicators to measure progress over time, without depending on the consultant.",
      },
    ],
    pricing: {
      eyebrow: "Fees",
      tiers: [
        {
          label: "SMEs and regulated professions",
          body: "The diagnostic runs between $3,000 and $6,000, depending on the size of your organization — confirmed after the intro call.",
        },
        {
          label: "Nonprofits",
          body: "A reduced rate applies to nonprofits, between $1,500 and $3,000, because these are settings Orée deliberately chooses to invest in.",
        },
      ],
    },
    notThis:
      "The diagnostic does not install anything, and it does not commit you to a second mandate. If the honest answer is that AI has little to offer your practice this year, that is what the plan will say.",
    image: "/img/sector-1.png",
  },

  /* Orée Training was on the old site as "Formation Orée" and was dropped when
     Site A was built. Reinstated here per the launch plan: it is part of the
     official offer, not an add-on to the diagnostic. */
  {
    slug: "training",
    n: "02",
    name: "Orée Training",
    eyebrow: "Service 02 · Building team capability",
    titleTop: "The team",
    titleBottom: "Learns the method",
    lede:
      "A custom human-AI collaboration program, built from the diagnostic's findings. Full cohort or condensed session, depending on the size of the organization.",
    problem: [
      "Generic AI training teaches a tool. A week later the tool has changed, and nobody can say which parts of their own work it was supposed to touch. The session was interesting and nothing moved.",
      "Orée Training starts from the frictions the diagnostic already named at your place. The examples are your files, the checkpoints are the ones your obligations require, and people leave knowing which of their own tasks they are allowed to hand over and which they are not.",
      "The design of Orée Training also draws on a higher-education teaching certification earned at Harvard.",
    ],
    facts: [
      { label: "Format", value: "Cohort or condensed session" },
      { label: "Built from", value: "Your diagnostic findings" },
      { label: "Who takes part", value: "The people who do the work" },
      { label: "Materials", value: "Written on your own cases" },
      { label: "You end with", value: "A team that can run the method" },
      { label: "Fee", value: "Fixed, quoted before we begin" },
    ],
    process: [
      {
        n: "01",
        title: "Scoping",
        body:
          "We choose which findings the program covers, and who needs to be in the room. Not everyone needs the same session.",
        phase: "Before",
      },
      {
        n: "02",
        title: "Building the material",
        body:
          "Exercises are written on your own cases, with the obligations that apply to them, so nothing has to be translated afterwards.",
        phase: "Before",
      },
      {
        n: "03",
        title: "The session",
        body:
          "Full cohort or condensed, on site or remote. People work their real tasks, and see where the human checkpoint sits in each one.",
        phase: "On the day",
      },
      {
        n: "04",
        title: "What follows",
        body:
          "The materials stay with you, along with a short list of what the team asked for and could not yet be answered.",
        phase: "After",
      },
    ],
    deliverables: [
      {
        title: "The program materials",
        body: "Written on your cases, yours to reuse for new staff without coming back to us.",
      },
      {
        title: "Task-level guidance",
        body: "Which everyday tasks the team may hand to a machine, which it may not, and where the sign-off sits.",
      },
      {
        title: "The open questions",
        body: "What the team raised that has no answer yet. Usually the most useful page in the pack.",
      },
    ],
    notThis:
      "Training is not a certification and does not accredit anyone. It also does not stand in for the diagnostic: without one, the session has no findings to be built from.",
    image: "/img/sector-3.png",
  },

  {
    slug: "support",
    n: "03",
    name: "Orée Support",
    eyebrow: "Service 03 · The rollout",
    titleTop: "Until it holds",
    titleBottom: "Without us",
    lede:
      "A plan on paper is not a change in practice. Support is the guided rollout: tools chosen, templates written, results watched, and the work handed back to you.",
    problem: [
      "The gap between an approved plan and a working practice is where most adoption fails. The template never quite gets written, the checkpoint is skipped once under deadline pressure, and within a quarter the office is back to where it started.",
      "Support closes that gap deliberately, and it is designed to end. The measure of success is that you no longer need the mandate.",
    ],
    facts: [
      { label: "Format", value: "Guided rollout" },
      { label: "Starts from", value: "A plan you already approved" },
      { label: "Cadence", value: "Agreed at the outset" },
      { label: "Duration", value: "Until the practice holds alone" },
      { label: "You end with", value: "Templates, registers, and the handover" },
      { label: "Exit", value: "Planned from day one" },
    ],
    process: [
      {
        n: "01",
        title: "Selection",
        body:
          "We choose the specific tools against the plan's requirements, including where the data sits and what the supplier's terms actually permit.",
        phase: "Stage 1",
      },
      {
        n: "02",
        title: "Templates and checkpoints",
        body:
          "The prompts, forms and sign-off steps are written for your matters, so the human step is built into the process rather than remembered.",
        phase: "Stage 2",
      },
      {
        n: "03",
        title: "Running it live",
        body:
          "The first real files go through with us present. What breaks here is more useful than anything a pilot on sample data would have shown.",
        phase: "Stage 3",
      },
      {
        n: "04",
        title: "Handover",
        body:
          "Documentation, a named internal owner, and a review date. We leave when the practice runs without us.",
        phase: "Stage 4",
      },
    ],
    deliverables: [
      {
        title: "Working templates",
        body: "The actual prompts and forms your staff use, tested on real matters and written down.",
      },
      {
        title: "The registers",
        body: "Records of what was deployed, what it touches, and who approved it. The paperwork a reviewer would ask for.",
      },
      {
        title: "The handover pack",
        body: "Enough documentation for a named person inside the practice to own it after we leave.",
      },
    ],
    notThis:
      "Support is not a retainer that quietly renews. It has a defined end, and if the rollout is going badly we will say so and stop rather than extend it.",
    image: "/img/sector-2.png",
  },

  {
    slug: "law-25-radar",
    n: "04",
    name: "Law 25 Radar",
    eyebrow: "Service 04 · The watch",
    titleTop: "Know where",
    titleBottom: "You stand",
    lede:
      "Obligations move. The Radar is a continuous watch over the ones that apply to you, so your position is current before anyone has occasion to ask.",
    problem: [
      "Consents, processing registers and incident records are the first things requested in a review and usually the last things prepared. They are not difficult, but they drift: a new tool is added, a supplier changes its terms, a retention period lapses, and the register no longer matches the practice.",
      "The Radar keeps the gap from opening. It is deliberately unglamorous work, and it is the work that determines what happens when a question arrives.",
    ],
    facts: [
      { label: "Format", value: "Ongoing watch" },
      { label: "Scope", value: "Consents, registers, incidents" },
      { label: "Frameworks", value: "Law 25 and PIPEDA" },
      { label: "Reporting", value: "A current position, on request" },
      { label: "You end with", value: "Records that match reality" },
      { label: "Cancellation", value: "Any time, records stay yours" },
    ],
    process: [
      {
        n: "01",
        title: "The baseline",
        body:
          "We establish what you hold today: which personal information, collected on what basis, kept where, and for how long.",
        phase: "Setup",
      },
      {
        n: "02",
        title: "The registers",
        body:
          "Processing, consent and incident registers are put into a form that matches the practice and that a reviewer can read.",
        phase: "Setup",
      },
      {
        n: "03",
        title: "The watch",
        body:
          "Changes are tracked as they happen: new tools, changed supplier terms, retention dates falling due, guidance that shifts.",
        phase: "Ongoing",
      },
      {
        n: "04",
        title: "The position",
        body:
          "At any point you can ask where you stand and get an answer in writing, rather than beginning an internal search.",
        phase: "On request",
      },
    ],
    deliverables: [
      {
        title: "Current registers",
        body: "Processing, consent and incident records kept in step with what the practice actually does.",
      },
      {
        title: "A change log",
        body: "What moved, when, and what was done about it. The narrative a reviewer will want alongside the registers.",
      },
      {
        title: "A written position",
        body: "Where you stand against your obligations, available on request rather than assembled under pressure.",
      },
    ],
    notThis:
      "The Radar is not legal advice and does not replace your counsel. It keeps your records current and flags what has moved; the legal judgment stays where it belongs.",
    image: "/img/sector-4.png",
  },

];

export const byService = Object.fromEntries(serviceDetails.map((s) => [s.slug, s]));

export const detailCta = {
  eyebrow: "Next step",
  title: "Book your Orée diagnostic",
};
