const PROJECT_EN = {

    // ── General ───────────────────────────────────────────────────────────────
    title: "Hotatoe",
    label: "Student Project / Multiplayer Game",
    banner: "../../Sources/Projects/Gifs/Hotatoe.gif",

    context: `Multiplayer game developed as a 9-person student team project.
              Focused on real-time gameplay systems, physics interactions, and score-based competition.
              Built under tight production constraints across multiple disciplines (code, art, audio, game design).`,

    ui: {
        pitch: "Pitch",
        contributions: "Contributions",
        outcome: "Outcome",
        links: "Links",
        screenshots: "Screenshots",
        tags: "Tags",
        infosLabels: {
            year: "Year",
            duration: "Duration",
            role: "Role",
        },
    },

    // ── Pitch ─────────────────────────────────────────────────────────────────
    pitch: [
        `Hotatoe is a competitive multiplayer game focused on physics-based interactions and fast-paced arena gameplay.`,
        `Players compete using movement abilities, projectile mechanics, and score-based objectives within short match loops.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [

        {
            category: "🎮 Core Gameplay Systems",
            items: [

                {
                    title: "Gameplay loop & match flow",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Implemented the main gameplay loop including match start, score tracking, and win conditions." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Built a central GameMode handling all core rules, player scoring, match timers, and global reset between sessions." },
                    ]
                },

                {
                    title: "Player systems & interactions",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Developed core player actions such as movement and contextual interactions." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Implemented an input system based on action states (push, snap, shoot), enabling different behaviors depending on gameplay context." },
                    ]
                },

                {
                    title: "Projectile physics system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Prototyped and iterated on the main projectile (fireball) physics system." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Handled physics-based behavior using velocity and collision logic, including return mechanics and late-stage bug fixing for stability." },
                    ]
                },
            ],
        },

        {
            category: "💻 Programming & Architecture",
            items: [

                {
                    title: "Project architecture",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Set up the global project structure and Unreal systems organization." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Organized gameplay logic using GameMode, Player Blueprint, and modular systems separating UI, gameplay, and interactions." },
                    ]
                },

                {
                    title: "Debugging & system integration",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Fixed multiple issues related to physics, input handling, and asset integration." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Performed rapid iterations and selective refactoring to stabilize builds and ensure playable versions for testing." },
                    ]
                },
            ],
        },

        {
            category: "📱 UI / UX",
            items: [

                {
                    title: "Menus & in-game UI",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Created and integrated main menus and in-game HUD systems." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Iterated from prototype UI to fully functional in-game integration, later converted to World Space for better readability and scene consistency." },
                    ]
                },

                {
                    title: "Score system & player feedback",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Implemented real-time score tracking and player feedback systems." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Linked score updates directly to the GameMode and synchronized UI elements during gameplay sessions." },
                    ]
                },
            ],
        },

        {
            category: "🔊 Audio & Juice",
            items: [

                {
                    title: "Audio integration",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Integrated sound effects and background music into the game." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Implemented event-driven sound triggers for core actions and added background music adapted to gameplay loops." },
                    ]
                },

                {
                    title: "Visual polish & game feel",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Improved overall game feel through visual feedback and effects." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Added player-colored materials, dynamic background effects, and VFX improvements to enhance readability and feedback clarity." },
                    ]
                },
            ],
        },

        {
            category: "🤝 Production & Collaboration",
            items: [

                {
                    title: "Team organization & planning",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Set up planning tools and structured team coordination processes." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Created weekly planning, task tracking, and regular check-ins to improve production visibility and workflow organization." },
                    ]
                },

                {
                    title: "Production challenges",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Worked within a team with uneven workload distribution and delays across multiple departments." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Adapted scope continuously, took over urgent tasks (audio, integration, debugging), and stabilized the project to maintain a playable build." },

                        { type: "title", value: "🎯 Impact" },
                        { type: "text", value: "Increased workload on core development tasks but ensured delivery of a functional game despite production constraints." },
                    ]
                },
            ],
        },
    ],

    // ── Outcome ───────────────────────────────────────────────────────────────
    outcome: [
        `Developed as a 9-person student project under real production constraints.`,
        `Despite uneven team involvement across departments, a fully playable version was delivered.`,
        `This project strengthened my skills in gameplay programming, rapid debugging, and production management under pressure.`,
    ],

    // ── Infos ───────────────────────────────────────────────────────────────
    infos: {
        year: "2025",
        duration: "2 months",
        role: "Gameplay / UI / Core Programmer",
    },

    // ── Screenshots ───────────────────────────────────────────────────────────
    screenshots: [

    ],

    // ── Links ───────────────────────────────────────────────────────────────
    links: [

    ],

    // ── Tags ───────────────────────────────────────────────────────────────
    tags: "Unreal Engine, Blueprint, Multiplayer, Physics, UI, Game Design, Team Project",
};