const PROJECT_FR = {

    // ── Général ───────────────────────────────────────────────────────────────
    title:   "Racine",
    label:   "Jeu vidéo",
    banner:  "../../Sources/Projects/Gifs/Racine.gif",
    context: `Projet de fin d’études développé par une équipe multidisciplinaire de dix personnes sur un cycle de production académique de cinq mois. Racine est issu d’un prototype de première année entièrement retravaillé avant d’entrer en production complète en janvier 2026. En tant que Gameplay & UI Programmer, j’étais responsable de l’ensemble de l’interface utilisateur du jeu, de plusieurs systèmes de gameplay essentiels, ainsi que de plusieurs outils d’éditeur utilisés par toute l’équipe.`,

    ui: {
        pitch: "Pitch",
        contributions: "Contributions",
        outcome: "Résultat",
        links: "Liens",
        screenshots: "Captures d’écran",
        tags: "Tags",
        infosLabels: {
            year: "Année",
            duration: "Durée",
            role: "Rôle",
        },
    },

    // ── Pitch ─────────────────────────────────────────────────────────────────
    pitch: [
        `Racine est un city builder isométrique en 3D à l’esthétique cartoon colorée et burlesque. Le joueur contrôle les Goglands, de petites créatures maladroites qu’il faut organiser par paires et assigner à différents bâtiments afin de redonner vie à l’Arbre de Vie.`,

        `Chaque Gogland possède des relations et des traits de personnalité uniques, transformant la gestion du village en un défi autant social que logistique. Le projet combine des mécaniques de city-building accessibles, des chaînes de production, des interactions entre personnages et une forte importance accordée à la lisibilité via l’UI et les feedbacks joueur.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [
        {
            category: "💻 Programmation",
            items: [
                {
                    title: "Système de placement sur grille (city builder)",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Conception et implémentation de tout le pipeline de placement des bâtiments, incluant le système de grille, la validation des bâtiments multi-tuiles, la rotation, le preview de placement, ainsi que la gestion de cas particuliers comme le quai pouvant se superposer partiellement à l’eau." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "La grille est composée de cellules instanciées au démarrage et stockées dans une collection plate. Au lieu d’utiliser des raycasts continus, le système utilise une méthode statique qui résout directement la cellule de grille à partir d’une position monde, rendant le système plus léger et réutilisable." },

                        { type: "text", value: "Les bâtiments multi-tuiles sont validés en itérant depuis une cellule d’ancrage et en vérifiant que chaque cellule reste adjacente à la précédente, empêchant ainsi les débordements aux bords de la grille tout en gardant une logique générique." },

                        { type: "text", value: "La rotation des bâtiments repose sur des calculs trigonométriques (sinus/cosinus) permettant de déterminer dynamiquement la direction de sampling sans dupliquer la logique de validation." },

                        { type: "text", value: "Le preview de placement est mis à jour via une boucle asynchrone afin de suivre le curseur sans surcharger la boucle principale de gameplay." },

                        { type: "title", value: "🎯 Pourquoi ?" },
                        { type: "text", value: "L’objectif était de créer un système générique, performant et réutilisable par toute l’équipe. Le remplacement des raycasts par des accès directs à la grille a fortement réduit le coût de calcul tout en simplifiant les interactions avec les autres systèmes." },
                    ]
                },

                {
                    title: "Architecture des bâtiments de gameplay",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Implémentation du comportement de plusieurs bâtiments (collecteurs de sève, raffineries, stockage), connectés au système de ressources et au système d’IA des villageois." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Les bâtiments héritent d’une classe de base gérant le placement et les données ScriptableObject. Chaque bâtiment spécialisé ne redéfinit que sa logique de production." },

                        { type: "text", value: "Le collecteur écoute l’apparition de nouveaux arbres via un event statique et suit la ressource la plus proche dans son rayon. La raffinerie propose trois modes configurables dans l’Inspector : conversion unique, batch ou consommation totale." },

                        { type: "text", value: "J’ai adapté les interfaces pour permettre aux villageois de récupérer les valeurs de production et ajouté un état WAIT_FOR_INSTRUCTION pour éviter les comportements parasites." },

                        { type: "title", value: "🎯 Pourquoi ?" },
                        { type: "text", value: "L’objectif était de garder des systèmes modulaires capables d’évoluer rapidement malgré les changements fréquents de design." },
                    ]
                },

                {
                    title: "Object pool générique",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Création d’un object pool générique partagé entre gameplay et UI pour les bâtiments, icônes de mood et éléments dynamiques." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Le pool repose sur une interface IPoolable avec callbacks OnPooled et OnUnpooled. Il s’agrandit dynamiquement uniquement lorsque nécessaire." },

                        { type: "title", value: "🎯 Pourquoi ?" },
                        { type: "text", value: "Réduction des allocations runtime et réutilisation d’un système unique sans dépendance au type des objets." },
                    ]
                },

                {
                    title: "Event bus générique",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Mise en place d’un event bus générique pour découpler les systèmes de gameplay et l’UI." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Utilisation d’une classe générique statique indexée par type d’événement permettant de publier et s’abonner sans manager central." },

                        { type: "title", value: "🎯 Pourquoi ?" },
                        { type: "text", value: "Réduction du couplage et meilleure évolutivité des systèmes." },
                    ]
                },
            ],
        },

        {
            category: "📱 UI / UX",
            items: [
                {
                    title: "Refonte complète du système UI",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Conception et implémentation de toute l’interface du jeu (menus, HUD, shop, panels villageois, arbre de compétences, etc.)." },

                        { type: "text", value: "Suite à des tests utilisateurs, toute l’UI a été reconstruite depuis zéro pour corriger des problèmes majeurs d’UX." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Utilisation de Layout Groups, Canvas Groups et Content Size Fitters avec une structure entièrement responsive." },

                        { type: "text", value: "Les interfaces dynamiques sont pilotées par des events afin d’éviter toute logique manuelle de refresh." },

                        { type: "text", value: "Optimisation des layouts en séparant UI statique et dynamique pour réduire les recalculs coûteux." },

                        { type: "title", value: "🎯 Pourquoi ?" },
                        { type: "text", value: "Créer une UI capable de survivre aux changements de game design sans nécessiter de refonte constante." },
                    ]
                },

                {
                    title: "Composants UI réutilisables",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Création de composants UI réutilisables (boutons avancés, shop automatique basé sur données)." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Le shop génère automatiquement son interface à partir de ScriptableObjects (icônes, prix, callbacks)." },

                        { type: "text", value: "Extension du système de bouton Unity avec des événements supplémentaires (hover, toggle, interactable)." },

                        { type: "title", value: "🎯 Pourquoi ?" },
                        { type: "text", value: "Réduire les tâches répétitives et permettre aux designers de modifier l’UI sans toucher au code." },
                    ]
                },

                {
                    title: "Editor tools (arbre de compétences)",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Création d’outils EditorWindow pour automatiser la génération de l’arbre de compétences." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Lecture de ScriptableObjects pour générer automatiquement nodes, connexions et états de verrouillage." },

                        { type: "title", value: "🎯 Pourquoi ?" },
                        { type: "text", value: "Accélérer l’itération et réduire les erreurs humaines dans l’édition de l’UI complexe." },
                    ]
                },

                {
                    title: "Architecture UI événementielle",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Gestion complète des interactions UI via architecture événementielle." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Abonnement/désabonnement automatique des panels aux events gameplay." },

                        { type: "title", value: "🎯 Pourquoi ?" },
                        { type: "text", value: "Découpler complètement UI et gameplay pour améliorer la maintenabilité." },
                    ]
                },
            ],
        },

        {
            category: "✨ Effets visuels",
            items: [
                {
                    title: "Shader Graph UI (états de déverrouillage)",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Création de shaders UI pour représenter visuellement les états de verrouillage." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Désaturation progressive contrôlée par une valeur runtime issue des ScriptableObjects." },
                    ]
                },

                {
                    title: "Animations UI DOTween",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Implémentation des animations UI et feedbacks via DOTween." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Création de séquences réutilisables pour boutons, panels et événements d’unlock." },

                        { type: "title", value: "🎯 Pourquoi ?" },
                        { type: "text", value: "Améliorer la lisibilité et le ressenti utilisateur sans surcharger les systèmes." },
                    ]
                },
            ],
        },
    ],

    // ── Résultat ───────────────────────────────────────────────────────────────
    outcome: [
        `Racine est devenu le projet le plus ambitieux techniquement sur lequel j’ai travaillé. La construction complète de l’UI en parallèle des systèmes de gameplay m’a appris à concevoir des solutions réutilisables plutôt que de résoudre chaque problème de manière isolée. L’event-driven architecture, les outils d’éditeur et les composants génériques sont devenus centraux dans mon workflow.`,

        `La refonte complète de l’interface suite aux tests utilisateurs a été un défi majeur, m’obligeant à automatiser un maximum de tâches via des outils Editor et des systèmes basés sur les données plutôt que sur la scène Unity.`,

        `Travailler avec une équipe pluridisciplinaire m’a également appris à mieux communiquer et à concevoir des systèmes adaptés à des besoins changeants, tout en garantissant des interfaces propres et maintenables pour les autres développeurs.`,
    ],

    // ── Infos sidebar ─────────────────────────────────────────────────────────
    infos: {
        year:     "2026",
        duration: "5 mois",
        role:     "Gameplay & UI Programmer",
    },

    // ── Screenshots ───────────────────────────────────────────────────────────
    screenshots: [
        { src: "../../Sources/Projects/Gifs/Racine.gif", caption: "Gameplay principal" },
        { src: "../../Sources/Projects/Racine/Labo.gif", caption: "Arbre de compétences" },
        { src: "../../Sources/Projects/Racine/Work.gif", caption: "Système d’assignation des villageois" }
    ],

    // ── Liens ─────────────────────────────────────────────────────────────────
    links: [
        {
            href: "https://www.youtube.com/watch?v=44rIFaQ0Fjk&t=6s",
            img:  "../../Sources/Projects/Racine/Tree.png",
            alt:  "Trailer",
        },
    ],

    // ── Tags ──────────────────────────────────────────────────────────────────
    tags: "Unity, C#, UI/UX, DOTween, Shader Graph, Editor Tools, Architecture de jeu",
};