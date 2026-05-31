const PROJECT = {

    // ── Général ───────────────────────────────────────────────────────────────
    title:   "Racine",
    label:   "Computer Game",
    banner:  "../../Sources/Projects/Gifs/Racine.gif",
    context: `Final year project actively developed by a team of ten, built
              over a five month academic deadline. Racine was originally a
              first year project that was rethought and redesigned over the
              summer before entering full production in January 2026.`,

    // ── Pitch ─────────────────────────────────────────────────────────────────
    pitch: [
        `Racine is a 3D isometric city builder with a cartoon and burlesque
         art style. The player takes control of the Goglands, small naive and
         clumsy creatures they must organise and pair up to restore life to
         their creator: the Tree of Life.`,
        `By assigning villagers in pairs and optimising their interactions,
         the player develops a thriving village where cooperation, chaos, and
         good humour become essential to progression. Each Gogland carries its
         own personality and relationships, making every placement decision
         matter as much socially as it does logistically.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [
        {
            category: "💻 Programming",
            items: [
                {
                    title: "City builder system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Designed and implemented the full grid system and building placement pipeline from scratch, including multi-tile footprint support, building rotation, and a dock building that can partially overlap water." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "The grid is composed of individual cell objects instantiated at startup and stored in a flat list. Placement uses a static method to resolve a cell index from world position and grid size, replacing an earlier raycast approach and significantly reducing overhead. Multi-tile verification iterates outward from the anchor cell and checks that each required cell stays within one unit of the previous, catching out-of-bounds wraps at grid edges cleanly." },
                        { type: "text",  value: "Rotation is handled via trigonometry: the X axis depends on the sine of the rotation angle and the Y axis on the cosine, allowing the cell sampling direction to flip correctly without duplicating logic. An async loop drives the ghost building preview during placement mode, keeping the main thread free while continuously updating cursor position." },
                        { type: "title", value: "🎯 Why?" },
                        { type: "text",  value: "Removing raycasts from the placement loop and centralising cell lookup into a single static method made the system much easier for other programmers to call into without understanding its internals. The async preview loop was a deliberate choice to avoid frame rate dependency on a system that runs every tick during construction mode." },
                    ]
                },
                {
                    title: "Building behaviours",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Implemented the behaviour layer for several building categories: sap harvesters, refineries, and storage buildings, each wired into the central resource system and designed to interface cleanly with the villager AI coded by another programmer." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Buildings use an inheritance model with a base class that handles placement, radius cell registration, and ScriptableObject data binding. Child classes override only their specific production logic. The harvester listens to a static tree-placed event and checks on each notification whether the new tree falls within its radius, maintaining a live nearest-tree reference for collection calls. The refinery exposes three transformation modes from its inspector: single conversion, batch conversion, and a full drain that consumes all available input resources in one call." },
                        { type: "text",  value: "Collaboration with the villager programmer required adding return types to several harvester methods so villagers could retrieve the correct resource values when interacting with buildings. A WAIT_FOR_INSTRUCTION villager state was also introduced to prevent villagers from starting unrelated interactions while assigned to a building task." },
                    ]
                },
                {
                    title: "Generic object pool implementation",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Built a generic, unbounded object pool used across the project for buildings and UI list items alike." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "The pool works on an IPoolable interface that exposes OnPooled and OnUnpooled callbacks. When an object is returned to the pool it is deactivated and held; when a new request comes in the pool checks for available inactive instances before instantiating. This avoids a fixed preallocated count while still eliminating runtime allocations during steady-state use. The IPoolable contract lets each object run its own initialisation and teardown logic on retrieve and return without the pool needing to know anything about the object type." },
                        { type: "title", value: "🎯 Why?" },
                        { type: "text",  value: "The UI use case drove the generalisation: dynamic building lists in the electricity management panel needed items to appear and disappear frequently, making a reusable pool much cleaner than instantiate-and-destroy cycles on every panel open." },
                    ]
                },
                {
                    title: "Generic event bus implementation",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Introduced and adopted a generic event bus pattern across the UI and gameplay layers to decouple systems that need to communicate without holding direct references." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "The event bus uses a static generic class keyed by event type, allowing any system to raise or subscribe to strongly typed events without a shared manager instance. Each UI panel subscribes to the events it cares about on enable and unsubscribes on disable, keeping the subscription graph clean across scene reloads. The pattern was implemented independently from documentation and is used throughout the UI layer wherever a panel needs to react to gameplay state changes." },
                    ]
                },
            ],
        },
        {
            category: "📱 UI / UX",
            items: [
                {
                    title: "Responsive PC & mobile interfaces",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Designed and built the full UI surface of the game: main menu, pause, options, in-game HUD, shop, villager panel, building work panel, and the laboratory skill tree screen." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "All layouts use Unity's Layout Group and Content Size Fitter components with carefully configured anchors to stay consistent across resolutions without hardcoded sizes. Dynamic lists such as the mail panel or the villager roster self-organise as their content changes, requiring no manual resizing when entries are added or removed." },
                    ]
                },
                {
                    title: "UI custom components",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Built two types of reusable custom components to standardise behaviour and remove repetitive manual wiring across all UI panels: a custom button component and a shop component." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "The shop component takes a list of building ScriptableObjects as input and exposes an Update button in the inspector that rebuilds the entire panel automatically: names, icons, prices, purchase listeners, and panel sizing all sync in one click. This allowed the shop to be edited or extended without touching a single scene object manually, and any programmer on the team could add a new building to the shop without UI knowledge." },
                    ]
                },
                {
                    title: "UI custom windows",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Developed custom Unity EditorWindow tools to automate the construction of complex UI screens, specifically the laboratory skill tree." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "The laboratory panel represents a skill tree of unlockable buildings where each node must know its prerequisites, its cost, its unlock conditions, and its visual state. A custom editor window reads the ScriptableObject list and wires all connection lines, padlock icons, node metadata, and listeners automatically. Updating the tree after a GD change takes a single button press instead of manual reconnection of every node." },
                    ]
                },
                {
                    title: "UI behaviours",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Implemented all panel behaviours including open and close logic, state-driven visibility, category switching in the shop, and the full villager and building selection panels." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Panel state is driven by events subscribed through the event bus, so gameplay systems never hold direct references to UI objects. The shop category system tracks which panel is currently open and closes it automatically before opening the next, preventing stacking. The villager panel reads live villager data including mood, thirst, current task, and social relationships, and the building work panel lets the player assign villagers and send them to work by bridging directly into the villager AI system." },
                    ]
                },
            ],
        },
        {
            category: "✨ Visual Effects",
            items: [
                {
                    title: "Shader graph implementation",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Created UI shaders to represent building unlock states visually across the laboratory skill tree." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "The main shader progressively desaturates a UI element based on a float parameter, letting locked buildings read as greyed out while unlocked ones display at full colour. The parameter is driven at runtime by the unlock state exposed through the building's ScriptableObject, keeping the visual state always in sync with game data without additional logic in the UI scripts." },
                    ]
                },
                {
                    title: "DOTween animations and transitions",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        { type: "text",  value: "Implemented DOTween-driven feedback animations across all major UI interactions: click responses, panel appearances, and state transitions." },
                        { type: "title", value: "💡 How?" },
                        { type: "text",  value: "Each interaction type has a reusable sequence pattern: buttons scale briefly on press to confirm input, panels ease in and out on open and close rather than snapping, and unlock moments in the laboratory use a chained sequence combining a scale pop with a colour transition to communicate the state change clearly. All sequences are kept short and interruptible to avoid blocking subsequent interactions." },
                    ]
                },
            ],
        },
    ],

    // ── Outcome ───────────────────────────────────────────────────────────────
    outcome: [
        `Racine is the most technically ambitious project I have worked on so
         far, and building its entire UI layer from scratch in roughly six
         weeks pushed me to find efficient, scalable solutions rather than
         quick fixes. Custom components, editor windows, and a consistent
         event-driven architecture became habits rather than occasional tools.`,
        `Working within a ten person team with a very tight academic deadline
         reinforced how much autonomy and discipline matter in a production
         context. Taking ownership of a large, visible system and delivering
         it reliably while adapting to constant GD changes confirmed what I
         want to keep developing as a programmer going forward.`,
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
            src:     "../../Sources/Projects/Gifs/Racine.gif",
            caption: "Main Gameplay",
        },
        {
            src:     "../../Sources/Projects/Racine/Labo.gif",
            caption: "Labo Research Demo",
        },
        {
            src:     "../../Sources/Projects/Racine/Work.gif",
            caption: "Work Assignation Demo",
        },
    ],

    // ── Liens ─────────────────────────────────────────────────────────────────
    links: [],

    // ── Tags ──────────────────────────────────────────────────────────────────
    tags: "Unity, C#, DOTween, Shader Graph, Git, UI/UX",

};