const PROJECT = {

    // ── Général ───────────────────────────────────────────────────────────────
    title:   "An Escape In The Obscurity",
    label:   "Computer Game",
    banner:  "../../Sources/Projects/Gifs/AnEscapeInTheObscurity.gif",
    context: `My first Unreal school project that was meant to help me learn about the engine.`,

    // ── Pitch — autant de paragraphes que nécessaire ──────────────────────────
    pitch: [
        `A first-person horror game set in a dark manor. Navigate from zone to zone to escape while avoiding a creature that is actively trying to find and hurt you.
Your only tool is a flashlight. A high-powered burst mode can temporarily blind the monster, but drains battery fast. Hit zero battery and it's instant death. Get out before the darkness wins.`,
    ],

    // ── Contributions — autant de catégories / d'items que nécessaire ─────────
    contributions: [
    {
        category: "💻 Programming",
        items: [
            { 
                title: "Enemy behaviour",
                content: [
                    { type: "text", value: "Implemented enemy AI using Unreal's NavMesh system, with three distinct detection zones driving different behaviours: an idle patrol state, an alert state triggered by nearby sound that sends the enemy toward the player's last known position, and an active chase state. The enemy also reacts to the flashlight burst, temporarily freezing in place when blinded." },
                ]
            },
            { 
                title: "Player behaviour",
                content: [
                    { type: "text", value: "Implemented first person movement with sprint, and a flashlight system with two modes: a standard beam for visibility and a burst mode that blinds the enemy but drains battery quickly. Reaching zero battery triggers an instant death, creating constant resource tension." },
                ]
            },
        ]
    },

    {
        category: "📱 UI / UX",
        items: [
            { 
                title: "Main Game HUD",
                content: [
                    { type: "text", value: "Designed and implemented a minimal HUD displaying the flashlight battery level, the burst charge gauge, and an eye indicator that reflects the enemy's current state through colour: white for patrol, yellow for alert, red for active chase." },
                ]
            },
            { 
                title: "UI feedbacks",
                content: [
                    { type: "text", value: "Added reactive feedback to reinforce game state readability: the eye pulses and shifts colour in real time as the enemy transitions between states." },
                ]
            },
        ]
    },

    {
        category: "🎧 Audio Integration",
        items: [
            { 
                title: "SFX & music implementation",
                content: [
                    { type: "text", value: "Integrated an ambient soundtrack to reinforce the oppressive atmosphere, and wired all sound effects to their respective gameplay events using Play Sound nodes, including enemy detection, player actions, and UI interactions." },
                ]
            },
        ]
    },
],

outcome: [
    `This was my first hands-on experience with Unreal Engine, taken on as a one-month group project with no prior knowledge of the tool. Beyond the technical learning curve, the project also came with significant team coordination challenges that pushed me to take on a broader role than initially planned, managing task distribution and keeping deliverables on track as deadlines approached.`,
    `Despite those constraints, all the core mechanics outlined in the GDD were fully implemented and functional by the final build. On the engine side, I came away with a solid grasp of Blueprint logic and execution flow, custom events, NavMesh and AI behaviours, interactive UI with runtime bindings, and scene management. A small scope kept intentionally tight for the context, but everything that was promised was delivered.`,
],

    // ── Infos sidebar ─────────────────────────────────────────────────────────
    // Ajoute / retire / renomme les clés librement
    infos: {
        year:     "2024",
        duration: "1 month",
        role:     "Game Programmer",
    },

    // ── Screenshots — autant que nécessaire ───────────────────────────────────
    screenshots: [
        {
            src:     "../../Sources/Projects/Gifs/AnEscapeInTheObscurity.gif",
            caption: "Main Gameplay",
        },
    ],

    // ── Liens — laisser vide [] pour masquer la section ───────────────────────
    links: [
        {
            href: "https://dadaiste.itch.io/an-escape-in-the-obscurity",
            img:  "../../Sources/Projects/AnEscapeInTheObscurity/ItchioLink.png",
            alt:  "Itchio Page",
        },
    ],

    // ── Tags ──────────────────────────────────────────────────────────────────
    tags: "Unreal, Blueprints, Git",

};
