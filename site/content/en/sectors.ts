/** Copy for the Sectors page. Same voice rules as content/en.ts. */

export const sectorsHero = {
  eyebrow: "Who Orée works with",
  titleTop: "Five sectors.",
  titleBottom: "One method.",
  /* "Sectors" rather than "professions" since nonprofits joined the list: an
     OBNL is an organization, not a profession. */
  body:
    "Each of these carries obligations that make careless AI adoption expensive. That is precisely why the method starts with the obligations rather than the tools.",
};

export const sectorList = {
  eyebrow: "By profession",
  title: "Where the method lands",
  items: [
    {
      name: "Notaries",
      slug: "notaries",
      image: "/img/sector-1.png",
      summary:
        "Vision 2030 has set a direction and the profession is being asked to move. The question is no longer whether to adopt, but how to adopt without touching what must stay untouched.",
      meta: [
        { label: "Framework", value: "Vision 2030" },
        { label: "Pressure", value: "Fall 2026 pilot" },
        { label: "Where we start", value: "Deed production" },
      ],
    },
    {
      name: "Law firms",
      slug: "law-firms",
      image: "/img/sector-2.png",
      summary:
        "Your duties to the Barreau do not bend for a new tool. We map which drafting and intake tasks can be delegated, and we write down who signs before anything leaves the office.",
      meta: [
        { label: "Framework", value: "Barreau duties" },
        { label: "Pressure", value: "Client-data safety" },
        { label: "Where we start", value: "Intake and drafting" },
      ],
    },
    {
      name: "CHRPs and HR advisers",
      slug: "hr-advisers",
      image: "/img/sector-3.png",
      summary:
        "Your teams are almost certainly using these tools already, quietly and without a record. Governing that is more useful than forbidding it, and the 2027 ethics requirement is coming either way.",
      meta: [
        { label: "Framework", value: "Order guidelines" },
        { label: "Pressure", value: "2027 ethics training" },
        { label: "Where we start", value: "Tools already in use" },
      ],
    },
    {
      name: "Investment firms",
      slug: "investment-firms",
      image: "/img/sector-4.png",
      summary:
        "The first question an examiner asks is where the data sits and who can read it. We answer that on paper before anything is deployed, so the answer exists when it is needed.",
      meta: [
        { label: "Framework", value: "Law 25 and PIPEDA" },
        { label: "Pressure", value: "Examiner readiness" },
        { label: "Where we start", value: "Data residency" },
      ],
    },
    {
      name: "Nonprofits",
      slug: "nonprofits",
      image: "/img/sector-1.png",
      summary:
        "The mission comes first, but the paperwork behind it is what quietly consumes the team. The question is not whether AI can help, it's what a small organization can adopt without risking the trust it runs on.",
      meta: [
        { label: "Framework", value: "Funder reporting duties" },
        { label: "Core concern", value: "Donor and beneficiary data" },
        { label: "Where we start", value: "Grant reports" },
      ],
    },
  ],
};

export const demos = {
  title: "What runs in every sector",
  intro:
    "Three automations, adapted to the vocabulary of each profession. All of them run on sample data, and all of them end at a human.",
  items: [
    {
      name: "The document librarian",
      image: "/img/demo-1.png",
      label: "Every answer",
      value: "Cites its clause",
    },
    {
      name: "The drafting assistant",
      image: "/img/demo-2.png",
      label: "Before it leaves",
      value: "The human signs",
    },
    {
      name: "The triage clerk",
      image: "/img/demo-3.png",
      label: "When unsure",
      value: "It escalates",
    },
  ],
};

export const sectorsCta = {
  title: "Find your profession's starting point",
};
