/**
 * Copie française (Québec). Locale par défaut du site.
 *
 * Règle de travail : partout où oree-conseil.ca portait déjà le texte
 * d'Aminata, c'est son français qui est repris tel quel, sans le réécrire.
 * Le reste est rédigé dans la même voix : conseillère, pas fournisseuse.
 *
 * Conventions OQLF : guillemets français, espace insécable ( ) avant le
 * deux-points et avant le symbole pour cent.
 */

export const nav = {
  links: [
    { label: "Méthode", href: "/approach" },
    { label: "Offre", href: "/services" },
    { label: "Secteurs", href: "/sectors" },
    { label: "Publications", href: "/insights" },
  ],
  more: "Démos",
  call: "Réserver un appel",
};

/** Titres et descriptions de page, une entrée par route. */
export const meta = {
  site: {
    title: "Orée Conseil · Conseil en IA pour les PME et professions réglementées du Québec",
    description:
      "Orée accompagne les PME et les organisations réglementées du Québec dans leur appropriation de l'IA, en diagnostiquant d'abord ce qui freine réellement le travail. L'IA rédige. L'humain décide.",
  },
  approach: {
    title: "La méthode · Orée",
    description:
      "La méthode O·R·É·E : observer, relever, évaluer, engager. Trois jours dans votre pratique, qui aboutissent à un plan chiffré que vous approuvez ligne par ligne.",
  },
  services: {
    title: "L'offre · Orée",
    description:
      "Diagnostic Orée, Formation Orée, Appui Orée et le Radar Loi 25. Une offre volontairement resserrée, une méthode, et un plan chiffré que vous gardez.",
  },
  sectors: {
    title: "Secteurs · Orée",
    description:
      "Gouvernance de l'IA pour les notaires, les cabinets d'avocats, les CRHA, les firmes de placement et les OBNL du Québec. Les obligations de chaque secteur, et par où la méthode commence.",
  },
  insights: {
    title: "Publications · Orée",
    description:
      "Des articles sourcés sur l'IA et les obligations de la pratique réglementée au Québec : orientations du Barreau, registres de la Loi 25, et le virage numérique du notariat.",
  },
  risks: {
    title: "Le coût de l'inaction · Orée Conseil",
    description:
      "Le vrai risque n'est pas d'agir trop tôt en IA, c'est d'agir trop tard. Quatre moments de l'histoire économique où l'écart entre adopter une technologie et se réorganiser autour a décidé qui survivait.",
  },
  contact: {
    title: "Contact · Orée Conseil",
    description:
      "Réservez un diagnostic Orée. Aminata Diabaté, fondatrice et consultante principale. Montréal · Cantons-de-l'Est, Québec.",
  },
};

/**
 * Habillage d'interface : titres de section, liens de retour et libellés
 * d'accessibilité qui étaient codés en dur dans les composants. Ils vivent ici
 * pour que la version française ne se retrouve pas avec des boutons anglais.
 */
export const ui = {
  readDetail: "Lire le détail",
  allServices: "Toute l'offre",
  allSectors: "Tous les secteurs",
  situation: "La situation",
  whatItAnswers: "Ce à quoi ça répond",
  whereMandateStarts: "Par où commence un mandat",
  startingPoints: "Points de départ",
  whatChanges: "Ce qui change",
  howItRuns: "Comment ça se déroule",
  theProcess: "Le déroulement",
  whatYouKeep: "Ce que vous gardez",
  sources: "Sources",
  openMenu: "Ouvrir le menu",
  closeMenu: "Fermer le menu",
  previousQuestion: "Question précédente",
  nextQuestion: "Question suivante",
  portraitAlt: "Aminata Diabaté, fondatrice et consultante principale d'Orée Conseil",
};

export const hero = {
  eyebrow: "Conseil en IA · PME et professions réglementées du Québec",
  titleTop: "L'intelligence artificielle,",
  titleMid: "pensée pour votre travail réel.",
  titleBottom: "Pas l'inverse.",
  body:
    "Orée accompagne les PME et les organisations réglementées du Québec dans leur appropriation de l'intelligence artificielle. Pas en vendant des outils, mais en diagnostiquant d'abord ce qui freine réellement le travail. Une méthode en quatre temps, un mandat borné, des recommandations qu'on peut appliquer dès la semaine suivante.",
  cta: "Réserver un diagnostic",
  ctaSecondary: "Essayer les démos",
  refrain: "« L'IA rédige. L'humain décide. »",
  refrainGloss: "AI drafts. The human decides.",
};

