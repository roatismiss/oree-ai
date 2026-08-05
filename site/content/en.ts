/**
 * All site copy in one place so the French (Quebec) locale can mirror it later.
 * Voice: advisor, not vendor. Specific nouns and verbs, no buzzwords, no em dashes.
 * Source of truth: the Orée Conseil web content brief (July 30, 2026).
 */

export const nav = {
  links: [
    { label: "Approach", href: "/approach" },
    { label: "Services", href: "/services" },
    { label: "Sectors", href: "/sectors" },
    { label: "Insights", href: "/insights" },
  ],
  more: "Demos",
  call: "Book a call",
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
  titleTop: "What sets this",
  titleBottom: "Practice apart",
  paragraphs: [
    "Orée is an independent AI consulting practice for Quebec SMEs and regulated professional practices. The work starts inside your office, with the way work is actually done, not with a product demonstration.",
    "Every mandate follows one method: observe the real work, uncover the frictions that slow it down, evaluate which ones actually hold back performance, and engage a plan you approve line by line.",
    "We do not sell software and we take no commission from those who do. What you get is a costed plan you can carry out with us or without us.",
  ],
  cards: [
    "Independent of every vendor",
    "Fixed fee, quoted on request",
    "Data hosted in Canada",
    "A human signs every step",
  ],
  cta: "Book a diagnostic",
};

export const services = {
  eyebrow: "The Orée offer",
  titleTop: "A focused offer,",
  titleBottom: "One method",
  leftLabel: "What I do",
  rightLabel: "Who I do it for",
  left: [
    { label: "Orée Diagnostic", href: "/services/diagnostic" },
    { label: "Orée Support", href: "/services/support" },
  ],
  right: [
    { label: "SMEs and businesses, all sectors", href: "/sectors" },
    { label: "Notaries · Vision 2030", href: "/sectors/notaries" },
    { label: "Law firms · Barreau duties", href: "/sectors/law-firms" },
    { label: "CHRPs and HR advisers", href: "/sectors/hr-advisers" },
    { label: "Investment firms", href: "/sectors/investment-firms" },
  ],
};

export const practice = {
  eyebrow: "The practice",
  titleTop: "One practitioner,",
  titleBottom: "Twenty-seven years",
  name: "Aminata Diabaté",
  role: "Founder and Principal Consultant · Orée Conseil",
  body:
    "Orée is the practice of Aminata Diabaté, who has spent twenty-seven years inside Quebec's most complex organizations. You work with her directly. No account managers, no handoffs, no junior consultant learning your file on your time.",
  backgroundLine:
    "Fonds de solidarité FTQ · Bell · Bombardier · CGI · Banque Nationale · Université de Montréal",
  backgroundNote: "Career background, not a client list.",
  cta: "Read the approach",
  // Marquee rows: what the practice covers, not a staff roster.
  rowOne: [
    { title: "Orée Diagnostic", note: "Three days, six to eight interviews, one honest picture" },
    { title: "Direct with Aminata", note: "No handoffs, no junior consultants" },
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
    "Three days inside your organization: six to eight targeted interviews, an optional group workshop, and an executive debrief. An honest picture of human-AI friction, delivered within two weeks. Fixed fee, quoted on request.",
  fields: { name: "Name", email: "Email", phone: "Phone" },
  cta: "Book a diagnostic",
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
    "One call to confirm the scope. Three days inside your organization. An honest picture of what slows the work down, whether or not you continue with us.",
  primary: "Book a diagnostic",
  secondary: "Try the demos",
};

export const insights = {
  eyebrow: "Insights",
  title: "From the practice",
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
        { label: "The approach", href: "/approach" },
        { label: "Services", href: "/services" },
        { label: "About Aminata", href: "/approach" },
      ],
    },
    {
      label: "Sectors",
      links: [
        { label: "SMEs, all sectors", href: "/sectors" },
        { label: "Notaries", href: "/sectors/notaries" },
        { label: "Law firms", href: "/sectors/law-firms" },
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
  legal: "© 2026 Orée Conseil · Montréal · Eastern Townships, Québec",
  links: ["Privacy", "Law 25 notice"],
};
