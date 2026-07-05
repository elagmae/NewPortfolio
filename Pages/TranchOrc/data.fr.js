const PROJECT_FR = {

    // ── Général ───────────────────────────────────────────────────────────────
    title:   "Tranch’Orc Apocalypse",
    label:   "Rail Brawler en réalité virtuelle",
    banner:  "../../Sources/Projects/Gifs/TranchOrc.gif",

    context: `Projet scolaire visant à explorer Unreal Engine et le développement en réalité virtuelle à travers la création d’un rail brawler rapide et chaotique.`,

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

    // ── Pitch ────────────────────────────────────────────────────────────────
    pitch: [
        `Tranch’Orc Apocalypse est un rail brawler VR chaotique se déroulant dans un désert dieselpunk brutal, mêlant humour, gore et action frénétique. Le joueur surfe sur les dunes à l’aide d’un bouclier tout en affrontant des hordes d’orcs surfeurs dans une séquence de poursuite intense.`,

        `Conçu comme une expérience purement orientée action, le jeu met l’accent sur des combats rapides, des feedbacks impactants et des rencontres dynamiques avec les ennemis, tout en explorant les systèmes d’immersion et de déplacement en VR sous Unreal Engine.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [

        {
            category: "💻 Programmation",

            items: [

                {
                    title: "IA de navigation dynamique",
                    content: [
                        {
                            type: "text",
                            value: "Implémentation d’un système de navigation dynamique pour les déplacements des ennemis via les navmeshes Unreal en temps réel. Configuration des comportements de l’IA afin que les orcs puissent éviter les collisions avec l’environnement tout en poursuivant correctement le joueur durant les séquences à haute vitesse."
                        },
                    ]
                },

                {
                    title: "Génération procédurale du terrain",
                    content: [
                        {
                            type: "text",
                            value: "Création d’un acteur de génération de terrain responsable du placement aléatoire de modules environnementaux dans le désert. Gestion des espacements via la taille des assets et des variables configurables afin de garantir la lisibilité du niveau et la fluidité du gameplay."
                        },
                    ]
                },

                {
                    title: "Optimisation de l’environnement",
                    content: [
                        {
                            type: "text",
                            value: "Optimisation du rendu et du spawning environnemental à l’aide de systèmes de brouillard et de réduction de la distance de visibilité afin d’améliorer les performances et renforcer l’immersion en VR."
                        },
                    ]
                },

                {
                    title: "Système d’armure des ennemis",
                    content: [
                        {
                            type: "text",
                            value: "Implémentation d’un système d’armure aléatoire basé sur des dictionnaires associant des meshes d’armure à des sockets de personnages. Mise en place d’un système dynamique de placement des équipements directement sur les ennemis."
                        },
                    ]
                },

                {
                    title: "Réactions physiques des armures",
                    content: [
                        {
                            type: "text",
                            value: "Ajout de réactions physiques et de mouvements des éléments d’armure lors des impacts afin de renforcer le feedback des combats et améliorer le ressenti des coups."
                        },
                    ]
                },

                {
                    title: "Implémentation Blueprint",
                    content: [
                        {
                            type: "text",
                            value: "Développement de systèmes de gameplay et d’interactions via Unreal Blueprints, tout en apprenant l’architecture du moteur et les workflows VR pendant la production."
                        },
                    ]
                },
            ]
        },

        {
            category: "✨ Effets visuels",

            items: [

                {
                    title: "Feedback de dégâts en VR",
                    content: [
                        {
                            type: "text",
                            value: "Création d’effets de dégâts plein écran directement affichés dans le casque VR afin d’améliorer la lisibilité et renforcer l’intensité des combats lors des attaques ennemies."
                        },
                    ]
                },

                {
                    title: "Feedbacks de gameplay",
                    content: [
                        {
                            type: "text",
                            value: "Travail sur les feedbacks visuels liés aux impacts, aux interactions ennemies et à la lisibilité de l’environnement afin de maintenir une bonne clarté dans un gameplay rapide."
                        },
                    ]
                },

                {
                    title: "Transitions de scène",
                    content: [
                        {
                            type: "text",
                            value: "Intégration de systèmes de transition et d’effets de continuité visuelle entre les séquences de gameplay afin de renforcer l’immersion et le rythme."
                        },
                    ]
                },
            ]
        },
    ],

    // ── Résultat ───────────────────────────────────────────────────────────────
    outcome: [

        `Tranch’Orc Apocalypse m’a permis de découvrir Unreal Engine et le développement en réalité virtuelle à travers un projet scolaire très technique et expérimental.`,

        `Le travail sur les navmeshes en temps réel, la génération procédurale, les systèmes de feedback VR et les Blueprints m’a aidé à mieux comprendre les enjeux d’optimisation et de lisibilité en environnement immersif.`,

        `Le projet m’a également donné l’occasion d’expérimenter des systèmes de gameplay en dehors de mon workflow habituel tout en collaborant au sein d’une petite équipe pluridisciplinaire.`,
    ],

    // ── Infos ────────────────────────────────────────────────────────────────
    infos: {
        year:     "2024 - 2025",
        duration: "1 mois",
        role:     "Programmeur gameplay",
    },

    // ── Captures ──────────────────────────────────────────────────────────────
    screenshots: [

        {
            src:     "../../Sources/Projects/Gifs/TranchOrc.gif",
            caption: "Gameplay principal",
        },
    ],

    // ── Liens ────────────────────────────────────────────────────────────────
    links: [
        {
            href: "https://nantoor.itch.io/tranchorc-apocalypse",
            img:  "../../Sources/Projects/TranchOrc/ItchioLink.png",
            alt:  "Page Itch.io",
        },
    ],

    // ── Tags ────────────────────────────────────────────────────────────────
    tags: "Unreal Engine, Blueprints, Réalité virtuelle, Git",
};