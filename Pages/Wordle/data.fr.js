const PROJECT_FR = {

    // ── Général ───────────────────────────────────────────────────────────────
    title: "Co-op Wordle",
    label: "Multijoueur en ligne / Jeu de devinette de mots",
    banner: "../../Sources/Projects/Gifs/Wordle.gif",

    context: `Un prototype de jeu Wordle en coopération en ligne développé en solo.
              Deux joueurs partagent une même session : l’un choisit le mot secret, l’autre tente de le deviner en temps réel.
              Les deux joueurs voient la même grille d’essais, mais seul celui qui choisit le mot connaît la solution.`,

    ui: {
        pitch: "Pitch",
        contributions: "Contributions",
        outcome: "Résultat",
        links: "Liens",
        screenshots: "Screenshots",
        tags: "Tags",
    },

    // ── Pitch ─────────────────────────────────────────────────────────────────
    pitch: [
        `Co-op Wordle est un jeu de devinette de mots multijoueur en temps réel inspiré de Wordle.`,
        `Deux joueurs rejoignent une session via un code : l’un devient le "poseur de mot" et choisit le mot secret, tandis que l’autre devient le "devineur".`,
        `Les deux joueurs voient la même grille d’essais, mais un seul connaît la solution, créant une expérience coopérative asymétrique.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [

        {
            category: "🌐 Architecture multijoueur",
            items: [

                {
                    title: "Système de lobby via code",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Création d’un système de lobby permettant à deux joueurs de se rejoindre via un code de session."
                        },
                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Utilisation de Unity Relay pour créer une session sans connexion IP directe. Un joueur héberge et partage un code, l’autre le rejoint via ce code."
                        },
                    ]
                },

                {
                    title: "Couche de communication Unity Transport",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Mise en place de la transmission de données en temps réel entre les joueurs."
                        },
                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Utilisation directe de Unity Transport pour envoyer des messages légers représentant les mots proposés, les résultats de validation et l’état des tours."
                        },
                    ]
                },

                {
                    title: "Système de rôles asymétriques",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Conception d’un système à deux rôles : un joueur connaît le mot, l’autre non."
                        },
                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Le host attribue les rôles au début de la session. Le mot est conservé uniquement côté host et n’est jamais transmis au second joueur."
                        },
                    ]
                },

            ],
        },

        {
            category: "🎮 Systèmes de gameplay",
            items: [

                {
                    title: "Validation des mots",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Implémentation complète de la logique de validation type Wordle."
                        },
                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Comparaison lettre par lettre entre le mot proposé et le mot secret, avec retour d’un état par lettre (bonne position, mauvaise position, absente)."
                        },
                    ]
                },

                {
                    title: "Grille d’essais partagée",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Création d’une grille synchronisée visible par les deux joueurs en temps réel."
                        },
                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Chaque tentative validée est envoyée via le réseau et ajoutée à une UI partagée synchronisée sur les deux clients."
                        },
                    ]
                },

                {
                    title: "Système de tours",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Mise en place d’un système de tours pour éviter les conflits d’entrée."
                        },
                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Une machine à états simple alterne les phases d’entrée pour garantir qu’un seul joueur joue à la fois."
                        },
                    ]
                },

            ],
        },

        {
            category: "🧠 Choix techniques",
            items: [

                {
                    title: "Architecture host-authoritative",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Choix d’une architecture où le host contrôle la logique principale."
                        },
                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Toute la validation des mots est effectuée côté host, puis les résultats sont diffusés aux autres joueurs via Unity Transport."
                        },
                    ]
                },

                {
                    title: "Optimisation des messages réseau",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Réduction des données transmises au strict minimum."
                        },
                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Seules les informations essentielles (mot, résultat, état du tour) sont envoyées pour limiter la charge réseau."
                        },
                    ]
                },

            ],
        },

    ],

    // ── Résultat ───────────────────────────────────────────────────────────────
    outcome: [
        `Co-op Wordle a été développé en solo comme un prototype multijoueur en ligne utilisant Unity Relay et Unity Transport.`,
        `Le projet démontre un gameplay coopératif asymétrique en temps réel avec un état partagé entre deux joueurs.`,
        `Il m’a permis de mieux comprendre les architectures réseau host-authoritative et les contraintes du transport bas niveau dans Unity.`,
    ],

    // ── Infos ───────────────────────────────────────────────────────────────
    infos: {
        year: "2025",
        duration: "Quelques jours",
        role: "Gameplay & Network Programmer (solo)",
    },

    // ── Screenshots ───────────────────────────────────────────────────────────
    screenshots: [
    ],

    // ── Liens ────────────────────────────────────────────────────────────────
    links: [
    ],

    // ── Tags ────────────────────────────────────────────────────────────────
    tags: "Unity, C#, Unity Relay, Unity Transport, Multijoueur, Réseau, Game Design",
};