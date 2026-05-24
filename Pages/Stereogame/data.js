const PROJECT = {

    // ── Général ───────────────────────────────────────────────────────────────
    title:   "Stereogame",
    label:   "Professional partnership / Web Game",
    banner:  "../../Sources/Projects/Gifs/Stereogame.gif",
    context: `Multiplayer web game created in collaboration with
              Stereolux and E-artsup Nantes.
              Selected among 4 competing teams during the Stereogame event.`,

    // ── Pitch ─────────────────────────────────────────────────────────────────
    pitch: [
        `Stereogame is a retro-inspired 2D hide-and-seek adventure blending
         point-and-click exploration with atmospheric pixel art. Armed only
         with a torch, players must navigate a darkened concert hall, uncover
         hidden clues, and reveal the mysterious line-up behind the Stereogame event.`,
        `Designed for casual players, the experience mixes nostalgia, curiosity,
         and discovery into a stylish multi-platform web game.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [
        {
            category: "🎮 Game Design",
            items: [
                {
                    title: "Initial game concept proposal",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Led the game concept ideation from a client brief requiring a web multiplatform game that reflects Stereolux's identity: music, concerts, art, and accessibility for all audiences." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Organized a team brainstorming session listing free associations and micro-ideas to converge toward a precise concept. Personally proposed the selected concept: a hide-and-seek exploration game set inside Stereolux's actual concert hall, where players discover framed artworks representing upcoming events. Each piece acts as a gallery entry with event info, reinforcing Stereolux's artistic identity." },
                        { type: "text",  value: "The concept was deliberately scoped to fit a one-month timeline alongside coursework: a very small core gameplay loop where every extra mechanic or detail reads as juice rather than scope creep. The team adopted the concept, and it was ultimately selected by the client." },
                        { type: "title", value: "🎯 Why?" },
                        { type: "text",  value: "Using the real Stereolux venue (visited and photographed on-site) created nostalgia for the client, offered a preview for potential visitors, and gave artists a reliable visual reference, all while staying aligned with the client brief." },
                    ]
                },
                {
                    title: "Gameplay iterations and balancing",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Iterated on detection zone sizing and level difficulty across the game's multiple scenes." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Implemented custom Gizmos for each hidden object's detection radius directly in the Unity editor, so level designers could freely adjust zones without touching code. This allowed the whole team to tune difficulty without programmer intervention." },
                    ]
                },
                {
                    title: "Web & multi-platform adaptation",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Designed the game to work seamlessly on both PC (mouse) and mobile (touch) via Unity WebGL." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Used Application.platform to detect the current platform and switch input handling accordingly. On touch devices, applied a vertical offset to the torch so the player's finger never occludes the explored radius." },
                    ]
                },
            ],
        },
        {
            category: "💻 Programming",
            items: [
                {
                    title: "Main gameplay systems",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Built the core torch mechanic: the player's light follows the cursor or finger across a darkened scene to reveal hidden objects." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Structured the scene as a layered UI stack: a base canvas with all hidden items, topped by a dark overlay image simulating a lightless room. The player is represented as a circular UI sprite used as a mask cutout in the overlay, revealing the real scene underneath as they move." },
                        { type: "text",  value: "Also implemented a screen shake system and detection zone logic with editor Gizmos, giving level designers full control over per-object difficulty without code changes." },
                    ]
                },
                {
                    title: "Cross-platform controls implementation",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Handled both mouse and touch input within a single WebGL build." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Branched input logic using Application.platform. For touch, added a vertical offset to the torch position so the finger never hides the active exploration radius, a small but impactful UX decision that significantly improves playability on mobile." },
                    ]
                },
                {
                    title: "Scene & menu navigation",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Built the level progression system and the gallery navigation." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Unlocking a level activates the corresponding navigation button and triggers a transition to the next scene. Players can also navigate backward with the opposite arrow, mirroring the gallery's looping card system. The gallery itself uses a continuous looping scroll between discovered artworks, encouraging players to revisit found pieces and learn more about Stereolux events." },
                    ]
                },
                {
                    title: "Save system integration",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Implemented a lightweight save system tracking gallery unlock state across levels." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Used PlayerPrefs, well suited for the project's scope, to persist each artwork's unlock state via object IDs. Each item has three states: not found, newly discovered, and already seen. This three-state model enabled distinct discovery feedback animations. Since it's a web game, save data is intentionally cleared on page reload." },
                    ]
                },
                {
                    title: "Gallery visibility detection",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Triggered artwork unlocks only when a piece is fully visible on screen during the looping gallery scroll." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Built a RectTransform extension method that converts each of the four world-space corners to screen space via WorldToScreenPoint, then checks whether all four fall within the screen bounds. Unlock triggers only when the corner count reaches 4, ensuring the artwork is completely on screen before registering as seen." },
                    ]
                },
            ],
        },
        {
            category: "🖥️ UI / UX",
            items: [
                {
                    title: "Responsive PC & mobile interfaces",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Designed and coded all game UI scenes, including the gameplay HUD, the gallery, and level transitions." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Used Unity's built-in UI components with careful anchor configuration to keep layouts consistent across screen sizes and aspect ratios, from desktop to mobile. UX decisions were iterated with the team to ensure clarity and engagement." },
                        { type: "text",  value: "The looping gallery navigation was a deliberate UX choice: the continuous carousel motion invites players to keep scrolling and discover more artworks, increasing dwell time and reinforcing the Stereolux event presentation." },
                    ]
                },
            ],
        },
        {
            category: "✨ Visual Effects",
            items: [
                {
                    title: "Animations & transitions",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Integrated artist-authored animations and built custom DOTween sequences for discovery moments." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Drove artist animations via Animator triggers and booleans. Layered DOTween sequences for artwork reveals: a banner animation, the artwork itself animating in, and a room-lighting flash, all chained as a single sequential and overlapping sequence for a polished feel." },
                    ]
                },
                {
                    title: "Particle Systems integration",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Created particle effects for the full gallery state and for object discovery and easter eggs." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Small golden square particles float across a completed gallery to add warmth, movement, and a sense of victory. A circular burst of colored strokes plays on artwork and easter egg collection, masking the object's despawn while giving the impression the player genuinely picked something up." },
                    ]
                },
            ],
        },
        {
            category: "🎧 Audio Integration",
            items: [
                {
                    title: "FMOD audio integration",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Integrated all SFX and music using FMOD Studio, including a custom AudioManager for dynamic music transitions." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Used FMOD Studio Event Emitters on individual objects to trigger sound effects on click or gameplay events. Built an AudioManager to handle music playback and level-based transitions: a single track can loop across several levels before switching at a defined threshold." },
                        { type: "text",  value: "SFX were kept on per-object SerializeFields rather than centralized, intentionally preserving existing work from a teammate and avoiding costly refactors in a short-timeline project." },
                    ]
                },
            ],
        },
    ],

    // ── Outcome ───────────────────────────────────────────────────────────────
    outcome: [
        `This project allowed me to work through the entire production pipeline
         of a game, from concept to playable release.`,
        `Working in a real collaborative production context helped me strengthen
         my autonomy, communication and technical adaptability.`,
    ],

    // ── Infos sidebar ─────────────────────────────────────────────────────────
    infos: {
        year:     "2025",
        duration: "1 month",
        role:     "Main Game Programmer",
    },

    // ── Screenshots ───────────────────────────────────────────────────────────
    screenshots: [
        {
            src:     "../../Sources/Projects/Gifs/Stereogame.gif",
            caption: "Main Gameplay",
        },
        {
            src:     "../../Sources/Projects/Stereogame/GaleryNav.gif",
            caption: "Galery Navigation",
        },
        {
            src:     "../../Sources/Projects/Stereogame/GaleryApparition.gif",
            caption: "Galery Apparition",
        },
        {
            src:     "../../Sources/Projects/Stereogame/LevelNav.gif",
            caption: "Level Navigation",
        },
        {
            src:     "../../Sources/Projects/Stereogame/PlayerNav.gif",
            caption: "Player Movements",
        },
    ],

    // ── Liens ─────────────────────────────────────────────────────────────────
    links: [
        {
            href: "https://elagmae.itch.io/stereogame",
            img:  "../../Sources/Projects/Stereogame/ItchioLink.png",
            alt:  "Itchio Page",
        },
        {
            href: "https://www.e-artsup.net/2025/12/09/e-artsup-nantes-stereolux-collaboration-jeu/",
            img:  "../../Sources/Projects/Stereogame/Group.png",
            alt:  "Experience",
        },
        {
            href: "https://stereolux.org/magazine/e-artsup-x-stereolux",
            img:  "../../Sources/Projects/Stereogame/Presentation.png",
            alt:  "Partnership",
        },
    ],

    // ── Tags ──────────────────────────────────────────────────────────────────
    tags: "Unity, C#, FMOD, DOTween, Git, WebGL, UI/UX, VFX",

};