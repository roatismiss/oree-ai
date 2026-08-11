/**
 * One detail page per profession, reached from the "Who we do it for" rows.
 *
 * Rule from PRODUCT.md: speak one profession at a time, in its own vocabulary,
 * obligations and fears. Never "businesses" in general.
 */

export type SectorDetail = {
  slug: string;
  name: string;
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  lede: string;
  /** The situation as the profession experiences it. */
  situation: string[];
  facts: { label: string; value: string }[];
  /** Where a mandate typically starts for this profession. */
  startingPoints: { n: string; title: string; body: string; phase: string }[];
  /** What the profession gets out of it, in its own terms. */
  outcomes: { title: string; body: string }[];
  notThis: string;
  image: string;
};

export const sectorDetails: SectorDetail[] = [
  {
    slug: "notaries",
    name: "Notaries",
    eyebrow: "Sector · Vision 2030",
    titleTop: "For Quebec",
    titleBottom: "Notaries",
    lede:
      "Vision 2030 has set a direction and the profession is being asked to move. The question is no longer whether to adopt, but how to adopt without touching what must stay untouched.",
    situation: [
      "A notarial practice cannot experiment. The authentic act carries a weight that a draft contract does not, and professional secrecy is not a policy you can revise after an incident. That makes the usual advice, try it and see, unusable.",
      "At the same time the pressure is real: clients expect faster turnaround, the Chambre has signalled where the profession is heading, and the firms that wait will be explaining that choice by 2030.",
      "The way through is narrow but it exists. Some tasks around the act, not inside it, can be carried by a machine safely and provably. Identifying exactly which ones is the work.",
    ],
    facts: [
      { label: "Framework", value: "Vision 2030" },
      { label: "Regulator", value: "Chambre des notaires" },
      { label: "Also applies", value: "Law 25" },
      { label: "Near-term pressure", value: "Fall 2026 pilot" },
      { label: "Where we start", value: "Deed production" },
      { label: "Never touched", value: "The authentic act itself" },
    ],
    startingPoints: [
      {
        n: "01",
        title: "Intake and file assembly",
        body:
          "The gathering of documents before a file is workable. High volume, low judgment, and the easiest place to give time back without going near the act.",
        phase: "Usually first",
      },
      {
        n: "02",
        title: "Reading long documents",
        body:
          "Asking questions of a title, a servitude or a prior deed and getting an answer that cites the clause it came from, so verification stays a click away.",
        phase: "Early",
      },
      {
        n: "03",
        title: "First drafts of standard clauses",
        body:
          "Repetitive clauses drafted from your own precedents, with the notary reviewing and signing. It proposes, you decide.",
        phase: "Once trust is earned",
      },
      {
        n: "04",
        title: "The register work",
        body:
          "Consents, retention, and the Law 25 records that sit underneath all of it, kept current rather than assembled when asked.",
        phase: "Continuous",
      },
    ],
    outcomes: [
      {
        title: "A defensible position",
        body: "Written reasoning for each choice: what was delegated, what was not, and against which obligation. The document you would show the Chambre.",
      },
      {
        title: "Time back before the act",
        body: "The hours recovered come from assembly and reading, not from the notarial work itself.",
      },
      {
        title: "Readiness for the pilot",
        body: "If your practice is considered for the fall pilot, the groundwork is already documented rather than improvised.",
      },
    ],
    notThis:
      "Orée does not automate the authentic act and would advise against anyone who offers to. The notary's judgment and signature are the point of the profession, not a bottleneck to be removed.",
    image: "/img/sector-1.png",
  },

  {
    slug: "law-firms",
    name: "Law firms",
    eyebrow: "Sector · Barreau duties",
    titleTop: "For Quebec",
    titleBottom: "Law firms",
    lede:
      "Your duties to the Barreau do not bend for a new tool. We map which drafting and intake tasks can be delegated, and we write down who signs before anything leaves the office.",
    situation: [
      "The exposure in a law firm is specific and it is personal. If a draft goes out wrong under your signature, the liability lands on you, not on the supplier whose terms of service disclaimed everything.",
      "Meanwhile the tools are already in the building. Associates use them for first passes, for summarising, for translating a clause into plain language for a client. Most firms have no written position on any of it.",
      "The useful question is not whether this is happening but where the checkpoint sits, and whether you could describe it to the Barreau if asked.",
    ],
    facts: [
      { label: "Regulator", value: "Barreau du Québec" },
      { label: "Core concern", value: "Client-data safety" },
      { label: "Also applies", value: "Law 25 and PIPEDA" },
      { label: "Where we start", value: "Intake and drafting" },
      { label: "Liability", value: "Stays with the signatory" },
      { label: "Typical finding", value: "Undocumented use already present" },
    ],
    startingPoints: [
      {
        n: "01",
        title: "What is already in use",
        body:
          "An honest inventory of the tools in the building, including the ones nobody put on a form. This is almost always the first surprise.",
        phase: "Week one",
      },
      {
        n: "02",
        title: "Intake and conflicts",
        body:
          "Structuring new matters as they arrive. Volume work with clear rules, where the gain is real and the risk is containable.",
        phase: "Usually first",
      },
      {
        n: "03",
        title: "First-pass drafting",
        body:
          "Standard documents drafted from your precedents, stopping at a visible checkpoint. The associate reviews, the partner signs, and the file records both.",
        phase: "After the policy exists",
      },
      {
        n: "04",
        title: "The written position",
        body:
          "A short internal standard covering what may be delegated and where a human must stand. Short enough that people read it.",
        phase: "Alongside",
      },
    ],
    outcomes: [
      {
        title: "A written internal standard",
        body: "What may be used, for what, with which checkpoint. The document you would produce if the Barreau asked how the firm governs this.",
      },
      {
        title: "Client-data boundaries settled",
        body: "Which files can go near which tool, decided on paper and in advance rather than case by case under deadline.",
      },
      {
        title: "The checkpoint in the file",
        body: "Sign-off recorded as part of the matter, so the human step is evidenced rather than assumed.",
      },
    ],
    notThis:
      "Orée does not give legal advice and does not tell you what your professional obligations are. Your duties are yours to interpret; we make sure the technology decisions are documented against them.",
    image: "/img/sector-2.png",
  },

  {
    slug: "hr-advisers",
    name: "CHRPs and HR advisers",
    eyebrow: "Sector · Order guidelines",
    titleTop: "For CHRPs",
    titleBottom: "And HR teams",
    lede:
      "Your teams are almost certainly using these tools already, quietly and without a record. Governing that is more useful than forbidding it, and the 2027 ethics requirement is coming either way.",
    situation: [
      "HR sits on the most sensitive material in most organisations: performance notes, medical accommodations, complaints, terminations. It is also the function where AI adoption is most likely to happen informally, because the work is heavy on drafting and correspondence.",
      "A ban does not work here. It moves the practice off the record without removing it, which is the worst of both outcomes: the exposure remains and the visibility is gone.",
      "The alternative is to name what is permitted, place the checkpoints, and record the decision. The 2027 ethics training requirement makes that documentation useful twice over.",
    ],
    facts: [
      { label: "Regulator", value: "Ordre des CRHA" },
      { label: "Near-term requirement", value: "2027 ethics training" },
      { label: "Also applies", value: "Law 25" },
      { label: "Core concern", value: "Sensitive employee data" },
      { label: "Where we start", value: "Tools already in use" },
      { label: "Typical finding", value: "Informal adoption, no record" },
    ],
    startingPoints: [
      {
        n: "01",
        title: "Surfacing what is happening",
        body:
          "A no-blame inventory of how the team is already using these tools. It works only if it is genuinely no-blame, so that is how we run it.",
        phase: "First",
      },
      {
        n: "02",
        title: "Drawing the line on sensitive data",
        body:
          "Which categories of employee information may never go near an external tool, written plainly enough to be followed under time pressure.",
        phase: "Immediately after",
      },
      {
        n: "03",
        title: "Correspondence and drafting",
        body:
          "Where the genuine gain is: policy drafts, job descriptions, first passes at routine correspondence, all stopping short of anything about a named individual.",
        phase: "Once the line is drawn",
      },
      {
        n: "04",
        title: "The training record",
        body:
          "Documented supervision training that serves the 2027 requirement and gives the team a standard they can actually apply.",
        phase: "Ahead of 2027",
      },
    ],
    outcomes: [
      {
        title: "Informal use brought on the record",
        body: "What the team does is visible and governed, rather than happening out of sight because it was forbidden.",
      },
      {
        title: "A sensitive-data boundary",
        body: "A written rule about employee information that staff can follow without needing to ask each time.",
      },
      {
        title: "Evidence for 2027",
        body: "A training record and internal standard that meet the ethics requirement rather than being produced against it.",
      },
    ],
    notThis:
      "Orée does not build or recommend tools that score, rank or screen individual employees or candidates. That is a category where the risk to people outweighs the efficiency, and we say so rather than quote for it.",
    image: "/img/sector-3.png",
  },

  {
    slug: "investment-firms",
    name: "Investment firms",
    eyebrow: "Sector · Examiner readiness",
    titleTop: "For investment",
    titleBottom: "Firms",
    lede:
      "The first question an examiner asks is where the data sits and who can read it. We answer that on paper before anything is deployed, so the answer exists when it is needed.",
    situation: [
      "In a regulated financial practice the question is rarely whether a tool is useful. It is whether you can describe, precisely and in writing, what happens to client information when it passes through that tool.",
      "Most suppliers cannot answer that clearly, and their terms of service are written to avoid committing. That is a finding in itself, and it is usually the one that decides the shortlist.",
      "So the sequence here is inverted: the data question is settled first, and only what survives it gets evaluated on merit.",
    ],
    facts: [
      { label: "Frameworks", value: "Law 25 and PIPEDA" },
      { label: "Core concern", value: "Data residency and access" },
      { label: "Driver", value: "Examiner readiness" },
      { label: "Where we start", value: "Where the data sits" },
      { label: "Supplier terms", value: "Read before shortlisting" },
      { label: "You end with", value: "A written answer" },
    ],
    startingPoints: [
      {
        n: "01",
        title: "The data question first",
        body:
          "Where information would physically sit, who can access it, under whose jurisdiction, and what the supplier commits to in writing rather than in marketing.",
        phase: "Before anything else",
      },
      {
        n: "02",
        title: "Reading the terms properly",
        body:
          "Supplier agreements read for what they actually permit, including training on your inputs and sub-processor rights. This eliminates more candidates than any feature comparison.",
        phase: "Shortlisting",
      },
      {
        n: "03",
        title: "Research and summarisation",
        body:
          "The safest genuine gain: working over public material and internal documents that contain no client identifiers.",
        phase: "First deployment",
      },
      {
        n: "04",
        title: "The examiner file",
        body:
          "The written record of what was deployed, what it touches, who approved it and on what basis, kept current rather than assembled on request.",
        phase: "Continuous",
      },
    ],
    outcomes: [
      {
        title: "A written data position",
        body: "Where information sits and who can reach it, documented before deployment rather than reconstructed afterwards.",
      },
      {
        title: "A defensible shortlist",
        body: "Suppliers assessed against your obligations first and their features second, with the reasoning recorded.",
      },
      {
        title: "The file an examiner asks for",
        body: "Current records of deployments, approvals and data flows, ready when the question arrives.",
      },
    ],
    notThis:
      "Orée does not advise on investment decisions, models or trading systems. The scope is governance of the technology and the information it touches, not the financial judgment it might inform.",
    image: "/img/sector-4.png",
  },

  {
    slug: "nonprofits",
    name: "Nonprofits",
    eyebrow: "Sector · Funder and governance duties",
    titleTop: "For Quebec",
    titleBottom: "Nonprofits",
    lede:
      "The mission comes first, but the paperwork behind it is what quietly consumes the team. The question is not whether AI can help, it's what a small organization can adopt without risking the trust it runs on.",
    situation: [
      "A nonprofit of one to ten people rarely has anyone whose job is technology. The executive director drafts the grant report, answers donors, sits on hiring, and still runs programs, often all in the same afternoon. There is no IT department to ask whether a tool is safe to use.",
      "At the same time, every funder wants its own format, on its own timeline, and donors expect their information handled with the same care as a bank would show it. A shortcut that saves an afternoon but damages that trust costs more than it returns.",
      "The way through is not to automate the mission. It is to automate what sits around it: the paperwork, the repeated formats, the register nobody has time to keep current.",
    ],
    facts: [
      { label: "Framework", value: "Funder reporting duties" },
      { label: "Also applies", value: "Law 25" },
      { label: "Core concern", value: "Donor and beneficiary data" },
      { label: "Where we start", value: "Grant reports and applications" },
      { label: "Typical finding", value: "One person carries it all" },
      { label: "Never touched", value: "Who is eligible for help" },
    ],
    startingPoints: [
      {
        n: "01",
        title: "Grant reports and funding applications",
        body:
          "The recurring narrative sections, budget tables and outcome summaries funders ask for every cycle, drafted from your own past reports and reviewed before it goes out.",
        phase: "Usually first",
      },
      {
        n: "02",
        title: "Donor and volunteer records",
        body:
          "Cleaning up and organizing the lists that live across spreadsheets, email threads and someone's memory, so the information is usable and the Law 25 obligations attached to it are traceable.",
        phase: "Early",
      },
      {
        n: "03",
        title: "Donor and partner correspondence",
        body:
          "First drafts of thank-you letters, update newsletters and partner emails. The volume work, not the relationship itself.",
        phase: "Once the basics hold",
      },
      {
        n: "04",
        title: "Board governance records",
        body:
          "Policies, conflict-of-interest registers, and the Law 25 documentation the board is ultimately responsible for, kept current rather than assembled under pressure before a meeting.",
        phase: "Continuous",
      },
    ],
    outcomes: [
      {
        title: "Time back for the person who has none",
        body: "The hours recovered come from the paperwork around the mission, not from the programs or the relationships that define the organization.",
      },
      {
        title: "A record the board can stand behind",
        body: "Written reasoning for what was delegated to a tool and what was not, ready for a funder audit or a board question.",
      },
      {
        title: "Funder-ready, on every cycle",
        body: "Reports that used to eat a week get produced from a process instead of rebuilt from scratch each time.",
      },
    ],
    notThis:
      "Orée does not recommend AI to decide who is eligible for a service or a benefit, when the population served is vulnerable. That decision stays with the people accountable to your board and your community, not a scoring model.",
    /* Placeholder: the detail template does not render this field today (the
       Overview `object` slot is unused), so no dedicated artwork was commissioned. */
    image: "/img/sector-1.png",
  },
];

export const bySector = Object.fromEntries(sectorDetails.map((s) => [s.slug, s]));
