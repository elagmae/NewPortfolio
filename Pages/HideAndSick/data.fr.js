const PROJECT_FR = {

    // ── Général ───────────────────────────────────────────────────────────────
    title:   "Hide & Sick",
    label:   "Partenariat professionnel / Walking Simulator",
    banner:  "../../Sources/Projects/Gifs/HideAndSick.gif",
    context: `Walking simulator créé en collaboration avec une designer de mode
              travaillant des vêtements fabriqués à partir de déchets plastiques recyclés.
              Le jeu a été conçu comme une installation interactive pour un défilé de mode
              à Paris, mêlant exploration narrative et storytelling environnemental.`,

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
        `Hide & Sick est un walking simulator narratif à la première personne se déroulant dans un appartement en décomposition où le plastique fusionne progressivement avec la matière organique.
Le joueur explore un espace clos et découvre des fragments narratifs à travers des objets, des lettres et des changements environnementaux.`,

        `La progression repose sur l’exploration et l’interaction : chaque objet clé déclenche une nouvelle phase de l’environnement, transformant progressivement l’éclairage, les props et l’atmosphère jusqu’à rendre l’espace de plus en plus distordu et méconnaissable.`
    ],

    // ── Contributions ───────────────────────────────────────────────────────
    contributions: [

        {
            category: "💻 Programmation",
            items: [

                {
                    title: "Système d’interactables",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Conception d’une classe Interactable de base utilisée par tous les objets interactifs du jeu (portes, documents, collectibles, triggers)." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Le système combine un raycast filtré par layer mask avec un système configurable via l’inspector. Chaque interactable expose des options simples (zoom, rotation, ramassage) permettant une configuration rapide sans modification de code." },
                        { type: "text", value: "Les classes enfants implémentent des comportements spécifiques comme l’affichage de texte, le déclenchement de phases ou la collecte d’objets, tout en gardant un pipeline d’interaction uniforme." },

                        { type: "title", value: "🎯 Pourquoi ?" },
                        { type: "text", value: "Cette structure a permis une itération rapide pendant la production et a facilité la configuration des interactions par les membres non programmeurs de l’équipe." }
                    ]
                },

                {
                    title: "Système d’inspection et d’interaction",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Implémentation d’un mode d’inspection 3D permettant de manipuler et faire pivoter les objets avant interaction." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "La rotation est gérée via la souris et la manette, avec des axes calculés en fonction de la caméra plutôt que du monde, garantissant une manipulation intuitive et cohérente." },

                        { type: "title", value: "🎯 Pourquoi ?" },
                        { type: "text", value: "Cette approche centrée caméra améliore fortement la prise en main et renforce l’immersion lors de l’interaction avec les objets." }
                    ]
                },

                {
                    title: "Système de phases et évolution de l’environnement",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Création d’un système global de phases pilotant la narration environnementale et la transformation du monde." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Une méthode statique ChangeState déclenche des événements C# utilisés par tous les systèmes (lumières, environnement, VFX). Chaque objet utilise un composant PhaseShower pour définir sa présence selon les phases." },
                        { type: "text", value: "Les designers peuvent ainsi contrôler l’évolution de la scène directement depuis l’inspector sans script supplémentaire." },

                        { type: "text", value: "Ce système permet également de transformer progressivement l’appartement, renforçant la narration par le changement visuel." }
                    ]
                },

                {
                    title: "Intégration 3D et déblocage production",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Prise en charge d’une grande partie de l’intégration des assets 3D après des blocages en production." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Correction des problèmes de scale et rotation dans Unity, reconstruction des matériaux à partir des textures, et conversion des assets en prefabs réutilisables (interactables, environnement, props, joueur)." },

                        { type: "title", value: "🎯 Pourquoi ?" },
                        { type: "text", value: "La standardisation en prefabs a permis de structurer la production et d’accélérer l’itération sur le level design et les changements de phases." }
                    ]
                }
            ]
        },

        {
            category: "📱 UI / UX",
            items: [

                {
                    title: "Interface ordinateur in-game (lore)",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Conception et intégration de l’interface PC utilisée pour lire les emails et documents narratifs." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Interface réalisée sous Illustrator puis intégrée dans Unity, inspirée des OS rétro et des interfaces web anciennes pour coller à l’univers narratif." }
                    ]
                },

                {
                    title: "UI responsive",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Création de toutes les interfaces avec compatibilité multi-résolution." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Utilisation des Layout Groups, Scroll Views et Content Size Fitters pour créer des interfaces auto-adaptatives pour les emails et documents dynamiques." }
                    ]
                }
            ]
        },

        {
            category: "✨ Effets visuels",
            items: [

                {
                    title: "Animations et feedbacks d’interaction",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Implémentation de feedbacks visuels et animations d’interaction sur tous les systèmes de gameplay." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Utilisation de DOTween pour animer les transitions UI, interactions d’objets et ouvertures de portes déclenchées par le gameplay." }
                    ]
                }
            ]
        },

        {
            category: "🎧 Intégration audio",
            items: [

                {
                    title: "AudioManager et système basé sur les phases",
                    content: [
                        { type: "title", value: "🔧 Quoi ?" },
                        { type: "text", value: "Implémentation d’un système centralisé de gestion audio pour la musique et les SFX." },

                        { type: "title", value: "💡 Comment ?" },
                        { type: "text", value: "Création d’un AudioManager basé sur des clés string pour les effets sonores et gestion des transitions musicales via crossfade avec DOTween." },

                        { type: "text", value: "Le système de crossfade est également utilisé pour les pas en fonction des surfaces, assurant une cohérence sonore globale." }
                    ]
                }
            ]
        }
    ],

    // ── Résultat ─────────────────────────────────────────────────────────────
    outcome: [

        `Ce projet a été un exercice important d’adaptabilité en production, nécessitant de prendre en charge à la fois des tâches de programmation et d’intégration dans un contexte client réel.`,

        `Le travail en petite équipe avec une disponibilité irrégulière m’a appris à débloquer la production, prendre des initiatives et maintenir une version fonctionnelle malgré les contraintes de scope.`
    ],

    // ── Infos ────────────────────────────────────────────────────────────────
    infos: {
        year:     "2025-2026",
        duration: "5 mois",
        role:     "Gameplay & UI Programmer / Unity Integrator",
    },

    // ── Captures ────────────────────────────────────────────────────────────
    screenshots: [
        {
            src: "../../Sources/Projects/Gifs/HideAndSick.gif",
            caption: "Gameplay principal"
        }
    ],

    // ── Liens ────────────────────────────────────────────────────────────────
    links: [],

    // ── Tags ────────────────────────────────────────────────────────────────
    tags: "Unity, C#, DOTween, UI/UX, Intégration, Narrative design, Git",
};