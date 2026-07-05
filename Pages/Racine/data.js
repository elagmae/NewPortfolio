const PROJECT_EN = {

    // ── Général ───────────────────────────────────────────────────────────────
    title:   "Racine",
    label:   "Computer Game",
    banner:  "../../Sources/Projects/Gifs/Racine.gif",
    context: `Final year project developed by a multidisciplinary team of ten over
            a five month academic production cycle. Racine originated from a
            first year prototype that was completely redesigned before entering
            full production in January 2026. As Gameplay & UI Programmer, I was
            responsible for the game's entire user interface, several core
            gameplay systems, and multiple editor tools used by the whole team.`,

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
        `Racine is a 3D isometric city builder with a colourful cartoon and
        burlesque art direction. Players control the Goglands, small clumsy
        creatures that must be organised into pairs and assigned to buildings in
        order to restore life to the Tree of Life.`,

        `Every Gogland has unique relationships and personality traits, making
        village management as much a social challenge as a logistical one. The
        project combines accessible city-building mechanics with production chains,
        character interactions and a strong emphasis on readability through its
        UI and player feedback.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [
        {
        category: "💻 Programming",
        items: [
            {
                title: "Grid-based city builder system",
                content: [
                    { type: "title", value: "🔧 What?" },
                    { type: "text", value: "Designed and implemented the entire building placement pipeline, including the grid system, multi-tile footprint validation, building rotation, placement preview, and support for special cases such as the dock, which can partially overlap water." },

                    { type: "title", value: "💡 How?" },
                    { type: "text", value: "The grid is composed of cell objects instantiated once at startup and stored inside a flat collection. Rather than relying on continuous raycasts, placement uses a static utility method to resolve a grid cell directly from a world position and the grid dimensions, making the system significantly lighter and easier to reuse throughout the project." },

                    { type: "text", value: "Multi-tile buildings are validated by iterating outward from the anchor cell while checking that every sampled cell remains adjacent to the previous one. This prevents buildings from wrapping around grid borders while keeping the validation logic generic regardless of footprint size." },

                    { type: "text", value: "Building rotation relies on trigonometric calculations, using the sine and cosine of the rotation angle to dynamically determine the sampling direction. This avoided duplicating validation code for every orientation while keeping the implementation easy to maintain." },

                    { type: "text", value: "The placement preview is updated through an asynchronous loop, allowing the ghost building to continuously follow the cursor without introducing unnecessary work into the main gameplay loop." },

                    { type: "title", value: "🎯 Why?" },
                    { type: "text", value: "Beyond implementing the placement mechanics themselves, my objective was to create a system that remained generic, performant and reusable by the rest of the team. Replacing raycasts with direct grid lookups reduced overhead considerably while exposing a simple API that other gameplay systems could easily build upon." },
                ]
            },

            {
                title: "Gameplay building architecture",
                content: [
                    { type: "title", value: "🔧 What?" },
                    { type: "text", value: "Implemented the behaviour of several gameplay buildings, including sap harvesters, refineries and storage buildings, all connected to the game's central resource system and designed to integrate with the villager AI developed by another programmer." },

                    { type: "title", value: "💡 How?" },
                    { type: "text", value: "Buildings inherit from a common base class responsible for placement, grid registration and ScriptableObject data. Each specialised building only overrides its production logic, allowing new building types to be created while reusing the same underlying framework." },

                    { type: "text", value: "The harvester listens for newly planted trees through a static event and continuously keeps track of the closest available resource within its working radius. The refinery supports three configurable processing modes exposed directly through the Unity Inspector: single conversion, batch conversion and complete resource draining." },

                    { type: "text", value: "Working alongside the AI programmer required adapting several interfaces so villagers could retrieve production values directly from buildings. I also introduced a dedicated WAIT_FOR_INSTRUCTION villager state to prevent workers assigned to buildings from triggering unrelated behaviours." },

                    { type: "title", value: "🎯 Why?" },
                    { type: "text", value: "Because gameplay systems evolved continuously throughout production, I focused on keeping building behaviours modular and easy to extend. Clean interfaces between buildings, resources and AI made collaboration much easier despite frequent game design changes." },
                ]
            },

            {
                title: "Generic object pool",
                content: [
                    { type: "title", value: "🔧 What?" },
                    { type: "text", value: "Created a generic, dynamically growing object pool shared across gameplay and UI systems for buildings, mood icons and various dynamically generated interface elements." },

                    { type: "title", value: "💡 How?" },
                    { type: "text", value: "The pool relies on an IPoolable interface exposing OnPooled() and OnUnpooled() callbacks. Whenever an object is requested, the pool first searches for an inactive instance before creating a new one if necessary. Returned objects are simply disabled and stored for future reuse." },

                    { type: "text", value: "Unlike fixed-size pools, this implementation grows only when required while still eliminating unnecessary Instantiate/Destroy cycles during normal gameplay." },

                    { type: "title", value: "🎯 Why?" },
                    { type: "text", value: "Besides reducing garbage collection and runtime allocations, having a generic implementation meant the same system could be reused throughout the project without any knowledge of the pooled object type. It quickly became useful well beyond its original purpose." },
                ]
            },

            {
                title: "Generic event bus",
                content: [
                    { type: "title", value: "🔧 What?" },
                    { type: "text", value: "Introduced a generic event bus architecture to decouple gameplay systems and the entire UI layer, removing the need for direct references between independent objects." },

                    { type: "title", value: "💡 How?" },
                    { type: "text", value: "The implementation uses a static generic class indexed by event type, allowing any system to publish or subscribe to strongly typed events without relying on a central manager instance. UI panels subscribe when enabled and automatically unsubscribe when disabled, keeping subscriptions clean across scene reloads." },

                    { type: "title", value: "🎯 Why?" },
                    { type: "text", value: "As the project grew, direct references between systems quickly became difficult to maintain. The event bus greatly reduced coupling, making gameplay features easier to modify without breaking unrelated systems while allowing every programmer to integrate new functionality with minimal dependencies." },
                ]
            },
        ],
    },
        {
        category: "📱 UI / UX",
        items: [
            {
                title: "Full game UI system (complete rebuild during production)",
                content: [
                    { type: "title", value: "🔧 What?" },
                    { type: "text", value: "Designed and implemented the entire UI layer of the game, including main menu, pause menu, settings, in-game HUD, shop system, villager panel, building interaction panels, electricity panel, laboratory skill tree and Tree of Life screen." },

                    { type: "text", value: "Midway through production, external playtests revealed major UX issues in the initial interface design. As a result, the entire UI was discarded and rebuilt from scratch based on new design directions defined by the game designers." },

                    { type: "title", value: "💡 How?" },
                    { type: "text", value: "All UI screens were rebuilt using Unity’s Layout Groups, Canvas Groups and Content Size Fitter systems, combined with carefully designed anchor setups to ensure responsiveness across resolutions without hardcoded values." },

                    { type: "text", value: "Dynamic interfaces such as villager lists, shop items or resource panels were made data-driven and automatically updated through events, removing the need for manual refresh logic." },

                    { type: "text", value: "To improve performance, unnecessary Unity layout components were removed from static UI elements, and expensive layout recalculations were reduced by isolating static vs dynamic UI sections and minimising Layout Group usage where possible." },

                    { type: "title", value: "🎯 Why?" },
                    { type: "text", value: "The goal was to create a UI system that could survive major game design changes without requiring full rewrites. The complete rebuild also forced me to prioritise automation, modularity and data-driven UI generation over manual scene-based configuration." },
                ]
            },

            {
                title: "Reusable UI components (button & shop system)",
                content: [
                    { type: "title", value: "🔧 What?" },
                    { type: "text", value: "Created reusable UI components to standardise behaviour across the entire project, including a custom button system and a fully automated shop panel generator." },

                    { type: "title", value: "💡 How?" },
                    { type: "text", value: "The shop component takes a list of ScriptableObjects as input and automatically generates the full UI: item names, icons, prices, purchase callbacks and layout adjustments. An editor button allows the entire shop to be rebuilt instantly from data." },

                    { type: "text", value: "The custom button system extends Unity’s default Button by exposing additional events such as Hover, Deselect, Interactable state changes and toggle click behaviour. These events can be used both via Unity Events in the inspector and via code listeners." },

                    { type: "text", value: "This allowed consistent interaction feedback across the entire UI (hover states, invalid clicks, toggles, etc.) without rewriting logic for each panel." },

                    { type: "title", value: "🎯 Why?" },
                    { type: "text", value: "The main objective was to reduce repetitive manual UI wiring. Any programmer or designer could now add or modify UI content directly from data (ScriptableObjects) without touching the scene hierarchy." },
                ]
            },

            {
                title: "Custom EditorWindow tools (laboratory skill tree automation)",
                content: [
                    { type: "title", value: "🔧 What?" },
                    { type: "text", value: "Developed custom Unity EditorWindow tools to automate the construction and maintenance of complex UI systems, particularly the laboratory skill tree interface." },

                    { type: "title", value: "💡 How?" },
                    { type: "text", value: "The tool reads a list of ScriptableObjects describing each node of the skill tree (cost, prerequisites, unlock state, visual state) and automatically generates all connections, icons, lock states and event listeners." },

                    { type: "text", value: "This removes the need for manual node-by-node setup in the Unity editor. Any change in game design can be applied by pressing a single update button, which rebuilds the entire structure." },

                    { type: "title", value: "🎯 Why?" },
                    { type: "text", value: "This system was designed to reduce human error and drastically speed up iteration time during frequent game design changes. It allowed the UI structure to remain fully data-driven instead of scene-dependent." },
                ]
            },

            {
                title: "UI architecture & event-driven interactions",
                content: [
                    { type: "title", value: "🔧 What?" },
                    { type: "text", value: "Implemented the full interaction logic of all UI panels, including opening/closing states, category switching, villager interaction panels and building assignment interfaces." },

                    { type: "text", value: "UI systems are fully decoupled from gameplay logic using an event-driven architecture based on a generic event bus." },

                    { type: "title", value: "💡 How?" },
                    { type: "text", value: "Each UI panel subscribes to gameplay events when enabled and unsubscribes when disabled, ensuring no persistent references between systems and preventing memory or state issues across scene reloads." },

                    { type: "text", value: "Panel transitions are managed through a state system that ensures only one context-sensitive panel is active at a time, preventing overlapping UI layers and inconsistent states." },

                    { type: "title", value: "🎯 Why?" },
                    { type: "text", value: "Decoupling UI from gameplay allowed both systems to evolve independently. It also made it significantly easier for other programmers to trigger UI changes without needing to understand the internal structure of the interface." },
                ]
            },
        ],
    },
{
    category: "✨ Visual Effects",
    items: [
        {
            title: "UI Shader Graph system (unlock visual feedback)",
            content: [
                { type: "title", value: "🔧 What?" },
                { type: "text", value: "Created UI shaders using Shader Graph to visually represent the unlock state of buildings in the laboratory skill tree." },

                { type: "title", value: "💡 How?" },
                { type: "text", value: "The shader progressively desaturates UI elements based on a float parameter driven at runtime by the building’s ScriptableObject unlock state. Locked elements appear in grayscale while unlocked elements retain full color." },

                { type: "text", value: "This approach keeps visual feedback fully data-driven, with no additional UI logic required to reflect state changes." },
            ]
        },

        {
            title: "DOTween UI feedback & transitions",
            content: [
                { type: "title", value: "🔧 What?" },
                { type: "text", value: "Implemented UI animations and feedback systems using DOTween across all major interactions in the game." },

                { type: "title", value: "💡 How?" },
                { type: "text", value: "Defined reusable animation patterns for buttons, panels and unlock events: buttons provide immediate feedback on interaction (scale, shake on invalid input), panels smoothly animate in and out instead of snapping, and important unlock events combine scale and color transitions for stronger readability." },

                { type: "text", value: "All sequences are designed to be lightweight, interruptible and reusable across multiple UI components." },

                { type: "title", value: "🎯 Why?" },
                { type: "text", value: "The goal was to improve game feel and UI clarity without relying on heavy or hardcoded animations. Every interaction was designed to provide immediate and readable feedback to the player." },
            ]
        },
    ],
},
],

    // ── Outcome ───────────────────────────────────────────────────────────────
    outcome: [
        `Racine became the largest and most technically ambitious project I had
        worked on. Building the entire UI layer while simultaneously developing
        gameplay systems taught me the importance of designing reusable solutions
        instead of solving each problem individually. Generic components, editor
        tooling and event-driven architecture quickly became essential parts of my
        workflow.`,

        `One of the biggest challenges came halfway through production, when
        external playtests revealed major UX issues and the entire interface had
        to be redesigned from scratch. Rebuilding every screen within only a few
        weeks pushed me to automate as much as possible through reusable
        components, custom editor windows and data-driven UI generation rather
        than relying on manual setup.`,

        `Working alongside programmers, designers and artists also taught me how
        important communication is when several systems depend on one another.
        Adapting my code to changing game design, exposing clean interfaces for
        other programmers and delivering reliable tools under tight deadlines gave
        me valuable experience of collaborative game development.`,
    ],

// ── Infos sidebar ─────────────────────────────────────────────────────────
infos: {
    year:     "2026",
    duration: "5 months",
    role:     "Gameplay & UI Programmer",
},

// ── Screenshots ───────────────────────────────────────────────────────────
screenshots: [
    {
        src: "../../Sources/Projects/Gifs/Racine.gif",
        caption: "Main Gameplay"
    },
    {
        src: "../../Sources/Projects/Racine/Labo.gif",
        caption: "Laboratory Skill Tree"
    },
    {
        src: "../../Sources/Projects/Racine/Work.gif",
        caption: "Villager Assignment System"
    }
],

// ── Liens ─────────────────────────────────────────────────────────────────
links: 
[
    {
        href: "https://www.youtube.com/watch?v=44rIFaQ0Fjk&t=6s",
        img:  "../../Sources/Projects/Racine/Tree.png",
        alt:  "Trailer",
    },
],

// ── Tags ──────────────────────────────────────────────────────────────────
tags: "Unity, C#, UI/UX, DOTween, Shader Graph, Editor Tools, Game Architecture",

};