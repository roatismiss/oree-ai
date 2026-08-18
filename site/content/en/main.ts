/**
 * All site copy in one place so the French (Quebec) locale can mirror it later.
 * Voice: advisor, not vendor. Specific nouns and verbs, no buzzwords, no em dashes.
 * Source of truth: the Orée Conseil web content brief (July 30, 2026).
 */

/* The oree-conseil.ca menu, as it was: Method, About, Why Orée, Offering.
   Home is carried by the logo and Contact by the button, as on her site.
   Sectors joins them. Her old site had no such page, but since she commissioned
   a sixth sheet and fixed the display order it is a section in its own right —
   and the home page now points at the individual sheets rather than the
   overview, which left that page with no entry point outside the footer.
   Offering says what the practice does, Sectors says who for: the two columns
   of the home page, in the same order.

   Insights stays in the footer. */
export const nav = {
  links: [
    { label: "Method", href: "/approach" },
    { label: "About", href: "/about" },
    { label: "Why Orée", href: "/why" },
    { label: "Offering", href: "/services" },
    { label: "Sectors", href: "/sectors" },
  ],
  more: "Demos",
  call: "Book the Diagnostic",
};

/**
 * Page headers carried over from oree-conseil.ca. The client asked for the
 * same structure as her old site, so these are her own headings.
 */
export const aboutHero = {
  eyebrow: "The founder",
  /* One title only: the nav and the eyebrow already say "About", and the
     prefix repeated it a third time in the same view. The heading carries the
     mark, not the first name. */
  title: "Why O·R·É·E",
};

export const whyHero = {
  eyebrow: "The context",
  titleTop: "Why now —",
  titleBottom: "The Quebec context",
};

/* The oree-conseil.ca deliverables page in its original shape: grouped by day,
   with the O·R·É·E letters and the tools named as tags, then what continues
   beyond the three days. */
export const deliverablesPage = {
  eyebrow: "What you keep",
  titleTop: "Deliverables of the",
  titleBottom: "Orée Diagnostic",
  intro: "Concrete deliverables, not hollow reports.",
  days: [
    {
      day: "Day 1",
      letters: "O·R",
      title: "Observe · Uncover",
      body: "Field interviews and mapping of real work flows.",
      tools: ["Structured interview guide", "The Orée grid"],
      note: "Three interviewee profiles, calibrated questions with intent and signals to watch for · analysis across five dimensions — cognitive, process, cultural, technical, governance.",
    },
    {
      day: "Day 2",
      letters: "É",
      title: "Evaluate",
      body: "Analysis of the friction uncovered and prioritization using the Orée grid.",
      tools: ["Prioritization matrix"],
      note: "Effort / value / risk prioritization. Each lead is scored to separate quick wins from deeper projects.",
    },
    {
      day: "Day 3",
      letters: "E",
      title: "Engage",
      body: "Executive debrief: findings, priorities, action recommendations.",
      tools: ["Debrief report"],
      note: "A picture of the findings, three argued action priorities, a plan with timeline — delivered and editable.",
    },
  ],
  ongoingLabel: "Ongoing — beyond the three days",
  ongoing: [
    {
      title: "Diagnostic map",
      body: "A visual organizational summary, understandable at a glance by leadership.",
    },
    {
      title: "Progress tracker",
      body: "Custom indicators to measure progress over time, without depending on the consultant.",
    },
    {
      title: "Guided implementation",
      body: "Selection of AI tools suited to the needs identified, with direct support carrying out the work — depending on what the client wants to delegate or keep in-house.",
    },
  ],
  closing: "Always time-bounded, never meant to settle in indefinitely.",
  cta: "Book the Orée Diagnostic",
  link: "See the detailed deliverables",
};