/** Le mnémonique O·R·É·E, tel qu'il figurait en page d'accueil sur l'ancien site. */
export const methodGlance = {
  mnemonic: "O·R·É·E",
  title: "La méthode, en un coup d'œil",
  steps: [
    { letter: "O", fr: "Observer", en: "Observe", body: "Immersion dans le travail réel." },
    { letter: "R", fr: "Relever", en: "Uncover", body: "Documenter les frictions, sans filtre." },
    { letter: "É", fr: "Évaluer", en: "Evaluate", body: "Prioriser ce qui freine vraiment." },
    { letter: "E", fr: "Engager", en: "Engage", body: "Recommandations concrètes, applicables." },
  ],
  cta: "En savoir plus sur la méthode",
};

/** Pourquoi maintenant : le contexte québécois. Chiffres sourcés uniquement. */
export const stats = {
  eyebrow: "Pourquoi maintenant · Le contexte québécois",
  titleTop: "Adoptée plus vite que",
  titleBottom: "Le travail n'est repensé",
  items: [
    {
      figure: "12,7 %",
      caption:
        "des entreprises québécoises, toutes tailles confondues, utilisent déjà l'IA. Deux fois plus qu'il y a un an.",
      source: "ISQ, T2 2025",
    },
    {
      figure: "73 %",
      caption:
        "ne savent pas nommer clairement leurs besoins, avant même de penser à un outil.",
      source: "CPQ, déc. 2024",
    },
    {
      figure: "1 sur 3",
      caption:
        "des entreprises ayant adopté l'IA ont dû créer de nouveaux flux de travail après coup.",
      source: "ISQ, 2025",
    },
    {
      figure: "2×",
      caption:
        "les grandes entreprises adoptent l'IA deux fois plus vite que les plus petites, 26,1 % contre 12,2 %. Un écart de départ, pas d'arrivée.",
      source: "ISQ, T2 2025",
    },
  ],
  note: "Le paradoxe québécois : l'IA est adoptée plus vite que le travail qui l'entoure n'est repensé.",
};

export const why = {
  eyebrow: "Pourquoi Orée",
  titleTop: "Ce qui distingue",
  titleBottom: "Cette pratique",
  paragraphs: [
    "Orée est une pratique-conseil indépendante en IA, pour les PME et les professions réglementées du Québec. Le travail commence dans vos bureaux, avec la façon dont le travail se fait vraiment, pas avec une démonstration de produit.",
    "Chaque mandat suit une seule méthode : observer le travail réel, relever les frictions qui le ralentissent, évaluer celles qui freinent vraiment la performance, et engager un plan que vous approuvez ligne par ligne.",
    "Nous ne vendons aucun logiciel et ne touchons aucune commission de ceux qui en vendent. Ce que vous obtenez, c'est un plan chiffré que vous pouvez réaliser avec nous ou sans nous.",
  ],
  cards: [
    "Indépendante de tout fournisseur",
    "Forfait fixe, sur devis",
    "Données hébergées au Canada",
    "Un humain signe chaque étape",
  ],
  cta: "Réserver un diagnostic",
};

