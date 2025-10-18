export const projects = [
  {
    id: "restaurant-app",
    title: "Restaurant App",
    order: 8,
    description: "Application fictive de commande de repas, avec formulaire de paiement en pop-up et manipulation dynamique du DOM.",
    longDescription: `Une application web complète permettant aux utilisateurs de commander des repas en ligne. 
    L'interface utilisateur intuitive permet une navigation fluide entre les différentes catégories de plats.
    Le système de panier dynamique met à jour instantanément les totaux et les quantités.
    Le formulaire de paiement en pop-up offre une expérience de checkout sans friction.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["Dev"],
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
    githubLink: "https://github.com/1peu2lov/Freddy-s-Dinner-app "
  },
  {
    id: "twimba",
    title: "Twimba",
    order: 7,
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
    order: 3,
    description: "Quiz généré dynamiquement à partir de l'API Trivia. Sélection de 5 questions selon difficulté, score intégré.",
    longDescription: `Une application de quiz interactive qui utilise l'API Trivia pour générer des questions dynamiques.
    Les utilisateurs peuvent choisir la difficulté et la catégorie des questions.
    Le système de score intégré permet de suivre ses performances et de les comparer.`,
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "API"],
    tags: ["Dev","Jeu"],
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
    githubLink: "https://github.com/1peu2lov/quizz"
  },
  {
    id: "portfolio",
    title: "Mon Ancien Portfolio",
    order: 4,
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
    liveLink: "https://freddy-belz-port.netlify.app/",
    githubLink: ""
  },
  {
    id: "guess_the_word_game",
    title: "Guess the Word Game",
    order: 5,
    description: "Jeu interactif où le joueur doit deviner un mot lettre par lettre, façon pendu. Interface simple, fun et éducative.",
    longDescription: `Guess the Word Game est un petit jeu web qui permet de s'amuser tout en mettant à l'épreuve son vocabulaire.
    Le joueur doit deviner un mot en proposant une lettre à la fois, avec un nombre limité d'erreurs autorisées.
    Ce projet m'a permis de renforcer ma logique en JavaScript tout en créant une interface engageante.`,
    technologies: ["HTML", "CSS", "JavaScript","React.js"],
    tags: ["Dev", "Jeu"],
    image: "/img/guess_the_word_game.JPG",
    gallery: [
      "/img/guess_the_word_game.JPG"
      // Tu peux en ajouter d'autres ici
    ],
    features: [
      "Interface minimaliste et accessible",
      "Mécanique de jeu fluide",
      "Choix de mots aléatoires",
      "Indicateur d'erreurs restantes"
    ],
    challenges: "Le défi principal était de structurer la logique de jeu pour gérer dynamiquement les lettres proposées et les erreurs, tout en rendant le tout agréable à jouer.",
    liveLink: "",
    githubLink: "https://github.com/1peu2lov/guess_the_word_game"
  },
  {
    id: "site-immobilier-wordpress",
    title: "Site Immobilier WordPress",
    order: 6,
    description: "Plateforme immobilière complète avec Custom Post Types, gestion d'annonces et Theme Builder pour un affichage dynamique des contenus.",
    longDescription: `Un site immobilier complet développé avec WordPress, utilisant des Custom Post Types pour gérer les annonces immobilières.
    Le projet intègre Advanced Custom Fields (ACF) pour créer des champs personnalisés détaillés pour chaque bien.
    L'architecture du site comprend une page d'accueil dynamique, un système de blog intégré et une page de contact interactive.
    Le Theme Builder permet un affichage intelligent des contenus liés avec des requêtes dynamiques personnalisées.`,
    technologies: ["WordPress", "PHP", "ACF", "Elementor Pro"],
    tags: ["Dev", "UX/UI"],
    image: "/img/site_wordpress.png", // Vous devrez ajouter cette image
    gallery: [
      "/img/site_wordpress.png",
      // Ajoutez d'autres images ici
    ],
    features: [
      "Custom Post Type 'Biens immobiliers' avec ACF",
      "Page d'accueil avec dernières annonces et articles",
      "Blog intégré avec temps de lecture estimé",
      "Formulaire de contact avec carte interactive",
      "Affichage dynamique des contenus liés",
      "Templates personnalisés pour chaque type de contenu",
      "Requêtes dynamiques avec exclusion des doublons"
    ],
    challenges: "La principale difficulté était de créer des requêtes dynamiques complexes avec le Theme Builder tout en excluant les contenus actuels pour éviter les doublons, et d'optimiser les performances avec de nombreux champs ACF.",
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: "tournis",
    title: "Refonte de la Maison Tournis",
    order: 1,
    description: "Projet de refonte complète d'une joaillerie bordelaise alliant tradition artisanale et modernité digitale.",
    longDescription: `Dans le cadre de mes études, j'ai participé à la refonte de l'identité visuelle et du site web de la Maison Tournis, joaillier installé à Bordeaux depuis 1896.
    Ce projet consistait à moderniser l'image de marque tout en valorisant son savoir-faire artisanal et son ancrage local.
    Nous avons également conçu une nouvelle expérience utilisateur orientée e-commerce, en respectant les exigences fonctionnelles et l'ADN de la maison.`,
    technologies: ["Next.js", "React.js", "SCSS", "Figma", "SEO"],
    tags: ["Dev", "UX/UI", "Projet 360°","Design"],
    image: "/img/Brandboard.png",
    gallery: [
      "/img/tournis_cover.jpg",
      "/img/tournis_maquette1.jpg",
      "/img/tournis_maquette2.jpg"
      // Ajoute d'autres visuels si tu en as
    ],
    features: [
      "Refonte de l'identité visuelle",
      "Audit UX/UI complet",
      "Maquettes responsive avec Figma",
      "Intégration en Next.js",
      "Optimisation SEO & accessibilité"
    ],
    challenges: "Allier les codes du luxe et de l'artisanat avec une expérience digitale moderne a nécessité une attention particulière au design, à l'ergonomie et à la performance technique.",
    liveLink: "https://tournis.netlify.app/",
    githubLink: "https://github.com/1peu2lov/Joaillerie-Tournis"
  },
  {
    id: "livret-recherche-rvca",
    title: "Livret de Recherche - Marque Blanche RVCA",
    order: 3,
    description: "Mission fictive pour RVCA : création d'une marque blanche pour une plateforme de streaming dédiée aux créateurs artistiques (peinture, danse, illustration, surf, etc.).",
    longDescription: `Dans le cadre d'une mission fictive pour RVCA, j'ai développé un livret de recherche complet pour la création d'une marque blanche.
    Le projet consistait à concevoir une plateforme de streaming innovante dédiée aux créateurs artistiques, englobant des disciplines variées :
    la peinture, la danse, l'illustration et le surf - ce dernier étant considéré comme un art à part entière.
    
    Cette recherche approfondie explore l'identité visuelle de RVCA, ses valeurs liées à l'art et à la créativité, 
    et propose une stratégie de positionnement pour cette nouvelle plateforme streaming. Le livret détaille l'expérience utilisateur, 
    l'architecture de l'information et l'identité graphique de cette plateforme fictive.`,
    technologies: ["Adobe Illustrator", "Adobe InDesign", "Veille Graphique"],
    tags: ["Design", "Projet 360°"],
    image: "/img/livret_rvca.jpg", // Vous devrez ajouter cette image
    gallery: [
      "/img/livret_rvca.jpg",
      "/img/livret_rvca_page1.jpg",
      "/img/livret_rvca_page2.jpg"
      // Ajoutez d'autres pages du livret ici
    ],
    features: [
      "Analyse de l'identité RVCA et de ses valeurs artistiques",
      "Recherche sur l'écosystème créatif et streaming",
      "Conception d'une plateforme multi-disciplinaire",
      "Stratégie de positionnement marque blanche",
      "Mise en page professionnelle avec InDesign",
      "Création d'éléments graphiques sur Illustrator",
      "Document PDF optimisé pour présentation client"
    ],
    challenges: "Le principal défi était de créer une cohérence entre l'ADN authentique de RVCA et le concept innovant d'une plateforme streaming artistique, tout en respectant les codes visuels de la marque et en proposant une expérience adaptée à des créateurs de disciplines très différentes.",
    liveLink: "#",
    githubLink: "#",
    downloadLink: "/pdf/livret_de_recherche_rvca.pdf"
  },
  {
    id: "e-den",
    title: "E-DEN",
    order: 2,
    description: "Plateforme étudiante & freelance rassemblant les créatifs autour de projets collaboratifs. Maquettage complet sur Figma avec focus UX/UI.",
    longDescription: `E-DEN est un concept innovant de plateforme destinée à rassembler étudiants et freelances autour de projets créatifs. 
    Elle vise à créer une communauté active, sécurisée et inspirante, où chacun peut partager ses idées, échanger, collaborer et se faire remarquer.
    Le projet met l'accent sur une expérience utilisateur fluide et intuitive, tout en valorisant la diversité des profils et des créations.
    La plateforme intègre des fonctionnalités communautaires avancées.`,
    technologies: ["Figma", "UX/UI Design", "Design System"],
    tags: ["Design", "UX/UI", "Projet 360°"],
    image: "/img/eden.JPG", // À ajouter
    gallery: [
      "/img/e_den.JPG",
      "/img/e_den_accueil.JPG",
      "/img/e_den_profil.JPG"
    ],
    features: [
      "Maquettes haute-fidélité complètes",
      "Composants interactifs (carrousels, toggles, animations)",
      "Structuration du parcours utilisateur",
      "Guidelines UI cohérentes",
      "Fonctionnalités communautaires intégrées",
      "Système de rôles et modération",
      "Interface responsive et accessible"
    ],
    challenges: "Le principal défi était de concevoir une plateforme qui favorise l'interaction et la collaboration entre des profils très variés (étudiants/freelances) tout en maintenant un environnement sécurisé et une expérience utilisateur fluide pour tous les types d'utilisateurs.",
    liveLink: "https://www.figma.com/design/IX7jAryiPqtq2j7II4KlUg/E-den?node-id=290-581&p=f",
    githubLink: "#"
  },
  {
    id: "del-arte-rebranding",
    title: "Rebranding Del Arte",
    order: 9,
    description: "Refonte complète de l'identité visuelle de Del Arte pour marquer un changement de positionnement stratégique de la marque.",
    longDescription: `Projet de rebranding complet de la chaîne de restauration Del Arte, visant à moderniser et repositionner la marque sur son marché.
    Ce projet stratégique avait pour objectif de créer une nouvelle identité visuelle qui reflète les valeurs renouvelées de l'enseigne.
    La refonte englobait l'ensemble des éléments graphiques : logo, typographie, palette colorimétrique et déclinaisons.
    Le travail s'est concentré sur la création d'un univers visuel cohérent et impactant pour accompagner la transformation de la marque.`,
    technologies: ["Adobe Illustrator", "Branding", "Identité Visuelle"],
    tags: ["Design"],
    image: "/img/del_arte_brandboard.webp",
    gallery: [
      "/img/del_arte_brandboard.webp",
      "/img/del_arte_logo.webp",
      "/img/del_arte_declinaisons.webp"
    ],
    features: [
      "Refonte complète du logo",
      "Nouvelle palette de couleurs",
      "Typographie sur mesure",
      "Guidelines d'identité visuelle",
      "Déclinaisons multi-supports",
      "Brandboard complet",
      "Positionnement stratégique renouvelé"
    ],
    challenges: "Le principal défi était de marquer visuellement le changement de positionnement de la marque tout en conservant une certaine reconnaissance auprès des clients existants, nécessitant un équilibre délicat entre innovation et continuité.",
    liveLink: "#",
    githubLink: "#"
  }
]; 