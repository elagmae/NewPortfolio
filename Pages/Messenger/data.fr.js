const PROJECT_FR = {

    // ── Général ───────────────────────────────────────────────────────────────
    title: "Messenger Prototype",
    label: "Multijoueur en ligne / Prototype Netcode Unity",
    banner: "../../Sources/Projects/Gifs/Messenger.gif",

    context: `Premier prototype multijoueur en ligne développé avec Unity Netcode for GameObjects et Unity Relay.
              L’objectif était de comprendre le fonctionnement du networking temps réel, des lobbies et des services cloud en créant une expérience de chat anonyme jouable entre plusieurs joueurs.`,

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
        `Messenger est un prototype de chat multijoueur temps réel dans lequel les joueurs rejoignent une session via un code de lobby.`,
        `Une fois connectés, les joueurs peuvent envoyer des messages qui apparaissent instantanément dans une interface partagée avec tous les participants, identifiés de manière anonyme (Player 0, Player 1, Player 2...).`,
        `Le projet se concentre sur l’apprentissage des architectures multijoueurs plutôt que sur le gameplay, en utilisant Unity Netcode for GameObjects et Unity Relay comme infrastructure backend.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [

        {
            category: "🌐 Systèmes multijoueur en ligne",
            items: [

                {
                    title: "Système de lobby avec code d’accès",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Implémentation d’un système de lobby permettant aux joueurs de créer ou rejoindre une session via un code généré automatiquement."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Utilisation de Unity Relay pour héberger les sessions et distribuer les données de connexion. L’hôte génère un code de lobby que les clients utilisent pour rejoindre la même allocation Relay."
                        },
                    ]
                },

                {
                    title: "Intégration de Netcode for GameObjects",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Mise en place de Unity Netcode for GameObjects pour synchroniser les joueurs et les messages entre tous les clients connectés."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Utilisation du NetworkManager avec une architecture host/client. Les joueurs sont spawn avec des NetworkObject ID uniques permettant d’identifier l’origine des messages."
                        },
                    ]
                },

                {
                    title: "Système d’identification anonyme des joueurs",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Chaque joueur connecté reçoit automatiquement un identifiant anonyme temporaire (Player 0, Player 1, Player 2...)."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Le système utilise le clientId ou NetworkObjectId fourni par Netcode pour générer un label cohérent affiché dans l’interface de chat."
                        },
                    ]
                },
            ],
        },

        {
            category: "💬 Système de messagerie temps réel",
            items: [

                {
                    title: "Interface de chat réseau partagée",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Création d’une interface de chat partagée où tous les messages sont synchronisés en temps réel entre les joueurs."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Les messages sont envoyés via des ServerRpc Netcode puis diffusés via ClientRpc à tous les clients connectés. Chaque message est instancié dans un canvas UI partagé."
                        },
                    ]
                },

                {
                    title: "Système de synchronisation des messages",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Assure que tous les messages apparaissent dans le même ordre pour tous les joueurs sans désynchronisation."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Les messages sont horodatés et traités par l’hôte avant diffusion, garantissant un ordre cohérent côté client."
                        },
                    ]
                },

                {
                    title: "Système d’instanciation UI des messages",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Création dynamique de bulles de messages dans une interface de chat scrollable partagée."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Chaque message reçu instancie un prefab dans un Vertical Layout Group, affichant le contenu et l’identifiant de l’émetteur."
                        },
                    ]
                },
            ],
        },

        {
            category: "🎮 Fondations techniques",
            items: [

                {
                    title: "Gestion de connexion via Unity Relay",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Mise en place du système de connexion via Unity Relay pour éviter les connexions IP directes."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "L’hôte crée une allocation Relay et partage un code de join. Les clients utilisent ce code pour résoudre la connexion via Unity Services."
                        },
                    ]
                },

                {
                    title: "Première expérimentation d’architecture multijoueur",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value: "Ce projet constitue une première exploration des architectures réseau temps réel dans Unity."
                        },

                        { type: "title", value: "💡 Comment ?" },
                        {
                            type: "text",
                            value: "Apprentissage du modèle host/client, des RPC et des contraintes de synchronisation avec Netcode for GameObjects."
                        },
                    ]
                },
            ],
        },
    ],

    // ── Résultat ───────────────────────────────────────────────────────────────
    outcome: [
        `Messenger est mon premier prototype multijoueur complet utilisant Unity Netcode for GameObjects et Unity Relay.`,
        `Le projet démontre la capacité à créer et rejoindre des sessions via code, synchroniser des messages en temps réel et gérer plusieurs clients sans système de compte.`,
        `Cette expérience m’a permis de comprendre les bases des architectures multijoueurs : autorité host, communication RPC et synchronisation réseau.`,
    ],

    // ── Infos sidebar ─────────────────────────────────────────────────────────
    infos: {
        year: "2024",
        duration: "Quelques jours",
        role: "Gameplay / Network Programmer",
    },

    // ── Screenshots ───────────────────────────────────────────────────────────
    screenshots: [
    ],

    // ── Liens ────────────────────────────────────────────────────────────────
    links: [
    ],

    // ── Tags ────────────────────────────────────────────────────────────────
    tags: "Unity, C#, Netcode for GameObject, Unity Relay, Multijoueur, UI, Réseau",
};