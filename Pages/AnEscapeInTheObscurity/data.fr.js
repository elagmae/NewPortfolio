const PROJECT_FR = {

    // ── Général ───────────────────────────────────────────────────────────────
    title: "An Escape In The Obscurity",
    label: "Jeu PC",
    banner: "../../Sources/Projects/Gifs/AnEscapeInTheObscurity.gif",

    context:
        `Premier projet scolaire sur Unreal Engine, conçu comme une introduction à l’engine et à ses systèmes principaux.`,

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

    // ── Pitch ─────────────────────────────────────────────────────────────────
    pitch: [
        `Jeu d’horreur à la première personne se déroulant dans un manoir plongé dans l’obscurité. Le joueur doit traverser différentes zones pour s’échapper tout en évitant une créature qui le traque activement.`,
        `La seule ressource disponible est une lampe torche. Un mode de flash puissant permet d’aveugler temporairement le monstre, mais consomme rapidement la batterie. Une batterie à zéro entraîne une mort instantanée, obligeant le joueur à gérer constamment sa survie.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [
        {
            category: "💻 Programmation",
            items: [
                {
                    title: "Comportement de l’ennemi",
                    content: [
                        {
                            type: "text",
                            value:
                                "Implémentation de l’IA de l’ennemi via le système de NavMesh d’Unreal. Trois états de détection ont été créés : patrouille, alerte (déclenchée par des sons et menant à la dernière position connue du joueur), et poursuite active. L’ennemi réagit également au flash de la lampe torche en étant temporairement immobilisé lorsqu’il est aveuglé."
                        },
                    ]
                },

                {
                    title: "Comportement du joueur",
                    content: [
                        {
                            type: "text",
                            value:
                                "Mise en place du déplacement à la première personne avec sprint, ainsi qu’un système de lampe torche à deux modes : un faisceau standard pour l’exploration et un mode flash puissant qui aveugle l’ennemi mais consomme fortement la batterie. Une batterie vide entraîne une mort instantanée."
                        },
                    ]
                },
            ]
        },

        {
            category: "📱 UI / UX",
            items: [
                {
                    title: "HUD principal",
                    content: [
                        {
                            type: "text",
                            value:
                                "Conception et implémentation d’un HUD minimaliste affichant la batterie de la lampe, la jauge du mode flash, ainsi qu’un indicateur en forme d’œil représentant l’état de l’ennemi (blanc : patrouille, jaune : alerte, rouge : poursuite)."
                        },
                    ]
                },

                {
                    title: "Feedbacks UI",
                    content: [
                        {
                            type: "text",
                            value:
                                "Ajout de feedbacks dynamiques pour améliorer la lisibilité du gameplay : l’indicateur en forme d’œil change de couleur et pulse en fonction des transitions d’état de l’ennemi."
                        },
                    ]
                },
            ]
        },

        {
            category: "🎧 Intégration audio",
            items: [
                {
                    title: "SFX & musique",
                    content: [
                        {
                            type: "text",
                            value:
                                "Intégration d’une ambiance sonore pour renforcer l’atmosphère oppressante, ainsi que des effets sonores reliés aux événements de gameplay (détection de l’ennemi, actions du joueur, interactions UI) via des nœuds Play Sound."
                        },
                    ]
                },
            ]
        },
    ],

    // ── Résultat ───────────────────────────────────────────────────────────────
    outcome: [
        `Ce projet a été ma première expérience concrète sur Unreal Engine, réalisé en un mois dans un contexte scolaire sans connaissance préalable de l’outil.`,
        `En plus de la courbe d’apprentissage technique, le projet a demandé une forte implication dans l’organisation d’équipe et la coordination des tâches afin de respecter les délais.`,
        `Malgré ces contraintes, toutes les mécaniques principales du GDD ont été implémentées et fonctionnelles dans la version finale. Cette expérience m’a permis de comprendre les bases des Blueprints, des comportements IA via NavMesh, des événements custom, et de l’UI en runtime.`,
    ],

    // ── Infos sidebar ─────────────────────────────────────────────────────────
    infos: {
        year: "2024",
        duration: "1 mois",
        role: "Programmeur gameplay",
    },

    // ── Captures ──────────────────────────────────────────────────────────────
    screenshots: [
        {
            src: "../../Sources/Projects/Gifs/AnEscapeInTheObscurity.gif",
            caption: "Gameplay principal",
        },
    ],

    // ── Liens ─────────────────────────────────────────────────────────────────
    links: [
        {
            href: "https://dadaiste.itch.io/an-escape-in-the-obscurity",
            img: "../../Sources/Projects/AnEscapeInTheObscurity/ItchioLink.png",
            alt: "Page Itch.io",
        },
    ],

    // ── Tags ──────────────────────────────────────────────────────────────────
    tags: "Unreal Engine, Blueprints, Git",
};