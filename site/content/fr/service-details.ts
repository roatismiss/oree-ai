/**
 * Une page de détail par service. Même structure que la version anglaise, et
 * mêmes règles : aucun prix, et une limite de portée énoncée franchement.
 */

import type { ServiceDetail } from "../en/service-details";

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "diagnostic",
    n: "01",
    name: "Diagnostic Orée",
    eyebrow: "Service 01 · Le point de départ",
    titleTop: "Trois jours,",
    titleBottom: "avec vous",
    lede:
      "Le diagnostic est le point de départ de tout mandat. Trois jours consacrés à votre organisation — sur place ou à distance, selon ce qui convient le mieux —, à observer le travail tel qu'il se fait vraiment, pour aboutir à un plan chiffré que vous approuvez ligne par ligne.",
    problem: [
      "La plupart des conseils en IA arrivent sous forme de démonstration de produit : voici l'outil, voici ce qu'il fait, signez ici. Pour une pratique réglementée, l'ordre est inversé. On ne peut pas évaluer l'outil avant d'avoir vu comment vos dossiers circulent vraiment, qui les touche, et quelles obligations s'attachent à chaque étape.",
      "Le diagnostic commence donc par l'observation, pas par le logiciel. Nous nous assoyons avec le travail, y compris ce que personne n'écrit : les contournements, les doubles vérifications, les tâches qui grugent discrètement un après-midi entier.",
      "L'atelier de groupe optionnel s'appuie sur la méthode LEGO® Serious Play®, une approche de facilitation reconnue pour faire émerger les frictions que les entretiens seuls ne révèlent pas.",
      "Que la rencontre se déroule sur place ou à distance, l'animation s'appuie sur une formation certifiée en facilitation de rencontres virtuelles.",
    ],
    facts: [
      { label: "Format", value: "Sur place ou à distance" },
      { label: "Durée", value: "Trois jours consécutifs" },
      { label: "Qui participe", value: "Vous et les gens qui font le travail" },
      { label: "Honoraires", value: "Fixes, chiffrés avant le début" },
      { label: "Vous en ressortez avec", value: "Un plan d'action chiffré" },
      { label: "Engagement ensuite", value: "Aucun" },
    ],
    process: [
      {
        n: "01",
        title: "Observer",
        body:
          "Nous regardons le travail tel qu'il se fait, pas tel que le manuel de procédures le décrit. Les dossiers, les transferts, les étapes qui n'existent que dans la tête de quelqu'un.",
        phase: "Jour 1",
      },
      {
        n: "02",
        title: "Relever",
        body:
          "Nous cartographions les tâches que l'IA pourrait réellement porter et celles auxquelles elle ne doit pas toucher. C'est la seconde liste qui compte, et c'est celle que les fournisseurs sautent.",
        phase: "Jour 1 à 2",
      },
      {
        n: "03",
        title: "Évaluer",
        body:
          "Chaque candidate est confrontée aux obligations que vous détenez : secret professionnel, Loi 25, les orientations de votre ordre, et l'endroit où les données se trouveraient physiquement.",
        phase: "Jour 2 à 3",
      },
      {
        n: "04",
        title: "Engager",
        body:
          "Nous chiffrons le plan et vous l'approuvez ligne par ligne. Chaque étape nomme son point de contrôle humain : vous savez qui signe, et à quel moment.",
        phase: "Jour 3",
      },
    ],
    /* Les outils nommés de la méthode, repris de la page « Livrables » de
       l'ancien site. Chacun porte son nom : « la grille Orée » et « la matrice
       de priorisation » sont les instruments propres à la pratique, et les
       nommer est précisément le point. */
    deliverablesIntro: "Des livrables concrets, pas des rapports complexes.",
    deliverables: [
      {
        phase: "Jour 1 · Observer et relever",
        title: "Guide d'entretien structuré",
        body: "Trois profils d'interlocuteurs, avec des questions calibrées portant leur intention et les signaux à détecter.",
      },
      {
        phase: "Jour 1 · Observer et relever",
        title: "La grille Orée",
        body: "L'instrument propre à la pratique. Chaque friction est lue sur cinq dimensions, pour qu'aucune ne soit classée comme un problème d'outil alors qu'elle relève de la gouvernance.",
        points: ["Cognitive", "Processuelle", "Culturelle", "Technique", "Gouvernance"],
      },
      {
        phase: "Jour 2 · Évaluer",
        title: "Matrice de priorisation",
        body: "Effort, valeur et risque sont scorés pour chaque piste, afin de distinguer les gains rapides des chantiers de fond plutôt que de les mélanger.",
        points: ["Effort", "Valeur", "Risque"],
      },
      {
        phase: "Jour 3 · Engager",
        title: "Le plan d'action chiffré",
        body: "Le rapport de restitution : portrait des constats, trois priorités d'action argumentées, et un plan avec échéancier. Remis modifiable, et approuvé par vous ligne par ligne.",
      },
      {
        phase: "Jour 3 · Engager",
        title: "La carte des tâches",
        body: "Ce qui peut être délégué à une machine, ce qui ne peut pas l'être, et le raisonnement pour chaque cas. Utile même si vous n'adoptez rien.",
      },
      {
        phase: "Jour 3 · Engager",
        title: "Le registre des obligations",
        body: "Quelles règles s'appliquent à quelle tâche, consignées dans la forme que vous montreriez à un examinateur.",
      },
      {
        phase: "Continu · Au-delà des trois jours",
        title: "Carte diagnostic",
        body: "Un outil visuel de synthèse organisationnelle, lisible d'un coup d'œil par une direction.",
      },
      {
        phase: "Continu · Au-delà des trois jours",
        title: "Tableau de suivi",
        body: "Des indicateurs personnalisés pour mesurer la progression dans le temps, sans dépendre de la consultante.",
      },
    ],
    pricing: {
      eyebrow: "Ce que ça coûte",
      title: "Deux tarifs, confirmés après l'appel",
      tiers: [
        {
          label: "PME et professions réglementées",
          body: "Le diagnostic se situe entre 3 000 $ et 6 000 $, selon la taille de votre organisation — précisé après l'appel initial.",
        },
        {
          label: "OBNL",
          body: "Un tarif réduit s'applique aux OBNL, entre 1 500 $ et 3 000 $, parce que ce sont des milieux où Orée choisit délibérément d'investir.",
        },
      ],
    },
    notThis:
      "Le diagnostic n'installe rien et ne vous engage pas à un second mandat. Si la réponse honnête est que l'IA a peu à offrir à votre pratique cette année, c'est ce que le plan dira.",
    image: "/img/sector-1.png",
  },

  /* La Formation Orée existait sur l'ancien site sous le nom « Formation Orée »
     et avait disparu lors de la construction du site A. Réintégrée selon le
     plan de lancement : elle fait partie de l'offre officielle. */
  {
    slug: "training",
    n: "02",
    name: "Formation Orée",
    eyebrow: "Service 02 · Monter les équipes en compétence",
    titleTop: "L'équipe apprend",
    titleBottom: "La méthode",
    lede:
      "Programme sur mesure en collaboration humain-IA, construit à partir des constats du diagnostic. Cohorte complète ou séance condensée selon la taille de l'organisation.",
    problem: [
      "Une formation générique en IA enseigne un outil. Une semaine plus tard, l'outil a changé, et personne ne peut dire quelles parties de son propre travail il était censé toucher. La séance était intéressante et rien n'a bougé.",
      "La Formation Orée part des frictions que le diagnostic a déjà nommées chez vous. Les exemples sont vos dossiers, les points de contrôle sont ceux qu'exigent vos obligations, et les gens repartent en sachant lesquelles de leurs tâches ils ont le droit de confier, et lesquelles non.",
      "La conception de Formation Orée s'appuie aussi sur une certification en pédagogie de niveau supérieur obtenue à Harvard.",
    ],
    facts: [
      { label: "Format", value: "Cohorte ou séance condensée" },
      { label: "Bâtie sur", value: "Les constats de votre diagnostic" },
      { label: "Qui participe", value: "Les gens qui font le travail" },
      { label: "Matériel", value: "Rédigé sur vos propres cas" },
      { label: "Vous en ressortez avec", value: "Une équipe capable de mener la méthode" },
      { label: "Honoraires", value: "Fixes, chiffrés avant le début" },
    ],
    process: [
      {
        n: "01",
        title: "Cadrage",
        body:
          "Nous choisissons quels constats le programme couvre, et qui doit être dans la salle. Tout le monde n'a pas besoin de la même séance.",
        phase: "Avant",
      },
      {
        n: "02",
        title: "Construction du matériel",
        body:
          "Les exercices sont rédigés sur vos propres cas, avec les obligations qui s'y appliquent, pour que rien n'ait à être traduit après coup.",
        phase: "Avant",
      },
      {
        n: "03",
        title: "La séance",
        body:
          "Cohorte complète ou format condensé, sur place ou à distance. Les gens travaillent leurs tâches réelles et voient où se place le point de contrôle humain dans chacune.",
        phase: "Le jour même",
      },
      {
        n: "04",
        title: "Ce qui suit",
        body:
          "Le matériel vous reste, accompagné d'une courte liste de ce que l'équipe a demandé et qui n'a pas encore de réponse.",
        phase: "Après",
      },
    ],
    deliverables: [
      {
        title: "Le matériel du programme",
        body: "Rédigé sur vos cas, à vous de le réutiliser pour de nouveaux employés sans revenir vers nous.",
      },
      {
        title: "Des repères par tâche",
        body: "Quelles tâches courantes l'équipe peut confier à une machine, lesquelles non, et où se situe la signature.",
      },
      {
        title: "Les questions ouvertes",
        body: "Ce que l'équipe a soulevé et qui reste sans réponse. Habituellement la page la plus utile du cahier.",
      },
    ],
    notThis:
      "La formation n'est pas une certification et n'accrédite personne. Elle ne remplace pas non plus le diagnostic : sans lui, la séance n'a aucun constat sur lequel se construire.",
    image: "/img/sector-3.png",
  },

  {
    slug: "support",
    n: "03",
    name: "Appui Orée",
    eyebrow: "Service 03 · Le déploiement",
    titleTop: "Jusqu'à ce que",
    titleBottom: "Ça tienne sans nous",
    lede:
      "Un plan sur papier n'est pas un changement de pratique. L'appui, c'est le déploiement accompagné : outils choisis, gabarits rédigés, résultats surveillés, et le travail qui vous est remis.",
    problem: [
      "L'écart entre un plan approuvé et une pratique qui fonctionne, c'est là que la plupart des adoptions échouent. Le gabarit ne finit jamais par être écrit, le point de contrôle est sauté une fois sous la pression d'une échéance, et en un trimestre le bureau est revenu à son point de départ.",
      "L'appui referme cet écart délibérément, et il est conçu pour se terminer. La mesure du succès, c'est que vous n'ayez plus besoin du mandat.",
    ],
    facts: [
      { label: "Format", value: "Déploiement accompagné" },
      { label: "Part de", value: "Un plan que vous avez déjà approuvé" },
      { label: "Cadence", value: "Convenue au départ" },
      { label: "Durée", value: "Jusqu'à ce que la pratique tienne seule" },
      { label: "Vous en ressortez avec", value: "Gabarits, registres et transfert" },
      { label: "Sortie", value: "Planifiée dès le premier jour" },
    ],
    process: [
      {
        n: "01",
        title: "Sélection",
        body:
          "Nous choisissons les outils précis en fonction des exigences du plan, y compris l'endroit où les données résident et ce que les conditions du fournisseur permettent réellement.",
        phase: "Étape 1",
      },
      {
        n: "02",
        title: "Gabarits et points de contrôle",
        body:
          "Les consignes, les formulaires et les étapes de signature sont rédigés pour vos dossiers, pour que l'étape humaine soit intégrée au processus plutôt que laissée à la mémoire.",
        phase: "Étape 2",
      },
      {
        n: "03",
        title: "Mise en service réelle",
        body:
          "Les premiers vrais dossiers passent en notre présence. Ce qui casse ici est plus utile que tout ce qu'un pilote sur données d'exemple aurait montré.",
        phase: "Étape 3",
      },
      {
        n: "04",
        title: "Transfert",
        body:
          "Documentation, un responsable interne nommé, et une date de revue. Nous partons quand la pratique tourne sans nous.",
        phase: "Étape 4",
      },
    ],
    deliverables: [
      {
        title: "Des gabarits qui servent",
        body: "Les consignes et formulaires réellement utilisés par votre personnel, testés sur de vrais dossiers et consignés.",
      },
      {
        title: "Les registres",
        body: "La trace de ce qui a été déployé, de ce que ça touche, et de qui l'a approuvé. La paperasse qu'un examinateur demanderait.",
      },
      {
        title: "Le cahier de transfert",
        body: "Assez de documentation pour qu'une personne nommée à l'interne en soit propriétaire après notre départ.",
      },
    ],
    notThis:
      "L'appui n'est pas un forfait qui se renouvelle discrètement. Il a une fin définie, et si le déploiement se passe mal, nous le dirons et nous arrêterons plutôt que de le prolonger.",
    image: "/img/sector-2.png",
  },

  {
    slug: "law-25-radar",
    n: "04",
    name: "Radar Loi 25",
    eyebrow: "Service 04 · La veille",
    titleTop: "Savoir où",
    titleBottom: "Vous en êtes",
    lede:
      "Les obligations bougent. Le Radar est une veille continue sur celles qui s'appliquent à vous, pour que votre position soit à jour avant que quiconque ait l'occasion de le demander.",
    problem: [
      "Consentements, registres de traitement et journaux d'incidents sont les premières choses demandées lors d'un examen et, d'ordinaire, les dernières préparées. Ce n'est pas difficile, mais ça dérive : un nouvel outil s'ajoute, un fournisseur change ses conditions, un délai de conservation expire, et le registre ne correspond plus à la pratique.",
      "Le Radar empêche l'écart de s'ouvrir. C'est un travail délibérément peu spectaculaire, et c'est celui qui détermine ce qui se passe quand une question arrive.",
    ],
    facts: [
      { label: "Format", value: "Veille continue" },
      { label: "Portée", value: "Consentements, registres, incidents" },
      { label: "Cadres", value: "Loi 25 et LPRPDE" },
      { label: "Reddition", value: "Une position à jour, sur demande" },
      { label: "Vous en ressortez avec", value: "Des registres conformes à la réalité" },
      { label: "Résiliation", value: "En tout temps, les registres restent vôtres" },
    ],
    process: [
      {
        n: "01",
        title: "L'état des lieux",
        body:
          "Nous établissons ce que vous détenez aujourd'hui : quels renseignements personnels, collectés sur quelle base, conservés où, et pour combien de temps.",
        phase: "Mise en place",
      },
      {
        n: "02",
        title: "Les registres",
        body:
          "Les registres de traitement, de consentement et d'incidents sont mis dans une forme qui correspond à la pratique et qu'un examinateur peut lire.",
        phase: "Mise en place",
      },
      {
        n: "03",
        title: "La veille",
        body:
          "Les changements sont suivis à mesure : nouveaux outils, conditions de fournisseurs modifiées, échéances de conservation, orientations qui bougent.",
        phase: "En continu",
      },
      {
        n: "04",
        title: "La position",
        body:
          "À tout moment, vous pouvez demander où vous en êtes et obtenir une réponse écrite, plutôt que d'entamer une fouille interne.",
        phase: "Sur demande",
      },
    ],
    deliverables: [
      {
        title: "Des registres à jour",
        body: "Traitements, consentements et incidents consignés au rythme de ce que la pratique fait réellement.",
      },
      {
        title: "Un journal des changements",
        body: "Ce qui a bougé, quand, et ce qui a été fait. Le récit qu'un examinateur voudra à côté des registres.",
      },
      {
        title: "Une position écrite",
        body: "Où vous en êtes face à vos obligations, disponible sur demande plutôt qu'assemblée dans l'urgence.",
      },
    ],
    notThis:
      "Le Radar n'est pas un avis juridique et ne remplace pas votre conseiller. Il garde vos registres à jour et signale ce qui a bougé ; le jugement juridique reste où il doit être.",
    image: "/img/sector-4.png",
  },
];

export const byService = Object.fromEntries(serviceDetails.map((s) => [s.slug, s]));

export const detailCta = {
  eyebrow: "Prochaine étape",
  title: "Réservez votre diagnostic Orée",
};
