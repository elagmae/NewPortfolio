const PROJECT = {

    // ── Général ───────────────────────────────────────────────────────────────
    title:   "Stereogame",
    label:   "Professional partnership / Web Game",
    banner:  "../../Sources/Projects/Gifs/Stereogame.gif",
    context: `Multiplayer web game created in collaboration with
              Stereolux and E-artsup Nantes.
              Selected among 4 competing teams during the Stereogame event.`,

    // ── Pitch — autant de paragraphes que nécessaire ──────────────────────────
    pitch: [
        `Stereogame is a retro-inspired 2D hide-and-seek adventure blending
         point-and-click exploration with atmospheric pixel art. Armed only
         with a torch, players must navigate a darkened concert hall, uncover
         hidden clues, and reveal the mysterious line-up behind the Stereogame event.`,
        `Designed for casual players, the experience mixes nostalgia, curiosity,
         and discovery into a stylish multi-platform web game.`,
    ],

    // ── Contributions — autant de catégories / d'items que nécessaire ─────────
    contributions: [
        {
            category: "🎮 Game Design",
            items: [
                { title: "Initial game concept proposal",       content: "..." },
                { title: "Gameplay iterations and balancing",   content: "..." },
                { title: "Web & multi-platform adaptation",     content: "..." },
            ]
        },
        {
            category: "💻 Programming",
            items: [
                { 
                    title: "Main gameplay systems",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ]
                },
                { 
                    title: "Cross-platform controls implementation",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ]
                },
                { 
                    title: "Scene & menu navigation",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ]
                },
                { 
                    title: "Save system integration",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ]
                },
            ]
        },
        {
            category: "📱 UI / UX",
            items: [
                { title: "Responsive PC & mobile interfaces",   content: "..." },
            ]
        },
        {
            category: "✨ Visual Effects",
            items: [
                { title: "Particle Systems integration",        content: "..." },
                { title: "DOTween animations & transitions",    content: "..." },
            ]
        },
        {
            category: "🎧 Audio Integration",
            items: [
                { title: "FMOD audio integration",              content: "..." },
            ]
        },
    ],

    // ── Outcome — autant de paragraphes que nécessaire ────────────────────────
    outcome: [
        `This project allowed me to work through the entire production pipeline
         of a game, from concept to playable release.`,
        `Working in a real collaborative production context helped me strengthen
         my autonomy, communication and technical adaptability.`,
    ],

    // ── Infos sidebar ─────────────────────────────────────────────────────────
    // Ajoute / retire / renomme les clés librement
    infos: {
        year:     "2025",
        duration: "1 month",
        role:     "Main Game Programmer",
    },

    // ── Screenshots — autant que nécessaire ───────────────────────────────────
    screenshots: [
        {
            src:     "../../Sources/Projects/Gifs/Stereogame.gif",
            caption: "Main Gameplay",
        },
    ],

    // ── Liens — laisser vide [] pour masquer la section ───────────────────────
    links: [
        {
            href: "https://elagmae.itch.io/stereogame",
            img:  "../../Sources/Projects/Stereogame/ItchioLink.png",
            alt:  "Itchio Page",
        },
    ],

    // ── Tags ──────────────────────────────────────────────────────────────────
    tags: "Unity, C#, FMOD, DOTween, Git, WebGL, UI/UX, VFX",

};