/** Page titles and descriptions, one entry per route. */
export const meta = {
  site: {
    title: "Orée Conseil · AI consulting for Quebec SMEs and regulated practices",
    description:
      "Orée helps Quebec SMEs and regulated professional practices take ownership of AI by first diagnosing what actually slows the work down. L'IA rédige. L'humain décide.",
  },
  approach: {
    title: "The approach · Orée",
    description:
      "The O·R·É·E method: observe, uncover, evaluate, engage. Three days given to your organization, on site or remotely, ending in a costed plan you approve line by line.",
  },
  about: {
    title: "About · Orée Conseil",
    description:
      "Twenty-seven years inside complex organizations. Aminata Diabaté's background, the frameworks she has applied, and why the practice is called Orée.",
  },
  why: {
    title: "Why Orée · The Quebec context",
    description:
      "The ISQ and CPQ figures on AI adoption in Quebec, and what inaction costs once the gap starts widening.",
  },
  deliverables: {
    title: "Deliverables of the Orée Diagnostic",
    description:
      "Interview guide, the Orée grid and its five dimensions, prioritization matrix, debrief report, diagnostic map and progress tracker. Concrete deliverables, not hollow reports.",
  },
  services: {
    title: "Services · Orée",
    description:
      "Orée Diagnostic, Orée Training, Orée Support and the Law 25 Radar. A focused offer, one method, and a costed plan you keep.",
  },
  sectors: {
    title: "Sectors · Orée",
    description:
      "AI governance for small businesses, nonprofits, notaries, law firms, CHRPs and investment firms in Quebec. Each sector's obligations, and where the method starts.",
  },
  insights: {
    title: "Insights · Orée",
    description:
      "Sourced articles on AI and the obligations of regulated practice in Quebec: Barreau guidance, Law 25 registers, and the notariat's digital shift.",
  },
  risks: {
    title: "The cost of inaction · Orée Conseil",
    description:
      "The real risk isn't acting on AI too soon, it's acting too late. Four moments in economic history where the gap between adopting a technology and reorganizing around it decided who survived.",
  },
  contact: {
    title: "Contact · Orée Conseil",
    description:
      "Book an Orée diagnostic. Aminata Diabaté, Founder and Principal Consultant. Montréal · Eastern Townships, Québec.",
  },
};

/**
 * Interface chrome: section headings, back links and accessible labels that
 * were previously hardcoded in the components. They belong here so the French
 * locale is not left with English buttons.
 */
export const ui = {
  readDetail: "Read the detail",
  allServices: "All services",
  allSectors: "All sectors",
  situation: "The situation",
  whatItAnswers: "What it answers",
  whereMandateStarts: "Where a mandate starts",
  startingPoints: "Starting points",
  whatChanges: "What changes",
  howItRuns: "How it runs",
  theProcess: "The process",
  whatYouKeep: "What you keep",
  sources: "Sources",
  home: "Orée Conseil — back to home",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  previousQuestion: "Previous question",
  nextQuestion: "Next question",
  portraitAlt: "Aminata Diabaté, Founder and Principal Consultant of Orée Conseil",
};

export const hero = {
  eyebrow: "AI consulting · Quebec SMEs and regulated practices",
  titleTop: "Artificial intelligence, built around",
  titleMid: "how your team actually works.",
  titleBottom: "Not the other way around.",
  body:
    "Orée helps Quebec SMEs and regulated professional practices take ownership of artificial intelligence. Not by selling tools, but by first diagnosing what is actually slowing the work down. A four-step method, a bounded mandate, and recommendations you can act on the following week.",
  cta: "Book a diagnostic",
  ctaSecondary: "Try the demos",
  refrain: "« L'IA rédige. L'humain décide. »",
  refrainGloss: "AI drafts. The human decides.",
};

/**
 * The O·R·É·E mnemonic, restored to the homepage from oree-conseil.ca where it
 * sat directly under the hero. The four verbs carry the brand, so they stay
 * prominent here and the long-form treatment lives on /approach.
 */
export const methodGlance = {
  mnemonic: "O·R·É·E",
  title: "The method, at a glance",
  steps: [
    { letter: "O", fr: "Observer", en: "Observe", body: "Immersion in the real work." },
    { letter: "R", fr: "Relever", en: "Uncover", body: "Document friction, without filters." },
    { letter: "É", fr: "Évaluer", en: "Evaluate", body: "Prioritize what really holds back." },
    { letter: "E", fr: "Engager", en: "Engage", body: "Concrete, actionable recommendations." },
  ],
  cta: "Learn more about the method",
};

/** Why now: the Quebec context. Sourced figures only, per the client brief. */
export const stats = {
  eyebrow: "Why now · The Quebec context",
  titleTop: "Adopted faster than",
  titleBottom: "The work is rethought",
  items: [
    {
      figure: "12.7%",
      caption:
        "of Quebec businesses already use AI in their operations. Twice as many as a year ago.",
      source: "ISQ, Q2 2025",
    },
    {
      figure: "73%",
      caption:
        "cannot clearly name where AI could help them, before they even think about a tool.",
      source: "CPQ, Dec. 2024",
    },
    {
      figure: "1 in 3",
      caption:
        "of businesses that adopted AI had to rebuild their workflows after the fact.",
      source: "ISQ, 2025",
    },
    {
      figure: "2×",
      caption:
        "large enterprises adopt AI at twice the rate of the smallest, 26.1% versus 12.2%. A starting gap, not a finish line.",
      source: "ISQ, Q2 2025",
    },
  ],
  note: "The Quebec paradox: AI is being adopted faster than the work around it is being rethought.",
};

