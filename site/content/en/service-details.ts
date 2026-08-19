/**
 * One detail page per service, reached from the pills on /services and the
 * "What we do" rows on the home page.
 *
 * Structure mirrors the Framer service-details page: overview with a fact
 * table, then what you keep. Only the diagnostic also publishes its numbered
 * process — the other three are not run often enough yet to promise a sequence.
 *
 * Only the diagnostic carries a price, and it is a range confirmed after the
 * intro call rather than a public quote. No other service invents a figure.
 */

export type ServiceDetail = {
  /** Stable id shared by the fr/en pair, for cross-locale slug lookup. */
  key: string;
  slug: string;
  name: string;
  eyebrow: string;
  /** Hero lines, split the way the display heading wants them. */
  titleTop: string;
  titleBottom: string;
  lede: string;
  /** The problem this service answers, in the profession's own terms. */
  problem: string[];
  facts: { label: string; value: string }[];
  /**
   * Diagnostic only. The other three services are not run often enough yet for
   * their sequence to be published as a promise, so they omit this and the
   * detail page drops the section rather than showing a thin one.
   */
  process?: { n: string; title: string; body: string; phase: string }[];
  /**
   * Bookends around the numbered steps: the prep week that happens before day
   * one, and the paths open once the plan is delivered.
   *
   * Deliberately unnumbered. O·R·É·E is exactly four letters, so numbering
   * these 05 and 06 would break the mnemonic the numerals stand for. The
   * diagnostic steps are now the only numbered thing on the site.
   */
  processBefore?: { title: string; body: string; phase: string };
  processAfter?: {
    title: string;
    body: string;
    phase: string;
    /** The routes open after delivery. Named, not sold. */
    paths: { name: string; body: string }[];
  };
  /**
   * `phase` exists so the diagnostic's named tools can be shown the way the
   * old site's deliverables page showed them: grouped by the day that
   * produces them.
   *
   * There was a `points` field too, rendering the Orée grid's five dimensions
   * and the matrix's three axes as tags under the card. The client struck
   * both: the body above each card already names them in a sentence, and the
   * tags repeated the sentence in a heavier voice.
   */
  deliverables: { title: string; body: string; phase?: string }[];
  /** Optional lede above the deliverables grid. */
  deliverablesIntro?: string;
  /**
   * Ranges, not quotes. Both tiers are confirmed after the intro call, and the
   * note below them is what stops a range being read as a fixed price.
   */
  pricing?: {
    eyebrow: string;
    tiers: { label: string; body: string }[];
    /** What the range is contingent on. Named by the client: the figures
        assume a mandate of two to three field interviews. */
    note: string;
  };
  /**
   * Radar Loi 25 only. The tool reads a client's AI-touched processes against
   * three Law 25 obligations and puts a risk level on each, so what it is and
   * what it is not carry equal weight and get their own section rather than a
   * card in the deliverables grid.
   */
  radar?: {
    eyebrow: string;
    title: string;
    intro: string;
    is: { title: string; paragraphs: string[] };
    isNot: { title: string; paragraphs: string[] };
    closing: string;
  };
  /** Honest scope limit. Says what the service is not. */
  notThis: string;
  image: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    key: "diagnostic",
    slug: "diagnostic",
    name: "Orée Diagnostic",
    eyebrow: "Service · The starting point",
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
      { label: "Duration", value: "Three days over two weeks" },
      { label: "Who takes part", value: "You and the staff who do the work" },
      { label: "Fee", value: "Fixed, quoted before we begin" },
      { label: "You end with", value: "A costed action plan" },
      { label: "Commitment after", value: "None" },
    ],
    processBefore: {
      phase: "Before · The prep week",
      title: "The preparation",
      body:
        "Before the first day on site: a scoping call with the person carrying the mandate, the interview subjects chosen together, the confidentiality agreement signed, and the logistics settled. The three days then open with the right people in the room and nothing left to improvise.",
    },
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
    processAfter: {
      phase: "After · Once the plan is delivered",
      title: "What opens next",
      body:
        "The plan is yours, and three paths open from it. None of them is required — the diagnostic ends with no commitment either way.",
      paths: [
        {
          name: "You carry it out yourself",
          body: "The plan is written to be executed without us. Many organizations stop here, and that is a legitimate end to the mandate.",
        },
        {
          name: "Orée Training",
          body: "If the findings bear mostly on how people work, the team is trained on the tools the diagnostic selected for it.",
        },
        {
          name: "Orée Support",
          body: "If the plan needs to hold over time, monthly follow-up anchors the changes until they stand without us.",
        },
      ],
    },
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
      },
      {
        phase: "Day 2 · Evaluate",
        title: "Prioritization matrix",
        body: "Effort, value and risk scored for each lead, so quick wins are separated from the deeper projects rather than mixed in with them.",
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
      note: "This rate is provided as an estimate for an engagement involving 2 to 3 field interviews. Beyond this scope, the rate will be refined with you before the mandate is confirmed.",
    },
    notThis:
      "The diagnostic does not install anything, and it does not commit you to a second mandate. If the honest answer is that AI has little to offer your practice this year, that is what the plan will say.",
    image: "/img/sector-1.png",
  },

  /* Orée Training was on the old site as "Formation Orée" and was dropped when
     Site A was built. Reinstated here per the launch plan: it is part of the
     official offer, not an add-on to the diagnostic. */
  {
    key: "training",
    slug: "training",
    name: "Orée Training",
    eyebrow: "Service · Building team capability",
    /* The team is not learning O·R·É·E — it is learning to work the tools the
       diagnostic selected for them. */
    titleTop: "The team",
    titleBottom: "Takes up the tools",
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
      { label: "You end with", value: "A team self-sufficient on the chosen tools" },
      { label: "Fee", value: "Fixed, quoted before we begin" },
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
    key: "support",
    slug: "support",
    name: "Orée Support",
    eyebrow: "Service · The rollout",
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
    key: "law-25-radar",
    slug: "law-25-radar",
    name: "Law 25 Radar",
    eyebrow: "Service · Risk mapping",
    titleTop: "Know where",
    titleBottom: "You stand",
    /* The Radar is an AI-process risk mapping tool, not a watch. The sentence
       "Try the simplified version below" was dropped at Aminata's request: no
       tool is embedded on the page for now. */
    lede:
      "The Radar maps every process in your organization that AI touches, and finds where the privacy impact assessment, the notice to the people concerned and the human review are real — or merely symbolic. The full map is built with you during the Orée Diagnostic.",
    problem: [
      "An organization can hold an impeccable policy and work in ways that depart from it: a privacy impact assessment never revisited after a tool was added, notice to affected individuals buried in a page of terms, human review that amounts to a click on approve.",
      "The Radar reads the processes one at a time and names which ones hold, which ones only appear to, and which need correcting before a question arrives.",
    ],
    facts: [
      { label: "Format", value: "Process mapping" },
      { label: "Scope", value: "The processes AI touches" },
      { label: "What is examined", value: "Impact assessment, notice, human review" },
      { label: "Frameworks", value: "Law 25" },
      { label: "You end with", value: "A risk level for each process" },
      { label: "Validation", value: "Every high risk reviewed with legal counsel" },
    ],
    deliverables: [
      {
        title: "The process map",
        body: "Every AI-touched use case, recorded during interviews and on-site observation — what the process actually does, not what the policy says it does.",
      },
      {
        title: "A risk level for each process",
        body: "High, medium, or low. It prioritizes the conversation; it does not settle a question of compliance.",
      },
      {
        title: "A remediation path",
        body: "For each gap identified, what would have to change and in what order, carried into the diagnostic report.",
      },
    ],
    radar: {
      eyebrow: "The tool",
      title: "What it is, what it isn't",
      intro:
        "Radar Loi 25 is one of the tools used during an Orée Diagnostic. It maps, process by process, every AI-touched use case at a client, and pinpoints where three key obligations under Quebec's Law 25 are genuinely met — or only appear to be: the privacy impact assessment (s. 3.3), notice to affected individuals, and human review of decisions (s. 12.1).",
      is: {
        title: "What the Radar is",
        paragraphs: [
          "A field tool, filled out during interviews and on-site observation, mandate by mandate — not a remote audit based on written policy. It pushes toward concrete questions rather than stated intentions: how long does validation actually take, on average? Does the person responsible open the file, or just click approve? That kind of digging is what separates genuine oversight from symbolic oversight.",
          "Each mapped process gets an operational risk level — high, medium, or low — used to prioritize the conversation and structure the diagnostic report delivered to the client, with a clear remediation path for each gap identified.",
        ],
      },
      isNot: {
        title: "What the Radar isn't",
        paragraphs: [
          "It is not a legal verdict. The risk level shown is an operational estimate, not a compliance conclusion: any high- or medium-risk case is validated with a qualified legal advisor before a conclusion is shared with the client.",
          "Nor is it an automated audit tool that replaces human judgment — it equips it. The Radar directs attention and speeds up the diagnostic; it doesn't substitute for the expertise of the person conducting the interview, or for legal counsel's opinion.",
        ],
      },
      closing:
        "That is the same logic that governs the whole practice: AI drafts, the human decides.",
    },
    notThis:
      "The Radar is not legal advice and does not replace your counsel. Any high- or medium-risk case is validated with a qualified legal advisor before a conclusion reaches you; the legal judgment stays where it belongs.",
    image: "/img/sector-4.png",
  },

];

export const byService = Object.fromEntries(serviceDetails.map((s) => [s.slug, s]));

export const detailCta = {
  eyebrow: "Next step",
  title: "Book your Orée diagnostic",
};
