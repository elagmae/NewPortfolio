const PROJECT_EN = {

    // ── General ───────────────────────────────────────────────────────────────
    title: "Co-op Wordle",
    label: "Online Multiplayer / Word Guessing Game",
    banner: "../../Sources/Projects/Gifs/Wordle.gif",

    context: `A cooperative online Wordle-style game developed solo, where two players share the same game session:
              one player defines the secret word, while the other tries to guess it in real time.
              Both players see the same attempt grid, but only the host knows the word.`,

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
        `Co-op Wordle is a real-time multiplayer word guessing game inspired by Wordle.`,
        `Two players connect through a shared lobby: one becomes the "word setter" and chooses the secret word, while the other becomes the "guesser".`,
        `Both players see the same grid of attempts, but only one has access to the solution, creating asymmetrical cooperative gameplay.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [

        {
            category: "🌐 Multiplayer Architecture",
            items: [

                {
                    title: "Relay-based lobby system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Built a simple online lobby system allowing two players to connect using a join code."
                        },
                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Used Unity Relay to establish a shared session without direct IP connection. One player hosts and shares a join code, the second joins through it."
                        },
                    ]
                },

                {
                    title: "Unity Transport communication layer",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Implemented the real-time data exchange system between players."
                        },
                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Used Unity Transport directly to send lightweight structured messages representing guesses, validation results, and turn changes between clients."
                        },
                    ]
                },

                {
                    title: "Asymmetric role system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Designed a two-role system where one player knows the solution and the other does not."
                        },
                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "The host assigns roles at session start. The word is stored only on the host side and never transmitted, while guesses are synchronized to both clients."
                        },
                    ]
                },

            ],
        },

        {
            category: "🎮 Core Gameplay Systems",
            items: [

                {
                    title: "Word validation system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Implemented the full Wordle-style validation logic for guesses."
                        },
                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Each guessed word is compared letter-by-letter against the secret word, returning per-letter states (correct position, wrong position, not present)."
                        },
                    ]
                },

                {
                    title: "Shared attempt grid",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Built a synchronized UI grid where both players see all guesses in real time."
                        },
                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Each validated guess is sent through the network layer and appended to a shared UI state replicated on both clients."
                        },
                    ]
                },

                {
                    title: "Turn-based flow system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Implemented a structured turn system to avoid input conflicts."
                        },
                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "A simple state machine alternates between input phases, ensuring only one player submits a guess at a time while both UIs stay synchronized."
                        },
                    ]
                },

            ],
        },

        {
            category: "🧠 Technical Design Choices",
            items: [

                {
                    title: "Host-authoritative architecture",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Chose a host-authoritative model to keep logic simple and secure."
                        },
                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "All validation and word checking is performed on the host, which then broadcasts results to the other player via Unity Transport messages."
                        },
                    ]
                },

                {
                    title: "Minimal networking payloads",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Optimized the networking layer to only transmit essential data."
                        },
                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Instead of syncing full game state, only compact messages (word string, validation result, turn state) are sent through Relay/Transport."
                        },
                    ]
                },

            ],
        },

    ],

    // ── Outcome ───────────────────────────────────────────────────────────────
    outcome: [
        `Co-op Wordle was developed solo as a real-time multiplayer prototype using Unity Relay and Unity Transport.`,
        `It successfully demonstrates asynchronous cooperative gameplay, where two players share a single evolving puzzle state with asymmetric information.`,
        `This project helped deepen my understanding of low-level networking with Unity Transport and host-authoritative game design.`,
    ],

    // ── Infos sidebar ─────────────────────────────────────────────────────────
    infos: {
        year: "2025",
        duration: "Few days",
        role: "Solo Gameplay & Network Programmer",
    },

    // ── Screenshots ───────────────────────────────────────────────────────────
    screenshots: [
        // add later if you have gifs
    ],

    // ── Links ────────────────────────────────────────────────────────────────
    links: [
        // add itch / github if you have
    ],

    // ── Tags ────────────────────────────────────────────────────────────────
    tags: "Unity, C#, Unity Relay, Unity Transport, Multiplayer, Networking, Game Design",
};