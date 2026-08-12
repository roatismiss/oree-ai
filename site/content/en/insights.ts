/**
 * The three launch articles, in full. Same voice rules as content/en.ts:
 * advisor not vendor, specific nouns, no em dashes, no emojis, no invented
 * social proof. Every factual claim is backed by the Sources list at the end
 * of each article; quotes are verbatim from the cited page.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; fr: string; en: string; source: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string };

export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  readingTime: string;
  blocks: ArticleBlock[];
  sources: { label: string; url: string }[];
};

export const insightsHero = {
  eyebrow: "Insights",
  titleTop: "Our insights",
  body:
    "Short, sourced articles on AI and the obligations of regulated practice in Quebec. Written for partners and principals, not for engineers. Every claim cites where it came from.",
};

export const insightsIndexCta = {
  title: "Bring the question to your own dossiers",
};

export const articles: Article[] = [
  {
    slug: "ai-law-firm-client-data",
    title: "How a law firm can use AI without risking client data",
    date: "Jul 14, 2026",
    excerpt:
      "Where client files can and cannot go, what your Barreau duties actually require, and the checkpoints that keep a draft from leaving the office unsigned.",
    image: "/img/blog-1.png",
    readingTime: "6 min read",
    blocks: [
      {
        type: "p",
        text: "The fear is not irrational. A prompt typed into a public chatbot leaves the office, lands on servers you do not control, and may be retained under terms nobody in the firm has read. For a profession built on professional secrecy, that is not a detail. It is the whole question.",
      },
      {
        type: "p",
        text: "It is also, increasingly, a governed question. The Barreau du Québec published its practical guide on generative AI in October 2024, and it did not tell lawyers to abstain. It told them to use these tools responsibly, and it wrote down what responsibly means.",
      },
      { type: "h2", text: "What the Barreau actually says" },
      {
        type: "quote",
        fr: "« Il est essentiel d'encadrer son usage pour protéger le public et garantir que la justice bénéficie pleinement de son potentiel. »",
        en: "It is essential to govern its use, to protect the public and to ensure that justice benefits fully from its potential.",
        source: "Barreau du Québec, launch of the practical guide, October 2024",
      },
      {
        type: "p",
        text: "The guide, titled L'intelligence artificielle générative : guide pratique pour une utilisation responsable, covers confidentiality, verification, transparency with clients and billing. Its stated objective is a prudent, considered and ethical use of these technologies in legal work. The Barreau has since announced continuing education on framing generative AI in practice, including training designated as mandatory for members.",
      },
      { type: "h2", text: "Three rules carry most of the weight" },
      {
        type: "list",
        items: [
          "Client data never enters an open system. Anything protected by professional secrecy stays inside environments the firm controls, under contracts that say where the data sits and what the provider may do with it. In Quebec, that conversation now includes Law 25 and Canadian data residency.",
          "Everything that leaves the office is verified by a lawyer. Generative AI writes with equal confidence when it is right and when it is wrong. The signature at the bottom of the letter is yours, so the reading has to be yours too.",
          "The client is not a bystander. The guide treats transparency toward clients as part of the professional relationship, and fees reflect the time actually invested, not the time the task used to take before the tool existed.",
        ],
      },
      { type: "h2", text: "Where AI helps without touching secrecy" },
      {
        type: "p",
        text: "The useful surprise is how much of a firm's daily load never requires client secrets to leave the building. A document librarian that answers only from a file you provide, and cites the clause it relied on. A drafting assistant that fills an approved template with facts you typed, then waits for a signature. A triage clerk that sorts an inbox and escalates whatever it is unsure about. Each of these can be tested on sample data before any client file is involved, which is exactly how the demonstrations on this site work.",
      },
      {
        type: "p",
        text: "None of this removes judgment. It moves the hours. The lawyer stops re-reading a forty-page file to find one clause and starts at the clause, deciding what it means.",
      },
      { type: "h2", text: "The compliance floor underneath" },
      {
        type: "p",
        text: "Whatever tools a firm adopts, Law 25 keeps applying: a person responsible for the protection of personal information, an incident register kept for at least five years, and notification of the Commission d'accès à l'information without delay when an incident presents a risk of serious injury. Adopting AI does not raise that floor. It makes standing on it more visible.",
      },
      {
        type: "note",
        text: "The short version: the Barreau has not asked lawyers to choose between competence and confidentiality. It has asked them to prove they can hold both. That is an operations problem, and operations problems have plans.",
      },
    ],
    sources: [
      {
        label: "Barreau du Québec, Intelligence artificielle générative (resource hub)",
        url: "https://www.barreau.qc.ca/en/membres-ordre/ressources/standards-tools-references-guides/intelligence-artificielle-generative/",
      },
      {
        label:
          "Barreau du Québec, Le Barreau lance le Guide pratique pour une utilisation responsable (October 2024)",
        url: "https://www.barreau.qc.ca/en/new/notices-to-members/barreau-lance-guide-pratique-utilisation-responsable-intelligence-artificielle-generative/",
      },
      {
        label:
          "Barreau du Québec, Encadrer l'IA générative dans la pratique du droit : repères déontologiques et professionnels",
        url: "https://www.barreau.qc.ca/en/new/notices-to-members/nouvelle-formation-obligatoire-encadrer-ia-generative-pratique-droit/",
      },
      {
        label:
          "Commission d'accès à l'information, Incidents de confidentialité et mesures de sécurité (entreprises)",
        url: "https://www.cai.gouv.qc.ca/protection-renseignements-personnels/information-entreprises-privees/incidents-confidentialite-mesures-securite-entreprises",
      },
    ],
  },

  {
    slug: "what-vision-2030-asks-of-notaries",
    title: "What Vision 2030 asks of notaries, in plain terms",
    date: "Jun 30, 2026",
    excerpt:
      "The Chambre des notaires has set a direction. Here is what it means for a practice of three, and what to have ready before the fall pilot.",
    image: "/img/blog-2.png",
    readingTime: "5 min read",
    blocks: [
      {
        type: "p",
        text: "Ask three notaries what the digital shift means and you will hear three answers: signatures, software, and somebody else's problem. The direction set by the profession is more concrete than that, and it is worth restating in plain terms.",
      },
      { type: "h2", text: "The direction is public" },
      {
        type: "p",
        text: "The Chambre des notaires has been explicit about heading toward a fully technological notariat. Notarial acts on technological support are no longer a curiosity: the Greffe central numérique, the profession's central digital registry, is in operation, and the cohort of notaries sworn in this year is joining it from the first day of practice. Legislation before the National Assembly points toward digital signing becoming the norm for notarial acts rather than the exception.",
      },
      {
        type: "p",
        text: "In parallel, guidance is being produced on the use of artificial intelligence in notarial practice, on verification, confidentiality and liability. The message is consistent across documents: the tools may enter, the obligations do not move.",
      },
      { type: "h2", text: "What it means for a practice of three" },
      {
        type: "list",
        items: [
          "Your acts are becoming data. A deed that lives in a digital registry can be searched, checked and reused in ways paper never allowed. That is an efficiency and a responsibility at the same time.",
          "Your intake becomes the bottleneck. Once signing is digital, the slow part of a file is everything before it: gathering facts, verifying identity, assembling exhibits. That is where well-governed automation pays first.",
          "Your obligations follow the file. Professional secrecy and Law 25 apply to the technological act exactly as they applied to paper, including the incident register and the duty to notify the Commission d'accès à l'information when a serious risk appears.",
        ],
      },
      { type: "h2", text: "The wider wave, measured" },
      {
        type: "p",
        text: "The Institut de la statistique du Québec measured 12.7 percent of Quebec businesses using AI in production in the twelve months preceding mid-2025, with finance and insurance among the leading sectors and text analysis the most common use. Professional services sit in the upper tier. The wave is not coming. It is here, and it is unevenly governed.",
      },
      { type: "h2", text: "Before the fall pilot" },
      {
        type: "list",
        items: [
          "An inventory: which systems hold personal information today, and who can read them.",
          "A named person responsible for the protection of personal information, as Law 25 requires, even in a three-person practice.",
          "One process mapped end to end. Deed production is the obvious candidate, so that any tool you test lands on a process you actually understand.",
          "A rule your team can recite: the software prepares, the notary decides.",
        ],
      },
      {
        type: "note",
        text: "None of this requires buying anything. It requires three days of honest looking at how the work actually flows, which is precisely what a diagnostic is for.",
      },
    ],
    sources: [
      {
        label: "Chambre des notaires du Québec, Vers un notariat entièrement technologique",
        url: "https://www.cnq.org/en/the-chambre-and-your-protection/news-press-room/vers-un-notariat-entierement-technologique/",
      },
      {
        label:
          "Institut de la statistique du Québec, Adoption et utilisation de l'intelligence artificielle par les entreprises au Québec en 2024 et en 2025",
        url: "https://statistique.quebec.ca/en/produit/publication/adoption-et-utilisation-intelligence-artificielle-entreprises-au-quebec-2024-2025",
      },
      {
        label:
          "Commission d'accès à l'information, Incidents de confidentialité et mesures de sécurité (entreprises)",
        url: "https://www.cai.gouv.qc.ca/protection-renseignements-personnels/information-entreprises-privees/incidents-confidentialite-mesures-securite-entreprises",
      },
    ],
  },

  {
    slug: "law-25-missing-registers",
    title: "Law 25: the registers most practices are missing",
    date: "Jun 12, 2026",
    excerpt:
      "Consents, incidents and processing registers are the first thing asked for and the last thing prepared. A short checklist you can run this week.",
    image: "/img/stats-lawbook.png",
    readingTime: "5 min read",
    blocks: [
      {
        type: "p",
        text: "When the Commission d'accès à l'information asks a firm for its incident register, the honest answer in many offices is a pause. Everyone remembers the consent banners. Fewer remember that Law 25 made record-keeping itself an obligation.",
      },
      { type: "h2", text: "The register you must be able to produce" },
      {
        type: "p",
        text: "Every enterprise, whatever its size, must keep a register of confidentiality incidents and provide a copy to the Commission on request. The Commission's guidance is specific about what an entry contains:",
      },
      {
        type: "list",
        items: [
          "a description of the personal information involved, or the reason it cannot be identified;",
          "the circumstances of the incident, and its date or period, even approximate;",
          "the date or period when the enterprise became aware of it;",
          "the number of persons concerned, even approximate;",
          "the assessment of the risk of serious injury: sensitivity of the information, possible malicious uses, foreseeable consequences, likelihood;",
          "where the risk was serious, the dates of notification to the Commission and to the persons concerned;",
          "the measures taken to reduce the risk.",
        ],
      },
      {
        type: "p",
        text: "Entries are kept for a minimum of five years after the enterprise becomes aware of the incident. When an incident presents a risk of serious injury, the enterprise notifies the Commission and the persons concerned without delay, using the Commission's official form.",
      },
      { type: "h2", text: "The registers around the register" },
      {
        type: "p",
        text: "The incident register rarely travels alone. The same reform expects a designated person responsible for the protection of personal information, published governance policies and practices, and privacy impact assessments when acquiring or overhauling systems that touch personal information. A practice adopting AI tooling meets that last one immediately: the assessment is the natural place to write down what a tool may read, where its data physically sits, and who verifies its output.",
      },
      {
        type: "p",
        text: "One more provision matters for AI specifically. When a decision about a person is based exclusively on automated processing, the person must be informed. The cleanest way to never trip on that rule is the discipline worth adopting anyway: no decision leaves the office without a human who read it.",
      },
      { type: "h2", text: "A checklist you can run this week" },
      {
        type: "list",
        items: [
          "Name the person responsible for the protection of personal information, in writing.",
          "Create the incident register today, even empty. An empty register is compliance. A missing one is exposure.",
          "List the systems that hold personal information, and where the data physically sits.",
          "Write the two-paragraph procedure: who assesses an incident, who calls the Commission.",
          "Put a human checkpoint on any automated output that touches a person's file.",
        ],
      },
      {
        type: "note",
        text: "Monetary penalties give the exercise its edge, since the reform armed the Commission with administrative sanctions that reach into the millions. But the quieter argument is the better one. These registers are what being in control of your files looks like, written down.",
      },
    ],
    sources: [
      {
        label:
          "Commission d'accès à l'information, Incidents de confidentialité et mesures de sécurité (entreprises)",
        url: "https://www.cai.gouv.qc.ca/protection-renseignements-personnels/information-entreprises-privees/incidents-confidentialite-mesures-securite-entreprises",
      },
      {
        label: "Commission d'accès à l'information, Principaux changements apportés par la Loi 25",
        url: "https://www.cai.gouv.qc.ca/protection-renseignements-personnels/sujets-et-domaines-dinteret/principaux-changements-loi-25",
      },
      {
        label: "Commission d'accès à l'information, official incident report form",
        url: "https://formulaire.cai.gouv.qc.ca/",
      },
    ],
  },
];