export const why = {
  eyebrow: "Why Orée",
  titleTop: "Why now —",
  titleBottom: "The Quebec context",
  paragraphs: [
    "Orée is an independent AI consulting practice for Quebec SMEs and regulated professional practices. The work starts with you, on site or remotely, with the way work is actually done, not with a product demonstration.",
    "Every mandate follows one method: observe the real work, uncover the frictions that slow it down, evaluate which ones actually hold back performance, and engage a plan you approve line by line.",
    "We do not sell software and we take no commission from those who do. What you get is a costed plan you can carry out with us or without us.",
  ],
  cards: [
    "Independent of every vendor",
    "Fixed fee, quoted on request",
    "Data hosted in Canada",
    "A human signs every step",
  ],
  cta: "See the Quebec context",
};

export const services = {
  eyebrow: "The offering",
  titleTop: "A focused offering,",
  titleBottom: "one method",
  cta: "See the full offering",
  leftLabel: "What I do",
  rightLabel: "Who I do it for",
  /* Verbatim from oree-conseil.ca's "Who it's for". "Facts, not impressions"
     is brand wording and is not to be paraphrased. */
  audience: [
    "SMEs and businesses, across all sectors",
    "Regulated professions and organizations",
    "Leadership teams who want facts, not impressions",
  ],
  left: [
    { label: "Orée Diagnostic", href: "/services/diagnostic" },
    { label: "Orée Training", href: "/services/training" },
    { label: "Orée Support", href: "/services/support" },
    { label: "Law 25 Radar", href: "/services/law-25-radar" },
  ],
  right: [
    { label: "Small businesses in Quebec", href: "/sectors/small-business" },
    { label: "Nonprofits · Funder duties", href: "/sectors/nonprofits" },
    { label: "Notaries · Vision 2030", href: "/sectors/notaries" },
    { label: "Law firms · Barreau duties", href: "/sectors/law-firms" },
    { label: "CHRPs and HR advisers", href: "/sectors/hr-advisers" },
    { label: "Investment firms", href: "/sectors/investment-firms" },
  ],
};

export const practice = {
  eyebrow: "About",
  /* "One practitioner, / Twenty-seven years" read as her age. The heading now
     names what the twenty-seven years count: the practice. */
  titleTop: "Twenty-seven years",
  titleBottom: "of practice",
  name: "Aminata Diabaté",
  role: "Founder and Principal Consultant · Orée Conseil",
  /* No employer is named, at the client's request: the sectors carry the
     credibility, and nothing can be misread as a client list. */
  body:
    "Orée is the practice of Aminata Diabaté — twenty-seven years of methodology, process optimization, change management and regulatory compliance, at the heart of financial services, telecommunications, industry and Quebec's public sector. You work with her directly. No account managers, no handoffs, no junior consultant learning your file on your time.",
  /* Added on the home page on request — not part of the client's document.
     Same paragraphs as story.bio[0..1] on /about; shown only here, not on
     /about, where Story.tsx already carries this text right below. */
  extendedBio: [
    "Twenty-seven years inside complex organizations taught me to recognize large-scale change in any form it takes. Inside a major financial institution, I lived AI adoption from the inside — its risks, its resistance, its blind spots — led a records-management mandate for the compliance department in the thick of Law 25 obligations, and ran a supplier-contract optimization project using Lean. At a large industrial player, I spent four years as a change-management consultant, applying the Prosci/ADKAR methodology on a major mandate. In telecommunications, in consulting services, and in Quebec's public and para-public sector, it was other transformations that shaped me.",
    "This practice is grounded in a degree in economics and political science from Université de Montréal, and in established frameworks applied in the field: the ADKAR change-management methodology, a solid Lean Six Sigma foundation, and two professional certifications — Business Relationship Management Professional (BRMP) and Management of Portfolio (MoP), Foundation and Practitioner. It is that double experience, lived in the field and structured by method, that shaped the design of O·R·É·E.",
  ],
  cta: "About Aminata",
  // Marquee rows: what the practice covers, not a staff roster.
  rowOne: [
    { title: "Orée Diagnostic", note: "Three days, six to eight interviews, one honest picture" },
    { title: "Direct with Aminata", note: "No handoffs, no junior consultants" },
    { title: "Orée Training", note: "Built from your own diagnostic findings" },
    { title: "Orée Support", note: "Monthly follow-up until it holds without us" },
    { title: "Law 25, inside every mandate", note: "Consents, registers, obligations checked" },
  ],
  rowTwo: [
    { title: "The document librarian", note: "Every answer cites its clause" },
    { title: "The drafting assistant", note: "Facts in, first draft out, you sign" },
    { title: "The triage clerk", note: "Sorts, and escalates when unsure" },
    { title: "Sample data only", note: "Nothing you type is ever stored" },
  ],
};

