const PROJECT = {

    // { type: "image", src: "../../Sources/Projects/Gifs/MMA.gif", caption: "Vue de l'outil" },
                        // { type: "text",  value: "Il génère automatiquement les connexions entre noeuds." },
                        // { type: "gif",   src: "../../Sources/Projects/Gifs/MMA.gif", caption: "Vue de l'outil" },

    // ── Général ───────────────────────────────────────────────────────────────
    title:   "Magical Music Arena",
    label:   "Mobile Game",
    banner:  "../../Sources/Projects/Gifs/MMA.gif",
    context: `A school year-end project with a fun brief : build a mobile game original enough to catch Devolver Digital's eye.`,

    // ── Pitch — autant de paragraphes que nécessaire ──────────────────────────
    pitch: [
        `A mobile boss-rush rhythm game with a narrative element, featuring 2D 
        portrait-oriented gameplay in a dynamic hyperpop and pop-art style, 
        where you can parry attacks rhythmically, meet endearing characters, 
        unlock various stories, and experience a narrative with a subtextual layer 
        exploring social issues.`,
    ],

    // ── Contributions — autant de catégories / d'items que nécessaire ─────────
    contributions: [
        {
            category: "🎮 Game Design",
            items: [
                { 
                    title: "Initial game concept proposal",

                    content:
                    [
                        { type: "title",  value: "🔧 What?" },

                        {
                            type:"text", value:
                            
                            "Designed an original mobile game for the Devolver Digital catalogue: Magical Music Arena (MMA), a 2D portrait-oriented rhythmic boss-rush with an unlockable chapter-based narrative system. Each level is a musical battle against a boss in an arena, using a single slide input to parry attacks in rhythm. The enemies have different attacks and weaknesses to stimulate the player's brain."
                        },
                            
                        { type: "title",  value: "⚙️ How?" },

                        { 
                            type: "text",  
                            value: "Structured the design process around in-depth market research: mobile market analysis (hypercasual trends, toilet games, market share), Devolver watch (positioning, existing IPs, Devolver Tumble Time), PEGI/ESRB analysis, and mobile input study. This allowed every design decision to be backed by concrete data." 
                        },

                        { type: "title",  value: "💡 Why?" },

                        { 
                            type: "text",  
                            value: "The brief required an original IP, PEGI 3 or 7, solo experience, Android mobile only, 3 months of production, with the ambition of bringing mobile players back to Devolver's PC scene." 
                        },

                        {
                            type:"text",
                            value:"The team chose the rhythmic boss-rush format to combine short sessions (a strong 2024 trend), a single central mechanic, and a narrative universe strong enough to leave a lasting impression, which aligns with Devolver's identity.",
                        },

                        {
                            type:"text",
                            value:"The hyperpop / pop art style came from a pivot: the initial Japanese-inspired direction lacked market justification, whereas a saturated, flat visual style aligns with casual trends while remaining graphically original.",
                        },

                        { type: "title",  value: "⚠️ Challenges" },

                        {
                            type:"text", 
                            value : "The first visual direction (Japanese aesthetic) had to be dropped due to inconsistency with the brief and market findings. This early pivot cost time, but ultimately produced a stronger and more distinctive art direction.",
                        },

                        { type: "title",  value: "🚀 Improvements" },

                        {
                            type:"text", 
                            value : "Anticipate the \"why this style?\" consistency check earlier in the creative process, to avoid late stage pivots.",
                        },
                    ]
                },

                { 
                    title: "Gameplay iterations and balancing",

                    content:
                    [
                        { type: "title",  value: "⚠️ Challenges" },

                        {
                            type:"text", 
                            value : "The core mechanic evolved significantly between iterations. Originally, the player had to manually move around the arena using directional arrows, then trigger an attack separately: two inputs for a single beat, making the game nearly unplayable in rhythm.",
                        },

                        {type : "title", value:"🚀 Improvements"},
                        {
                            type:"text",
                            value:"I proposed replacing this with a single directional slide, paired with a code-side input leniency window. The result: one action per beat, immediate readability, and a rhythm feel accessible even for casual players."
                        }
                    ]
                },
            ]
        },
        {
            category: "💻 Programming",
            items: 
            [
                { 
                    title: "Level Design Tool",

                    content:
                    [
                        { type: "title",  value: "🔧 Actions" },

                        {
                            type:"text",
                            value:"Designed and documented a Unity ScriptableObject-based level editor allowing a single designer to build rhythm levels entirely through the Inspector.",
                        },

                        {
                            type:"text",
                            value:"Each LevelData asset holds a FMOD music reference and a beat-indexed list of spawn actions: one entry per beat, each containing enemy prefabs, their line, color/type, and a per-enemy action sequence (Idle, Move, or Special, resolved via inheritance).",
                        },

                        { type: "title",  value: "⚙️ How?" },

                        {
                            type:"text",
                            value:"Each enemy carries its own action list synchronized to the beat grid. Special actions are typed using inheritance, with polymorphic args handling per-enemy behavior (line switching, disguise type swaps, feint recoil, etc.).",
                        },

                        {
                            type:"text",
                            value:"To keep the Inspector usable, some parameters that were too verbose as generic objects were cast to int and reconverted in code. I also wrote a dedicated documentation page so the level designer could work autonomously without needing to ask me at every step.",
                        },

                        { type: "title",  value: "💡 Why?" },

                        {
                            type:"text",
                            value:"With a two-month deadline and a team of five, building a custom EditorWindow wasn't feasible. A ScriptableObject gave the level designer a usable tool fast, and since it was scoped to one person with known habits, the UX tradeoffs were manageable. The priority was unblocking production, not building a generic tool.",
                        },

                        { type: "title",  value: "⚠️ Challenges" },

                        {
                            type:"text",
                            value:"Generic arguments were the main pain point : making args flexible enough to support any enemy parameter combination without breaking the Inspector required compromises. The int-cast workaround worked but made the data less readable and more error-prone to edit manually.",
                        },

                        { type: "title",  value: "🚀 Improvements" },

                        {
                            type:"text",
                            value:"A proper custom EditorWindow would have been significantly better: clean labeled fields, real-time music playback synced to the beat cursor, and a timeline-style view to visualize enemy waves at a glance. That kind of tool would be genuinely reusable across rhythm game projects.",
                        },

                        { type: "image",  src: "../../Sources/Projects/MMA/LevelDesign.png", caption:"Level Design Editor",},
                    ]
                },

                { 
                    title: "Attack system",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ]
                },

                {
                    title: "Enemy behaviours system",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ]
                },

                { 
                    title: "Dialog system",

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
                {                     
                    title: "Responsive mobile interface",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ] 
                },

                {                     
                    title: "Scene navigation",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ] 
                },

                {                     
                    title: "Messenger interface",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ] 
                },
            ]
        },
        {
            category: "✨ Visual Effects",
            items: [
                {                     
                    title: "Halftone Shader",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ]
                },

                {                     
                    title: "Post procress & visual events",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ]
                },

                {                     
                    title: "Particle Systems",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ]
                },

                {                     
                    title: "VFX Graphs",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ]
                },

                {                     
                    title: "DoTween animations",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ]
                },

                {                     
                    title: "Text animations",

                    content:
                    [
                        { type: "text",  value: "..." },
                    ]
                },
            ]
        },
        {
            category: "🎧 Audio Integration",
            items: 
            [
                {
                    title: "UI sounds integration",
                    content:
                        [
                            { type: "text",  value: "..." },
                        ]
                },
            ]
        },
    ],

    // ── Outcome — autant de paragraphes que nécessaire ────────────────────────
    outcome: [
        `...`,
    ],

    // ── Infos sidebar ─────────────────────────────────────────────────────────
    // Ajoute / retire / renomme les clés librement
    infos: {
        year:     "2025",
        duration: "2 month",
        role:     "Main Game Programmer",
    },

    // ── Screenshots — autant que nécessaire ───────────────────────────────────
    screenshots: [
        {
            src:     "../../Sources/Projects/Gifs/MMA.gif",
            caption: "Main Gameplay",
        },
        {
            src:     "../../Sources/Projects/MMA/NarrativeSystem.gif",
            caption: "Narrative System",
        },
    ],

    // ── Liens — laisser vide [] pour masquer la section ───────────────────────
    links: [
        {
            href:"https://elagmae.itch.io/magical-music-arena",
            img: "../../Sources/Projects/MMA/ItchioLink.png",
            alt : "Itchio Page",
        },
    ],

    // ── Tags ──────────────────────────────────────────────────────────────────
    tags: "Unity, C#, FMOD, Mobile, Particle System, VFX Graph, Git",

};
