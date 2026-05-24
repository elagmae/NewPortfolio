const PROJECT = {

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
                        { type: "title",  value: "🔧 What?" },

                        {
                            type:"text",
                            value:"Implemented the full attack parry system: the player uses a directional slide input mapped to one of three lanes. Each slide is validated against the beat grid using a leniency window, then checked against the incoming attack's lane and type to determine a hit, miss, or wrong-lane result.",
                        },

                        { type: "title",  value: "⚙️ How?" },

                        {
                            type:"text",
                            value:"Attack types are resolved via inheritance: every enemy prefab holds an EnemyBehaviour subclass that exposes its special action logic (line switch, disguise reveal, feint pullback, multi-hit resilience). The base class handles movement along the beat grid while subclasses override the special action method. This kept the spawn system clean — the level data just references a prefab and an action list; polymorphism handles the rest at runtime.",
                        },

                        {
                            type:"text",
                            value:"The six attack types implemented are: Normal (straight advance), NoTouch (ally fire that heals if ignored, damages if hit), Disguise (switches color/type mid-flight via BeforeType → Type), PathModifier (changes lane using a Special Action Arg between 0 and 2), Baiter (reverses movement before reaching the player), and Big (multi-hit resilience, advances until HP reaches zero).",
                        },

                        { type: "title",  value: "💡 Why?" },

                        {
                            type:"text",
                            value:"Keeping attack logic inside each enemy prefab rather than in a central manager made level design additive: adding a new attack type meant subclassing, not editing shared code. It also made playtesting faster since broken behavior was always isolated to one prefab.",
                        },

                        { type: "title",  value: "⚠️ Challenges" },

                        {
                            type:"text",
                            value:"The leniency window required careful tuning against FMOD's beat callback timing. Too tight and casual players couldn't keep up; too loose and the rhythm feel collapsed. Several playtest rounds were needed to find the right range per BPM.",
                        },

                        { type: "title",  value: "🚀 Improvements" },

                        {
                            type:"text",
                            value:"A visual debug overlay showing the active beat window and each attack's expected arrival frame would have accelerated balancing significantly — all tuning was done blind during playtests.",
                        },
                    ]
                },

                {
                    title: "Enemy behaviours system",

                    content:
                    [
                        { type: "title",  value: "🔧 What?" },

                        {
                            type:"text",
                            value:"Built the enemy behaviour pipeline: each enemy moves one beat at a time along a three-lane grid, executing a pre-authored action sequence (Idle, Move, or Special) synchronized to the FMOD beat callback. Enemies self-destruct once their action list is exhausted.",
                        },

                        { type: "title",  value: "⚙️ How?" },

                        {
                            type:"text",
                            value:"Actions are stored as a beat-indexed list on each enemy instance, populated at spawn from the LevelData ScriptableObject. On each beat event, the enemy advances its action index and calls the corresponding method on its EnemyBehaviour subclass. Move actions trigger a DoTween tween to the next grid position; Special actions dispatch to the subclass override (lane change, disguise swap, feint recoil, or HP check for multi-hit enemies).",
                        },

                        {
                            type:"text",
                            value:"Speed is normalized to 1 so that one action always equals one beat regardless of the music's time signature (4/4, 2/2, etc.), making level data portable across different tracks.",
                        },

                        { type: "title",  value: "💡 Why?" },

                        {
                            type:"text",
                            value:"Tying enemy behavior directly to the beat callback rather than to Update() eliminated drift between music and visuals — a critical requirement for a rhythm game. DoTween handled the interpolation between beat positions, keeping movement smooth without introducing frame-rate dependency.",
                        },

                        { type: "title",  value: "⚠️ Challenges" },

                        {
                            type:"text",
                            value:"Synchronizing multiple enemies spawning on the same beat required careful ordering to avoid race conditions on the lane grid. Early builds had enemies visually overlapping when two spawned on the same lane in the same beat window.",
                        },

                        { type: "title",  value: "🚀 Improvements" },

                        {
                            type:"text",
                            value:"A lane-reservation system that checks for conflicts at spawn time would prevent overlaps deterministically, rather than relying on level designers to manually avoid them.",
                        },
                    ]
                },

                { 
                    title: "Dialog system",

                    content:
                    [
                        { type: "title",  value: "🔧 What?" },

                        {
                            type:"text",
                            value:"Implemented a linear dialogue system driving the narrative sequences between combat phases. Each level is wrapped in a pre-fight introduction and a post-fight resolution, with branching outcomes depending on whether the player won or lost.",
                        },

                        { type: "title",  value: "⚙️ How?" },

                        {
                            type:"text",
                            value:"Dialogue data is stored in ScriptableObjects, one per encounter phase (intro monologue, pre-fight, win, lose). Each entry holds the speaker reference, portrait orientation (left/right), and the line text. The UI manager steps through entries on tap, triggering a typewriter animation on the text and a sound effect (click or voiced tone) on each new character.",
                        },

                        {
                            type:"text",
                            value:"The messenger-style interface maps each character to a screen side: the player character always appears on the right, the opponent on the left, mirroring a real messaging app layout to reinforce the game's contemporary urban-fantasy tone.",
                        },

                        { type: "title",  value: "💡 Why?" },

                        {
                            type:"text",
                            value:"A ScriptableObject-driven approach let the narrative designer iterate on dialogue completely independently from code — no scene rebuilds, no prefab edits. The win/lose branching was the minimum needed to make combat outcomes feel meaningful without requiring a complex state machine.",
                        },

                        { type: "title",  value: "⚠️ Challenges" },

                        {
                            type:"text",
                            value:"The scroll position occasionally froze mid-sequence due to a layout rebuild conflict between the typewriter effect and Unity's ContentSizeFitter. Required a forced layout refresh on each new line.",
                        },

                        { type: "title",  value: "🚀 Improvements" },

                        {
                            type:"text",
                            value:"Adding a skip-to-end tap gesture would improve the experience for replays. The current system forces players to tap through every line even on a second run, which becomes friction once the story is known.",
                        },
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
                        { type: "title",  value: "🔧 What?" },

                        {
                            type:"text",
                            value:"Built a fully responsive UI for portrait Android, adapting all game elements — three combat lanes, attack buttons, health display, and combo meter — to any screen ratio without breaking gameplay geometry.",
                        },

                        { type: "title",  value: "⚙️ How?" },

                        {
                            type:"text",
                            value:"The three lane buttons are anchored to the bottom of the safe area and sized proportionally to the screen width, leaving enough thumb reach without triggering the Android navigation bar. The 3D arena camera was adapted with a responsive FOV calculation so the lane grid always fills the screen at the correct proportions regardless of device aspect ratio.",
                        },

                        { type: "title",  value: "⚠️ Challenges" },

                        {
                            type:"text",
                            value:"Early builds triggered the system navigation bar swipe area when players dragged from the bottom edge — the main mechanic conflicting with the OS gesture zone. Resolved by raising the input area and adding a safe zone margin using Unity's Screen.safeArea.",
                        },

                        { type: "title",  value: "🚀 Improvements" },

                        {
                            type:"text",
                            value:"The 3D lane perspective still has minor edge distortion on very wide aspect ratios (tablet-like). A proper camera rig with anchored lane positions rather than a raw FOV adjustment would handle this more robustly.",
                        },
                    ] 
                },

                {                     
                    title: "Scene navigation",

                    content:
                    [
                        { type: "title",  value: "🔧 What?" },

                        {
                            type:"text",
                            value:"Implemented the full game flow: main menu → chapter select → pre-fight dialogue → combat → post-fight dialogue → result screen → back to chapter select. Each transition is animated and the flow is designed to feel uninterrupted even across scene loads.",
                        },

                        { type: "title",  value: "⚙️ How?" },

                        {
                            type:"text",
                            value:"Scene transitions use a persistent canvas overlay with a fade animator, triggered by a singleton SceneManager wrapper. Game state (current chapter, level index, win/lose) is held in a persistent data object that survives scene loads and drives which dialogue branch plays on entry.",
                        },

                        { type: "title",  value: "⚠️ Challenges" },

                        {
                            type:"text",
                            value:"Async scene loading occasionally caused a one-frame flash of the new scene before the fade-in completed. Fixed by activating the scene in paused state and only unpausing once the fade overlay was fully opaque.",
                        },
                    ] 
                },

                {                     
                    title: "Messenger interface",

                    content:
                    [
                        { type: "title",  value: "🔧 What?" },

                        {
                            type:"text",
                            value:"Designed and implemented the dialogue UI as a messaging app interface, with speech bubbles, character portraits, and a scroll-based layout that mirrors contemporary mobile chat apps.",
                        },

                        { type: "title",  value: "⚙️ How?" },

                        {
                            type:"text",
                            value:"Each dialogue line spawns a new bubble prefab into a vertical layout group inside a scroll rect. Player lines appear right-aligned with the player portrait, opponent lines left-aligned with the opponent portrait. A ContentSizeFitter on each bubble and on the layout group handles dynamic text sizing. New bubbles auto-scroll to the bottom via a ScrollRect.normalizedPosition lerp.",
                        },

                        {
                            type:"text",
                            value:"Internal monologue lines (Garmillia's thoughts) are rendered as italic centered text without a portrait, visually distinct from spoken dialogue.",
                        },

                        { type: "title",  value: "💡 Why?" },

                        {
                            type:"text",
                            value:"The messenger format reinforces the game's urban-fantasy setting and makes the narrative feel contemporary and accessible to the target audience (young mobile players). It also naturally communicates which character is speaking without requiring explicit name tags.",
                        },

                        { type: "title",  value: "⚠️ Challenges" },

                        {
                            type:"text",
                            value:"The ContentSizeFitter on dynamically added elements requires a forced Canvas.ForceUpdateCanvases() call before scrolling to the new bottom — without it, the scroll target is computed before the new bubble has its final size.",
                        },
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
                        { type: "title",  value: "🔧 What?" },

                        {
                            type:"text",
                            value:"Wrote a custom HLSL halftone shader for the game's pop-art visual style, applied as a post-process effect over the 3D combat scene. The shader supports texture-based dot motifs, color tinting per zone, and a directional fade so the halftone pattern dissolves at screen edges.",
                        },

                        { type: "title",  value: "⚙️ How?" },

                        {
                            type:"text",
                            value:"The effect samples a screen-space UV grid at a configurable dot frequency, then compares luminance against a threshold to decide dot presence. Dot shape is driven by a motif texture (circle, diamond, or custom) rather than a hard circle function, allowing art-driven variation. A directional gradient mask — exposed as a direction vector and falloff curve — fades the halftone density toward the screen edges to avoid visual noise in the UI-heavy bottom zone.",
                        },

                        { type: "title",  value: "💡 Why?" },

                        {
                            type:"text",
                            value:"The halftone effect is the single most recognizable element of the pop-art direction and distinguishes MMA visually from other mobile rhythm games. Keeping it as a post-process rather than baking it into textures meant the whole scene reads consistently regardless of camera angle or enemy position.",
                        },

                        { type: "title",  value: "⚠️ Challenges" },

                        {
                            type:"text",
                            value:"Getting the transparency of the dots right was the trickiest part: at low opacity the effect looks like compression artifacts rather than intentional halftone. Required adding a minimum dot opacity clamp and ensuring the background color contrast was strong enough to make dots readable at small sizes.",
                        },
                    ]
                },

                {                     
                    title: "Post process & visual events",

                    content:
                    [
                        { type: "title",  value: "🔧 What?" },

                        {
                            type:"text",
                            value:"Set up and wired a suite of beat-reactive post-process events: chromatic aberration pulses on each on-beat hit, screen shake on damage received, a subtle hue shift on strong beats, and a full-screen flash (white for life lost, green/red for NoTouch outcome).",
                        },

                        { type: "title",  value: "⚙️ How?" },

                        {
                            type:"text",
                            value:"Each effect is driven by a Unity Volume Weight animator triggered via FMOD's beat callback. Rather than activating and deactivating GameObjects each frame (which caused visible lag spikes), all effects are triggered via an OnPlay event on a persistent Volume component, fading in and out via a DOTween sequence on the Weight property.",
                        },

                        { type: "title",  value: "⚠️ Challenges" },

                        {
                            type:"text",
                            value:"Activating/deactivating VFX GameObjects per beat caused 1-2 frame lag spikes on mid-range Android devices. Switching to the OnPlay event pattern and pooling effect volumes resolved the performance issue entirely.",
                        },
                    ]
                },

                {                     
                    title: "Particle Systems",

                    content:
                    [
                        { type: "title",  value: "🔧 What?" },

                        {
                            type:"text",
                            value:"Authored several particle systems for combat feedback: enemy destruction (comics-style explosion), enemy spawn (upward particle teleportation), drag-and-release (projectile disintegration), and life regeneration (rising hearts).",
                        },

                        { type: "title",  value: "⚙️ How?" },

                        {
                            type:"text",
                            value:"Each system is prefab-pooled and activated via C# events rather than Instantiate calls, to avoid GC spikes on mobile. Burst emission with a short lifetime keeps each effect punchy without overlapping with the next beat. The enemy destruction system uses a custom sprite sheet for the comic-panel explosion frames, cycled via the Texture Sheet Animation module.",
                        },

                        { type: "title",  value: "⚠️ Challenges" },

                        {
                            type:"text",
                            value:"On low-end Android devices, simultaneous particle bursts from multiple enemies destroyed in the same beat caused visible frame drops. Reducing max particles per system and capping simultaneous active systems to four resolved the issue at the cost of some visual density on busy screens.",
                        },
                    ]
                },

                {                     
                    title: "VFX Graphs",

                    content:
                    [
                        { type: "title",  value: "🔧 What?" },

                        {
                            type:"text",
                            value:"Used Unity VFX Graph for the speed lines effect that pulses with the music — white streaks radiating from the screen center that scale in intensity with the beat strength.",
                        },

                        { type: "title",  value: "⚙️ How?" },

                        {
                            type:"text",
                            value:"The VFX Graph receives a Beat Intensity float parameter from the FMOD callback, which drives both spawn rate and streak velocity. Lines use an oriented quad output with a short lifetime and additive blending, ensuring they don't obscure the gameplay geometry while still registering visually against the halftone background.",
                        },

                        { type: "title",  value: "💡 Why?" },

                        {
                            type:"text",
                            value:"VFX Graph's GPU simulation handles the speed lines more efficiently than a CPU particle system would at the spawn rates needed for the effect to read at 60fps on mobile.",
                        },
                    ]
                },

                {                     
                    title: "DoTween animations",

                    content:
                    [
                        { type: "title",  value: "🔧 What?" },

                        {
                            type:"text",
                            value:"Used DoTween extensively for all beat-synchronized gameplay animations: enemy movement between lanes, enemy scale pulse on each beat, combo tier shockwave, button shake when the attack cooldown resets, and the arc trail on line-switching enemies.",
                        },

                        { type: "title",  value: "⚙️ How?" },

                        {
                            type:"text",
                            value:"All tweens are killed and restarted on the beat event rather than queued, ensuring they always complete within one beat duration regardless of any previous frame-rate hiccup. Enemy movement uses a DOLocalMove tween with an OutBack ease to give a slight overshoot that reads as physical weight. The arc trail on PathModifier enemies uses DOPath with a curved waypoint calculated from the start and end lane positions.",
                        },

                        { type: "title",  value: "⚠️ Challenges" },

                        {
                            type:"text",
                            value:"Early builds had tween sequences accumulating from multiple overlapping beats, causing desync on fast-tempo levels. Resolved by always calling Kill() before any new tween on a given target.",
                        },
                    ]
                },

                {                     
                    title: "Text animations",

                    content:
                    [
                        { type: "title",  value: "🔧 What?" },

                        {
                            type:"text",
                            value:"Implemented animated combat feedback texts: hit result labels (combo count, miss, NoTouch success/fail) that pop in with a punch scale, drift upward, and fade out over half a beat.",
                        },

                        { type: "title",  value: "⚙️ How?" },

                        {
                            type:"text",
                            value:"Each feedback text is a pooled TextMeshPro object spawned at the hit position in world space, then animated via a DoTween sequence: DOScale punch → DOLocalMoveY upward drift → DOFade out. Color and content are set at activation time based on the hit result type (green for success, red for miss, yellow for combo milestone).",
                        },

                        { type: "title",  value: "⚠️ Challenges" },

                        {
                            type:"text",
                            value:"Per playtest feedback, the texts were initially too small and disappeared too quickly to be readable mid-gameplay. Increased font size, extended fade duration, and reduced the number of simultaneous visible texts to avoid clutter.",
                        },
                    ]
                },
            ]
        },
    ],

    // ── Outcome — autant de paragraphes que nécessaire ────────────────────────
    outcome: [
        `Magical Music Arena was completed as a vertical slice over two months and presented to the school jury as a Devolver Digital pitch. The project received strong feedback for the originality of its concept, the quality of its art direction, and the polish of its combat feel.`,

        `The vertical slice covers half of chapter one — three full levels against Tarial (Mermaid), Termischoral (Dryad), and Thuruma (Gorgon) — each with authored dialogue, unique attack patterns, and a distinct music track. Total play time lands at approximately ten minutes, in line with the brief's requirements.`,

        `The game is playable on itch.io. The most significant personal takeaways were the value of ScriptableObject-driven tooling for unblocking non-programmer teammates, and the discipline required to tune rhythm feel — a dimension of game development where subjective perception and precise timing overlap in ways that are hard to anticipate without playtesting.`,
    ],

    // ── Infos sidebar ─────────────────────────────────────────────────────────
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