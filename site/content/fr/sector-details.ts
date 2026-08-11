/**
 * Une page de détail par profession, atteinte depuis les rangées « Pour qui ».
 *
 * Règle de PRODUCT.md : parler d'une profession à la fois, dans son propre
 * vocabulaire, avec ses obligations et ses craintes. Jamais « les entreprises »
 * en général.
 */

import type { SectorDetail } from "../en/sector-details";

export const sectorDetails: SectorDetail[] = [
  {
    slug: "notaries",
    name: "Notaires",
    eyebrow: "Secteur · Vision 2030",
    titleTop: "Pour les notaires",
    titleBottom: "Du Québec",
    lede:
      "Vision 2030 a donné une direction et la profession est invitée à bouger. La question n'est plus s'il faut adopter, mais comment adopter sans toucher à ce qui doit rester intouché.",
    situation: [
      "Une étude notariale ne peut pas expérimenter. L'acte authentique porte un poids qu'un projet de contrat n'a pas, et le secret professionnel n'est pas une politique qu'on révise après un incident. Le conseil habituel, essayez et vous verrez, en devient inutilisable.",
      "En même temps, la pression est réelle : les clients attendent des délais plus courts, la Chambre a indiqué où s'en va la profession, et les études qui attendent auront à expliquer ce choix d'ici 2030.",
      "Le passage est étroit, mais il existe. Certaines tâches autour de l'acte, et non à l'intérieur, peuvent être portées par une machine de façon sûre et démontrable. Identifier lesquelles exactement, c'est le travail.",
    ],
    facts: [
      { label: "Cadre", value: "Vision 2030" },
      { label: "Ordre", value: "Chambre des notaires" },
      { label: "S'applique aussi", value: "Loi 25" },
      { label: "Pression à court terme", value: "Projet pilote automne 2026" },
      { label: "Où l'on commence", value: "Production des actes" },
      { label: "Jamais touché", value: "L'acte authentique lui-même" },
    ],
    startingPoints: [
      {
        n: "01",
        title: "Ouverture et montage du dossier",
        body:
          "La collecte des documents avant qu'un dossier soit travaillable. Gros volume, peu de jugement, et l'endroit le plus simple pour redonner du temps sans approcher l'acte.",
        phase: "Habituellement en premier",
      },
      {
        n: "02",
        title: "Lecture des documents longs",
        body:
          "Interroger un titre, une servitude ou un acte antérieur et obtenir une réponse qui cite la clause dont elle provient, pour que la vérification reste à un clic.",
        phase: "Tôt",
      },
      {
        n: "03",
        title: "Premiers jets des clauses standards",
        body:
          "Des clauses répétitives rédigées à partir de vos propres précédents, revues et signées par le notaire. Elle propose, vous décidez.",
        phase: "Une fois la confiance acquise",
      },
      {
        n: "04",
        title: "Le travail de registre",
        body:
          "Consentements, conservation, et les registres Loi 25 qui soutiennent tout le reste, tenus à jour plutôt qu'assemblés sur demande.",
        phase: "En continu",
      },
    ],
    outcomes: [
      {
        title: "Une position défendable",
        body: "Le raisonnement écrit derrière chaque choix : ce qui a été délégué, ce qui ne l'a pas été, et au regard de quelle obligation. Le document que vous montreriez à la Chambre.",
      },
      {
        title: "Du temps repris avant l'acte",
        body: "Les heures récupérées viennent du montage et de la lecture, pas du travail notarial lui-même.",
      },
      {
        title: "Prêts pour le projet pilote",
        body: "Si votre étude est considérée pour le pilote de l'automne, le travail préparatoire est déjà documenté plutôt qu'improvisé.",
      },
    ],
    notThis:
      "Orée n'automatise pas l'acte authentique et déconseillerait quiconque propose de le faire. Le jugement et la signature du notaire sont la raison d'être de la profession, pas un goulot à supprimer.",
    image: "/img/sector-1.png",
  },

  {
    slug: "law-firms",
    name: "Cabinets d'avocats",
    eyebrow: "Secteur · Devoirs du Barreau",
    titleTop: "Pour les cabinets",
    titleBottom: "Du Québec",
    lede:
      "Vos devoirs envers le Barreau ne plient pas devant un nouvel outil. Nous cartographions les tâches de rédaction et d'ouverture de dossier qui peuvent être déléguées, et nous consignons qui signe avant que quoi que ce soit quitte le cabinet.",
    situation: [
      "Dans un cabinet, l'exposition est précise et elle est personnelle. Si un brouillon part de travers sous votre signature, la responsabilité atterrit sur vous, pas sur le fournisseur dont les conditions d'utilisation ont tout décliné.",
      "Pendant ce temps, les outils sont déjà dans l'édifice. Les avocats s'en servent pour un premier jet, pour résumer, pour traduire une clause en langage clair à l'intention d'un client. La plupart des cabinets n'ont aucune position écrite là-dessus.",
      "La question utile n'est pas de savoir si ça se produit, mais où se situe le point de contrôle, et si vous pourriez le décrire au Barreau si on vous le demandait.",
    ],
    facts: [
      { label: "Ordre", value: "Barreau du Québec" },
      { label: "Préoccupation centrale", value: "Sécurité des données clients" },
      { label: "S'applique aussi", value: "Loi 25 et LPRPDE" },
      { label: "Où l'on commence", value: "Ouverture de dossier et rédaction" },
      { label: "Responsabilité", value: "Reste au signataire" },
      { label: "Constat courant", value: "Usage non documenté déjà présent" },
    ],
    startingPoints: [
      {
        n: "01",
        title: "Ce qui est déjà en usage",
        body:
          "Un inventaire honnête des outils présents dans l'édifice, y compris ceux que personne n'a inscrits sur un formulaire. C'est presque toujours la première surprise.",
        phase: "Semaine un",
      },
      {
        n: "02",
        title: "Ouverture de dossier et conflits",
        body:
          "Structurer les nouveaux mandats à mesure qu'ils arrivent. Du travail de volume avec des règles claires, où le gain est réel et le risque, contenable.",
        phase: "Habituellement en premier",
      },
      {
        n: "03",
        title: "Rédaction de premier jet",
        body:
          "Des documents standards rédigés à partir de vos précédents, qui s'arrêtent à un point de contrôle visible. L'avocat révise, l'associé signe, et le dossier consigne les deux.",
        phase: "Une fois la politique établie",
      },
      {
        n: "04",
        title: "La position écrite",
        body:
          "Une courte norme interne sur ce qui peut être délégué et là où un humain doit se tenir. Assez courte pour que les gens la lisent.",
        phase: "En parallèle",
      },
    ],
    outcomes: [
      {
        title: "Une norme interne écrite",
        body: "Ce qui peut être utilisé, pour quoi, avec quel point de contrôle. Le document que vous produiriez si le Barreau demandait comment le cabinet encadre tout ça.",
      },
      {
        title: "Des frontières réglées sur les données clients",
        body: "Quels dossiers peuvent approcher quel outil, décidé sur papier et à l'avance plutôt qu'au cas par cas sous pression d'échéance.",
      },
      {
        title: "Le point de contrôle au dossier",
        body: "La signature consignée dans le mandat, pour que l'étape humaine soit prouvée plutôt que présumée.",
      },
    ],
    notThis:
      "Orée ne donne pas d'avis juridique et ne vous dit pas quelles sont vos obligations professionnelles. Vos devoirs vous appartiennent ; nous veillons à ce que les décisions technologiques soient documentées au regard de ceux-ci.",
    image: "/img/sector-2.png",
  },

  {
    slug: "hr-advisers",
    name: "CRHA et conseillers RH",
    eyebrow: "Secteur · Lignes directrices de l'ordre",
    titleTop: "Pour les CRHA",
    titleBottom: "Et les équipes RH",
    lede:
      "Vos équipes utilisent presque certainement déjà ces outils, discrètement et sans trace. Encadrer cet usage est plus utile que l'interdire, et l'exigence déontologique de 2027 s'en vient de toute façon.",
    situation: [
      "Les RH détiennent le matériel le plus sensible de la plupart des organisations : notes d'évaluation, accommodements médicaux, plaintes, congédiements. C'est aussi la fonction où l'adoption de l'IA risque le plus de se faire de façon informelle, parce que le travail est chargé en rédaction et en correspondance.",
      "Une interdiction ne fonctionne pas ici. Elle sort la pratique des registres sans la faire disparaître, ce qui est le pire des deux mondes : l'exposition demeure et la visibilité est perdue.",
      "L'autre voie consiste à nommer ce qui est permis, à placer les points de contrôle, et à consigner la décision. L'exigence de formation en déontologie de 2027 rend cette documentation doublement utile.",
    ],
    facts: [
      { label: "Ordre", value: "Ordre des CRHA" },
      { label: "Exigence à court terme", value: "Formation en déontologie 2027" },
      { label: "S'applique aussi", value: "Loi 25" },
      { label: "Préoccupation centrale", value: "Données sensibles des employés" },
      { label: "Où l'on commence", value: "Les outils déjà en usage" },
      { label: "Constat courant", value: "Adoption informelle, sans trace" },
    ],
    startingPoints: [
      {
        n: "01",
        title: "Mettre au jour ce qui se passe",
        body:
          "Un inventaire sans reproche de la façon dont l'équipe utilise déjà ces outils. Ça ne fonctionne que si c'est vraiment sans reproche : c'est donc ainsi que nous le menons.",
        phase: "En premier",
      },
      {
        n: "02",
        title: "Tracer la ligne sur les données sensibles",
        body:
          "Quelles catégories de renseignements sur les employés ne doivent jamais approcher un outil externe, écrit assez simplement pour être suivi sous pression.",
        phase: "Immédiatement après",
      },
      {
        n: "03",
        title: "Correspondance et rédaction",
        body:
          "Là où le gain est réel : projets de politiques, descriptions de postes, premiers jets de correspondance courante, tout en s'arrêtant avant tout ce qui concerne une personne nommée.",
        phase: "Une fois la ligne tracée",
      },
      {
        n: "04",
        title: "Le registre de formation",
        body:
          "Une formation de supervision documentée qui répond à l'exigence de 2027 et donne à l'équipe une norme qu'elle peut réellement appliquer.",
        phase: "En vue de 2027",
      },
    ],
    outcomes: [
      {
        title: "L'usage informel ramené au registre",
        body: "Ce que fait l'équipe est visible et encadré, plutôt que de se produire hors de vue parce que c'était interdit.",
      },
      {
        title: "Une frontière sur les données sensibles",
        body: "Une règle écrite sur les renseignements des employés, que le personnel peut suivre sans avoir à demander chaque fois.",
      },
      {
        title: "Une preuve pour 2027",
        body: "Un registre de formation et une norme interne qui répondent à l'exigence déontologique, plutôt que d'être produits contre elle.",
      },
    ],
    notThis:
      "Orée ne construit ni ne recommande d'outils qui notent, classent ou présélectionnent des employés ou des candidats individuels. C'est une catégorie où le risque pour les personnes l'emporte sur le gain d'efficacité, et nous le disons plutôt que d'en établir le devis.",
    image: "/img/sector-3.png",
  },

  {
    slug: "investment-firms",
    name: "Firmes de placement",
    eyebrow: "Secteur · Prêt pour l'inspection",
    titleTop: "Pour les firmes",
    titleBottom: "De placement",
    lede:
      "La première question d'un inspecteur porte sur l'endroit où sont les données et sur qui peut les lire. Nous y répondons sur papier avant tout déploiement, pour que la réponse existe au moment où elle est demandée.",
    situation: [
      "Dans une pratique financière réglementée, la question est rarement de savoir si un outil est utile. Elle est de savoir si vous pouvez décrire, avec précision et par écrit, ce qui arrive aux renseignements d'un client lorsqu'ils passent par cet outil.",
      "La plupart des fournisseurs ne peuvent pas y répondre clairement, et leurs conditions d'utilisation sont rédigées pour éviter de s'engager. C'est un constat en soi, et c'est généralement celui qui détermine la liste retenue.",
      "L'ordre est donc inversé ici : la question des données se règle en premier, et seul ce qui y survit est ensuite évalué au mérite.",
    ],
    facts: [
      { label: "Cadres", value: "Loi 25 et LPRPDE" },
      { label: "Préoccupation centrale", value: "Résidence et accès aux données" },
      { label: "Moteur", value: "Prêt pour l'inspection" },
      { label: "Où l'on commence", value: "L'endroit où sont les données" },
      { label: "Conditions du fournisseur", value: "Lues avant la présélection" },
      { label: "Vous en ressortez avec", value: "Une réponse écrite" },
    ],
    startingPoints: [
      {
        n: "01",
        title: "La question des données d'abord",
        body:
          "Où les renseignements se trouveraient physiquement, qui peut y accéder, sous quelle juridiction, et ce que le fournisseur s'engage à faire par écrit plutôt qu'en marketing.",
        phase: "Avant tout le reste",
      },
      {
        n: "02",
        title: "Lire les conditions comme il faut",
        body:
          "Les ententes de fournisseurs lues pour ce qu'elles permettent réellement, y compris l'entraînement sur vos saisies et les droits des sous-traitants. Ça élimine plus de candidats que n'importe quelle comparaison de fonctionnalités.",
        phase: "Présélection",
      },
      {
        n: "03",
        title: "Recherche et synthèse",
        body:
          "Le gain réel le plus sûr : travailler sur du matériel public et des documents internes qui ne contiennent aucun identifiant de client.",
        phase: "Premier déploiement",
      },
      {
        n: "04",
        title: "Le dossier d'inspection",
        body:
          "La trace écrite de ce qui a été déployé, de ce que ça touche, de qui l'a approuvé et sur quelle base, tenue à jour plutôt qu'assemblée sur demande.",
        phase: "En continu",
      },
    ],
    outcomes: [
      {
        title: "Une position écrite sur les données",
        body: "Où les renseignements résident et qui peut les atteindre, documenté avant le déploiement plutôt que reconstitué après coup.",
      },
      {
        title: "Une liste retenue défendable",
        body: "Des fournisseurs évalués d'abord au regard de vos obligations et ensuite sur leurs fonctionnalités, avec le raisonnement consigné.",
      },
      {
        title: "Le dossier que l'inspecteur demande",
        body: "Des registres à jour des déploiements, des approbations et des flux de données, prêts quand la question arrive.",
      },
    ],
    notThis:
      "Orée ne conseille pas sur les décisions de placement, les modèles ou les systèmes de négociation. La portée, c'est la gouvernance de la technologie et de l'information qu'elle touche, pas le jugement financier qu'elle pourrait éclairer.",
    image: "/img/sector-4.png",
  },

  {
    slug: "nonprofits",
    name: "OBNL",
    eyebrow: "Secteur · Obligations envers les bailleurs et gouvernance",
    titleTop: "Pour les OBNL",
    titleBottom: "Du Québec",
    lede:
      "La mission passe en premier, mais c'est la paperasse derrière elle qui use discrètement l'équipe. La question n'est pas si l'IA peut aider, c'est ce qu'un petit organisme peut adopter sans risquer la confiance sur laquelle il repose.",
    situation: [
      "Un OBNL d'un à dix employés n'a presque jamais de poste dédié à la technologie. La direction générale rédige le rapport de subvention, répond aux donateurs, participe à l'embauche et fait tourner les programmes, souvent le même après-midi. Il n'y a personne à qui demander si un outil est sécuritaire.",
      "En même temps, chaque bailleur veut son propre format, selon son propre échéancier, et les donateurs s'attendent à ce que leurs renseignements soient traités avec autant de soin qu'une institution financière. Un raccourci qui fait gagner un après-midi mais qui abîme cette confiance coûte plus cher qu'il ne rapporte.",
      "La voie à suivre n'est pas d'automatiser la mission. C'est d'automatiser ce qui l'entoure : la paperasse, les formats répétés, le registre que personne n'a le temps de tenir à jour.",
    ],
    facts: [
      { label: "Cadre", value: "Reddition de comptes aux bailleurs" },
      { label: "S'applique aussi", value: "Loi 25" },
      { label: "Enjeu central", value: "Données des donateurs et bénéficiaires" },
      { label: "Point de départ", value: "Rapports et demandes de subvention" },
      { label: "Constat typique", value: "Une seule personne porte tout" },
      { label: "Jamais touché", value: "L'admissibilité à l'aide" },
    ],
    startingPoints: [
      {
        n: "01",
        title: "Rapports et demandes de subvention",
        body:
          "Les sections narratives récurrentes, les tableaux budgétaires et les résumés de résultats que chaque bailleur redemande à chaque cycle, rédigés à partir de vos rapports antérieurs et révisés avant l'envoi.",
        phase: "Habituellement en premier",
      },
      {
        n: "02",
        title: "Dossiers de donateurs et de bénévoles",
        body:
          "Nettoyer et organiser les listes éparpillées entre chiffriers, courriels et la mémoire de quelqu'un, pour que l'information soit utilisable et que les obligations de la Loi 25 qui s'y rattachent soient traçables.",
        phase: "Tôt",
      },
      {
        n: "03",
        title: "Correspondance avec donateurs et partenaires",
        body:
          "Premiers jets de lettres de remerciement, d'infolettres et de courriels aux partenaires. Le travail de volume, pas la relation elle-même.",
        phase: "Une fois les bases en place",
      },
      {
        n: "04",
        title: "Registres de gouvernance",
        body:
          "Politiques, registre des conflits d'intérêts, et la documentation Loi 25 dont le conseil d'administration est ultimement responsable, tenue à jour plutôt qu'assemblée à la hâte avant une réunion.",
        phase: "En continu",
      },
    ],
    outcomes: [
      {
        title: "Du temps rendu à la personne qui n'en a pas",
        body: "Les heures récupérées viennent de la paperasse autour de la mission, pas des programmes ni des relations qui définissent l'organisme.",
      },
      {
        title: "Un dossier que le conseil peut défendre",
        body: "Un raisonnement écrit sur ce qui a été délégué à un outil et ce qui ne l'a pas été, prêt pour un audit de bailleur ou une question du conseil.",
      },
      {
        title: "Prêt pour chaque bailleur, à chaque cycle",
        body: "Des rapports qui prenaient une semaine sont désormais produits à partir d'un processus, plutôt que reconstruits à zéro chaque fois.",
      },
    ],
    notThis:
      "Orée ne recommande jamais l'IA pour décider qui est admissible à un service ou à une aide, lorsque la population desservie est vulnérable. Cette décision reste entre les mains des personnes redevables envers votre conseil et votre communauté, pas un modèle de notation.",
    /* Réservé : le gabarit de détail n'affiche pas ce champ pour l'instant (la
       zone `object` d'Overview n'est pas utilisée), donc aucune image dédiée. */
    image: "/img/sector-1.png",
  },
];

export const bySector = Object.fromEntries(sectorDetails.map((s) => [s.slug, s]));