export const services = {
  eyebrow: "L'offre Orée",
  titleTop: "Une offre resserrée,",
  titleBottom: "Une méthode",
  leftLabel: "Ce que je fais",
  rightLabel: "Pour qui je le fais",
  /* Repris mot pour mot de la section « Pour qui » d'oree-conseil.ca.
     « des faits, pas des impressions » est une formule de marque : elle ne se
     paraphrase pas. */
  audience: [
    "PME et entreprises, tous secteurs",
    "Professions et organisations réglementées",
    "Directions qui veulent des faits, pas des impressions",
  ],
  left: [
    { label: "Diagnostic Orée", href: "/services/diagnostic" },
    { label: "Formation Orée", href: "/services/training" },
    { label: "Appui Orée", href: "/services/support" },
    { label: "Radar Loi 25", href: "/services/law-25-radar" },
  ],
  right: [
    { label: "PME et entreprises, tous secteurs", href: "/sectors" },
    { label: "Notaires · Vision 2030", href: "/sectors/notaries" },
    { label: "Cabinets d'avocats · devoirs du Barreau", href: "/sectors/law-firms" },
    { label: "CRHA et conseillers RH", href: "/sectors/hr-advisers" },
    { label: "Firmes de placement", href: "/sectors/investment-firms" },
    { label: "OBNL · Reddition aux bailleurs", href: "/sectors/nonprofits" },
  ],
};

export const practice = {
  eyebrow: "La pratique",
  titleTop: "Une praticienne,",
  titleBottom: "Vingt-sept ans",
  name: "Aminata Diabaté",
  role: "Fondatrice et consultante principale · Orée Conseil",
  body:
    "Orée, c'est la pratique d'Aminata Diabaté, qui a passé vingt-sept ans à l'intérieur des organisations les plus complexes du Québec. Vous travaillez directement avec elle. Pas de gestionnaire de compte, pas de transfert de dossier, pas de consultant junior qui apprend votre dossier à vos frais.",
  /* Repris d'oree-conseil.ca : chaque organisation porte son secteur, et la
     précision qui suit n'est pas optionnelle. Sans elle, la liste se lit comme
     une liste de clients, ce qu'elle n'est pas. Formulation de l'ancien site. */
  backgroundLabel: "Parcours",
  backgroundNote:
    "Organisations où Aminata a travaillé avant de fonder Orée Conseil — pas des clients.",
  background: [
    { org: "Fonds de solidarité FTQ", sector: "Institution financière" },
    { org: "Bell", sector: "Télécommunications" },
    { org: "Bombardier · CGI", sector: "Industrie et services conseils" },
    { org: "Banque Nationale", sector: "Services financiers" },
    { org: "Université de Montréal", sector: "Secteur public / para-public" },
  ],
  cta: "Lire la méthode",
  // Bandeaux défilants : ce que couvre la pratique, pas un organigramme.
  rowOne: [
    { title: "Diagnostic Orée", note: "Trois jours, six à huit entretiens, un portrait honnête" },
    { title: "En direct avec Aminata", note: "Aucun transfert, aucun consultant junior" },
    { title: "Formation Orée", note: "Bâtie à partir des constats de votre diagnostic" },
    { title: "Appui Orée", note: "Suivi mensuel jusqu'à ce que ça tienne sans nous" },
    { title: "La Loi 25, dans chaque mandat", note: "Consentements, registres, obligations vérifiés" },
  ],
  rowTwo: [
    { title: "Le documentaliste", note: "Chaque réponse cite sa clause" },
    { title: "L'assistant de rédaction", note: "Les faits entrent, le brouillon sort, vous signez" },
    { title: "Le préposé au tri", note: "Trie, et escalade en cas de doute" },
    { title: "Données d'exemple uniquement", note: "Rien de ce que vous saisissez n'est conservé" },
  ],
};

export const ctaBand = {
  titleTop: "Vos frictions n'attendent pas.",
  titleBottom: "Votre plan non plus.",
  body:
    "Trois jours dans votre organisation : six à huit entretiens ciblés, un atelier de groupe optionnel, et une restitution exécutive. Un portrait honnête des frictions humain-IA, livré en deux semaines. Forfait fixe, sur devis.",
  cta: "Réserver un diagnostic",
};

/**
 * Le formulaire. Le champ « Organisation » est de retour parce que la réponse
 * d'Orée dépend du type de pratique qui écrit, et le message de confirmation
 * est celui de l'ancien site.
 *
 * Aucun serveur ne reçoit encore l'envoi : le message est composé dans le
 * logiciel de courriel du visiteur. Voir components/ContactForm.tsx.
 */
