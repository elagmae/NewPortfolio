const PROJECT = {

    // ── Général ───────────────────────────────────────────────────────────────
    title:   "Hide & Sick",
    label:   "Professional partnership / Walking Sim",
    banner:  "../../Sources/Projects/Gifs/HideAndSick.gif",
    context: `Walking sim created in collaboration with a fashion brand
              crafting garments from plastic waste, developed as a showcase
              piece for their exhibitions. Built alongside a heavy academic
              workload, limiting production to roughly one or two days per week when possible.`,

    // ── Pitch ─────────────────────────────────────────────────────────────────
    pitch: [
        `Hide & Sick is a contemplative first person walking sim set in a
         post apocalyptic world where plastic is slowly transforming humanity.
         Trapped inside their apartment, the player explores every corner of
         their home, uncovering old letters, emails, and scattered objects
         that piece together the lore of a collapsing world.`,
        `To escape, the player must locate key items hidden throughout the
         flat, each one unlocking the next step toward the front door.
         As objectives are completed, the environment itself evolves: lighting
         shifts, new objects appear, and the decor grows increasingly eerie
         and plastified, mirroring the world deteriorating outside. The game
         was designed to echo the identity of the client brand, an immersive
         and unsettling universe built entirely around reclaimed plastic.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [
        {
            category: "💻 Programming",
            items: [
                {
                    title: "Interactable heritage system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Designed and implemented a base Interactable class that every interactive object in the game inherits from, combined with layer mask filtering so the player raycast only ever hits interactable objects." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "The base class exposes a set of booleans directly in the inspector: one to allow zoom, one to allow free rotation, one to allow direct pickup. This lets any team member configure an object's full interaction behaviour in seconds without touching code. In hindsight the class accumulated several responsibilities that could have been split further, but it caused no issue during production and kept iteration fast." },
                        { type: "title", value: "🎯 Why?" },
                        { type: "text",  value: "Using a layer mask for the raycast keeps interaction logic clean and performant, ignoring all geometry that should never be clickable. The inheritance model gave every programmer a reliable contract: override what you need, configure the rest in the editor." },
                    ]
                },
                {
                    title: "Child interactable implementations",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Implemented all child interactable classes: text display objects, phase unlock triggers, door openers, and collectible items. The PC object was an existing implementation that was adjusted and extended." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Each child class overrides only the logic specific to its behaviour, relying on the base class for raycast detection, interaction prompts, and inspector configuration. This kept each class short and focused, and allowed teammates to add new interactables by duplicating a prefab and selecting the right component." },
                    ]
                },
                {
                    title: "Inspection system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Built a 3D object inspection mode letting players rotate picked up items freely before deciding to collect them." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Rotation input is read from both mouse delta and controller stick, keeping the system multi-control from the start. Crucially, rotation axes are computed relative to the player camera rather than world space, so the object always rotates in the intuitive direction regardless of where the player is looking. This camera-relative approach also adds to immersion, making the inspection feel physically grounded." },
                    ]
                },
                {
                    title: "Game state / phase system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Implemented a global phase system that drives environmental changes throughout the game: lighting shifts, decor mutations, new lore objects appearing as the story progresses." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "A static ChangeState method accepts a phase index and fires C# events that all registered systems listen to. Lighting controllers, atmosphere managers, and visual effect triggers all subscribe independently, keeping the phase system itself decoupled from any specific behaviour." },
                        { type: "text",  value: "Every scene object carries a PhaseShower script with a serialized list of phase indices where it should be visible. On each state event, PhaseShower checks the current phase against its list and shows or hides accordingly. This meant designers could control exactly which objects appear in which phase directly from the inspector, with zero additional code." },
                    ]
                },
                {
                    title: "Main Unity integrator",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Took on full 3D asset integration after poorly exported models left the project blocked, going beyond the original scope to unblock the rest of the team." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Fixed all scaling and rotation issues directly in Unity mesh import settings rather than asking artists to re-export. Created all materials manually from the provided texture sets and applied them to the corrected meshes. Every element in the game was then packaged as a prefab: interactables, clothing items, furniture, clutter objects, map sections (ground floor and basement), and the player rig." },
                        { type: "title", value: "🎯 Why?" },
                        { type: "text",  value: "Having every element as a prefab gave the whole team a shared vocabulary of reusable building blocks, allowing scenes to be populated faster and changes to propagate automatically. It also made wiring up the phase events and shaders straightforward since every object had a clean, consistent structure." },
                    ]
                },
            ],
        },
        {
            category: "📱 UI / UX",
            items: [
                {
                    title: "In-game PC interface design",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Designed the in-game computer UI used to read emails and access lore documents, working in Illustrator before bringing it into Unity." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Drew inspiration from old browser and OS interfaces to match the game's retrofuturistic tone. Not coming from an art background, the approach was deliberate patchwork: layering panels and shapes over existing window frames, masking parts that did not fit the aesthetic, and iterating until the result felt cohesive without looking overworked." },
                    ]
                },
                {
                    title: "Responsive interface layouts",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Built all UI layouts to adapt cleanly to different resolutions and content lengths, particularly for the mail and document panels." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Used Unity Scroll Views with Content Size Fitters and Layout Groups to create self-organising lists that resize automatically with their content. This kept the mail panel readable at any length without hardcoded sizes, and allowed new entries to be added by the team without any layout adjustments." },
                    ]
                },
            ],
        },
        {
            category: "✨ Visual Effects",
            items: [
                {
                    title: "Text animations and door opening sequence",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Implemented animated text reveals and a code-driven door opening sequence." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Text animations use DOTween to drive vertex scale changes per character, producing a zoom-in and character-by-character appearance effect. The door opening is triggered directly from a collider callback: a DOTween sequence animates the door transform on entry, keeping the VFX tied to gameplay state without a separate animator." },
                    ]
                },
            ],
        },
        {
            category: "🎧 Audio Integration",
            items: [
                {
                    title: "AudioManager and SFX system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Built a centralised AudioManager handling all sound effects and music playback across the game." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "The manager holds a string-to-AudioClip dictionary and exposes a single Play method accepting a key and a loop flag. Any system in the game can request a sound by name without holding a direct reference to an AudioSource, keeping audio calls clean and consistent. SFX such as door opens and interaction clicks are triggered this way throughout the codebase." },
                    ]
                },
                {
                    title: "Phase-based music crossfades",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Implemented smooth music transitions between the three game phases without any audible cut or pop." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "All three music tracks are started simultaneously from the beginning, with tracks two and three at volume zero. On a phase event, a DOTween crossfade brings the outgoing track to zero and the incoming track to full, producing a seamless blend. Not the most architecturally elegant solution, but the most practical given the timeline, and it produces a clean result." },
                    ]
                },
                {
                    title: "Surface-based footstep system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Played different footstep sounds depending on which surface the player is walking on." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Trigger zones define each surface area in the scene. On enter and exit, the same crossfade logic used for music swaps the active footstep loop to the correct surface variant. This reuse of the existing volume blend system kept the implementation fast and consistent with the rest of the audio architecture." },
                    ]
                },
            ],
        },
    ],

    // ── Outcome ───────────────────────────────────────────────────────────────
    outcome: [
        `This project was a direct lesson in professional autonomy. While several
         teammates struggled with motivation in a low-constraint environment,
         stepping up repeatedly to unblock the project confirmed that discipline
         and self-direction are skills I can rely on outside of a structured
         academic context.`,
        `Going beyond my original scope, from 3D integration to UI design,
         forced me to move fast in unfamiliar territory and deliver something
         functional under real client pressure. That stretch, even at the cost
         of some personal scope, gave me more confidence in my ability to
         execute when it counts.`,
    ],

    // ── Infos sidebar ─────────────────────────────────────────────────────────
    infos: {
        year:     "2025-2026",
        duration: "5 months",
        role:     "Game Programmer",
    },

    // ── Screenshots ───────────────────────────────────────────────────────────
    screenshots: [
        {
            src:     "../../Sources/Projects/Gifs/HideAndSick.gif",
            caption: "Main Gameplay",
        },
    ],

    // ── Liens ─────────────────────────────────────────────────────────────────
    links: [],

    // ── Tags ──────────────────────────────────────────────────────────────────
    tags: "Unity, C#, DOTween, Illustrator, Shader Graph, Git, Partnership",

};