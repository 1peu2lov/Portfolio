export const projects = [
  {
    id: "restaurant-app",
    title: "Restaurant App",
    description: "Application fictive de commande de repas, avec formulaire de paiement en pop-up et manipulation dynamique du DOM.",
    longDescription: `Une application web complète permettant aux utilisateurs de commander des repas en ligne. 
    L'interface utilisateur intuitive permet une navigation fluide entre les différentes catégories de plats.
    Le système de panier dynamique met à jour instantanément les totaux et les quantités.
    Le formulaire de paiement en pop-up offre une expérience de checkout sans friction.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["Dev", "Design"],
    image: "/img/Restaurant_app.JPG",
    gallery: [
      "/img/Restaurant_app.JPG",
      // Ajoutez d'autres images ici
    ],
    features: [
      "Interface responsive",
      "Panier dynamique",
      "Formulaire de paiement sécurisé",
      "Animations fluides"
    ],
    challenges: "L'un des principaux défis était de créer une expérience utilisateur fluide tout en gérant un état complexe pour le panier d'achat.",
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: "twimba",
    title: "Twimba",
    description: "Clone de Twitter permettant de poster des tweets, avec sauvegarde locale grâce au localStorage.",
    longDescription: `Une réplique des fonctionnalités principales de Twitter, permettant aux utilisateurs de poster, 
    liker et retweeter du contenu. Les données sont persistantes grâce à l'utilisation du localStorage.
    L'interface reproduit fidèlement l'expérience Twitter tout en y ajoutant des touches personnelles.`,
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    tags: ["Dev"],
    image: "/img/twimba_app.JPG",
    gallery: [
      "/img/twimba_app.JPG",
      // Ajoutez d'autres images ici
    ],
    features: [
      "Publication de tweets",
      "Système de like et retweet",
      "Persistance des données",
      "Interface responsive"
    ],
    challenges: "Le principal défi était de gérer efficacement l'état de l'application et la persistance des données tout en maintenant une interface réactive.",
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: "quizzical",
    title: "Quizzical",
    description: "Quiz généré dynamiquement à partir de l'API Trivia. Sélection de 5 questions selon difficulté, score intégré.",
    longDescription: `Une application de quiz interactive qui utilise l'API Trivia pour générer des questions dynamiques.
    Les utilisateurs peuvent choisir la difficulté et la catégorie des questions.
    Le système de score intégré permet de suivre ses performances et de les comparer.`,
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "API"],
    tags: ["Dev", "Design"],
    image: "/img/quizzical_app.JPG",
    gallery: [
      "/img/quizzical_app.JPG",
      // Ajoutez d'autres images ici
    ],
    features: [
      "Questions générées dynamiquement",
      "Sélection de la difficulté",
      "Système de score",
      "Feedback instantané"
    ],
    challenges: "L'intégration de l'API et la gestion des états asynchrones tout en maintenant une expérience utilisateur fluide était un défi majeur.",
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: "portfolio",
    title: "Mon Portfolio",
    description: "Site personnel mettant en avant mes projets et compétences front-end. Navigation fluide, responsive et formulaire de contact.",
    longDescription: `Mon portfolio personnel, conçu pour présenter mes projets et compétences de manière élégante et professionnelle.
    Le site utilise les dernières technologies web pour offrir une expérience utilisateur optimale.
    L'accent a été mis sur la performance et l'accessibilité.`,
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "API"],
    tags: ["Dev", "Design"],
    image: "/img/mon_site.JPG",
    gallery: [
      "/img/mon_site.JPG",
      // Ajoutez d'autres images ici
    ],
    features: [
      "Design responsive",
      "Animations fluides",
      "Mode sombre/clair",
      "Formulaire de contact"
    ],
    challenges: "Créer une expérience utilisateur cohérente tout en showcasing mes compétences techniques et créatives était le principal défi.",
    liveLink: "#",
    githubLink: "#"
  }
]; 