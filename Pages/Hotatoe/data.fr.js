const PROJECT_FR = {

    // ── Général ───────────────────────────────────────────────────────────────
    title: "Hotatoe",
    label: "Projet étudiant / Jeu multijoueur",
    banner: "../../Sources/Projects/Gifs/Hotatoe.gif",

    context: `Jeu multijoueur développé dans le cadre d’un projet étudiant en équipe de 9.
              Projet orienté gameplay temps réel avec gestion de physique, UI et systèmes de score.
              Développé sous contrainte de temps avec plusieurs pôles de production (code, art, audio, gameplay).`,

    ui: {
        pitch: "Pitch",
        contributions: "Contributions",
        outcome: "Résultat",
        links: "Liens",
        screenshots: "Captures d'écran",
        tags: "Tags",
        infosLabels: {
            year: "Année",
            duration: "Durée",
            role: "Rôle",
        },
    },

    // ── Pitch ─────────────────────────────────────────────────────────────────
    pitch: [
        `Hotatoe est un jeu multijoueur basé sur des interactions physiques et des mécaniques de compétition en arène.`,
        `Les joueurs s’affrontent à travers des systèmes de déplacement, de projectiles et de score dans une boucle de gameplay rapide.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [

        {
            category: "🎮 Gameplay & Systèmes principaux",
            items: [
                {
                    title: "Boucle de gameplay et logique de partie",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Implémentation de la boucle principale de jeu incluant le démarrage de partie, le système de score, et les conditions de fin." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Création d’un GameMode centralisant les règles de jeu, gestion des scores joueurs, du timer de partie et du reset global entre les sessions." },
                    ]
                },

                {
                    title: "Systèmes de joueur & interactions",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Développement des actions principales du joueur : déplacement, interaction et actions contextuelles." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Mise en place d’un système d’input basé sur des états (push, snap, shoot) permettant des comportements différents selon le contexte de gameplay." },
                    ]
                },

                {
                    title: "Système de projectile physique",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Création et prototypage des interactions autour de la boule de feu / projectile principal." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Gestion des comportements physiques via un système basé sur la vélocité et les collisions, avec ajustements de retour (come-back) et corrections de bugs de comportement en fin de production." },
                    ]
                },
            ],
        },

        {
            category: "💻 Programmation & Architecture",
            items: [
                {
                    title: "Architecture du projet",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Mise en place de la structure globale du projet et des systèmes principaux Unreal." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Organisation du projet via GameMode, Player Blueprint et systèmes modulaires pour séparer logique de gameplay, UI et interactions." },
                    ]
                },

                {
                    title: "Débogage & intégration des systèmes",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Correction de nombreux bugs liés à la physique, aux inputs et à l’intégration des assets." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Itérations rapides sur les systèmes existants, refactorisation ponctuelle de la structure pour permettre les tests en build et stabiliser la boucle de jeu." },
                    ]
                },
            ],
        },

        {
            category: "📱 UI / UX",
            items: [
                {
                    title: "Menus et interface de jeu",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Création et intégration des menus principaux et HUD de jeu." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Passage progressif d’un prototype UI à une intégration en jeu fonctionnelle, puis adaptation en World Space pour améliorer la lisibilité et l’intégration visuelle." },
                    ]
                },

                {
                    title: "Système de score & feedback joueur",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Affichage et suivi des scores joueurs en temps réel." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Synchronisation du score avec le GameMode et affichage UI mis à jour dynamiquement pendant la partie." },
                    ]
                },
            ],
        },

        {
            category: "🔊 Audio & Juice",
            items: [
                {
                    title: "Intégration audio",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Création et intégration des effets sonores du jeu." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Implémentation de sons liés aux actions principales et intégration de musiques de fond adaptées à la boucle de gameplay." },
                    ]
                },

                {
                    title: "Polish & feedback visuel",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Amélioration du ressenti global du jeu (juice, FX, couleurs joueurs)." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Ajout de matériaux différenciés par joueur, effets de background dynamiques et améliorations des VFX pour renforcer la lisibilité en partie." },
                    ]
                },
            ],
        },

        {
            category: "🤝 Production & Collaboration",
            items: [
                {
                    title: "Organisation et suivi de projet",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Mise en place d’outils de suivi et de coordination d’équipe (planning, réunions, reporting)." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Création de planning hebdomadaire, suivi de tâches et organisation de points réguliers pour structurer le travail collectif." },
                    ]
                },

                {
                    title: "Difficultés de production",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Gestion d’un projet avec fortes disparités d’implication entre membres et retards de plusieurs pôles." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Adaptation constante du scope, reprise de certaines tâches en urgence (audio, intégration, debug), et ajustement du planning pour maintenir une version jouable." },

                        { type: "title", value: "🎯 Impact" },
                        { type: "text", value: "Charge de travail augmentée sur les pôles code/gameplay et pression accrue sur la fin de production, mais livraison d’une version fonctionnelle malgré les contraintes." },
                    ]
                },
            ],
        },
    ],

    // ── Outcome ───────────────────────────────────────────────────────────────
    outcome: [
        `Projet réalisé en équipe de 9 dans un contexte de production étudiante avec fortes contraintes de temps.`,
        `Malgré des déséquilibres d’implication entre pôles, le projet a permis de livrer une version jouable complète.`,
        `Cette expérience a renforcé mes compétences en architecture gameplay, debug rapide et gestion de production sous pression.`,
    ],

    // ── Infos sidebar ─────────────────────────────────────────────────────────
    infos: {
        année: "2025",
        temps: "2 mois",
        role: "Gameplay / UI / Core Programmer",
    },

    // ── Screenshots ───────────────────────────────────────────────────────────
    screenshots: [
    ],

    // ── Liens ─────────────────────────────────────────────────────────────────
    links: [

    ],

    // ── Tags ──────────────────────────────────────────────────────────────────
    tags: "Unreal Engine, Blueprint, UI, Game Design, Multiplayer, Physics, Team Project",
};