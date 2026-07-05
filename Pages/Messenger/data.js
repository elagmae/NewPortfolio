const PROJECT_EN = {

    // ── General ───────────────────────────────────────────────────────────────
    title: "Messenger Prototype",
    label: "Online Multiplayer / Unity Netcode Experiment",
    banner: "../../Sources/Projects/Gifs/Messenger.gif",

    context: `First online multiplayer prototype built with Unity Netcode for GameObjects and Unity Relay.
              The goal was to understand real-time networking, lobbies, and cloud relay systems by creating a simple anonymous chat experience playable between multiple players.`,

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
        `Messenger is a real-time online chat prototype where players join a shared lobby using a simple code system.`,
        `Once connected, players can send messages that instantly appear in a shared UI canvas for all participants, with anonymous identifiers (Player 0, Player 1, Player 2...).`,
        `The project focuses on learning multiplayer architecture rather than gameplay, using Unity Netcode for GameObjects and Unity Relay as backend infrastructure.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [

        {
            category: "🌐 Online Multiplayer Systems",
            items: [

                {
                    title: "Lobby system with join code",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Implemented a lobby system where players can create or join a session using a generated code."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Used Unity Relay to host sessions and distribute connection data. The host generates a join code, and clients use it to connect to the same Relay allocation."
                        },
                    ]
                },

                {
                    title: "Netcode for GameObjects integration",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Set up Unity Netcode for GameObjects to synchronize players and messages across all connected clients."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Used NetworkManager with a host-client architecture. Player objects are spawned with unique NetworkObject IDs used to identify message ownership."
                        },
                    ]
                },

                {
                    title: "Anonymous player identity system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Each connected player is automatically assigned a temporary anonymous ID (Player 0, Player 1, Player 2...)."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "The system uses the NetworkObjectId or clientId from Netcode to generate a consistent label displayed in the chat UI."
                        },
                    ]
                },
            ],
        },

        {
            category: "💬 Real-time Messaging System",
            items: [

                {
                    title: "Shared network chat canvas",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Built a shared chat interface where all messages are synchronized in real time across all connected players."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Messages are sent via Netcode ServerRpc and broadcast using ClientRpc to all connected clients. Each message is instantiated in a shared UI canvas."
                        },
                    ]
                },

                {
                    title: "Message synchronization system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Ensures that all messages appear in the same order for every player without desynchronization."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Messages are timestamped and processed through the host before being broadcast, ensuring consistent ordering across all clients."
                        },
                    ]
                },

                {
                    title: "UI message instantiation system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Dynamic UI system that creates message bubbles in a shared scrollable chat panel."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Each received message spawns a prefab in a vertical layout group, displaying sender ID and message content."
                        },
                    ]
                },
            ],
        },

        {
            category: "🎮 Technical Foundations",
            items: [

                {
                    title: "Unity Relay connection handling",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Implemented connection flow using Unity Relay services to avoid direct IP connections."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "The host creates a Relay allocation and shares a join code. Clients resolve this code through Unity Services to establish connection."
                        },
                    ]
                },

                {
                    title: "First multiplayer architecture experiment",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "This project served as a first exploration of real-time networking architecture in Unity."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Focused on understanding host/client authority, RPC communication, and synchronization constraints in Netcode for GameObjects."
                        },
                    ]
                },
            ],
        },
    ],

    // ── Outcome ───────────────────────────────────────────────────────────────
    outcome: [
        `Messenger was my first successful implementation of a full online multiplayer system using Unity Netcode for GameObjects and Unity Relay.`,
        `The project demonstrated the ability to host and join sessions via code, synchronize real-time communication, and manage multiple clients without accounts or authentication.`,
        `This prototype helped me understand the fundamentals of multiplayer architecture, including host authority, RPC communication, and network synchronization constraints.`,
    ],

    // ── Infos sidebar ─────────────────────────────────────────────────────────
    infos: {
        year: "2024",
        duration: "Few days",
        role: "Gameplay / Network Programmer",
    },

    // ── Screenshots ───────────────────────────────────────────────────────────
    screenshots: [

    ],

    // ── Links ────────────────────────────────────────────────────────────────
    links: [

    ],

    // ── Tags ────────────────────────────────────────────────────────────────
    tags: "Unity, C#, Netcode for GameObjects, Unity Relay, Multiplayer, UI, Networking",
};