export const ctaBand = {
  titleTop: "Your frictions are not waiting.",
  titleBottom: "Neither should your plan.",
  body:
    "Three days given to your organization — on site or remotely, whichever suits you best. Six to eight targeted interviews, an optional group workshop, and an executive debrief. An honest picture of human-AI friction, delivered within two weeks. Fixed fee, quoted on request.",
  cta: "Book a diagnostic",
};

/**
 * The enquiry form. "Organization" is back because Orée's answer depends on
 * the kind of practice asking, and the confirmation wording is the old site's.
 *
 * Submitting posts to /api/contact, which relays the message to Aminata's
 * inbox. If the relay fails, the form offers the visitor's own mail client
 * instead. See components/ContactForm.tsx.
 */
export const contactForm = {
  eyebrow: "Send a message",
  fields: {
    name: "Name",
    organization: "Organization",
    email: "Email",
    phone: "Phone",
    message: "Message",
  },
  optional: "optional",
  submit: "Send",
  sending: "Sending…",
  subject: "Orée Diagnostic",
  confirmation: {
    title: "Thank you — your message has been sent. We'll be in touch shortly.",
    body:
      "It went straight to Aminata's inbox. You will hear back within one business day, at the address you just gave us.",
    again: "Send another message",
  },
  failure: {
    title: "The message didn't go through.",
    body:
      "Nothing is lost — what you wrote is still here. Open it in your own mail application, or try again in a moment.",
    mailto: "Open in my mail app",
    retry: "Try again",
  },
};

/**
 * Not testimonials. Orée is pre-launch, so inventing named clients and
 * photographs would be fabricated social proof. These are the real objections
 * each audience raises, attributed to the audience rather than a person.
 */
export const questions = {
  eyebrow: "What you are asking",
  titleTop: "The questions",
  titleBottom: "Behind the hesitation",
  items: [
    {
      who: "SMEs",
      context: "All sectors",
      quote:
        "\"We know AI should help us somewhere. We just cannot say where, and we cannot afford a false start.\"",
    },
    {
      who: "Notaries",
      context: "Vision 2030",
      quote:
        "\"Can I put a client file anywhere near an AI tool without breaching my professional secrecy obligations?\"",
    },
    {
      who: "Law firms",
      context: "Barreau duties",
      quote:
        "\"If the draft is wrong and it goes out under my signature, where does the liability actually land?\"",
    },
    {
      who: "CHRPs",
      context: "Order guidelines",
      quote:
        "\"My team is already using these tools quietly. How do I govern that instead of pretending it is not happening?\"",
    },
    {
      who: "Investment firms",
      context: "Sensitive data",
      quote:
        "\"Where does the data physically sit, who can read it, and what can I show an examiner when they ask?\"",
    },
  ],
};

