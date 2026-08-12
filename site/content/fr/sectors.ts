/** Copie de la page Secteurs. Mêmes règles de voix que content/fr/main.ts. */

export const sectorsHero = {
  eyebrow: "Avec qui Orée travaille",
  titleTop: "Six secteurs.",
  titleBottom: "Une méthode.",
  /* Formulation de la cliente : quatre de ces secteurs sont des hypothèses, pas
     des mandats livrés. L'intro le dit franchement plutôt que de laisser la
     page se lire comme une liste de clients. */
  body:
    "Voici les secteurs vers lesquels Orée choisit de tendre — pas parce qu'ils sont déjà tous des clients, mais parce que ce sont des milieux qui ont un vrai besoin d'une adoption prudente de l'IA, et où la méthode peut apporter beaucoup sans jamais être envahissante. Voici comment elle s'appliquerait dans chacun.",
};

/* Une liste de texte, pas des cartes : le traitement en boîtes avec étiquettes
   laissait croire à des mandats déjà réalisés. L'ordre est celui demandé par la
   cliente — le plus large et le moins risqué en tête, le seul secteur avec un
   vrai client ensuite, puis les quatre professions réglementées. */
export const sectorList = {
  title: "Voici où la méthode se prête",
  items: [
    {
      name: "Petites entreprises",
      slug: "small-business",
      summary:
        "Vous n'avez ni le temps ni le budget pour vous tromper d'outil. Un terrain où la question n'est pas si l'IA peut aider, mais par où commencer avec ce que vous avez déjà.",
    },
    {
      name: "OBNL",
      slug: "nonprofits",
      summary:
        "La mission passe en premier, mais c'est la paperasse derrière elle qui use discrètement l'équipe. Un terrain où une petite équipe peut gagner beaucoup, sans jamais bousculer ce qui compte vraiment.",
    },
    {
      name: "Notaires",
      slug: "notaries",
      summary:
        "Vision 2030 a donné une direction, et la profession sera de plus en plus appelée à s'adapter. Un terrain où je vois un vrai besoin, à condition que rien ne s'approche de l'acte authentique lui-même.",
    },
    {
      name: "Cabinets d'avocats",
      slug: "law-firms",
      summary:
        "Les devoirs envers le Barreau ne laissent aucune place à l'improvisation. Observer avant d'équiper peut faire une vraie différence, sans jamais mettre la signature de l'avocat en jeu.",
    },
    {
      name: "CRHA et conseillers RH",
      slug: "hr-advisers",
      summary:
        "Vos équipes utilisent probablement déjà ces outils, discrètement. Un terrain où je vois un vrai besoin d'encadrement, sans jamais surveiller ni dicter.",
    },
    {
      name: "Firmes de placement",
      slug: "investment-firms",
      summary:
        "La question de la résidence des données et de la traçabilité revient tôt ou tard. Un terrain où je vois un vrai besoin de rigueur documentaire, sans ralentir vos opérations.",
    },
  ],
};

export const demos = {
  title: "Ce qui tourne dans chaque secteur",
  intro:
    "Trois automatisations, adaptées au vocabulaire de chaque profession. Toutes tournent sur des données d'exemple, et toutes se terminent chez un humain.",
  items: [
    {
      name: "Le documentaliste",
      image: "/img/demo-1.png",
      label: "Chaque réponse",
      value: "Cite sa clause",
    },
    {
      name: "L'assistant de rédaction",
      image: "/img/demo-2.png",
      label: "Avant l'envoi",
      value: "L'humain signe",
    },
    {
      name: "Le préposé au tri",
      image: "/img/demo-3.png",
      label: "En cas de doute",
      value: "Il escalade",
    },
  ],
};

export const sectorsCta = {
  title: "Trouvez le point de départ de votre profession",
};
