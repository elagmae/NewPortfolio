const PROJECT_FR = {

    // ── Général ───────────────────────────────────────────────────────────────
    title:   "Magical Music Arena",
    label:   "Jeu mobile",
    banner:  "../../Sources/Projects/Gifs/MMA.gif",

    context: `Projet de fin d'année scolaire avec une contrainte ludique : créer un jeu mobile suffisamment original pour attirer l’attention de Devolver Digital.`,

    ui: {
        pitch: "Pitch",
        contributions: "Contributions",
        outcome: "Résultat",
        links: "Liens",
        screenshots: "Captures",
        tags: "Tags",
        infosLabels: {
            year: "Année",
            duration: "Durée",
            role: "Rôle",
        },
    },

    // ── Pitch ────────────────────────────────────────────────────────────────
    pitch: [
        `Un jeu mobile de boss rush rythmique avec une dimension narrative, en vue 2D portrait, dans un style hyperpop et pop-art dynamique, où le joueur doit parer les attaques en rythme, rencontrer des personnages attachants, débloquer différentes histoires et découvrir une narration avec une couche de lecture abordant des thématiques sociales.`,
    ],

    // ── Contributions ────────────────────────────────────────────────────────
    contributions: [

        {
            category: "🎮 Game Design",
            items: [

                {
                    title: "Proposition de concept initial",

                    content: [
                        { type: "title", value: "🔧 Quoi ?" },

                        {
                            type: "text",
                            value:
                                "Conception d’un jeu mobile original pour un brief Devolver Digital : Magical Music Arena (MMA), un boss rush rythmique en 2D portrait avec un système narratif débloquable par chapitres. Chaque niveau est un combat musical contre un boss dans une arène, basé sur une seule interaction de slide pour parer en rythme."
                        },

                        { type: "title", value: "⚙️ Comment ?" },

                        {
                            type: "text",
                            value:
                                "Processus de conception structuré autour d’une recherche approfondie : analyse du marché mobile (hypercasual, tendances, parts de marché), étude du positionnement Devolver (IP existantes, Devolver Tumble Time), analyse PEGI/ESRB et étude des inputs mobiles. Chaque décision de design est ainsi appuyée par des données concrètes."
                        },

                        { type: "title", value: "💡 Pourquoi ?" },

                        {
                            type: "text",
                            value:
                                "Le brief imposait une IP originale, PEGI 3 ou 7, une expérience solo sur Android et 3 mois de production, avec l’objectif de reconnecter les joueurs mobiles à l’univers PC de Devolver."
                        },

                        {
                            type: "text",
                            value:
                                "L’équipe a choisi le format boss rush rythmique pour combiner des sessions courtes (tendance forte), une mécanique centrale unique et un univers narratif marquant."
                        },

                        {
                            type: "text",
                            value:
                                "Le style hyperpop / pop-art est issu d’un pivot : une direction japonaise initiale jugée incohérente avec le marché a été remplacée par un style plus saturé et lisible, mieux aligné avec les tendances mobile."
                        },

                        { type: "title", value: "⚠️ Problèmes" },

                        {
                            type: "text",
                            value:
                                "La première direction artistique a dû être abandonnée suite à un manque de cohérence avec le brief et l’analyse marché, entraînant une perte de temps mais un résultat final plus fort."
                        },

                        { type: "title", value: "🚀 Améliorations" },

                        {
                            type: "text",
                            value:
                                "Anticiper plus tôt la question de cohérence stylistique pour éviter des pivots tardifs."
                        },
                    ]
                },

                {
                    title: "Itérations gameplay et équilibrage",

                    content: [

                        { type: "title", value: "⚠️ Problèmes" },

                        {
                            type: "text",
                            value:
                                "Le gameplay initial nécessitait deux actions par beat (déplacement + attaque), rendant le jeu difficilement lisible et injouable en rythme."
                        },

                        { type: "title", value: "🚀 Améliorations" },

                        {
                            type: "text",
                            value:
                                "Remplacement par une seule action de slide directionnel avec une fenêtre de tolérance côté code, rendant le gameplay fluide, lisible et accessible."
                        },
                    ]
                },
            ]
        },

        {
            category: "💻 Programmation",
            items: [

                {
                    title: "Outil de level design",

                    content: [

                        { type: "title", value: "🔧 Actions" },

                        {
                            type: "text",
                            value:
                                "Conception d’un outil basé sur ScriptableObject permettant de créer des niveaux rythmiques directement dans l’Inspector Unity."
                        },

                        {
                            type: "text",
                            value:
                                "Chaque LevelData contient une musique FMOD et une liste d’événements indexés sur les beats (ennemis, lignes, types, actions)."
                        },

                        { type: "title", value: "⚙️ Comment ?" },

                        {
                            type: "text",
                            value:
                                "Les ennemis possèdent leurs propres listes d’actions synchronisées au beat. Les comportements spéciaux utilisent l’héritage pour gérer les variations."
                        },

                        {
                            type: "text",
                            value:
                                "Certaines données ont été converties en int pour simplifier l’Inspector, avec une documentation dédiée pour faciliter l’usage par le designer."
                        },

                        { type: "title", value: "💡 Pourquoi ?" },

                        {
                            type: "text",
                            value:
                                "Avec un délai court et une petite équipe, un EditorWindow complet n’était pas viable. Le ScriptableObject offrait une solution rapide et efficace."
                        },

                        { type: "title", value: "⚠️ Problèmes" },

                        {
                            type: "text",
                            value:
                                "La flexibilité des paramètres a introduit des compromis de lisibilité et des risques d’erreurs dans l’Inspector."
                        },

                        { type: "title", value: "🚀 Améliorations" },

                        {
                            type: "text",
                            value:
                                "Un EditorWindow complet avec timeline et preview musicale serait une solution plus robuste et réutilisable."
                        },
                    ]
                },

                {
                    title: "Système d’attaque",

                    content: [

                        { type: "title", value: "🔧 Quoi ?" },

                        {
                            type: "text",
                            value:
                                "Implémentation d’un système de parry rythmique basé sur un slide directionnel et une grille à 3 lanes."
                        },

                        { type: "title", value: "⚙️ Comment ?" },

                        {
                            type: "text",
                            value:
                                "Chaque attaque est gérée via héritage, avec des comportements spécifiques par type d’ennemi."
                        },

                        {
                            type: "text",
                            value:
                                "Les attaques incluent : Normal, NoTouch, Disguise, PathModifier, Baiter, et Big."
                        },

                        { type: "title", value: "💡 Pourquoi ?" },

                        {
                            type: "text",
                            value:
                                "L’approche par prefab rend l’ajout de nouvelles attaques modulaire et rapide."
                        },

                        { type: "title", value: "⚠️ Problèmes" },

                        {
                            type: "text",
                            value:
                                "Le tuning de la fenêtre de tolérance FMOD a nécessité plusieurs sessions de playtest."
                        },
                    ]
                },
            ]
        },

        {
            category: "📱 UI / UX",
            items: [

                {
                    title: "Interface mobile responsive",

                    content: [

                        { type: "title", value: "🔧 Quoi ?" },

                        {
                            type: "text",
                            value:
                                "UI complète adaptée au format portrait Android avec 3 lanes, HUD et contrôles tactiles."
                        },

                        { type: "title", value: "⚙️ Comment ?" },

                        {
                            type: "text",
                            value:
                                "Utilisation de Screen.safeArea et d’un ajustement dynamique de la caméra pour garantir la lisibilité sur tous les écrans."
                        },

                        { type: "title", value: "⚠️ Problèmes" },

                        {
                            type: "text",
                            value:
                                "Conflits entre les gestes système Android et les contrôles du jeu sur les premières versions."
                        },
                    ]
                },
            ]
        },

        {
            category: "✨ Effets visuels",
            items: [

                {
                    title: "Shader halftone",

                    content: [

                        { type: "title", value: "🔧 Quoi ?" },

                        {
                            type: "text",
                            value:
                                "Shader HLSL post-process appliquant un style pop-art avec motifs halftone dynamiques."
                        },

                        { type: "title", value: "⚙️ Comment ?" },

                        {
                            type: "text",
                            value:
                                "Échantillonnage screen-space UV + seuil de luminance + masque directionnel pour contrôler la densité des points."
                        },

                        { type: "title", value: "💡 Pourquoi ?" },

                        {
                            type: "text",
                            value:
                                "Élément visuel central du style artistique du jeu."
                        },
                    ]
                },
            ]
        },
    ],

    // ── Résultat ──────────────────────────────────────────────────────────────
    outcome: [
        `Magical Music Arena a été réalisé sous forme de vertical slice en deux mois et présenté devant jury comme un pitch Devolver Digital.`,
        `Le projet couvre un chapitre complet avec plusieurs boss, dialogues et musiques originales.`,
        `Les principaux apprentissages concernent les outils ScriptableObject, le rythme gameplay et la production en équipe.`
    ],

    // ── Infos ────────────────────────────────────────────────────────────────
    infos: {
        year:     "2025",
        duration: "2 mois",
        role:     "Lead Game Programmer",
    },

    // ── Screenshots ──────────────────────────────────────────────────────────
    screenshots: [
        {
            src: "../../Sources/Projects/Gifs/MMA.gif",
            caption: "Gameplay principal",
        }
    ],

    // ── Liens ────────────────────────────────────────────────────────────────
    links: [
        {
            href: "https://elagmae.itch.io/magical-music-arena",
            img: "../../Sources/Projects/MMA/ItchioLink.png",
            alt: "Page itch.io",
        }
    ],

    // ── Tags ────────────────────────────────────────────────────────────────
    tags: "Unity, C#, FMOD, Mobile, VFX, Shaders, Git",
};