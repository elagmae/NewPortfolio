const PROJECT = {

    // ── General ──────────────────────────────────────────────────────────────
    title:   "Tranch'Orc Apocalypse",
    label:   "Virtual Reality Rail Brawler",
    banner:  "../../Sources/Projects/Gifs/TranchOrc.gif",

    context: `School project created to explore Unreal Engine and Virtual Reality development through the creation of a fast paced rail brawler experience.`,

    // ── Pitch ────────────────────────────────────────────────────────────────
    pitch: [
        `Tranch'Orc Apocalypse is a chaotic VR rail brawler set in a brutal dieselpunk desert filled with humor, gore, and relentless action. Players surf across the dunes on a shield while fighting hordes of aggressive orc surfers during an intense chase sequence.`,

        `Designed as a pure action experience, the game focuses on fast combat, impactful feedbacks, and dynamic enemy encounters while experimenting with VR immersion and movement systems inside Unreal Engine.`,
    ],

    // ── Contributions ───────────────────────────────────────────────────────
    contributions: [

        {
            category: "💻 Programming",

            items: [

                {
                    title: "Dynamic AI navigation",

                    content:
                    [
                        {
                            type: "text",
                            value: "Implemented dynamic navigation systems for enemy movement using Unreal navmeshes in realtime. Configured AI movement behaviours so enemy orcs could avoid environment collisions while properly following the player during high speed gameplay sequences."
                        },
                    ]
                },

                {
                    title: "Procedural terrain generation",

                    content:
                    [
                        {
                            type: "text",
                            value: "Created a terrain generation actor responsible for spawning randomized environmental prefabs across the desert. Managed prefab spacing using object size calculations and customizable spacing variables in order to maintain level readability and gameplay flow."
                        },
                    ]
                },

                {
                    title: "Environment optimization",

                    content:
                    [
                        {
                            type: "text",
                            value: "Optimized environmental rendering and spawning using fog systems and reduced visibility distances in order to improve performance and maintain immersion during VR gameplay."
                        },
                    ]
                },

                {
                    title: "Enemy armor system",

                    content:
                    [
                        {
                            type: "text",
                            value: "Implemented a randomized enemy armor system using dictionaries to associate armor meshes with character sockets. Created dynamic armor placement systems directly integrated into enemy characters."
                        },
                    ]
                },

                {
                    title: "Armor impact reactions",

                    content:
                    [
                        {
                            type: "text",
                            value: "Implemented armor movement and physical reactions during impacts in order to reinforce combat feedbacks and improve the overall feeling of weapon hits during gameplay."
                        },
                    ]
                },

                {
                    title: "Blueprint implementation",

                    content:
                    [
                        {
                            type: "text",
                            value: "Developed gameplay systems and interactions using Unreal Blueprints while learning Unreal Engine architecture and VR workflows during production."
                        },
                    ]
                },
            ]
        },

        {
            category: "✨ Visual Effects",

            items: [

                {
                    title: "VR damage feedback",

                    content:
                    [
                        {
                            type: "text",
                            value: "Created fullscreen damage feedback effects directly displayed inside the VR headset to improve player readability and reinforce combat intensity during enemy attacks."
                        },
                    ]
                },

                {
                    title: "Gameplay feedback integration",

                    content:
                    [
                        {
                            type: "text",
                            value: "Worked on visual feedbacks linked to combat impacts, enemy interactions, and environmental readability in order to maintain clarity during fast paced VR gameplay."
                        },
                    ]
                },

                {
                    title: "Scene transitions",

                    content:
                    [
                        {
                            type: "text",
                            value: "Integrated transition systems and visual continuity effects between gameplay moments to reinforce immersion and pacing during the experience."
                        },
                    ]
                },
            ]
        },
    ],

    // ── Outcome ──────────────────────────────────────────────────────────────
    outcome: [

        `Tranch'Orc Apocalypse allowed me to discover Unreal Engine and Virtual Reality development through a highly technical and experimental school project.`,

        `Working on realtime navmeshes, procedural generation, VR feedback systems, and Blueprint implementation helped me better understand optimization challenges and player readability in immersive environments.`,

        `The project also gave me the opportunity to experiment with gameplay systems outside of my usual workflow while collaborating inside a small multidisciplinary team.`,
    ],

    // ── Infos ────────────────────────────────────────────────────────────────
    infos: {
        year:     "2024 - 2025",
        duration: "1 month",
        role:     "Game Programmer",
    },

    // ── Screenshots ──────────────────────────────────────────────────────────
    screenshots: [

        {
            src:     "../../Sources/Projects/Gifs/TranchOrc.gif",
            caption: "Main Gameplay",
        },
    ],

    // ── Links ────────────────────────────────────────────────────────────────
    links: [
        {
            href: "https://nantoor.itch.io/tranchorc-apocalypse",
            img:  "../../Sources/Projects/TranchOrc/ItchioLink.png",
            alt:  "Itchio Page",
        },
    ],

    // ── Tags ────────────────────────────────────────────────────────────────
    tags: "Unreal Engine, Blueprints, Virtual Reality, Git",

};