/** The FAQ mandated by the client brief, operational friction first. */
export const faq: {
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  items: {
    question: string;
    answer: string;
    examples?: { title: string; note: string }[];
  }[];
} = {
  eyebrow: "Frequently asked",
  titleTop: "Honest answers,",
  titleBottom: "Before any mandate",
  items: [
    {
      question: "What is an operational friction?",
      answer:
        "A point in everyday work where things slow down, get duplicated, or fall through the cracks. Not because people are doing a bad job, but because the process around them was never redesigned for today's volume or pace. It becomes invisible over time: people learn to live with it, work around it, and stop naming it.",
      examples: [
        {
          title: "Double data entry",
          note: "The same information retyped by hand across systems that do not talk to each other.",
        },
        {
          title: "Approvals lost in email",
          note: "Documents circulating for sign-off with no clear step and no tracking.",
        },
        {
          title: "Which version is the real one",
          note: "Multiple copies of the same document in circulation, with no certainty which one is current.",
        },
      ],
    },
    {
      question: "Why a diagnostic before acting?",
      answer:
        "Because a blind investment costs more than an honest, timely diagnostic.",
    },
    {
      question: "Why only three days?",
      answer:
        "A bounded mandate forces prioritization. Three well-chosen priorities beat a thirty-page audit.",
    },
    {
      question: "Why an independent consultant?",
      answer:
        "No tools to sell: every recommendation comes from the ground, never from a vendor relationship.",
    },
    /* Baseline definitions restored from the old site's FAQ. The figures on
       this site are cited to the ISQ and the CPQ, so a reader who does not
       already know those acronyms should not have to look them up. */
    {
      question: "What does \"adoption rate\" mean?",
      answer:
        "The share of businesses already using artificial intelligence in their day-to-day operations, regardless of how extensively, from occasional use of a tool to full integration.",
    },
    {
      question: "What are the ISQ and the CPQ?",
      answer:
        "The ISQ (Institut de la statistique du Québec) is Quebec's official government agency for economic and social statistics. The CPQ (Conseil du patronat du Québec) is the province's leading employers' association. Both publish regular studies on AI adoption in business, cited throughout this site.",
    },
    {
      question: "What is meant by SME?",
      answer:
        "An SME (small or medium-sized enterprise) generally has fewer than 500 employees, the vast majority of organizations in Quebec. This is Orée's primary audience, especially smaller structures with no dedicated team or AI experimentation budget.",
    },
  ],
};

/**
 * Replaces the template's award badges. Those were real German legal awards
 * and would read as credentials Orée does not hold. These are the frameworks
 * the practice works against, stated as scope rather than endorsement.
 */
export const frameworks = {
  eyebrow: "Scope of practice",
  titleTop: "Built around",
  titleBottom: "Your duties",
  body:
    "Orée does not certify or accredit anyone. The practice is built around the obligations you already carry, so that what you adopt survives a review by the people entitled to conduct one.",
  items: [
    "Law 25",
    "Vision 2030",
    "Barreau du Québec duties",
    "Chambre des notaires",
    "CHRP ethics, 2027",
    "PIPEDA",
    "Canadian data residency",
    "Professional secrecy",
  ],
};

export const cta = {
  title: "Book your Orée diagnostic",
  body:
    "One call to confirm the scope. Three days given to your organization — on site or remotely, whichever suits you best. An honest picture of what slows the work down, whether or not you continue with us.",
  primary: "Book a diagnostic",
  secondary: "Try the demos",
};

export const insights = {
  eyebrow: "Insights",
  title: "Our insights",
  cta: "Read all articles",
};

export const contact = {
  eyebrow: "Contact",
  title: "Book your Orée diagnostic",
  body:
    "One conversation to confirm the scope, no commitment attached. Write to Aminata directly and you will hear back within one business day.",
  emailLabel: "Write to",
  email: "aminata.diabate@oreeconseil.ca",
  locationLabel: "Based in",
  location: "Montréal · Eastern Townships, Québec",
  languagesLabel: "Working languages",
  languages: "French and English",
  cta: "Write to Aminata",
};

export const footer = {
  columns: [
    {
      label: "Practice",
      links: [
        { label: "The method", href: "/approach" },
        { label: "The deliverables", href: "/deliverables" },
        { label: "The offering", href: "/services" },
        { label: "About Aminata", href: "/about" },
      ],
    },
    {
      label: "Sectors",
      links: [
        { label: "Why Orée", href: "/why" },
        { label: "The cost of inaction", href: "/risks" },
        { label: "All sectors", href: "/sectors" },
        { label: "Insights", href: "/insights" },
      ],
    },
    {
      label: "Say hello",
      links: [
        {
          label: "aminata.diabate@oreeconseil.ca",
          href: "mailto:aminata.diabate@oreeconseil.ca",
        },
        { label: "Montréal · Eastern Townships, Québec", href: "/contact" },
        { label: "Bilingual EN · FR", href: "/contact" },
      ],
    },
  ],
  wordmark: "Orée Conseil",
  refrain: "« L'IA rédige. L'humain décide. »",
  refrainGloss: "AI drafts. The human decides.",
  /* The practice's only social presence. Named rather than left as a bare
     glyph, so the link says where it goes before it is clicked. */
  social: {
    label: "Follow the practice",
    linkedin: {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aminata2023/",
      title: "Aminata Diabaté on LinkedIn",
    },
  },
  legal: "© 2026 Orée Conseil · Montréal · Eastern Townships, Québec",
  links: ["Privacy", "Law 25 notice"],
};
