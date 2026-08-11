/**
 * « Le coût de l'inaction », repris d'oree-conseil.ca. Le texte français est
 * celui de la cliente, mot pour mot : la phrase d'introduction comme les dates
 * et les faits des quatre cas historiques.
 */

export const costOfInaction = {
  eyebrow: "Pourquoi Orée",
  title: "Le coût de l'inaction",
  items: [
    {
      title: "L'écart qui se creuse",
      body: "Il compose, il ne se stabilise pas.",
    },
    {
      title: "Le rattrapage coûte plus cher que l'attente",
      body: "L'histoire économique le confirme, encore et encore.",
    },
    {
      title: "L'IA non gouvernée, pas l'absence d'IA",
      body:
        "Sans démarche structurée, les équipes utilisent déjà des outils grand public, sans cadre ni supervision.",
    },
    {
      title: "Des décisions prises à l'aveugle",
      body: "Sans appropriation personnelle, l'intuition remplace les faits.",
    },
  ],
  cta: "Voir des exemples dans l'histoire",
};

export const risksHero = {
  eyebrow: "Pourquoi Orée",
  titleTop: "Le coût",
  titleBottom: "De l'inaction",
  intro: "Le vrai risque n'est pas d'agir trop tôt en IA — c'est d'agir trop tard.",
};

/** Les mêmes quatre constats, dans la forme longue de la page dédiée. */
export const risksReasons = [
  {
    title: "L'écart qui se creuse",
    body: "Les PME adoptent l'IA deux fois moins vite que les grandes entreprises.",
    note: "un écart de départ, pas d'arrivée.",
  },
  {
    title: "Le rattrapage coûte plus cher que l'attente",
    body: "L'histoire économique le confirme, encore et encore.",
    note: "voir Blockbuster face à Netflix, ci-dessous.",
  },
  {
    title: "L'IA non gouvernée, pas l'absence d'IA",
    body:
      "Le vrai risque pour un cabinet réglementé : un usage informel, sans cadre, chez vos équipes.",
  },
  {
    title: "Des décisions prises à l'aveugle",
    body: "Sans appropriation personnelle, l'intuition remplace les faits.",
  },
];

export const risksCases = {
  title: "Chaque révolution technologique a connu ce même écart",
  items: [
    {
      period: "1879-1920s",
      name: "L'électricité",
      body:
        "En 1899, moins de 5 % de la force motrice des usines vient de moteurs électriques. Le vrai gain n'arrive que dans les années 1920, une fois les usines redessinées, quarante ans après l'invention.",
    },
    {
      period: "1970-2003",
      name: "L'informatique en entreprise",
      body:
        "En 1987, le paradoxe de Solow : « on voit l'ère de l'informatique partout, sauf dans les statistiques de productivité. » Le gain n'arrive qu'entre 1995 et 2003.",
    },
    {
      period: "2007-2016",
      name: "Nokia · BlackBerry",
      body:
        "L'iPhone arrive en 2007. Les ripostes tardives (BlackBerry Storm, alliance Nokia-Microsoft) échouent. En 2013-2016, les deux abandonnent leur activité de fabricant, neuf ans plus tard.",
    },
    {
      period: "2000-2010",
      name: "Blockbuster face à Netflix",
      body:
        "Netflix propose de se vendre à Blockbuster pour 50 M$ en 2000, refusé. En 2010, Blockbuster dépose le bilan ; ses actions ont perdu 91 % de leur valeur.",
    },
  ],
  closing:
    "Le problème n'a jamais été l'investissement, c'est ce qu'on fait, ou ce qu'on ne fait pas, dans les semaines qui suivent.",
};

export const risksCta = {
  title: "Réservez votre diagnostic Orée",
};
