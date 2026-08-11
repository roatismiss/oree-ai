/** Copie de la page Secteurs. Mêmes règles de voix que content/fr/main.ts. */

export const sectorsHero = {
  eyebrow: "Avec qui Orée travaille",
  titleTop: "Cinq secteurs.",
  titleBottom: "Une méthode.",
  /* « Secteurs » plutôt que « professions » depuis l'ajout des OBNL : un
     organisme n'est pas une profession. */
  body:
    "Chacun d'eux porte des obligations qui rendent coûteuse une adoption négligente de l'IA. C'est précisément pour ça que la méthode commence par les obligations plutôt que par les outils.",
};

export const sectorList = {
  eyebrow: "Par profession",
  title: "Où la méthode se pose",
  items: [
    {
      name: "Notaires",
      slug: "notaries",
      image: "/img/sector-1.png",
      summary:
        "Vision 2030 a donné une direction et la profession est invitée à bouger. La question n'est plus s'il faut adopter, mais comment adopter sans toucher à ce qui doit rester intouché.",
      meta: [
        { label: "Cadre", value: "Vision 2030" },
        { label: "Pression", value: "Projet pilote automne 2026" },
        { label: "Où l'on commence", value: "Production des actes" },
      ],
    },
    {
      name: "Cabinets d'avocats",
      slug: "law-firms",
      image: "/img/sector-2.png",
      summary:
        "Vos devoirs envers le Barreau ne plient pas devant un nouvel outil. Nous cartographions les tâches de rédaction et d'ouverture de dossier qui peuvent être déléguées, et nous consignons qui signe avant que quoi que ce soit quitte le cabinet.",
      meta: [
        { label: "Cadre", value: "Devoirs du Barreau" },
        { label: "Pression", value: "Sécurité des données clients" },
        { label: "Où l'on commence", value: "Ouverture de dossier et rédaction" },
      ],
    },
    {
      name: "CRHA et conseillers RH",
      slug: "hr-advisers",
      image: "/img/sector-3.png",
      summary:
        "Vos équipes utilisent presque certainement déjà ces outils, discrètement et sans trace. Encadrer cet usage est plus utile que l'interdire, et l'exigence déontologique de 2027 s'en vient de toute façon.",
      meta: [
        { label: "Cadre", value: "Lignes directrices de l'ordre" },
        { label: "Pression", value: "Formation en déontologie 2027" },
        { label: "Où l'on commence", value: "Les outils déjà en usage" },
      ],
    },
    {
      name: "Firmes de placement",
      slug: "investment-firms",
      image: "/img/sector-4.png",
      summary:
        "La première question d'un inspecteur porte sur l'endroit où sont les données et sur qui peut les lire. Nous y répondons sur papier avant tout déploiement, pour que la réponse existe au moment où elle est demandée.",
      meta: [
        { label: "Cadre", value: "Loi 25 et LPRPDE" },
        { label: "Pression", value: "Prêt pour l'inspection" },
        { label: "Où l'on commence", value: "Résidence des données" },
      ],
    },
    {
      name: "OBNL",
      slug: "nonprofits",
      image: "/img/sector-1.png",
      summary:
        "La mission passe en premier, mais c'est la paperasse derrière elle qui use discrètement l'équipe. La question n'est pas si l'IA peut aider, c'est ce qu'un petit organisme peut adopter sans risquer la confiance sur laquelle il repose.",
      meta: [
        { label: "Cadre", value: "Reddition aux bailleurs" },
        { label: "Enjeu central", value: "Données des donateurs" },
        { label: "Où l'on commence", value: "Rapports de subvention" },
      ],
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
