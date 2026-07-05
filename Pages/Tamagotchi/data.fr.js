const PROJECT_FR = {

    // ── Général ───────────────────────────────────────────────────────────────
    title: "Tamagotchi",
    label: "Prototype en ligne",
    banner: "../../Sources/Projects/Gifs/Tamagotchi.gif",

    context:
        `Prototype universitaire explorant Unity Gaming Services à travers une expérience coopérative asynchrone.
        Deux joueurs partagent la garde d'un même animal virtuel, alternent les soins et communiquent via un système de lettres,
        tout en suivant un planning de garde synchronisé via le cloud.`,


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
    pitch:
    [
        `Tamagotchi est une expérience de simulation d'animal de compagnie jouée à deux en coopération asynchrone. Les joueurs ne jouent pas en même temps : chacun se connecte indépendamment pour s'occuper du même animal virtuel, échanger des lettres et suivre un système de garde alternée.`,
        
        `Le projet a été conçu pour explorer Unity Gaming Services (Authentication, Cloud Save, Cloud Code) et construire une architecture capable de synchroniser des données entre plusieurs comptes sans système de multiplayer temps réel.`,
        
        `Toutes les données importantes du jeu (inventaire, progression, besoins du pet, planning, messages) sont stockées dans le cloud afin de permettre une continuité de l'expérience sur n'importe quel appareil.`
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions:
    [
        {
            category: "🎮 Game Design",

            items:
            [
                {
                    title: "Gameplay coopératif asynchrone",

                    content:
                    [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value:
                                "Conception du cœur du jeu autour d'une coopération asynchrone. Deux joueurs partagent la responsabilité d'un même animal sans jamais avoir besoin d'être connectés en même temps."
                        },

                        { type: "title", value: "⚙️ Comment ?" },
                        {
                            type: "text",
                            value:
                                "Chaque joueur possède un compte individuel relié à une même room partagée stockée dans le cloud. Chaque action modifie des données communes récupérées lors de la prochaine connexion de l'autre joueur."
                        },

                        {
                            type: "text",
                            value:
                                "Un système de planning de garde définit quel joueur peut interagir avec le pet selon le jour de la semaine, créant une logique proche d'une garde alternée."
                        },

                        { type: "title", value: "💡 Pourquoi ?" },
                        {
                            type: "text",
                            value:
                                "L'objectif était de créer une expérience sociale basée sur la communication plutôt que la compétition. L'absence de simultanéité permet de favoriser une interaction sur le long terme et un sentiment de responsabilité partagée."
                        },

                        { type: "title", value: "⚠️ Contraintes" },
                        {
                            type: "text",
                            value:
                                "Tous les systèmes ont dû être pensés pour fonctionner sans présence simultanée des joueurs, ce qui a fortement influencé l'architecture backend et la structure des données cloud."
                        },

                        { type: "title", value: "🚀 Améliorations" },
                        {
                            type: "text",
                            value:
                                "Ajouter plusieurs animaux ou plusieurs rooms par joueur permettrait d'élargir fortement les possibilités tout en conservant la même architecture."
                        },
                    ]
                }
            ]
        },

        {
            category: "💻 Programmation",

            items:
            [
                {
                    title: "Système d'authentification",

                    content:
                    [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value:
                                "Implémentation d'un système de comptes complet via Unity Authentication permettant création, connexion, changement de mot de passe et récupération des données cloud."
                        },

                        { type: "title", value: "⚙️ Comment ?" },
                        {
                            type: "text",
                            value:
                                "Utilisation du provider Username & Password avec les fonctions SignUpWithUsernamePasswordAsync et SignInWithUsernamePasswordAsync. Une fois connecté, Unity génère un Player ID unique utilisé pour tous les systèmes en ligne."
                        },

                        {
                            type: "text",
                            value:
                                "Toutes les opérations cloud sont conditionnées à l'état d'authentification afin d'éviter les erreurs de synchronisation."
                        },

                        { type: "title", value: "💡 Pourquoi ?" },
                        {
                            type: "text",
                            value:
                                "Les comptes persistants permettent de synchroniser la progression entre plusieurs appareils et de relier chaque joueur à sa room et à ses données cloud."
                        }
                    ]
                },

                {
                    title: "Cloud Save (sauvegarde en ligne)",

                    content:
                    [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value:
                                "Système de persistance complet basé sur Unity Cloud Save stockant progression, inventaire, argent, planning et données de gameplay."
                        },

                        { type: "title", value: "⚙️ Comment ?" },
                        {
                            type: "text",
                            value:
                                "Lecture et écriture asynchrones de données via clés cloud. Les valeurs sont regroupées dans des dictionnaires puis envoyées au serveur après modification."
                        },

                        {
                            type: "text",
                            value:
                                "L'interface est reconstruite localement à partir des données cloud, séparant totalement présentation et stockage."
                        },

                        { type: "title", value: "💡 Pourquoi ?" },
                        {
                            type: "text",
                            value:
                                "Le Cloud Save permet une continuité de progression sur n'importe quel appareil tout en gardant une indépendance totale entre les deux joueurs."
                        },

                        { type: "title", value: "⚠️ Contraintes" },
                        {
                            type: "text",
                            value:
                                "La sérialisation de l'inventaire a nécessité une séparation stricte entre données de gameplay et UI. Les ScriptableObjects n'étant pas supportés, une conversion JSON a été mise en place."
                        }
                    ]
                },

                {
                    title: "Backend Cloud Code",

                    content:
                    [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value:
                                "Développement d'un backend serveur via Unity Cloud Code pour centraliser les opérations critiques et éviter toute manipulation côté client."
                        },

                        { type: "title", value: "⚙️ Comment ?" },
                        {
                            type: "text",
                            value:
                                "Des endpoints JavaScript exécutés côté serveur interagissent avec Cloud Save pour créer des rooms, synchroniser les données et valider les actions des joueurs."
                        },

                        {
                            type: "text",
                            value:
                                "Les rooms sont stockées indépendamment des joueurs et servent de point unique de vérité pour l'état du pet."
                        },

                        { type: "title", value: "💡 Pourquoi ?" },
                        {
                            type: "text",
                            value:
                                "Séparer données personnelles et données partagées évite toute duplication et garantit une synchronisation fiable entre joueurs."
                        }
                    ]
                },

                {
                    title: "Architecture des rooms partagées",

                    content:
                    [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value:
                                "Conception d'un système de rooms partagées représentant chaque animal et reliées à deux joueurs simultanément."
                        },

                        { type: "title", value: "⚙️ Comment ?" },
                        {
                            type: "text",
                            value:
                                "Lors de la création d'une room, Cloud Code génère un identifiant unique relié aux deux comptes. Toutes les modifications du pet s'appliquent à cette même entité cloud."
                        },

                        {
                            type: "text",
                            value:
                                "Les données du pet (états, planning, besoins) sont mises à jour directement dans la room et partagées automatiquement."
                        },

                        { type: "title", value: "💡 Pourquoi ?" },
                        {
                            type: "text",
                            value:
                                "Un seul objet partagé évite les problèmes de synchronisation entre deux copies différentes du même animal."
                        }
                    ]
                },

                {
                    title: "Validation serveur des règles de jeu",

                    content:
                    [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value:
                                "Déplacement de certaines règles de gameplay côté serveur pour empêcher toute triche ou désynchronisation."
                        },

                        { type: "title", value: "⚙️ Comment ?" },
                        {
                            type: "text",
                            value:
                                "Le planning de garde utilise l'heure serveur pour déterminer quel joueur peut interagir avec le pet, empêchant toute modification locale de contourner les règles."
                        },

                        { type: "title", value: "💡 Pourquoi ?" },
                        {
                            type: "text",
                            value:
                                "Même en prototype, cela permet de garantir une logique de jeu cohérente et centralisée sans réseau multijoueur temps réel."
                        }
                    ]
                },

                {
                    title: "Inventaire cloud",

                    content:
                    [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value:
                                "Système d'inventaire persistant synchronisé entre tous les appareils via Cloud Save."
                        },

                        { type: "title", value: "⚙️ Comment ?" },
                        {
                            type: "text",
                            value:
                                "Les données d'inventaire sont stockées sous forme sérialisée et mises à jour uniquement via des événements de gameplay, sans dépendance directe à l'UI."
                        },

                        { type: "title", value: "💡 Pourquoi ?" },
                        {
                            type: "text",
                            value:
                                "Séparer données et interface simplifie fortement la synchronisation et la maintenance du système."
                        }
                    ]
                },

                {
                    title: "UI événementielle",

                    content:
                    [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value:
                                "Mise en place d'une architecture UI basée sur des événements pour découpler gameplay et interface."
                        },

                        { type: "title", value: "⚙️ Comment ?" },
                        {
                            type: "text",
                            value:
                                "Chaque changement de données (inventaire, besoins du pet, ressources) déclenche des événements qui mettent à jour automatiquement les éléments UI concernés."
                        },

                        { type: "title", value: "💡 Pourquoi ?" },
                        {
                            type: "text",
                            value:
                                "Cela évite les mises à jour manuelles de l'interface et facilite l'ajout de nouveaux éléments UI."
                        }
                    ]
                },

                {
                    title: "Système de lettres",

                    content:
                    [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value:
                                "Système de messagerie asynchrone permettant aux joueurs de s'envoyer des lettres."
                        },

                        { type: "title", value: "⚙️ Comment ?" },
                        {
                            type: "text",
                            value:
                                "Les messages sont stockés dans les données cloud du destinataire et affichés à la connexion avant d'être supprimés."
                        },

                        { type: "title", value: "💡 Pourquoi ?" },
                        {
                            type: "text",
                            value:
                                "Renforce la dimension sociale du projet sans dépendre d'un chat temps réel externe."
                        }
                    ]
                },

                {
                    title: "Simulation persistante du pet",

                    content:
                    [
                        { type: "title", value: "🔧 Quoi ?" },
                        {
                            type: "text",
                            value:
                                "Le pet continue d'évoluer même lorsque les joueurs sont déconnectés."
                        },

                        { type: "title", value: "⚙️ Comment ?" },
                        {
                            type: "text",
                            value:
                                "Les timestamps sont comparés côté serveur pour calculer l'évolution des besoins entre deux connexions."
                        },

                        { type: "title", value: "💡 Pourquoi ?" },
                        {
                            type: "text",
                            value:
                                "Donne l'impression d'un monde vivant et persistant indépendamment des sessions de jeu."
                        }
                    ]
                },
            ]
        },
    ],

    // ── Outcome ───────────────────────────────────────────────────────────────
    outcome:
    [
        `Tamagotchi m'a permis d'explorer en profondeur Unity Gaming Services pour construire une expérience asynchrone complète sans multijoueur temps réel.`,
        `Le projet m'a apporté une vraie compréhension des architectures backend cloud, de la programmation asynchrone et de la persistance de données.`,
        `L'un des apprentissages majeurs a été l'importance de concevoir les systèmes autour des données plutôt que de leur représentation visuelle, facilitant la synchronisation et l'évolution du projet.`,
        `Le prototype fonctionne entièrement et valide l'architecture choisie, malgré quelques ajustements nécessaires liés à la gestion asynchrone.`
    ],

    // ── Infos ───────────────────────────────────────────────────────────────
    infos:
    {
        année: "2025",
        temps: "2 mois",
        role: "Programmeur Gameplay & Backend (solo)",
    },

    // ── Screenshots ───────────────────────────────────────────────────────────
    screenshots: [],

    // ── Liens ───────────────────────────────────────────────────────────────
    links: [],

    // ── Tags ────────────────────────────────────────────────────────────────
    tags:
        "Unity, C#, Unity Gaming Services, Cloud Save, Cloud Code, Authentication, Backend, JavaScript, Architecture événementielle, JSON, Programmation asynchrone",
};