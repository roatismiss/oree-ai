/**
 * Les trois articles de lancement, en version intégrale. Mêmes règles de voix
 * que content/fr/main.ts : conseillère et non fournisseuse, noms précis, aucune
 * preuve sociale inventée. Chaque affirmation est appuyée par la liste des
 * sources en fin d'article ; les citations sont textuelles.
 *
 * Les citations en bloc gardent leur français d'origine : plusieurs proviennent
 * de documents publiés en français, et c'est la version qui fait foi.
 */

import type { Article } from "../en/insights";

export const insightsHero = {
  eyebrow: "Publications",
  titleTop: "Nos publications",
  body:
    "Des articles courts et sourcés sur l'IA et les obligations de la pratique réglementée au Québec. Écrits pour des associés et des dirigeants, pas pour des ingénieurs. Chaque affirmation cite d'où elle vient.",
};

export const insightsIndexCta = {
  title: "Portez la question à vos propres dossiers",
};

export const articles: Article[] = [
  {
    slug: "ai-law-firm-client-data",
    title: "Comment un cabinet peut utiliser l'IA sans exposer les données de ses clients",
    date: "14 juil. 2026",
    excerpt:
      "Où les dossiers clients peuvent aller et où ils ne peuvent pas, ce que vos devoirs envers le Barreau exigent réellement, et les points de contrôle qui empêchent un brouillon de quitter le cabinet sans signature.",
    image: "/img/blog-1.png",
    readingTime: "6 min de lecture",
    blocks: [
      {
        type: "p",
        text: "La crainte n'est pas irrationnelle. Une consigne tapée dans un agent conversationnel grand public quitte le cabinet, atterrit sur des serveurs que vous ne contrôlez pas, et peut être conservée en vertu de conditions que personne au cabinet n'a lues. Pour une profession bâtie sur le secret professionnel, ce n'est pas un détail. C'est toute la question.",
      },
      {
        type: "p",
        text: "C'est aussi, de plus en plus, une question encadrée. Le Barreau du Québec a publié son guide pratique sur l'IA générative en octobre 2024, et il n'a pas dit aux avocats de s'abstenir. Il leur a dit d'utiliser ces outils de façon responsable, et il a écrit ce que responsable veut dire.",
      },
      { type: "h2", text: "Ce que le Barreau dit réellement" },
      {
        type: "quote",
        fr: "« Il est essentiel d'encadrer son usage pour protéger le public et garantir que la justice bénéficie pleinement de son potentiel. »",
        en: "It is essential to govern its use, to protect the public and to ensure that justice benefits fully from its potential.",
        source: "Barreau du Québec, lancement du guide pratique, octobre 2024",
      },
      {
        type: "p",
        text: "Le guide, intitulé L'intelligence artificielle générative : guide pratique pour une utilisation responsable, couvre la confidentialité, la vérification, la transparence envers les clients et la facturation. Son objectif déclaré est un usage prudent, réfléchi et éthique de ces technologies dans le travail juridique. Le Barreau a depuis annoncé de la formation continue sur l'encadrement de l'IA générative en pratique, dont une formation désignée obligatoire pour les membres.",
      },
      { type: "h2", text: "Trois règles portent l'essentiel" },
      {
        type: "list",
        items: [
          "Les données clients n'entrent jamais dans un système ouvert. Tout ce qui est protégé par le secret professionnel reste dans des environnements que le cabinet contrôle, sous des contrats qui disent où sont les données et ce que le fournisseur peut en faire. Au Québec, cette conversation inclut désormais la Loi 25 et l'hébergement des données au Canada.",
          "Tout ce qui quitte le cabinet est vérifié par un avocat. L'IA générative écrit avec la même assurance quand elle a raison et quand elle a tort. La signature au bas de la lettre est la vôtre : la lecture doit l'être aussi.",
          "Le client n'est pas un spectateur. Le guide traite la transparence envers les clients comme faisant partie de la relation professionnelle, et les honoraires reflètent le temps réellement investi, pas le temps que la tâche prenait avant l'existence de l'outil.",
        ],
      },
      { type: "h2", text: "Là où l'IA aide sans toucher au secret" },
      {
        type: "p",
        text: "La bonne surprise, c'est la part de la charge quotidienne d'un cabinet qui n'exige jamais que des secrets de clients quittent l'édifice. Un documentaliste qui répond uniquement à partir d'un document que vous lui fournissez, et qui cite la clause sur laquelle il s'appuie. Un assistant de rédaction qui remplit un gabarit approuvé avec des faits que vous avez saisis, puis attend une signature. Un préposé au tri qui classe une boîte de réception et escalade tout ce dont il n'est pas sûr. Chacun peut être testé sur des données d'exemple avant qu'un seul dossier client soit en jeu, ce qui est exactement le fonctionnement des démonstrations de ce site.",
      },
      {
        type: "p",
        text: "Rien de tout cela ne retire le jugement. Cela déplace les heures. L'avocat cesse de relire un dossier de quarante pages pour trouver une clause et commence à la clause, en décidant ce qu'elle signifie.",
      },
      { type: "h2", text: "Le plancher de conformité en dessous" },
      {
        type: "p",
        text: "Quels que soient les outils qu'un cabinet adopte, la Loi 25 continue de s'appliquer : une personne responsable de la protection des renseignements personnels, un registre des incidents conservé au moins cinq ans, et la notification à la Commission d'accès à l'information sans délai lorsqu'un incident présente un risque de préjudice sérieux. Adopter l'IA ne relève pas ce plancher. Cela rend simplement plus visible le fait de s'y tenir.",
      },
      {
        type: "note",
        text: "La version courte : le Barreau n'a pas demandé aux avocats de choisir entre la compétence et la confidentialité. Il leur a demandé de prouver qu'ils peuvent tenir les deux. C'est un problème d'opérations, et les problèmes d'opérations ont des plans.",
      },
    ],
    sources: [
      {
        label: "Barreau du Québec, Intelligence artificielle générative (carrefour de ressources)",
        url: "https://www.barreau.qc.ca/en/membres-ordre/ressources/standards-tools-references-guides/intelligence-artificielle-generative/",
      },
      {
        label:
          "Barreau du Québec, Le Barreau lance le Guide pratique pour une utilisation responsable (octobre 2024)",
        url: "https://www.barreau.qc.ca/en/new/notices-to-members/barreau-lance-guide-pratique-utilisation-responsable-intelligence-artificielle-generative/",
      },
      {
        label:
          "Barreau du Québec, Encadrer l'IA générative dans la pratique du droit : repères déontologiques et professionnels",
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
    title: "Ce que Vision 2030 demande aux notaires, en clair",
    date: "30 juin 2026",
    excerpt:
      "La Chambre des notaires a donné une direction. Voici ce que ça veut dire pour une étude de trois personnes, et ce qu'il faut avoir prêt avant le projet pilote de l'automne.",
    image: "/img/blog-2.png",
    readingTime: "5 min de lecture",
    blocks: [
      {
        type: "p",
        text: "Demandez à trois notaires ce que le virage numérique signifie et vous obtiendrez trois réponses : les signatures, les logiciels, et le problème de quelqu'un d'autre. La direction donnée par la profession est plus concrète que ça, et elle mérite d'être redite en clair.",
      },
      { type: "h2", text: "La direction est publique" },
      {
        type: "p",
        text: "La Chambre des notaires a été explicite sur son cap vers un notariat entièrement technologique. Les actes notariés sur support technologique ne sont plus une curiosité : le Greffe central numérique, le registre numérique central de la profession, est en fonction, et la cohorte de notaires assermentés cette année s'y joint dès son premier jour de pratique. Un projet de loi déposé à l'Assemblée nationale pointe vers une signature numérique qui deviendrait la norme pour les actes notariés plutôt que l'exception.",
      },
      {
        type: "p",
        text: "En parallèle, des orientations sont produites sur l'utilisation de l'intelligence artificielle en pratique notariale, sur la vérification, la confidentialité et la responsabilité. Le message est constant d'un document à l'autre : les outils peuvent entrer, les obligations ne bougent pas.",
      },
      { type: "h2", text: "Ce que ça veut dire pour une étude de trois personnes" },
      {
        type: "list",
        items: [
          "Vos actes deviennent des données. Un acte qui vit dans un registre numérique peut être cherché, vérifié et réutilisé d'une façon que le papier n'a jamais permise. C'est une efficacité et une responsabilité en même temps.",
          "Votre ouverture de dossier devient le goulot. Une fois la signature numérique, la partie lente d'un dossier, c'est tout ce qui la précède : rassembler les faits, vérifier l'identité, monter les pièces. C'est là que l'automatisation bien encadrée paie en premier.",
          "Vos obligations suivent le dossier. Le secret professionnel et la Loi 25 s'appliquent à l'acte technologique exactement comme ils s'appliquaient au papier, y compris le registre des incidents et le devoir d'aviser la Commission d'accès à l'information lorsqu'un risque sérieux apparaît.",
        ],
      },
      { type: "h2", text: "La vague plus large, mesurée" },
      {
        type: "p",
        text: "L'Institut de la statistique du Québec a mesuré 12,7 pour cent des entreprises québécoises utilisant l'IA en production dans les douze mois précédant la mi-2025, la finance et l'assurance figurant parmi les secteurs de tête et l'analyse de texte étant l'usage le plus courant. Les services professionnels se situent dans le peloton supérieur. La vague ne s'en vient pas. Elle est là, et elle est inégalement encadrée.",
      },
      { type: "h2", text: "Avant le projet pilote de l'automne" },
      {
        type: "list",
        items: [
          "Un inventaire : quels systèmes détiennent aujourd'hui des renseignements personnels, et qui peut les lire.",
          "Une personne nommée responsable de la protection des renseignements personnels, comme l'exige la Loi 25, même dans une étude de trois personnes.",
          "Un processus cartographié de bout en bout. La production des actes est le candidat évident, pour que tout outil que vous testez atterrisse sur un processus que vous comprenez vraiment.",
          "Une règle que votre équipe peut réciter : le logiciel prépare, le notaire décide.",
        ],
      },
      {
        type: "note",
        text: "Rien de tout cela n'exige d'acheter quoi que ce soit. Cela exige trois jours à regarder honnêtement comment le travail circule vraiment, ce qui est précisément à quoi sert un diagnostic.",
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
    title: "Loi 25 : les registres qui manquent à la plupart des pratiques",
    date: "12 juin 2026",
    excerpt:
      "Consentements, incidents et registres de traitement sont la première chose demandée et la dernière préparée. Une courte liste de vérification à passer cette semaine.",
    image: "/img/stats-lawbook.png",
    readingTime: "5 min de lecture",
    blocks: [
      {
        type: "p",
        text: "Quand la Commission d'accès à l'information demande à une entreprise son registre des incidents, la réponse honnête dans bien des bureaux est un silence. Tout le monde se souvient des bandeaux de consentement. Moins de gens se souviennent que la Loi 25 a fait de la tenue de registres elle-même une obligation.",
      },
      { type: "h2", text: "Le registre que vous devez pouvoir produire" },
      {
        type: "p",
        text: "Toute entreprise, quelle que soit sa taille, doit tenir un registre des incidents de confidentialité et en fournir une copie à la Commission sur demande. Les orientations de la Commission sont précises sur ce que contient une inscription :",
      },
      {
        type: "list",
        items: [
          "une description des renseignements personnels visés, ou la raison pour laquelle ils ne peuvent être identifiés ;",
          "les circonstances de l'incident, et sa date ou sa période, même approximative ;",
          "la date ou la période où l'entreprise en a pris connaissance ;",
          "le nombre de personnes concernées, même approximatif ;",
          "l'évaluation du risque de préjudice sérieux : sensibilité des renseignements, usages malveillants possibles, conséquences prévisibles, probabilité ;",
          "lorsque le risque était sérieux, les dates de notification à la Commission et aux personnes concernées ;",
          "les mesures prises pour réduire le risque.",
        ],
      },
      {
        type: "p",
        text: "Les inscriptions sont conservées au minimum cinq ans après que l'entreprise a pris connaissance de l'incident. Lorsqu'un incident présente un risque de préjudice sérieux, l'entreprise avise la Commission et les personnes concernées sans délai, au moyen du formulaire officiel de la Commission.",
      },
      { type: "h2", text: "Les registres autour du registre" },
      {
        type: "p",
        text: "Le registre des incidents voyage rarement seul. La même réforme attend une personne désignée responsable de la protection des renseignements personnels, des politiques et pratiques de gouvernance publiées, et des évaluations des facteurs relatifs à la vie privée lors de l'acquisition ou de la refonte de systèmes touchant des renseignements personnels. Une pratique qui adopte des outils d'IA rencontre immédiatement la dernière : l'évaluation est l'endroit naturel pour écrire ce qu'un outil peut lire, où ses données se trouvent physiquement, et qui en vérifie la sortie.",
      },
      {
        type: "p",
        text: "Une disposition de plus compte pour l'IA en particulier. Lorsqu'une décision concernant une personne est fondée exclusivement sur un traitement automatisé, la personne doit en être informée. La façon la plus propre de ne jamais buter sur cette règle est la discipline qui vaut la peine d'être adoptée de toute manière : aucune décision ne quitte le bureau sans qu'un humain l'ait lue.",
      },
      { type: "h2", text: "Une liste de vérification à passer cette semaine" },
      {
        type: "list",
        items: [
          "Nommer par écrit la personne responsable de la protection des renseignements personnels.",
          "Créer le registre des incidents aujourd'hui, même vide. Un registre vide, c'est de la conformité. Un registre absent, c'est de l'exposition.",
          "Lister les systèmes qui détiennent des renseignements personnels, et l'endroit où les données se trouvent physiquement.",
          "Rédiger la procédure en deux paragraphes : qui évalue un incident, qui appelle la Commission.",
          "Placer un point de contrôle humain sur toute sortie automatisée qui touche le dossier d'une personne.",
        ],
      },
      {
        type: "note",
        text: "Les sanctions pécuniaires donnent à l'exercice son tranchant, puisque la réforme a doté la Commission de sanctions administratives qui atteignent les millions. Mais l'argument le plus discret est le meilleur. Ces registres, c'est à quoi ressemble le fait d'avoir la maîtrise de ses dossiers, mis par écrit.",
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
        label: "Commission d'accès à l'information, formulaire officiel de déclaration d'incident",
        url: "https://formulaire.cai.gouv.qc.ca/",
      },
    ],
  },
];
