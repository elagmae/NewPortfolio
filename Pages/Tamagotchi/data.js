const PROJECT = 
{

    // ── General ───────────────────────────────────────────────────────────────
    title:   "Tamagotchi",
    label:   "Online Prototype",
    banner:  "../../Sources/Projects/Gifs/Tamagotchi.gif",

    context:
    `A university prototype exploring Unity Gaming Services through a cooperative asynchronous experience. Two players share custody of the same virtual pet, taking turns caring for it while exchanging letters and managing a shared schedule through cloud synchronized data.`,

    // ── Pitch ─────────────────────────────────────────────────────────────────
    pitch:
    [
        `Tamagotchi is a two player asynchronous pet simulation built around the concept of shared custody. Instead of playing together in real time, both players connect independently to take care of the same animal, communicate through an in game letter system, and follow a custody schedule determining who can access the pet each day.`,

        `The project was primarily developed to explore Unity Gaming Services, including Authentication, Cloud Save and Cloud Code, while designing an architecture capable of synchronizing gameplay between multiple accounts without requiring dedicated multiplayer networking.`,

        `Every important gameplay system, including player progression, inventories, rooms, pet needs, planning and messaging, relies on cloud stored data rather than local saves, allowing both players to seamlessly continue their experience from any device.`
    ],

    // ── Contributions ─────────────────────────────────────────────────────────
    contributions:
    [
        {
            category: "🎮 Game Design",

            items:
            [
                {
                    title: "Asynchronous cooperative gameplay",

                    content:
                    [
                        {
                            type:"title",
                            value:"🔧 What?"
                        },

                        {
                            type:"text",
                            value:"Designed the game's core concept around asynchronous cooperation rather than traditional multiplayer. Two players share ownership of the same pet but never need to be connected simultaneously."
                        },

                        {
                            type:"title",
                            value:"⚙️ How?"
                        },

                        {
                            type:"text",
                            value:"Each player owns an individual account while both accounts reference the same shared room stored in the cloud. Every interaction updates shared data that becomes immediately available to the other player during their next session."
                        },

                        {
                            type:"text",
                            value:"A custody planning system determines which player can interact with the pet depending on the current day of the week, encouraging players to organize themselves similarly to a shared custody schedule."
                        },

                        {
                            type:"title",
                            value:"💡 Why?"
                        },

                        {
                            type:"text",
                            value:"The objective was not to create a competitive experience but rather a social prototype encouraging communication between two friends. By removing the need for simultaneous online sessions, the project focuses on long term interaction and shared responsibility."
                        },

                        {
                            type:"title",
                            value:"⚠️ Challenges"
                        },

                        {
                            type:"text",
                            value:"Designing an experience around asynchronous gameplay required every system to work independently from the other player's presence. This significantly influenced the backend architecture and the way cloud data was organized."
                        },

                        {
                            type:"title",
                            value:"🚀 Improvements"
                        },

                        {
                            type:"text",
                            value:"Supporting multiple pets and multiple shared rooms per player would considerably expand the gameplay possibilities while reusing the same backend architecture."
                        },
                    ]
                }
            ]
        },
                {
            category: "💻 Programming",

            items:
            [
                {
                    title: "Player authentication system",

                    content:
                    [
                        {
                            type:"title",
                            value:"🔧 What?"
                        },

                        {
                            type:"text",
                            value:"Implemented a complete account management system using Unity Authentication. Players can create an account, sign in, change their password, and securely retrieve their personal cloud data from any device."
                        },

                        {
                            type:"title",
                            value:"⚙️ How?"
                        },

                        {
                            type:"text",
                            value:"The project uses Unity's Username & Password provider. After initializing Unity Services, players can create or access an account through SignUpWithUsernamePasswordAsync() and SignInWithUsernamePasswordAsync(). Once authenticated, Unity automatically assigns a unique Player ID used throughout every online system."
                        },

                        {
                            type:"text",
                            value:"Authentication acts as the entry point for every cloud feature. Before loading or saving any player data, the game verifies that the current user is successfully signed in, preventing invalid Cloud Save operations."
                        },

                        {
                            type:"text",
                            value:"The account system also allows players to securely update their password using Unity Authentication without requiring any custom backend implementation."
                        },

                        {
                            type:"title",
                            value:"💡 Why?"
                        },

                        {
                            type:"text",
                            value:"Using permanent accounts instead of anonymous authentication ensures every player's progression remains synchronized across multiple devices. Since the entire game relies on shared cloud data, persistent identities were essential for linking players to their rooms and inventories."
                        },

                        {
                            type:"title",
                            value:"⚠️ Challenges"
                        },

                        {
                            type:"text",
                            value:"Although the implementation itself was relatively straightforward, every online feature had to correctly handle authentication state before attempting any cloud request. Forgetting to verify the connection state would immediately cause failed save or load operations."
                        },

                        {
                            type:"title",
                            value:"🚀 Improvements"
                        },

                        {
                            type:"text",
                            value:"Additional providers such as Google, Apple or anonymous sign in could easily be integrated alongside Username & Password, allowing players to authenticate through multiple platforms while keeping the same backend architecture."
                        }
                    ]
                },

                {
                    title: "Cloud save system",

                    content:
                    [
                        {
                            type:"title",
                            value:"🔧 What?"
                        },

                        {
                            type:"text",
                            value:"Built the complete persistence layer using Unity Cloud Save. Every player's personal progression is stored online, including inventory, money, planning, account information and various gameplay values."
                        },

                        {
                            type:"title",
                            value:"⚙️ How?"
                        },

                        {
                            type:"text",
                            value:"Player Data is accessed through Unity Cloud Save using asynchronous load and save operations. Specific keys are loaded when required, while modified values are uploaded back to the cloud through dictionaries containing the latest gameplay state."
                        },

                        {
                            type:"text",
                            value:"Before every save or load operation, the game verifies that the player is authenticated. This guarantees that every request targets the correct cloud profile and prevents invalid operations."
                        },

                        {
                            type:"text",
                            value:"Only gameplay data is stored online. The interface itself is regenerated locally after loading the cloud values, keeping presentation completely separated from persistence."
                        },

                        {
                            type:"title",
                            value:"💡 Why?"
                        },

                        {
                            type:"text",
                            value:"Cloud Save allows every player to seamlessly continue their progression regardless of the device being used. More importantly, it keeps both players completely independent while still sharing the same gameplay experience."
                        },

                        {
                            type:"title",
                            value:"⚠️ Challenges"
                        },

                        {
                            type:"text",
                            value:"The inventory was initially designed around its UI representation rather than its underlying data. This made serialization unnecessarily complicated until the gameplay data was separated from its visual representation."
                        },

                        {
                            type:"text",
                            value:"Another limitation came from attempting to store ScriptableObjects directly inside cloud data. Since this is not supported, the inventory was redesigned around serializable data structures converted to JSON before being uploaded."
                        },

                        {
                            type:"title",
                            value:"🚀 Improvements"
                        },

                        {
                            type:"text",
                            value:"The current implementation focuses on Player Data only. Exploring Player Files would allow larger datasets, such as images or external resources, to be synchronized alongside traditional gameplay values."
                        }
                    ]
                },
                                {
                    title: "Cloud Code backend",

                    content:
                    [
                        {
                            type:"title",
                            value:"🔧 What?"
                        },

                        {
                            type:"text",
                            value:"Developed a server side backend using Unity Cloud Code to centralize every operation involving shared data between players. Rather than trusting the client, all critical gameplay logic is executed through JavaScript endpoints running on Unity's servers."
                        },

                        {
                            type:"title",
                            value:"⚙️ How?"
                        },

                        {
                            type:"text",
                            value:"Each Cloud Code endpoint receives parameters from Unity, executes the requested operation through the Cloud Save API, then returns the result back to the client. This architecture is used to create rooms, update shared data, validate players and exchange information between accounts."
                        },

                        {
                            type:"text",
                            value:"Game rooms are stored independently from player accounts using Custom Data. Every room owns a unique identifier referenced by both parents, allowing both players to manipulate the same pet without duplicating its data across multiple saves."
                        },

                        {
                            type:"text",
                            value:"Player Data and shared Room Data remain separated. Player specific information such as inventory, money or mailbox is stored inside Player Data, while every element related to the shared pet is centralized inside the room itself."
                        },

                        {
                            type:"title",
                            value:"💡 Why?"
                        },

                        {
                            type:"text",
                            value:"Separating shared data from personal progression eliminates unnecessary duplication while keeping synchronization straightforward. Since only one authoritative room exists, every player automatically accesses the latest version of the pet."
                        },

                        {
                            type:"title",
                            value:"⚠️ Challenges"
                        },

                        {
                            type:"text",
                            value:"Cloud Code required learning an entirely different workflow than traditional Unity scripting. Moving between C# and JavaScript while understanding Unity's Cloud Save API significantly increased the implementation complexity."
                        },

                        {
                            type:"text",
                            value:"Debugging server side scripts was also considerably harder than debugging local gameplay since every request depended on asynchronous cloud operations and remote execution."
                        },

                        {
                            type:"title",
                            value:"🚀 Improvements"
                        },

                        {
                            type:"text",
                            value:"Future iterations could expose richer return values instead of simple booleans, allowing every endpoint to report detailed error codes and greatly simplify debugging."
                        }
                    ]
                },

                {
                    title: "Shared room architecture",

                    content:
                    [
                        {
                            type:"title",
                            value:"🔧 What?"
                        },

                        {
                            type:"text",
                            value:"Designed the complete backend architecture around shared rooms. Every room represents a unique pet and can be referenced by two different player accounts simultaneously."
                        },

                        {
                            type:"title",
                            value:"⚙️ How?"
                        },

                        {
                            type:"text",
                            value:"When creating a room, Cloud Code validates both player identifiers before generating a unique room entry inside Unity Cloud Save. Once created, the room identifier is saved inside each player's personal data, linking both accounts to the same shared world."
                        },

                        {
                            type:"text",
                            value:"Every subsequent save updates the existing room instead of creating new data. Pet information, current needs, ownership schedule and timestamps are therefore synchronized between both players automatically."
                        },

                        {
                            type:"title",
                            value:"💡 Why?"
                        },

                        {
                            type:"text",
                            value:"Using a single shared room avoids keeping two different copies of the same pet synchronized. Every player always interacts with exactly the same cloud object."
                        },

                        {
                            type:"title",
                            value:"⚠️ Challenges"
                        },

                        {
                            type:"text",
                            value:"Creating the room required numerous server side validations, including verifying player identifiers, preventing invalid room creation and ensuring both accounts remained correctly synchronized."
                        },

                        {
                            type:"title",
                            value:"🚀 Improvements"
                        },

                        {
                            type:"text",
                            value:"The architecture already supports storing multiple room identifiers per player, making it possible to extend the game with several pets or shared families without redesigning the backend."
                        }
                    ]
                },

                {
                    title: "Server side gameplay validation",

                    content:
                    [
                        {
                            type:"title",
                            value:"🔧 What?"
                        },

                        {
                            type:"text",
                            value:"Moved several gameplay rules to Cloud Code in order to prevent client side manipulation and guarantee consistent behavior between both players."
                        },

                        {
                            type:"title",
                            value:"⚙️ How?"
                        },

                        {
                            type:"text",
                            value:"The custody planning system relies on Unity's server time rather than the local computer clock. Cloud Code retrieves the current day of the week before checking whether the connected player is allowed to interact with the shared pet."
                        },

                        {
                            type:"text",
                            value:"Because every validation occurs on the server, changing the operating system date cannot bypass the custody schedule or unlock unauthorized interactions."
                        },

                        {
                            type:"title",
                            value:"💡 Why?"
                        },

                        {
                            type:"text",
                            value:"Although the project is only a prototype, server side validation demonstrates how gameplay rules can remain authoritative even without implementing traditional multiplayer networking."
                        },

                        {
                            type:"title",
                            value:"⚠️ Challenges"
                        },

                        {
                            type:"text",
                            value:"Designing gameplay logic around asynchronous requests required every action to correctly wait for server responses before updating the local interface."
                        }
                    ]
                },
                            {
                    title: "Cloud inventory architecture",

                    content:
                    [
                        {
                            type:"title",
                            value:"🔧 What?"
                        },

                        {
                            type:"text",
                            value:"Designed a cloud based inventory system synchronized across every player account. Items collected during gameplay remain available after reconnecting from any device and are automatically restored from Cloud Save."
                        },

                        {
                            type:"title",
                            value:"⚙️ How?"
                        },

                        {
                            type:"text",
                            value:"Instead of storing UI elements, the inventory relies entirely on gameplay data. Every player's inventory is represented as a serializable collection stored inside Cloud Save. Whenever an item is added, removed or consumed, the cloud data is updated before notifying the interface."
                        },

                        {
                            type:"text",
                            value:"The UI never directly modifies the inventory. It simply reacts to events fired by the inventory manager, rebuilding the displayed slots whenever the underlying data changes."
                        },

                        {
                            type:"title",
                            value:"💡 Why?"
                        },

                        {
                            type:"text",
                            value:"Separating gameplay data from presentation made the inventory easier to serialize, synchronize and maintain. The same data can be restored after loading a save without requiring any UI specific logic."
                        },

                        {
                            type:"title",
                            value:"⚠️ Challenges"
                        },

                        {
                            type:"text",
                            value:"The first implementation focused on visual inventory slots rather than the stored data itself, making cloud serialization unnecessarily complicated. Reworking the system around pure gameplay data greatly simplified both saving and synchronization."
                        },

                        {
                            type:"title",
                            value:"🚀 Improvements"
                        },

                        {
                            type:"text",
                            value:"The inventory currently serializes gameplay objects into JSON before uploading them. A generic serialization layer shared across every save system would reduce duplicated conversion code."
                        }
                    ]
                },

                {
                    title: "Event driven user interface",

                    content:
                    [
                        {
                            type:"title",
                            value:"🔧 What?"
                        },

                        {
                            type:"text",
                            value:"Implemented an event driven UI architecture allowing every gameplay system to update the interface automatically without direct dependencies between gameplay logic and presentation."
                        },

                        {
                            type:"title",
                            value:"⚙️ How?"
                        },

                        {
                            type:"text",
                            value:"Whenever gameplay data changes, such as inventory contents, pet needs or player resources, dedicated events notify the corresponding UI components. Each interface element updates itself independently while gameplay systems remain completely unaware of the visual layer."
                        },

                        {
                            type:"text",
                            value:"The pet needs gauges rely on Unity Image fill amounts. Events update both the displayed percentage and the gauge color according to the current value, immediately reflecting every gameplay modification."
                        },

                        {
                            type:"title",
                            value:"💡 Why?"
                        },

                        {
                            type:"text",
                            value:"Using events avoids manually refreshing multiple interface elements after every gameplay action. The architecture also makes future UI additions significantly easier since new widgets only need to subscribe to existing events."
                        },

                        {
                            type:"title",
                            value:"⚠️ Challenges"
                        },

                        {
                            type:"text",
                            value:"Care had to be taken to avoid triggering duplicate events during loading operations, otherwise certain widgets could refresh several times while cloud data was still being restored."
                        },

                        {
                            type:"title",
                            value:"🚀 Improvements"
                        },

                        {
                            type:"text",
                            value:"A generic event bus shared by every gameplay manager would further reduce coupling between systems while making future features easier to integrate."
                        }
                    ]
                },

                {
                    title:"Letter exchange system",

                    content:
                    [
                        {
                            type:"title",
                            value:"🔧 What?"
                        },

                        {
                            type:"text",
                            value:"Implemented an asynchronous messaging feature allowing both parents to exchange letters without needing to be connected simultaneously."
                        },

                        {
                            type:"title",
                            value:"⚙️ How?"
                        },

                        {
                            type:"text",
                            value:"Messages are written into the recipient's Player Data through Cloud Code using their Player ID. Upon login, the game checks whether a pending letter exists, displays its contents to the player and removes it once it has been read."
                        },

                        {
                            type:"title",
                            value:"💡 Why?"
                        },

                        {
                            type:"text",
                            value:"The messaging system reinforces the cooperative nature of the prototype by allowing players to communicate directly inside the game rather than relying on external applications."
                        },

                        {
                            type:"title",
                            value:"⚠️ Challenges"
                        },

                        {
                            type:"text",
                            value:"Writing data into another player's cloud save required carefully validating player identifiers and ensuring the correct account was targeted before performing any server side operation."
                        }
                    ]
                },

                {
                    title:"Persistent pet simulation",

                    content:
                    [
                        {
                            type:"title",
                            value:"🔧 What?"
                        },

                        {
                            type:"text",
                            value:"Created a persistence system allowing the pet to continue living while no player is connected, making its needs evolve over real elapsed time."
                        },

                        {
                            type:"title",
                            value:"⚙️ How?"
                        },

                        {
                            type:"text",
                            value:"Every room stores the timestamp of the last successful save. During the next login, Cloud Code compares the current server time with the previous timestamp and calculates how much each need should decrease before updating the pet's current state."
                        },

                        {
                            type:"title",
                            value:"💡 Why?"
                        },

                        {
                            type:"text",
                            value:"This approach gives the impression that the pet permanently exists inside the shared world instead of freezing whenever the application closes."
                        },

                        {
                            type:"title",
                            value:"⚠️ Challenges"
                        },

                        {
                            type:"text",
                            value:"Keeping every calculation deterministic while relying on asynchronous cloud requests required carefully ordering save and load operations to avoid restoring outdated values."
                        }
                    ]
                },
            ]
        },
    ],
        // ── Outcome ───────────────────────────────────────────────────────────────
    outcome:
    [
        `Divorce Simulator successfully demonstrated how Unity Gaming Services can be combined to build a fully asynchronous multiplayer experience without relying on traditional networking. Authentication, Cloud Save and Cloud Code were integrated into a coherent backend architecture capable of synchronizing shared gameplay between two independent player accounts.`,

        `The project became an excellent introduction to online backend development within Unity. Beyond simply learning Unity Services, it provided hands on experience with asynchronous programming, cloud persistence, server side validation and data architecture, all of which significantly expanded my understanding of scalable gameplay systems.`,

        `One of the biggest takeaways was the importance of designing gameplay systems around data rather than their visual representation. Moving inventory management, pet simulation and UI updates toward an event driven architecture greatly simplified synchronization, cloud serialization and future feature development.`,

        `Although some asynchronous loading sequences required temporary delays to guarantee proper execution order, the prototype remains fully functional and successfully validates the architecture chosen for the project. Future iterations would mainly focus on improving scalability, error reporting and backend robustness rather than redesigning the existing systems.`
    ],

    // ── Infos ─────────────────────────────────────────────────────────────────
    infos:
    {
        year:     "2025",
        duration: "2 months",
        role:     "Solo Gameplay & Backend Programmer",
    },

    // ── Screenshots ────────────────────────────────────────────────────────────
    screenshots:
    [
        // {
        //     src: "../../Sources/Projects/Gifs/DivorceSimulator.gif",
        //     caption: "Gameplay"
        // },

        // {
        //     src: "../../Sources/Projects/DivorceSimulator/Login.png",
        //     caption: "Authentication"
        // },

        // {
        //     src: "../../Sources/Projects/DivorceSimulator/Inventory.png",
        //     caption: "Cloud Inventory"
        // },

        // {
        //     src: "../../Sources/Projects/DivorceSimulator/Letters.png",
        //     caption: "Letter System"
        // }
    ],

    // ── Links ─────────────────────────────────────────────────────────────────
    links:
    [
        // {
        //     href:"",
        //     img:"",
        //     alt:""
        // }
    ],

    // ── Tags ──────────────────────────────────────────────────────────────────
    tags:
    "Unity, C#, Unity Gaming Services, Cloud Save, Cloud Code, Authentication, JavaScript, Backend, Async Programming, Event Driven Architecture, JSON",

};
