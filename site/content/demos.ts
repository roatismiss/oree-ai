/**
 * Copy and sample data for the Demos page. Same voice rules as content/en.ts.
 * Every demo runs on this fictitious dossier only; the engines are scripted
 * (deterministic keyword matching) so the page works without an API key. The
 * component structure is API-ready: swap the local engine for a route call
 * when a key exists, the UI does not change.
 */

export const demosHero = {
  eyebrow: "Live demonstrations · Sample data only",
  titleTop: "Proof,",
  titleBottom: "Not promise.",
  body:
    "Three automations you can test right here in the browser. Each one runs on a fictitious dossier, each one shows where its answer came from, and each one stops where your judgment begins. Nothing you type is stored.",
};

/* ---------- Demo 01 · The document librarian ---------- */

export type Clause = {
  id: string;
  no: string;
  heading: string;
  text: string;
};

export type LibrarianAnswer = {
  keywords: string[];
  answer: string;
  cite: string | null;
  clauseId: string | null;
};

export const librarian = {
  eyebrow: "Demo 01 · The document librarian",
  title: "Every answer cites its clause",
  intro:
    "Ask this deed of sale a question, or pick one below. The librarian answers only from the document, and every answer points to the clause it came from. When the deed is silent, it says so instead of guessing.",
  docLabel: "Sample document · Fictitious",
  docTitle: "Deed of Sale, Immovable Property",
  docSub: "Prepared for demonstration · District of Montréal",
  chatIntro:
    "Good morning. I answer questions only from the deed on the left, and I always show you the clause my answer comes from. Try me.",
  inputPlaceholder: "Ask about this deed",
  send: "Ask",
  note: "Sample deed only. Nothing you type is stored.",
  clauses: [
    {
      id: "c1",
      no: "1",
      heading: "Parties",
      text: "BETWEEN: Marie-Claude Tremblay, residing at 4520 rue Saint-Denis, Montréal (the Vendor), AND: Karim Belkacem, residing at 87 avenue du Parc, Laval (the Purchaser).",
    },
    {
      id: "c2",
      no: "2",
      heading: "Object",
      text: "The Vendor sells to the Purchaser the immovable located at 1234 boulevard Gouin Est, Montréal, lot 2 345 678 of the Cadastre du Québec.",
    },
    {
      id: "c3",
      no: "3",
      heading: "Price",
      text: "The sale is made for the price of FOUR HUNDRED EIGHTY-FIVE THOUSAND DOLLARS ($485,000), which the Vendor acknowledges having received from the Purchaser.",
    },
    {
      id: "c4",
      no: "4",
      heading: "Occupancy",
      text: "The Purchaser becomes the owner upon signature, with occupancy no later than September 1, 2026.",
    },
    {
      id: "c5",
      no: "5",
      heading: "Warranty",
      text: "The sale is made with legal warranty of ownership and quality, except as to the roof, sold without warranty of quality, at the Purchaser's risk.",
    },
    {
      id: "c6",
      no: "6",
      heading: "Adjustments",
      text: "Property taxes, school taxes and condominium fees are adjusted as of the date of occupancy.",
    },
    {
      id: "c7",
      no: "7",
      heading: "Hypothec",
      text: "The Purchaser declares financing this purchase with a hypothecary loan from a Canadian chartered bank in the amount of $388,000.",
    },
  ] satisfies Clause[],
  suggestions: [
    "What is the sale price?",
    "Is the roof covered by the warranty?",
    "When does the buyer take occupancy?",
    "What does it say about the notary's fees?",
  ],
  answers: [
    {
      keywords: ["fee", "fees", "honorari", "notary's", "notary fees"],
      answer:
        "The deed is silent on that. I cannot find a clause about the notary's fees, so I will not guess. On a live file, this is the moment the question goes back to the person who knows the dossier.",
      cite: null,
      clauseId: null,
    },
    {
      keywords: ["price", "paid", "how much", "amount", "485", "dollar"],
      answer:
        "The sale price is $485,000, and the deed records that the Vendor acknowledges having already received it from the Purchaser.",
      cite: "Clause 3 · Price",
      clauseId: "c3",
    },
    {
      keywords: ["roof", "warrant", "guarantee", "quality", "defect"],
      answer:
        "Mostly, but not the roof. The sale carries legal warranty of ownership and quality, except the roof, which is sold without warranty of quality, at the Purchaser's risk.",
      cite: "Clause 5 · Warranty",
      clauseId: "c5",
    },
    {
      keywords: ["occupan", "move in", "possession", "when", "date"],
      answer:
        "The Purchaser becomes owner upon signature, with occupancy no later than September 1, 2026.",
      cite: "Clause 4 · Occupancy",
      clauseId: "c4",
    },
    {
      keywords: ["tax", "adjust", "condo fee", "school"],
      answer:
        "Property taxes, school taxes and condominium fees are adjusted as of the date of occupancy.",
      cite: "Clause 6 · Adjustments",
      clauseId: "c6",
    },
    {
      keywords: ["hypothec", "loan", "financ", "mortgage", "bank", "388"],
      answer:
        "The Purchaser declares financing the purchase with a hypothecary loan of $388,000 from a Canadian chartered bank.",
      cite: "Clause 7 · Hypothec",
      clauseId: "c7",
    },
    {
      keywords: ["who", "parties", "vendor", "purchaser", "buyer", "seller", "tremblay", "belkacem"],
      answer:
        "The Vendor is Marie-Claude Tremblay of Montréal and the Purchaser is Karim Belkacem of Laval.",
      cite: "Clause 1 · Parties",
      clauseId: "c1",
    },
    {
      keywords: ["address", "property", "immovable", "lot", "gouin", "where"],
      answer:
        "The immovable sold is at 1234 boulevard Gouin Est, Montréal, lot 2 345 678 of the Cadastre du Québec.",
      cite: "Clause 2 · Object",
      clauseId: "c2",
    },
  ] satisfies LibrarianAnswer[],
  fallback: {
    answer:
      "That is not in this deed, so I will not answer it. A live deployment behaves the same way: when the document is silent, the question goes to a human, not to a guess.",
    cite: null,
    clauseId: null,
  },
};

