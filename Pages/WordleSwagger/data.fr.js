const PROJECT_FR = {

    // ── Général ───────────────────────────────────────────────────────────────
    title: "Prototype Wordle API",
    label: "Backend / API REST / SQLite / Expérimentation C#",
    banner: "../../Sources/Projects/Gifs/WordleSwagger.gif",

    context: `Prototype backend de type Wordle développé en C# avec ASP.NET Core Minimal API.
              Le projet a été conçu pour explorer les architectures REST, la persistance de données avec SQLite,
              ainsi que le test d’API via Swagger et un client console personnalisé.`,

    ui: {
        pitch: "Pitch",
        contributions: "Contributions",
        outcome: "Résultat",
        links: "Liens",
        screenshots: "Captures",
        tags: "Tags",
    },

    // ── Pitch ─────────────────────────────────────────────────────────────────
    pitch: [
        `Ce projet est une implémentation backend d’un Wordle entièrement piloté par une API REST.`,
        `Un joueur définit un mot secret tandis qu’un autre tente de le deviner via des requêtes HTTP.`,
        `Toutes les parties, les essais et l’historique sont stockés dans une base SQLite et accessibles via une API documentée avec Swagger.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [

        {
            category: "🌐 Architecture API REST",
            items: [

                {
                    title: "Conception de l’API Wordle complète",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Conception et développement d’une API REST complète pour gérer des parties de type Wordle."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Utilisation d’ASP.NET Core Minimal API pour créer des endpoints de création de partie, de propositions (lettres/mots), de récupération d’état et de suppression de session."
                        },
                    ]
                },

                {
                    title: "Intégration Swagger pour tests API",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Mise en place de Swagger UI pour tester et documenter l’API en temps réel."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Configuration de la génération OpenAPI afin d’exposer automatiquement tous les endpoints et leurs paramètres."
                        },
                    ]
                },
            ],
        },

        {
            category: "🗄️ Base de données (SQLite)",
            items: [

                {
                    title: "Persistance des parties",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Stockage des parties et des essais dans une base SQLite locale."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Création de deux tables principales : GAMES (mot, état de la partie) et GUESSES (essais), permettant de reconstruire l’historique complet."
                        },
                    ]
                },

                {
                    title: "Suivi de l’historique des parties",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Enregistrement de chaque tentative effectuée par les joueurs."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Chaque essai est inséré dans la table GUESSES et relié à une partie via une clé étrangère, permettant des requêtes SQL de reconstruction d’historique."
                        },
                    ]
                },
            ],
        },

        {
            category: "🎮 Logique de jeu (Wordle)",
            items: [

                {
                    title: "Système de devinettes",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Implémentation des mécaniques de Wordle : devinettes de lettres et validation de mots complets."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Comparaison des entrées utilisateur avec le mot secret et retour d’informations sur les positions des lettres et les essais restants."
                        },
                    ]
                },

                {
                    title: "Gestion des états de partie",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Gestion des conditions de victoire, défaite et limitation du nombre d’essais."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Chaque partie possède un état (en cours, gagnée, perdue) mis à jour automatiquement selon les tentatives du joueur."
                        },
                    ]
                },
            ],
        },

        {
            category: "💻 Client & tests API",
            items: [

                {
                    title: "Client console C#",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Création d’un client console permettant d’interagir avec l’API REST."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Utilisation de HttpClient pour envoyer des requêtes GET, POST et DELETE simulant une expérience joueur complète."
                        },
                    ]
                },

                {
                    title: "Tests et validation de l’API",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Validation du fonctionnement de l’API via Swagger et le client console."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Utilisation combinée de Swagger UI et de requêtes HTTP manuelles pour tester et debugger rapidement les endpoints."
                        },
                    ]
                },
            ],
        },
    ],

    // ── Résultat ─────────────────────────────────────────────────────────────
    outcome: [
        `Ce projet constitue ma première API REST complète développée de A à Z.`,
        `Il m’a permis de comprendre les bases des architectures backend : routing, gestion d’état, persistance et communication HTTP.`,
        `Le prototype démontre un Wordle entièrement jouable sans interface graphique, uniquement via des appels API.`,
    ],

    // ── Infos ───────────────────────────────────────────────────────────────
    infos: {
        year: "2025",
        duration: "Quelques jours",
        role: "Développeur Backend / C#",
    },

    // ── Captures ─────────────────────────────────────────────────────────────
    screenshots: [
        {
            src: "../../Sources/Projects/WordleSwagger/swagger.png",
            caption: "Swagger UI pour tester l’API"
        },
    ],

    // ── Liens ───────────────────────────────────────────────────────────────
    links: [
    ],

    // ── Tags ───────────────────────────────────────────────────────────────
    tags: "C#, ASP.NET Core, API REST, SQLite, Swagger, Backend, Jeu",
};
