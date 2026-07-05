const PROJECT_EN = {

    // ── General ───────────────────────────────────────────────────────────────
    title: "Wordle API Prototype",
    label: "Backend / REST API / SQLite / Unity & C# Experiment",
    banner: "../../Sources/Projects/Gifs/WordleSwagger.gif",

    context: `Backend-focused Wordle prototype built in C# using ASP.NET Core Minimal API.
              The project explores REST architecture, database persistence with SQLite,
              and API testing through Swagger and a custom C# console client.`,

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
        `This project is a backend implementation of a Wordle-like game fully driven by a REST API.`,
        `One player defines the secret word, while another player tries to guess it through API requests.`,
        `All game states, guesses, and history are persisted in a SQLite database and exposed through REST endpoints documented with Swagger.`,
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions: [

        {
            category: "🌐 REST API Architecture",
            items: [

                {
                    title: "Full Wordle game API design",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Designed and implemented a complete REST API to manage Wordle-like game sessions."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Used ASP.NET Core Minimal API to define endpoints for creating games, guessing letters/words, retrieving game states, and deleting sessions."
                        },
                    ]
                },

                {
                    title: "Swagger integration for API testing",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Integrated Swagger UI to allow interactive testing of all API endpoints."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Configured OpenAPI generation to expose all routes and parameters, enabling quick validation of backend logic without a frontend."
                        },
                    ]
                },
            ],
        },

        {
            category: "🗄️ Database & Persistence (SQLite)",
            items: [

                {
                    title: "Game state persistence system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Implemented persistent storage for games and guesses using SQLite."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Created two main tables: GAMES (word, state) and GUESSES (game_id, guess), allowing full reconstruction of game history."
                        },
                    ]
                },

                {
                    title: "Game history tracking",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Stored every guess made by players to reconstruct full game sessions."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Each guess is inserted into the GUESSES table and linked to its game via foreign key, enabling full history retrieval via SQL JOIN queries."
                        },
                    ]
                },
            ],
        },

        {
            category: "🎮 Game Logic (Wordle System)",
            items: [

                {
                    title: "Letter & word guessing system",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Implemented core Wordle mechanics including letter guessing and full word validation."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Compared user input against the stored word and returned position-based feedback, while tracking remaining attempts per game."
                        },
                    ]
                },

                {
                    title: "Game state management",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Handled win/loss conditions and limited number of attempts."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Each game has a STATE (active, won, lost) updated automatically based on guesses and remaining attempts."
                        },
                    ]
                },
            ],
        },

        {
            category: "💻 API Client & Testing",
            items: [

                {
                    title: "Custom C# console client",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Built a full console application to interact with the REST API."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Used HttpClient to send GET/POST/DELETE requests to the API, simulating a real player experience directly from the terminal."
                        },
                    ]
                },

                {
                    title: "Manual API testing workflow",
                    content: [
                        { type: "title", value: "🔧 What?" },
                        {
                            type: "text",
                            value: "Validated all endpoints using both Swagger UI and the custom console client."
                        },

                        { type: "title", value: "💡 How?" },
                        {
                            type: "text",
                            value: "Combined interactive Swagger testing with scripted HTTP requests to debug and iterate quickly on backend logic."
                        },
                    ]
                },
            ],
        },
    ],

    // ── Outcome ───────────────────────────────────────────────────────────────
    outcome: [
        `This project was my first complete REST API built from scratch, combining backend logic, database persistence, and API testing tools.`,
        `It allowed me to understand how real backend systems are structured, including routing, state management, and database integration.`,
        `The prototype successfully demonstrates a fully playable Wordle-like experience entirely driven by API calls, without any frontend interface.`,
    ],

    // ── Infos ───────────────────────────────────────────────────────────────
    infos: {
        year: "2025",
        duration: "Few days",
        role: "Backend / C# Developer",
    },

    // ── Screenshots ───────────────────────────────────────────────────────────
    screenshots: [
        {
            src: "../../Sources/Projects/WordleSwagger/Swagger.png",
            caption: "Swagger UI for API testing"
        },
    ],

    // ── Links ────────────────────────────────────────────────────────────────
    links: [
    ],

    // ── Tags ────────────────────────────────────────────────────────────────
    tags: "C#, ASP.NET Core, REST API, SQLite, Swagger, Backend, Game Development",
};
