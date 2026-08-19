/**
 * Copie de la page Offre. Aucun prix : la grille tarifaire d'Orée ne s'invente
 * pas ici. Les descriptions des trois services reprennent celles de la page
 * « Offre » d'oree-conseil.ca.
 */

import type { ServiceCard } from "../en/services";

export const servicesHero = {
  eyebrow: "L'offre Orée",
  titleTop: "Ce que vous gardez,",
  titleBottom: "après le mandat",
  body:
    "Une offre ciblée, une seule méthode. Chaque mandat se termine par quelque chose d'écrit, que vous gardez et pouvez appliquer, que le travail se poursuive avec nous ou non. Le diagnostic est le point de départ de tout engagement.",
};

const serviceCards: ServiceCard[] = [
    {
      name: "Diagnostic Orée",
      summary:
        "Trois jours consacrés à votre organisation — sur place ou à distance, selon ce qui convient le mieux. Nous observons le travail tel qu'il se fait vraiment, cartographions les tâches que l'IA peut porter et celles qu'elle ne peut pas, et confrontons chaque candidate aux obligations que vous détenez déjà.",
      meta: [
        { label: "Format", value: "Sur place ou à distance" },
        { label: "Durée", value: "Trois jours sur deux semaines" },
        { label: "Vous en ressortez avec", value: "Un plan d'action chiffré" },
      ],
      note: "À partir de 1 500 $ (OBNL) ou 3 000 $ — les autres services sont établis sur mesure.",
    },
    {
      name: "Formation Orée",
      summary:
        "Programme sur mesure en collaboration humain-IA, construit à partir des constats du diagnostic. Cohorte complète ou séance condensée selon la taille de l'organisation.",
      meta: [
        { label: "Format", value: "Cohorte ou séance condensée" },
        { label: "Bâtie sur", value: "Les constats du diagnostic" },
        { label: "Vous en ressortez avec", value: "Une équipe autonome sur les outils retenus" },
      ],
    },
    {
      name: "Appui Orée",
      /* Sa formulation d'origine en tête : le suivi mensuel est ce qui définit
         le service dans son propre document, et il avait disparu. */
      summary:
        "Suivi mensuel sur la durée pour ancrer les changements dans les pratiques réelles des équipes, avec ajustements continus. Outils choisis, gabarits rédigés, et la pratique vous est remise dès qu'elle tient sans nous.",
      meta: [
        { label: "Format", value: "Déploiement accompagné" },
        { label: "Durée", value: "Jusqu'à ce que ça tienne" },
        { label: "Vous en ressortez avec", value: "Gabarits et registres" },
      ],
    },
    {
      name: "Radar Loi 25",
      /* Rien n'est surveillé : le Radar cartographie des processus et nomme
         les facteurs à risque. La formulation précédente promettait une veille
         continue, ce que la pratique n'offre pas. */
      summary:
        "Une cartographie, processus par processus, des cas d'usage touchés par l'IA dans votre organisation. Elle repère où l'ÉFVP, l'information des personnes concernées et la révision humaine des décisions sont réelles — ou seulement en apparence — et attribue à chaque processus un niveau de risque opérationnel.",
      meta: [
        { label: "Format", value: "Cartographie de processus" },
        { label: "Portée", value: "Les processus touchés par l'IA" },
        { label: "Vous en ressortez avec", value: "Un niveau de risque par processus" },
      ],
    },
];

export const serviceList = {
  eyebrow: "En détail",
  title: "Les services",
  items: serviceCards,
};

export const included = {
  title: "Dans chaque mandat",
  intro: "Ce ne sont pas des options. Ce sont les conditions dans lesquelles la pratique travaille.",
  items: [
    {
      title: "Un point de contrôle humain à chaque étape",
      body: "Chaque automatisation nomme qui signe, et à quel moment. Rien ne quitte le bureau sans attribution.",
    },
    {
      title: "Forfait fixe, chiffré avant le début du travail",
      body: "Vous connaissez le coût dès le départ. Pas de dérive horaire, pas de portée qui s'élargit une fois le mandat lancé.",
    },
    {
      title: "Indépendante de tout fournisseur",
      body: "Aucune commission, aucune entente de revente, aucun logiciel maison à vous vendre. La recommandation est le produit.",
    },
    {
      title: "Données hébergées au Canada",
      body: "Les démonstrations tournent sur des données d'exemple uniquement. L'endroit où se trouveraient les vraies données est réglé sur papier avant tout déploiement.",
    },
    {
      title: "Tout ce qui est livré vous appartient",
      body: "Le plan, les gabarits, les registres. Vous pouvez mener le travail avec nous, avec quelqu'un d'autre, ou seul.",
    },
  ],
};

export const servicesCta = {
  title: "Commencer par le diagnostic",
};
