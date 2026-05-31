const PROJECT_FR = {

    // ── Général ───────────────────────────────────────────────────────────────
    title:   "Stereogame",
    label:   "Partenariat professionnel / Jeu Web",
    banner:  "../../Sources/Projects/Gifs/Stereogame.gif",
    context: `Jeu web multijoueur créé en collaboration avec
              Stereolux et E-artsup Nantes.
              Sélectionné parmi 4 équipes en compétition lors de l'événement Stereogame.`,

    ui: {
    pitch:         "Pitch",
    contributions: "Contributions",
    outcome:       "Résultat",
    links:         "Liens",
    screenshots:   "Captures d'écran",
    tags:          "Technologies",
    infosLabels: {
        year:     "Année",
        duration: "Durée",
        role:     "Rôle",
    },
},

    // ── Pitch ─────────────────────────────────────────────────────────────────
    pitch: [
        `Stereogame est une aventure 2D rétro inspirée du cache-cache, mêlant
         exploration pointer-cliquer et pixel art atmosphérique. Armés d'une simple
         torche, les joueurs doivent naviguer dans une salle de concert plongée dans
         l'obscurité, découvrir des indices cachés et révéler la programmation mystérieuse
         de l'événement Stereogame.`,
        `Conçu pour un public casual, le jeu mêle nostalgie, curiosité
         et découverte dans un jeu web multi-plateforme au style soigné.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [
        {
            category: "📃 Organisation",
            items: [
                {
                    title: "Gestion de version et suivi des tâches",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text",  value: "Mise en place et maintenance du workflow de gestion de version et du système de suivi des tâches de l'équipe tout au long du projet." },
                        { type: "title", value: "💡 Comment ?" },
                        { type: "text",  value: "Utilisation de Git avec Fork comme client GUI. Mise en place d'une stratégie de branches liée aux tickets Jira, chaque fonctionnalité ou correction étant développée sur une branche dédiée nommée d'après son ticket, puis fusionnée via pull request." },
                        { type: "text",  value: "Gestion du tableau Jira pour suivre l'avancement des tâches au sein de l'équipe, en maintenant les tickets à jour et en assurant la visibilité de la répartition du travail à tout moment." },
                        {
                            type: "image",
                            src: "../../Sources/Projects/Stereogame/Fork.png",
                            caption: "Fork",
                        },
                    ]
                },
                {
                    title: "Documentation projet et livrables client",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text",  value: "Création et maintien d'un espace de travail Notion centralisé couvrant toute la documentation du projet et les supports destinés au client." },
                        { type: "title", value: "💡 Comment ?" },
                        { type: "text",  value: "L'espace comprenait le brief client, les dossiers d'inspiration, les moodboards, les références de concept, un GDD d'une page, le suivi des deadlines, les logs de temps de travail et une liste de liens importants." },
                        { type: "text",  value: "Préparation et présentation d'un diaporama client résumant le concept du jeu, la direction visuelle et les décisions de design clés." },
                        {
                            type: "image",
                            src: "../../Sources/Projects/Stereogame/Notion.png",
                            caption: "Tableau Notion",
                        },
                    ]
                },
            ],
        },
        {
            category: "🎮 Game Design",
            items: [
                {
                    title: "Proposition du concept de jeu initial",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text",  value: "Pilotage de l'idéation du concept de jeu à partir d'un brief client demandant un jeu web multi-plateforme reflétant l'identité de Stereolux : musique, concerts, art et accessibilité pour tous les publics." },
                        { type: "title", value: "💡 Comment ?" },
                        { type: "text",  value: "Organisation d'une session de brainstorming en équipe listant des associations libres et des micro-idées pour converger vers un concept précis. Proposition personnelle du concept retenu : un jeu d'exploration cache-cache dans la vraie salle de concert de Stereolux, où les joueurs découvrent des œuvres encadrées représentant des événements à venir. Chaque pièce fait office de fiche d'événement, renforçant l'identité artistique de Stereolux." },
                        { type: "text",  value: "Le concept a été volontairement cadré pour tenir en un mois, en parallèle des cours : un boucle de gameplay très resserrée où chaque mécanisme supplémentaire se lit comme du polish plutôt que comme du scope. L'équipe a adopté le concept, qui a finalement été sélectionné par le client." },
                        { type: "title", value: "🎯 Pourquoi ?" },
                        { type: "text",  value: "L'utilisation du vrai lieu Stereolux (visité et photographié sur place) a créé une dimension nostalgique pour le client, offert un aperçu aux visiteurs potentiels, et fourni une référence visuelle fiable aux artistes, tout en restant aligné avec le brief client." },
                    ]
                },
                {
                    title: "Itérations de gameplay et équilibrage",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text",  value: "Itération sur la taille des zones de détection et la difficulté des niveaux à travers les différentes scènes du jeu." },
                        { type: "title", value: "💡 Comment ?" },
                        { type: "text",  value: "Implémentation de Gizmos personnalisés pour le rayon de détection de chaque objet caché directement dans l'éditeur Unity, permettant aux level designers d'ajuster librement les zones sans toucher au code. Toute l'équipe pouvait ainsi régler la difficulté sans intervention d'un programmeur." },
                    ]
                },
                {
                    title: "Adaptation web et multi-plateforme",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text",  value: "Conception du jeu pour fonctionner aussi bien sur PC (souris) que sur mobile (tactile) via Unity WebGL." },
                        { type: "title", value: "💡 Comment ?" },
                        { type: "text",  value: "Utilisation d'Application.platform pour détecter la plateforme courante et adapter la gestion des entrées en conséquence. Sur les appareils tactiles, application d'un décalage vertical à la torche pour que le doigt du joueur ne masque jamais le rayon d'exploration." },
                    ]
                },
            ],
        },
        {
            category: "💻 Programmation",
            items: [
                {
                    title: "Systèmes de gameplay principaux",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text",  value: "Construction de la mécanique centrale de la torche : la lumière du joueur suit le curseur ou le doigt à travers une scène sombre pour révéler les objets cachés." },
                        { type: "title", value: "💡 Comment ?" },
                        { type: "text",  value: "Structure de la scène en pile de couches UI : un canvas de base avec tous les éléments cachés, surmonté d'une image d'overlay sombre simulant une pièce sans lumière. Le joueur est représenté par un sprite UI circulaire utilisé comme masque de découpe dans l'overlay, révélant la vraie scène en dessous lors de ses déplacements." },
                        { type: "image", src: "../../Sources/Projects/Stereogame/PlayerNav.gif", caption: "Mécanique de déplacement du joueur" },
                        { type: "text",  value: "Implémentation également d'un système de screen shake et d'une logique de zone de détection avec des Gizmos éditeur, offrant aux level designers un contrôle total sur la difficulté par objet sans modification du code." },
                        { type: "image", src: "../../Sources/Projects/Stereogame/ObjectDetection.gif", caption: "Démo de détection des objets" },
                    ]
                },
                {
                    title: "Implémentation des contrôles multi-plateforme",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text",  value: "Gestion des entrées souris et tactile dans un seul build WebGL." },
                        { type: "title", value: "💡 Comment ?" },
                        { type: "text",  value: "Branchement de la logique d'input via Application.platform. Pour le tactile, ajout d'un décalage vertical à la position de la torche afin que le doigt ne masque jamais le rayon d'exploration actif, une décision UX mineure mais à fort impact qui améliore significativement la jouabilité sur mobile." },
                    ]
                },
                {
                    title: "Navigation entre scènes et menus",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text",  value: "Construction du système de progression des niveaux et de la navigation dans la galerie." },
                        { type: "image", src: "../../Sources/Projects/Stereogame/LevelNav.gif", caption: "Démo de navigation entre niveaux" },
                        { type: "image", src: "../../Sources/Projects/Stereogame/GaleryNav.gif", caption: "Démo de navigation dans la galerie" },
                        { type: "title", value: "💡 Comment ?" },
                        { type: "text",  value: "Le déverrouillage d'un niveau active le bouton de navigation correspondant et déclenche une transition vers la scène suivante. Les joueurs peuvent aussi naviguer en arrière avec la flèche opposée, en miroir du système de défilement en boucle de la galerie. La galerie elle-même utilise un défilement continu en boucle entre les œuvres découvertes, encourageant les joueurs à revisiter les pièces trouvées et à en apprendre davantage sur les événements Stereolux." },
                    ]
                },
                {
                    title: "Système de sauvegarde",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text",  value: "Implémentation d'un système de sauvegarde léger suivant l'état de déverrouillage de la galerie entre les niveaux." },
                        { type: "title", value: "💡 Comment ?" },
                        { type: "text",  value: "Utilisation de PlayerPrefs, adapté à la portée du projet, pour persister l'état de déverrouillage de chaque œuvre via des identifiants d'objet. Chaque élément dispose de trois états : non trouvé, nouvellement découvert, et déjà vu. Ce modèle à trois états a permis des animations de découverte distinctes. Comme il s'agit d'un jeu web, les données de sauvegarde sont intentionnellement effacées au rechargement de la page." },
                    ]
                },
                {
                    title: "Détection de visibilité dans la galerie",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text",  value: "Déclenchement du déverrouillage des œuvres uniquement lorsqu'une pièce est entièrement visible à l'écran lors du défilement en boucle de la galerie." },
                        { type: "title", value: "💡 Comment ?" },
                        { type: "text",  value: "Construction d'une méthode d'extension RectTransform qui convertit chacun des quatre coins en coordonnées écran via WorldToScreenPoint, puis vérifie que les quatre se trouvent dans les limites de l'écran. Le déclenchement du déverrouillage n'a lieu que lorsque les 4 coins sont détectés, garantissant que l'œuvre est complètement visible avant d'être enregistrée comme vue." },
                        { type: "image", src: "../../Sources/Projects/Stereogame/GaleryApparition.gif", caption: "Démo d'apparition dans la galerie" },
                    ]
                },
            ],
        },
        {
            category: "📱 UI / UX",
            items: [
                {
                    title: "Interfaces responsives PC et mobile",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text",  value: "Conception et développement de toutes les scènes UI du jeu, incluant le HUD de gameplay, la galerie et les transitions entre niveaux." },
                        { type: "title", value: "💡 Comment ?" },
                        { type: "text",  value: "Utilisation des composants UI intégrés d'Unity avec une configuration minutieuse des ancres pour maintenir des mises en page cohérentes quelle que soit la résolution et le ratio d'écran, du bureau au mobile. Les décisions UX ont été itérées avec l'équipe pour garantir clarté et engagement." },
                        { type: "text",  value: "La navigation en galerie en boucle était un choix UX délibéré : le mouvement continu du carrousel invite les joueurs à continuer de faire défiler et à découvrir davantage d'œuvres, augmentant le temps passé et renforçant la présentation des événements Stereolux." },
                    ]
                },
            ],
        },
        {
            category: "✨ Effets Visuels",
            items: [
                {
                    title: "Animations et transitions",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text",  value: "Intégration des animations réalisées par les artistes et construction de séquences DOTween personnalisées pour les moments de découverte." },
                        { type: "title", value: "💡 Comment ?" },
                        { type: "text",  value: "Pilotage des animations artistes via des triggers et des booleans de l'Animator. Enchaînement de séquences DOTween pour les révélations d'œuvres : une animation de bannière, l'animation d'apparition de l'œuvre elle-même, et un flash d'éclairage de la salle, le tout chaîné en une seule séquence séquentielle et superposée pour un rendu soigné." },
                    ]
                },
                {
                    title: "Intégration de systèmes de particules",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text",  value: "Création d'effets de particules pour l'état de galerie complète et pour la découverte d'objets et d'easter eggs." },
                        { type: "title", value: "💡 Comment ?" },
                        { type: "text",  value: "De petites particules carrées dorées flottent dans une galerie complète pour apporter chaleur, mouvement et sentiment de victoire. Une rafale circulaire de traits colorés se déclenche lors de la collecte d'une œuvre ou d'un easter egg, masquant la disparition de l'objet tout en donnant l'impression que le joueur a réellement ramassé quelque chose." },
                    ]
                },
            ],
        },
        {
            category: "🎧 Intégration Audio",
            items: [
                {
                    title: "Intégration audio FMOD",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text",  value: "Intégration de tous les effets sonores et de la musique via FMOD Studio, incluant un AudioManager personnalisé pour les transitions musicales dynamiques." },
                        { type: "title", value: "💡 Comment ?" },
                        { type: "text",  value: "Utilisation des Event Emitters FMOD Studio sur les objets individuels pour déclencher les effets sonores au clic ou lors d'événements de gameplay. Construction d'un AudioManager pour gérer la lecture de la musique et les transitions entre niveaux : un seul morceau peut se répéter sur plusieurs niveaux avant de changer à un seuil défini." },
                        { type: "text",  value: "Les effets sonores ont été conservés dans des SerializeFields par objet plutôt que centralisés, préservant intentionnellement le travail existant d'un coéquipier et évitant des refactorisations coûteuses dans un projet au délai serré." },
                    ]
                },
            ],
        },
    ],

    // ── Outcome ───────────────────────────────────────────────────────────────
    outcome: [
        `Ce projet m'a permis de traverser l'intégralité du pipeline de production
         d'un jeu, du concept à la sortie jouable.`,
        `Travailler dans un vrai contexte de production collaborative m'a aidée à
         renforcer mon autonomie, ma communication et mon adaptabilité technique.`,
    ],

    // ── Infos sidebar ─────────────────────────────────────────────────────────
    infos: {
        année: "2025",
        temps: "1 mois",
        role: "Programmeuse principale",
    },

    // ── Screenshots ───────────────────────────────────────────────────────────
    screenshots: [
        { src: "../../Sources/Projects/Gifs/Stereogame.gif",                    caption: "Gameplay principal" },
        { src: "../../Sources/Projects/Stereogame/GaleryNav.gif",               caption: "Navigation dans la galerie" },
        { src: "../../Sources/Projects/Stereogame/GaleryApparition.gif",        caption: "Apparition dans la galerie" },
        { src: "../../Sources/Projects/Stereogame/LevelNav.gif",                caption: "Navigation entre niveaux" },
        { src: "../../Sources/Projects/Stereogame/ObjectDetection.gif",         caption: "Détection des objets" },
        { src: "../../Sources/Projects/Stereogame/PlayerNav.gif",               caption: "Déplacements du joueur" },
    ],

    // ── Liens ─────────────────────────────────────────────────────────────────
    links: [
        { href: "https://elagmae.itch.io/stereogame",                                                               img: "../../Sources/Projects/Stereogame/ItchioLink.png",  alt: "Page Itchio" },
        { href: "https://www.e-artsup.net/2025/12/09/e-artsup-nantes-stereolux-collaboration-jeu/",                 img: "../../Sources/Projects/Stereogame/Group.png",       alt: "Expérience" },
        { href: "https://stereolux.org/magazine/e-artsup-x-stereolux",                                             img: "../../Sources/Projects/Stereogame/Presentation.png", alt: "Partenariat" },
        { href: "https://www.canva.com/design/DAG4T4ciK7k/vuusIqJQ31umE46_ydTLEg/edit",                            img: "../../Sources/Projects/Stereogame/Diaporama.png",    alt: "Présentation" },
    ],

    // ── Tags ──────────────────────────────────────────────────────────────────
    tags: "Unity, C#, FMOD, DOTween, Git, WebGL, UI/UX, VFX, Partenariat",
};
