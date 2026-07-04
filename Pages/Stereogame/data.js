const PROJECT_EN = {
    // ── General ───────────────────────────────────────────────────────────────
    title: "Stereogame",
    label: "Professional partnership / Web Game",
    banner: "../../Sources/Projects/Gifs/Stereogame.gif",

    context: `Web-based game developed in collaboration with Stereolux (SMAC - Nantes) and E-artsup Nantes.
              Selected among multiple teams to represent the Stereogame event.
              Designed as a QR-code accessible WebGL experience playable on both mobile and desktop.`,

    ui: {
        pitch: "Pitch",
        contributions: "Contributions",
        outcome: "Outcome",
        links: "Links",
        screenshots: "Screenshots",
        tags: "Tags",
    },

    // ── Pitch ─────────────────────────────────────────────────────────────────
    pitch: [
        `Stereogame is a 2D hide-and-seek exploration game where the player navigates a dark concert hall using a movable projector light.`,
        `As players explore, they uncover hidden artworks that progressively unlock the official Stereolux event program, turning exploration into a communication tool.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [

        {
            category: "💻 Core Gameplay Systems",
            items: [

                {
                    title: "Projector-based exploration system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Implemented the main gameplay mechanic: a dynamic light system revealing hidden elements in a dark environment." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Built using layered Unity UI canvases: a dark overlay masks the scene while a circular mask follows the player input (mouse or touch) to reveal only a small visible area." },

                        {
                            type: "image",
                            src: "../../Sources/Projects/Stereogame/PlayerNav.gif",
                            caption: "Player movement mechanic"
                        },
                    ]
                },

                {
                    title: "Cross-platform input system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Unified input handling for both PC (mouse) and mobile (touch) in a WebGL build." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Used Application.platform to detect input type and route both systems into a single movement logic. On mobile, added a vertical offset so the finger never blocks the explored area." },
                    ]
                },

                {
                    title: "Scene navigation system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Built level progression and navigation between scenes and gallery." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Each unlocked level activates navigation buttons and triggers smooth animated transitions between scenes, ensuring a continuous experience." },

                        {
                            type: "image",
                            src: "../../Sources/Projects/Stereogame/LevelNav.gif",
                            caption: "Level navigation"
                        },
                    ]
                },

            ],
        },

        {
            category: "🎮 Interaction & Gameplay Design",
            items: [

                {
                    title: "Detection system & difficulty tuning",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Implemented detection zones for hidden objects with editor-based balancing tools." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Created Unity Gizmos to visualize detection radii directly in editor, allowing designers to adjust difficulty without code changes." },

                        {
                            type: "image",
                            src: "../../Sources/Projects/Stereogame/ObjectDetection.gif",
                            caption: "Detection system"
                        },
                    ]
                },

                {
                    title: "Gallery visibility system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Only triggers artwork discovery when fully visible on screen." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Converted UI RectTransform corners into screen space and checked if all four are inside screen bounds before triggering unlock." },
                    ]
                },

            ],
        },

        {
            category: "📱 UI / UX Implementation",
            items: [
                {
                    title: "Full UI integration",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Designed and integrated all UI systems: HUD, gallery, navigation, transitions." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Used Unity anchors and responsive layouts to ensure compatibility across desktop and mobile WebGL builds." },
                    ]
                },
            ],
        },

        {
            category: "✨ Visual Feedback & Juice",
            items: [
                {
                    title: "Animations & particles",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Created most of the visual feedback systems for interactions and discovery moments." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Built DOTween sequences for UI transitions and discovery animations, combined with particle effects for object reveals and gallery completion states." },

                        {
                            type: "image",
                            src: "../../Sources/Projects/Stereogame/GaleryApparition.gif",
                            caption: "Gallery reveal"
                        },
                    ]
                },
            ],
        },

        {
            category: "🔊 Audio Integration",
            items: [
                {
                    title: "FMOD integration",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Integrated full audio system using FMOD." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Implemented event-based sound triggers and an AudioManager handling music transitions per scene progression." },
                    ]
                },
            ],
        },
    ],

    // ── Outcome ───────────────────────────────────────────────────────────────
    outcome: [
        `Developed during a real client collaboration with Stereolux, this project was selected among multiple teams to represent the Stereogame event.`,
        `The game was showcased publicly and played via QR code access during a live event presentation.`,
        `This experience strengthened my ability to deliver a complete WebGL production under tight constraints while working in a multidisciplinary team.`,
    ],

    // ── Infos ───────────────────────────────────────────────────────────────
    infos: {
        year: "2025",
        duration: "1 month",
        role: "Gameplay & UI Programmer",
    },

    // ── Screenshots ───────────────────────────────────────────────────────────
    screenshots: [
        {
            src: "../../Sources/Projects/Stereogame/GaleryNav.gif",
            caption: "Gallery navigation"
        },
        {
            src: "../../Sources/Projects/Stereogame/GaleryApparition.gif",
            caption: "Gallery reveal"
        },
        {
            src: "../../Sources/Projects/Stereogame/LevelNav.gif",
            caption: "Level navigation"
        },
        {
            src: "../../Sources/Projects/Stereogame/ObjectDetection.gif",
            caption: "Detection system"
        },
        {
            src: "../../Sources/Projects/Stereogame/PlayerNav.gif",
            caption: "Player movement"
        },
    ],

    // ── Links ───────────────────────────────────────────────────────────────
    links: [
        {
            href: "https://elagmae.itch.io/stereogame",
            img: "../../Sources/Projects/Stereogame/ItchioLink.png",
            alt: "Itch.io"
        },
        {
            href: "https://www.e-artsup.net/2025/12/09/e-artsup-nantes-stereolux-collaboration-jeu/",
            img: "../../Sources/Projects/Stereogame/Group.png",
            alt: "Article"
        },
        {
            href: "https://stereolux.org/magazine/e-artsup-x-stereolux",
            img: "../../Sources/Projects/Stereogame/Presentation.png",
            alt: "Presentation"
        },
        {
            href: "https://github.com/s4pph1r3-dev/Stereolux",
            img: "../../Sources/Projects/Stereogame/github.png",
            alt: "GitHub"
        },
    ],

    // ── Tags ───────────────────────────────────────────────────────────────
    tags: "Unity, C#, WebGL, DOTween, FMOD, UI/UX, Game Design, Production",
};