/* ---------- Demo 02 · The drafting assistant ---------- */

export const drafting = {
  eyebrow: "Demo 02 · The drafting assistant",
  title: "Facts in. Draft out. You sign.",
  intro:
    "Give the assistant the facts of the file and it produces a first draft on an approved template. The draft never sends itself. It waits for the one step that matters: your signature.",
  formLabel: "The facts of the file",
  fields: {
    vendor: { label: "Vendor", value: "Marie-Claude Tremblay" },
    purchaser: { label: "Purchaser", value: "Karim Belkacem" },
    property: { label: "Property", value: "1234 boulevard Gouin Est, Montréal" },
    price: { label: "Sale price", value: "$485,000" },
    occupancy: { label: "Occupancy date", value: "September 1, 2026" },
  },
  draftButton: "Draft the letter",
  emptyState: "The draft appears here. It never sends itself.",
  paperLabel: "First draft · Unsigned",
  checkpointLabel: "I have read every line.",
  signButton: "Sign the draft",
  signedPrefix: "Signed by you",
  signedNote: "On a live file, the letter would now export to your letterhead. Here it stays a demonstration.",
  note: "The template is fixed and the facts are yours. That is the whole division of labour.",
};

/* ---------- Demo 03 · The triage clerk ---------- */

export type TriageEmail = {
  id: string;
  from: string;
  subject: string;
  snippet: string;
  result: {
    category: string;
    urgency: "High" | "Medium" | "Low" | "Escalated";
    route: string;
    why: string;
  };
};

export const triage = {
  eyebrow: "Demo 03 · The triage clerk",
  title: "Sorted, routed, honest when unsure",
  intro:
    "Four messages sit in a shared inbox. Pick one and watch the clerk classify it, set an urgency and route it. The fourth is deliberately ambiguous, because the most important pile in any triage is the one marked not sure.",
  inboxLabel: "Shared inbox · Sample messages",
  resultLabel: "The clerk's reading",
  emptyState: "Pick a message. Watch where it goes.",
  labels: { category: "Category", urgency: "Urgency", route: "Routed to", why: "Why" },
  escalated: "Not sure. Escalated to a human.",
  note: "Sample messages only. On a live inbox the clerk files, and a person confirms.",
  emails: [
    {
      id: "e1",
      from: "Louise Garneau",
      subject: "My father passed away last week, we need help",
      snippet:
        "The bank has frozen his accounts and my sister found a will from 2011. We do not know what to do first and the funeral home is asking for decisions.",
      result: {
        category: "Succession file",
        urgency: "High",
        route: "Senior notary, same day",
        why: "A death, a frozen estate and an existing will. The clerk opens a succession file and puts it first in line.",
      },
    },
    {
      id: "e2",
      from: "Comptabilité Bergeron inc.",
      subject: "Question about invoice 2041",
      snippet:
        "We received invoice 2041 for the March closing but the amount differs from the quote. Could you confirm the fee breakdown before we process payment?",
      result: {
        category: "Billing",
        urgency: "Low",
        route: "Accounting inbox",
        why: "A payable asking for a breakdown. Nothing legal to read, nothing urgent to sign.",
      },
    },
    {
      id: "e3",
      from: "Daniel Roy",
      subject: "Buying a condo in Griffintown, need a notary",
      snippet:
        "My offer was accepted yesterday and the lender wants a notary confirmed by Friday. The building is new construction, first owner. Are you taking files this month?",
      result: {
        category: "New mandate, real estate",
        urgency: "Medium",
        route: "Real estate calendar, 48 hours",
        why: "An accepted offer with a lender deadline. The clerk books the intake before Friday.",
      },
    },
    {
      id: "e4",
      from: "M. Lachance",
      subject: "Following our call, I am not satisfied",
      snippet:
        "I would like to come back to what we discussed on the phone. I do not think this can continue the way it has been going and I want to know my options.",
      result: {
        category: "Unclear",
        urgency: "Escalated",
        route: "A human reads it first",
        why: "Could be a service complaint, a family matter, or a change of instructions. The clerk does not guess on ambiguity. It escalates.",
      },
    },
  ] satisfies TriageEmail[],
};

export const demosCta = {
  title: "Now imagine it on your own dossiers",
};
