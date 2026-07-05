const PROJECT_EN = {

    // ── Général ───────────────────────────────────────────────────────────────
    title:   "Hide & Sick",
    label:   "Professional partnership / Walking Sim",
    banner:  "../../Sources/Projects/Gifs/HideAndSick.gif",
    context: `Walking simulator created in collaboration with a fashion designer
              working with garments made from recycled plastic waste.
              The game was designed as an interactive installation for a fashion
              show in Paris, combining narrative exploration and environmental storytelling.`,

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
        `Hide & Sick is a first-person narrative walking simulator set in a
         deteriorating apartment where plastic is slowly merging with organic matter.
         The player explores a confined living space, uncovering fragments of story
         through objects, letters, and environmental changes.`,

        `Progression is driven by exploration and interaction: each key object
         discovered triggers a new phase of the environment, progressively
         transforming lighting, props, and atmosphere until the space becomes
         increasingly distorted and unfamiliar.`
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [
        {
            category: "💻 Programming",
            items: [
                {
                    title: "Interactable architecture system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Designed a base Interactable class used by all interactive objects in the game (doors, documents, collectibles, triggers)." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "The system combines a layer-mask raycast filtering approach with a configurable inspector-based behaviour system. Each interactable exposes simple toggles (zoom, rotation, pickup) allowing rapid setup without code changes." },
                        { type: "text", value: "Child classes implement specific behaviours such as text display, phase triggers, or object collection, keeping the interaction pipeline consistent across the project." },

                        { type: "title", value: "🎯 Why?" },
                        { type: "text", value: "This structure allowed fast iteration during production and made it easy for non-programmer teammates to configure interactions directly in Unity." }
                    ]
                },

                {
                    title: "Inspection & interaction system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Implemented a 3D inspection mode allowing players to pick up and rotate objects before interacting with them." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Rotation input is handled from mouse and controller input, with axes calculated relative to the camera rather than world space, ensuring consistent and intuitive manipulation regardless of viewpoint." },

                        { type: "title", value: "🎯 Why?" },
                        { type: "text", value: "This camera-relative approach significantly improved usability and reinforced the tactile, immersive feeling of object interaction." }
                    ]
                },

                {
                    title: "Game phase system & environmental evolution",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Built a global phase system driving environmental storytelling and world transformation over time." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "A static ChangeState method triggers C# events consumed by all systems (lighting, environment, VFX). Each scene object uses a PhaseShower component to define in which phases it should appear." },
                        { type: "text", value: "This allowed designers to control scene evolution directly in the inspector without additional scripting." },

                        { type: "text", value: "The system was also used to progressively transform the apartment visually, reinforcing narrative progression through environmental change." }
                    ]
                },

                {
                    title: "Main integration work (3D + production unblock)",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Took responsibility for large parts of 3D asset integration after production issues blocked progress." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Fixed scaling and rotation issues directly in Unity import settings, rebuilt materials from texture sets, and converted all assets into reusable prefabs (interactables, environment, props, player setup)." },

                        { type: "title", value: "🎯 Why?" },
                        { type: "text", value: "Standardising assets into prefabs created a shared production structure and allowed the team to iterate faster on level assembly and phase-based changes." }
                    ]
                }
            ]
        },

        {
            category: "📱 UI / UX",
            items: [
                {
                    title: "In-game computer interface (lore system)",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Designed and implemented the in-game PC interface used to read emails and narrative documents." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Built in Illustrator then integrated into Unity, inspired by retro operating systems and early web interfaces to match the narrative tone." }
                    ]
                },

                {
                    title: "Responsive UI system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Created all UI layouts with full responsiveness across resolutions." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Used Unity Layout Groups, Scroll Views and Content Size Fitters to create self-adjusting interfaces for dynamic content such as emails and documents." }
                    ]
                }
            ]
        },

        {
            category: "✨ Visual Effects",
            items: [
                {
                    title: "Animation & interaction feedback",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Implemented feedback animations and interaction sequences across gameplay systems." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Used DOTween to animate UI transitions, object interactions and door opening sequences triggered directly from gameplay events, keeping VFX tightly coupled with player actions." }
                    ]
                }
            ]
        },

        {
            category: "🎧 Audio Integration",
            items: [
                {
                    title: "AudioManager & phase-based sound system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text", value: "Implemented centralized audio management for music and sound effects." },

                        { type: "title", value: "💡 How?" },
                        { type: "text", value: "Built a simple AudioManager using string-based keys for SFX playback and integrated phase-based music transitions using DOTween crossfades between tracks." },

                        { type: "text", value: "The same crossfade system was reused for footsteps depending on surface zones, ensuring consistency across all audio transitions." }
                    ]
                }
            ]
        }
    ],

    // ── Outcome ───────────────────────────────────────────────────────────────
    outcome: [
        `This project was a strong exercise in production adaptability, requiring me to take ownership of both programming and integration tasks under real client constraints.`,

        `Working in a small team with inconsistent availability reinforced my ability to step in when needed, unblock production, and maintain a functional build despite scope adjustments.`
    ],

    // ── Infos sidebar ─────────────────────────────────────────────────────────
    infos: {
        year:     "2025-2026",
        duration: "5 months",
        role:     "Gameplay & UI Programmer / Unity Integrator",
    },

    // ── Screenshots ───────────────────────────────────────────────────────────
    screenshots: [
        {
            src: "../../Sources/Projects/Gifs/HideAndSick.gif",
            caption: "Main Gameplay"
        }
    ],

    // ── Liens ─────────────────────────────────────────────────────────────────
    links: [],

    // ── Tags ──────────────────────────────────────────────────────────────────
    tags: "Unity, C#, DOTween, UI/UX, Integration, Narrative design, Git",
};