export const contactForm = {
  eyebrow: "Écrire un message",
  fields: {
    name: "Nom",
    organization: "Organisation",
    email: "Courriel",
    phone: "Téléphone",
    message: "Message",
  },
  optional: "facultatif",
  submit: "Envoyer",
  subject: "Diagnostic Orée",
  confirmation: {
    title: "Merci — votre message a été envoyé. Nous répondons sous peu.",
    fallback:
      "Si votre logiciel de courriel ne s'est pas ouvert, écrivez directement à aminata.diabate@oreeconseil.ca. Dans un cas comme dans l'autre, vous aurez une réponse en un jour ouvrable.",
    again: "Envoyer un autre message",
  },
};

/**
 * Pas des témoignages. Orée est en prélancement : inventer des clients nommés
 * et des photos serait fabriquer une preuve sociale. Ce sont les objections
 * réelles de chaque public, attribuées au public et non à une personne.
 */
export const questions = {
  eyebrow: "Ce que vous demandez",
  titleTop: "Les questions",
  titleBottom: "Derrière l'hésitation",
  items: [
    {
      who: "PME",
      context: "Tous secteurs",
      quote:
        "« On sait que l'IA devrait nous aider quelque part. On est juste incapables de dire où, et on ne peut pas se permettre un faux départ. »",
    },
    {
      who: "Notaires",
      context: "Vision 2030",
      quote:
        "« Est-ce que je peux approcher un dossier client d'un outil d'IA sans manquer à mon secret professionnel ? »",
    },
    {
      who: "Cabinets d'avocats",
      context: "Devoirs du Barreau",
      quote:
        "« Si le brouillon est faux et qu'il sort sous ma signature, où atterrit la responsabilité, au juste ? »",
    },
    {
      who: "CRHA",
      context: "Lignes directrices de l'ordre",
      quote:
        "« Mon équipe utilise déjà ces outils, discrètement. Comment est-ce que j'encadre ça, au lieu de faire comme si ça n'existait pas ? »",
    },
    {
      who: "Firmes de placement",
      context: "Données sensibles",
      quote:
        "« Où sont physiquement les données, qui peut les lire, et qu'est-ce que je montre à un inspecteur qui le demande ? »",
    },
  ],
};

/** La FAQ prévue au mandat, la friction opérationnelle en premier. */
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
  eyebrow: "Foire aux questions",
  titleTop: "Des réponses honnêtes,",
  titleBottom: "Avant tout mandat",
  items: [
    {
      question: "Qu'est-ce qu'une friction opérationnelle ?",
      answer:
        "Un point du travail quotidien où les choses ralentissent, se répètent ou se perdent. Non pas parce que les gens travaillent mal, mais parce que le processus autour d'eux n'a jamais été repensé pour le volume ou la vitesse d'aujourd'hui. Avec le temps, elle devient invisible : on apprend à vivre avec, on la contourne, et on cesse de la nommer.",
      examples: [
        {
          title: "Double saisie",
          note: "La même information retapée à la main dans des systèmes qui ne se parlent pas.",
        },
        {
          title: "Approbations perdues dans les courriels",
          note: "Des documents qui circulent pour signature, sans étape claire ni suivi.",
        },
        {
          title: "Quelle version est la bonne",
          note: "Plusieurs copies du même document en circulation, sans certitude sur celle qui fait foi.",
        },
      ],
    },
    {
      question: "Pourquoi un diagnostic avant d'agir ?",
      answer:
        "Parce qu'un investissement défendu à l'aveugle coûte plus cher qu'un diagnostic honnête, mené à temps.",
    },
    {
      question: "Pourquoi trois jours seulement ?",
      answer:
        "Un mandat borné force la priorisation. Trois priorités bien choisies valent mieux qu'un audit de trente pages.",
    },
    {
      question: "Pourquoi une consultante indépendante ?",
      answer:
        "Aucun outil à vendre : chaque recommandation part du terrain, jamais d'une entente commerciale.",
    },
    /* Définitions de base reprises de la FAQ de l'ancien site. Les chiffres du
       site sont attribués à l'ISQ et à la CPQ : un lecteur qui ne connaît pas
       ces sigles ne devrait pas avoir à les chercher. */
    {
      question: "Que veut dire « taux d'adoption » ?",
      answer:
        "La proportion d'entreprises qui utilisent déjà l'intelligence artificielle dans leurs opérations courantes, peu importe l'ampleur de l'usage, d'un outil ponctuel à une intégration complète.",
    },
    {
      question: "Que sont l'ISQ et la CPQ ?",
      answer:
        "L'ISQ (Institut de la statistique du Québec) est l'organisme officiel qui produit les statistiques économiques et sociales du gouvernement du Québec. La CPQ (Conseil du patronat du Québec) est la principale association patronale de la province. Les deux publient des études régulières sur l'adoption de l'IA en entreprise, citées tout au long de ce site.",
    },
    {
      question: "Qu'entend-on par PME ?",
      answer:
        "Une PME (petite ou moyenne entreprise) compte généralement moins de 500 employés, la grande majorité des organisations au Québec. C'est le public principal auquel s'adresse Orée, en particulier les plus petites structures qui n'ont ni équipe dédiée ni budget d'expérimentation en IA.",
    },
  ],
};

