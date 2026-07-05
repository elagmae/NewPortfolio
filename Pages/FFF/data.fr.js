const PROJECT_FR = {

    // ── Général ──────────────────────────────────────────────────────────────
    title:   "Farm Farm Fever",
    label:   "Jeu de rythme et de farming",
    banner:  "../../Sources/Projects/Gifs/FFF.gif",

    context: `Projet de première année centré sur la création d’un jeu de farming basé sur le rythme, mêlant gameplay musical, retours visuels, UI réactive et progression dynamique des niveaux.`,

    // ── UI ───────────────────────────────────────────────────────────────────
    ui: {
        pitch:         "Pitch",
        contributions: "Contributions",
        outcome:       "Résultat",
        links:         "Liens",
        screenshots:   "Captures d'écran",
        tags:          "Tags",
        infosLabels: {
            year:     "Année",
            duration: "Durée",
            role:     "Rôle",
        },
    },

    // ── Pitch ────────────────────────────────────────────────────────────────
    pitch: [
        `Farm Farm Fever est un jeu de rythme en défilement latéral dans lequel le joueur récolte des légumes, frappe des oiseaux et enchaîne des combos en synchronisation avec la musique. Chaque action est liée au tempo via des beatmaps FMOD et des systèmes d’input personnalisés.`,

        `Pendant le projet, j’ai principalement travaillé sur le gameplay, l’intégration UI, les feedbacks visuels, l’intégration des niveaux et l’amélioration de l’expérience joueur. J’ai également participé aux réflexions de game design, à l’organisation du projet et à l’intégration audio.`,
    ],

    // ── Contributions ───────────────────────────────────────────────────────
    contributions: [

        {
            category: "🎮 Game Design",

            items: [

                {
                    title: "Concept du jeu et préproduction",
                    content: [
                        {
                            type: "text",
                            value: "Participation à la création du concept original, aux sessions de brainstorming, à la direction du gameplay et à la planification de la production. Contribution à l’organisation du projet, à la documentation, à la gestion des tâches et à la communication de l’équipe."
                        },
                    ]
                },

                {
                    title: "Réflexions et équilibrage du gameplay",
                    content: [
                        {
                            type: "text",
                            value: "Travail sur l’équilibrage du gameplay concernant les combos, la progression du score, les mécaniques de fever, la lisibilité et les interactions rythmiques. Participation à plusieurs sessions de playtest et d’itérations."
                        },
                    ]
                },

                {
                    title: "Support level design et playtests",
                    content: [
                        {
                            type: "text",
                            value: "Création et intégration des beatmaps FMOD pour les séquences de gameplay et la progression des niveaux. Aide à l’amélioration du level design, du rythme et de la lisibilité grâce aux tests réguliers."
                        },
                    ]
                },
            ]
        },

        {
            category: "💻 Programmation",

            items: [

                {
                    title: "Implémentation des systèmes de gameplay",
                    content: [
                        {
                            type: "text",
                            value: "Implémentation des mécaniques de gameplay liées aux légumes, aux oiseaux, au score, aux multiplicateurs de combo, aux mécaniques de fever, à la progression des dialogues, aux systèmes de déblocage, aux médailles et aux transitions de niveau."
                        },
                    ]
                },

                {
                    title: "Systèmes d’input et interactions rythmiques",
                    content: [
                        {
                            type: "text",
                            value: "Création des systèmes d’input liés aux beatmaps FMOD avec différentes fenêtres de timing (early, perfect, late). Implémentation de plusieurs types d’interactions comme les inputs simples, doubles et les mécaniques basées sur le timing."
                        },
                    ]
                },

                {
                    title: "Génération d’environnement",
                    content: [
                        {
                            type: "text",
                            value: "Développement d’un système de génération procédurale pour le terrain, les arbres et les éléments décoratifs en fonction de la durée musicale afin d’adapter la taille des niveaux et optimiser la lisibilité."
                        },
                    ]
                },

                {
                    title: "Débogage et refactorisation",
                    content: [
                        {
                            type: "text",
                            value: "Travail important de debug sur les systèmes de gameplay, la navigation UI, le chargement de scènes additives, les conditions de pause, la synchronisation FMOD, la navigation manette et le comportement des interfaces tout au long du projet."
                        },
                    ]
                },
            ]
        },

        {
            category: "📱 UI / UX",

            items: [

                {
                    title: "Création et navigation des scènes",
                    content: [
                        {
                            type: "text",
                            value: "Création et intégration des scènes du jeu (menus, sélection du monde, paramètres, crédits, pause et écrans de fin de niveau). Mise en place de systèmes de navigation compatibles clavier, manette et souris."
                        },
                    ]
                },

                {
                    title: "Interfaces responsives",
                    content: [
                        {
                            type: "text",
                            value: "Implémentation d’interfaces adaptatives pour différentes résolutions sur toutes les scènes afin de garantir lisibilité et cohérence visuelle."
                        },
                    ]
                },

                {
                    title: "Animations et interactions UI",
                    content: [
                        {
                            type: "text",
                            value: "Création d’animations de hover, transitions, feedbacks de sélection et animations de panneaux via Animator et DOTween pour améliorer la réactivité de l’interface."
                        },
                    ]
                },

                {
                    title: "Écrans de fin de niveau",
                    content: [
                        {
                            type: "text",
                            value: "Conception de panneaux de fin de niveau dynamiques avec compteurs de score, VFX animés, récompenses de médailles et séquences de victoire contextuelles."
                        },
                    ]
                },
            ]
        },

        {
            category: "✨ Effets visuels",

            items: [

                {
                    title: "Feedbacks gameplay",
                    content: [
                        {
                            type: "text",
                            value: "Implémentation de feedbacks visuels : animations de combo, pulsations rythmiques de l’UI, flashs d’input réussis, shake caméra et amélioration de la lisibilité globale."
                        },
                    ]
                },

                {
                    title: "Particles et ShaderGraph",
                    content: [
                        {
                            type: "text",
                            value: "Création de VFX via Particle System et ShaderGraph : destruction de légumes, effets de combo, flammes fever arc-en-ciel, effets de score et transitions animées."
                        },
                    ]
                },

                {
                    title: "Caméras et rendu",
                    content: [
                        {
                            type: "text",
                            value: "Mise en place d’un système de caméras en couches pour séparer le rendu pixelisé du gameplay et les éléments UI haute lisibilité."
                        },
                    ]
                },

                {
                    title: "Animations DOTween",
                    content: [
                        {
                            type: "text",
                            value: "Utilisation de DOTween pour les transitions de panneaux, affichage des scores, médailles, boutons et feedbacks gameplay."
                        },
                    ]
                },
            ]
        },

        {
            category: "🎧 Intégration audio",

            items: [

                {
                    title: "Intégration FMOD",
                    content: [
                        {
                            type: "text",
                            value: "Apprentissage et intégration de FMOD pour synchroniser les événements de gameplay avec la musique."
                        },
                    ]
                },

                {
                    title: "Audio UI et gameplay",
                    content: [
                        {
                            type: "text",
                            value: "Implémentation des sons UI, feedbacks audio gameplay, variations musicales de fin de niveau et effets contextuels liés à la progression."
                        },
                    ]
                },
            ]
        },
    ],

    // ── Résultat ─────────────────────────────────────────────────────────────
    outcome: [

        `Farm Farm Fever m’a permis de renforcer mes compétences en gameplay programming, intégration UI, création de feedbacks visuels et architecture de jeu de rythme sous Unity.`,

        `Le projet m’a également appris à travailler en équipe, à m’adapter à des contraintes de production, à refactoriser des systèmes en cours de développement et à améliorer l’expérience joueur par l’itération et le polish.`,

        `Le travail sur FMOD, les interfaces responsives et les systèmes de feedback m’a permis de mieux comprendre le lien direct entre implémentation technique et ressenti joueur.`,
    ],

    // ── Infos ────────────────────────────────────────────────────────────────
    infos: {
        year:     "2024",
        duration: "2 mois",
        role:     "Gameplay Programmer, UI Programmer, VFX Artist",
    },

    // ── Captures ─────────────────────────────────────────────────────────────
    screenshots: [

        {
            src:     "../../Sources/Projects/Gifs/FFF.gif",
            caption: "Gameplay principal",
        },

        {
            src:     "../../Sources/Projects/FFF/Menu.gif",
            caption: "Menu saisonnier",
        },

        {
            src:     "../../Sources/Projects/FFF/EndPanel_Normal.gif",
            caption: "Écran de fin – variante 1",
        },

        {
            src:     "../../Sources/Projects/FFF/EndPanel_Full.gif",
            caption: "Écran de fin – variante 2",
        },

        {
            src:     "../../Sources/Projects/FFF/EndPanel_Null.gif",
            caption: "Écran de fin – variante 3",
        },

        {
            src:     "../../Sources/Projects/FFF/Proto.gif",
            caption: "Prototype initial",
        },
    ],

    // ── Liens ────────────────────────────────────────────────────────────────
    links: [
        {
            href: "https://s4pph1r3.itch.io/farm-farm-fever-demo",
            img:  "../../Sources/Projects/FFF/ItchioLink.png",
            alt:  "Page Itch.io",
        },
    ],

    // ── Tags ────────────────────────────────────────────────────────────────
    tags: "Unity, C#, FMOD, DOTween, ShaderGraph, VFX Graph, Particle System, Git",
};