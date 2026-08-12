/** Copy for the Sectors page. Same voice rules as content/en.ts. */

export const sectorsHero = {
  eyebrow: "Who Orée works with",
  titleTop: "Six sectors.",
  titleBottom: "One method.",
  /* The client's own framing: four of these are hypotheses, not delivered
     mandates. The intro says so plainly rather than letting the page read as a
     client list. */
  body:
    "These are the sectors Orée chooses to move towards — not because they are all clients already, but because they are settings with a real need for careful AI adoption, and where the method can contribute a great deal without ever being intrusive. Here is how it would apply in each.",
};

/* A text list, not cards: the boxed treatment with tags implied mandates that
   have already been delivered. The order is the client's — the broadest and
   lowest-risk entry point first, then the one sector with a real client, then
   the four regulated professions. */
export const sectorList = {
  title: "Here is where the method fits",
  items: [
    {
      name: "Small businesses",
      slug: "small-business",
      summary:
        "You have neither the time nor the budget to pick the wrong tool. The question is not whether AI can help, but where to start with what you already have.",
    },
    {
      name: "Nonprofits",
      slug: "nonprofits",
      summary:
        "The mission comes first, but the paperwork behind it is what quietly consumes the team. A setting where a small team can gain a great deal, without ever disturbing what actually matters.",
    },
    {
      name: "Notaries",
      slug: "notaries",
      summary:
        "Vision 2030 has set a direction, and the profession will increasingly be asked to adapt. A real need, provided nothing comes near the authentic act itself.",
    },
    {
      name: "Law firms",
      slug: "law-firms",
      summary:
        "Duties to the Barreau leave no room for improvisation. Observing before equipping can make a real difference, without ever putting the lawyer's signature at stake.",
    },
    {
      name: "CHRPs and HR advisers",
      slug: "hr-advisers",
      summary:
        "Your teams are probably using these tools already, quietly. A real need for guardrails, without ever monitoring or dictating.",
    },
    {
      name: "Investment firms",
      slug: "investment-firms",
      summary:
        "The question of data residency and traceability comes up sooner or later. A real need for documentary rigour, without slowing your operations down.",
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