/**
 * Remplace les médailles du gabarit d'origine, qui étaient de vrais prix
 * juridiques allemands et se liraient comme des titres qu'Orée ne détient pas.
 * Ce sont les cadres avec lesquels la pratique travaille, énoncés comme une
 * portée et non comme une caution.
 */
export const frameworks = {
  eyebrow: "Portée de la pratique",
  titleTop: "Bâtie autour",
  titleBottom: "De vos devoirs",
  body:
    "Orée ne certifie ni n'accrédite personne. La pratique est bâtie autour des obligations que vous portez déjà, pour que ce que vous adoptez résiste à l'examen de ceux qui ont le droit de le mener.",
  items: [
    "Loi 25",
    "Vision 2030",
    "Devoirs du Barreau du Québec",
    "Chambre des notaires",
    "Déontologie CRHA, 2027",
    "LPRPDE",
    "Hébergement des données au Canada",
    "Secret professionnel",
  ],
};

export const cta = {
  title: "Réservez votre diagnostic Orée",
  body:
    "Un appel pour confirmer la portée. Trois jours dans votre organisation. Un portrait honnête de ce qui freine le travail, que vous continuiez avec nous ou non.",
  primary: "Réserver un diagnostic",
  secondary: "Essayer les démos",
};

export const insights = {
  eyebrow: "Publications",
  title: "Depuis la pratique",
  cta: "Lire tous les articles",
};

export const contact = {
  eyebrow: "Contact",
  title: "Réservez votre diagnostic Orée",
  body:
    "Une conversation pour confirmer la portée, sans engagement. Écrivez directement à Aminata et vous aurez une réponse en un jour ouvrable.",
  emailLabel: "Écrire à",
  email: "aminata.diabate@oreeconseil.ca",
  locationLabel: "Basée à",
  location: "Montréal · Cantons-de-l'Est, Québec",
  languagesLabel: "Langues de travail",
  languages: "Français et anglais",
  cta: "Écrire à Aminata",
};

export const footer = {
  columns: [
    {
      label: "Pratique",
      links: [
        { label: "La méthode", href: "/approach" },
        { label: "L'offre", href: "/services" },
        { label: "À propos d'Aminata", href: "/approach#bio" },
        { label: "Le coût de l'inaction", href: "/risks" },
      ],
    },
    {
      label: "Secteurs",
      links: [
        { label: "PME, tous secteurs", href: "/sectors" },
        { label: "Notaires", href: "/sectors/notaries" },
        { label: "Cabinets d'avocats", href: "/sectors/law-firms" },
      ],
    },
    {
      label: "Nous joindre",
      links: [
        {
          label: "aminata.diabate@oreeconseil.ca",
          href: "mailto:aminata.diabate@oreeconseil.ca",
        },
        { label: "Montréal · Cantons-de-l'Est, Québec", href: "/contact" },
        { label: "Bilingue FR · EN", href: "/contact" },
      ],
    },
  ],
  wordmark: "Orée Conseil",
  refrain: "« L'IA rédige. L'humain décide. »",
  refrainGloss: "AI drafts. The human decides.",
  legal: "© 2026 Orée Conseil · Montréal · Cantons-de-l'Est, Québec",
  links: ["Confidentialité", "Avis Loi 25"],
};
