export default [
    {
        title: "Grace Abounds",
        artist: "AWAKE84",
        composer: "Elle Tumaliuan, Isa Cuna, Joe Ramos, and Charles Bautista",
        album: "Wonderstruck",
        releaseDate: "2023",
        originalKey: "E",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        bpm: 130,
        sections: [
            {
                type: "Intro",
                lyrics: ["","Are you ready...",""],
                italize: [false, true],
                addBreak: [false, true],
                chords: [
                    [
                    { chord: "A", position: 0, left: true }, { chord: "C#m7", position: 4 }, { chord: "B", position: 4, right: true, dash: true },
                    { chord: "E", position: 8 }, { chord: "G#m7", position: 12 }, { chord: "A", position: 12, right: true, dash: true  },
                    ],
                    [],
                    [
                    { chord: "A", position: 0, left: true }, { chord: "C#m7", position: 4 }, { chord: "B", position: 4, right: true, dash: true },
                    { chord: "E", position: 8 }, { chord: "G#m7", position: 12 }, { chord: "A", position: 12, right: true, dash: true  },
                    ],
                ],
                times: [2, '', 4],
            },
            {
                type: "Verse 1",
                lyrics: [
                    "In my weakness, You are strong",
                    "When I feel I can’t press on",
                    "You renew this weary heart",
                    "You carry me through",
                    "You carry me through",
                ],
                chords: [
                    [{ chord: "G#m7", position: 25 }, { chord: "A", position: 40 }, { chord: "B", position: 70 }],
                    [{ chord: "G#m7", position: 30 }, { chord: "A", position: 40 }, { chord: "B", position: 67 }],
                    [{ chord: "G#m7", position: 28 }, { chord: "A", position: 42 }, { chord: "B", position: 60 }],
                    [{ chord: "G#m7", position: 57 }],
                    [{ chord: "A", position: 17 }, { chord: "B", position: 52 }],
                ],
            },
            {
            type: "Verse 2",
            lyrics: [
                "When the lies say I’m in need",
                "You remind me I’m complete",
                "For You always satisfy",
                "You fill me anew",
                "You fill me anew",
            ],
            chords: [
                [{ chord: "G#m7", position: 46 }, { chord: "A", position: 56 }, { chord: "B", position: 70 }],
                [{ chord: "G#m7", position: 28 }, { chord: "A", position: 40 }, { chord: "B", position: 68 }],
                [{ chord: "G#m7", position: 32 }, { chord: "A", position: 38 }, { chord: "B", position: 50 }],
                [{ chord: "G#m7", position: 49 }],
                [{ chord: "A", position: 18 }, { chord: "B", position: 44 }],
            ],
            },
            {
                type: "Chorus",
                lyrics: [
                    "Your grace abounds",
                    "It’s all around",
                    "It knows no bounds",
                    "Ooohh..      ooohh..",
                ],
                chords: [
                    [{ chord: "A", position: 18 }, { chord: "E", position: 40 }],
                    [{ chord: "C#m", position: 16 }, { chord: "B", position: 20 }],
                    [{ chord: "A", position: 8 }, { chord: "E", position: 44 }],
                    [{ chord: "C#m7", position: 27 }, { chord: "B", position: 56 }],
                ],
            },
            {
            type: "DROP:",
            lyrics: ['',''],
            chords: [
                [{ chord: "A", position: 0, left: true }, { chord: "E", position: 3, left: true }, { chord: "C#m", position: 5, left: true }, { chord: "B", position: 7, leftRight: true,  }],
                [{ chord: "A", position: 0, left: true }, { chord: "E", position: 3, left: true }, { chord: "C#m", position: 5, left: true }, { chord: "B", position: 7, leftRight: true,  }],

            ],
            },
            {
            type: "INSTRUMENTAL:",
            lyrics: ['',''],
            chords: [
                [{ chord: "A", position: 0, left: true }, { chord: "E", position: 4, left: true }, { chord: "C#m7", position: 8, left: true }, { chord: "B", position: 12, leftRight: true }],
                [{ chord: "A", position: 0, left: true }, { chord: "E", position: 4, left: true }, { chord: "C#m7", position: 8, left: true }, { chord: "B", position: 12, leftRight: true }],
            ],
            },
            {
            type: "BRIDGE:",
            lyrics: [
                    '',
                    'A grace so bright, I’m brought to life',
                    'I fix my eyes, You’re my delight',
                    'A grace so bright, I’m brought to life',
                    'I fix my eyes on You'
                ],
            chords: [
                [{ chord: "A", position: 0, left: true }, { chord: "C#m7", position: 4, right: true }, { chord: "B", position: 7, right: true }, { chord: "E", position: 11 }, { chord: "G#m7", position: 15 }, { chord: "A", position: 19, leftRight: true }],
                [{ chord: "A", position: 0 }, { chord: "C#m7", position: 60 }, { chord: "B", position: 60, dash: true }],
                [{ chord: "E", position: 0 }, { chord: "G#m7", position: 44 }, { chord: "A", position: 44, dash: true }],
                [{ chord: "A", position: 0 }, { chord: "C#m7", position: 60 }, { chord: "B", position: 60, dash: true }],
                [{ chord: "E", position: 33 }, { chord: "G#m7", position: 74 }, { chord: "B", position: 74, dash: true }],
            ],
            times: [2]
            },
            {
            type: "BRIDGE TAG:",
            lyrics: ['I fix my eyes on You'],
            chords: [
                [{ chord: "A", position: 30 }, { chord: "C#m7", position: 60 }, { chord: "B", position: 60, dash: true }],
            ],
            },
            {
            type: "[REPEAT CHORUS]",
            lyrics: [
                "Your grace abounds",
                "It’s all around",
                "It knows no bounds",
                "Ooohh..      ooohh..",
            ],
            chords: [
                [{ chord: "A", position: 18 }, { chord: "E", position: 40 }],
                [{ chord: "C#m", position: 16 }, { chord: "B", position: 20 }],
                [{ chord: "A", position: 8 }, { chord: "E/G#", position: 44 }],
                [{ chord: "C#m7", position: 27 }, { chord: "B", position: 56 }],
            ],
            },
            {
            type: "DROP:",
            lyrics: ['',''],
            chords: [
                [{ chord: "A", position: 0, left: true }, { chord: "E", position: 3, left: true }, { chord: "C#m", position: 5, left: true }, { chord: "B", position: 7, leftRight: true,  }],
                [{ chord: "A", position: 0, left: true }, { chord: "E", position: 3, left: true }, { chord: "C#m", position: 5, left: true }, { chord: "B", position: 7, leftRight: true,  }],
            ],
            },
        ],
    },
    {
        title: "Wonderstruck",
        artist: "AWAKE84",
        composer: "Chrysse Colleen Manuel-Pili, Francesca Nicole Torres, & Nathan Gabriel M. Punzalan",
        album: "Wonderstruck",
        releaseDate: "2023",
        originalKey: "Eb",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"],
        bpm: 128,
        sections: [
            {
                type: "INTRO-ENDING:",
                lyrics: [""],
                italize: [false, true],
                addBreak: [false, true],
                chords: [
                    [
                    { chord: "Ab", position: 0, leftRight: true }, { chord: "Ab", position: 4 }, { chord: "Cm7", position: 8 },
                    { chord: "Bb", position: 12, leftRight: true }, { chord: "Bb", position: 16 }, { chord: "Gm7", position: 20, right: true  },
                    ],
                ],
            },
            {
                type: "Verse",
                lyrics: [
                    "Grace, You make creation bloom",
                    "Faith, You make mountains move",
                    "Power that shaped the galaxies",
                    "Jesus, You’re our reality",
                ],
                chords: [
                    [{ chord: "Ab", position: 0 }, { chord: "Cm7", position: 70 }, { chord: "Bb", position: 77 }, { chord: "Gm7", position: 86 }],
                    [{ chord: "Ab", position: 0 }, { chord: "Cm7", position: 53 }, { chord: "Bb", position: 81 }, { chord: "Gm7", position: 96 }],
                    [{ chord: "Ab", position: 0 }, { chord: "Cm7", position: 81 }, { chord: "Bb", position: 90 }, { chord: "Gm7", position: 100 }],
                    [{ chord: "Ab", position: 0 }, { chord: "Cm7", position: 64 }, { chord: "Bb", position: 70 }, { chord: "Gm7", position: 80 }],
                ],
            },
            {
            type: "PRE-CHORUS:",
            lyrics: [
                "Generations will know",
                "That Your love is sweet",
                "This is life in the light of eternity",
                "Let your joy overflow",
                "Show why we believe",
                "Get up on your feet!",
            ],
            chords: [
                [{ chord: "Ab", position: 0 }],
                [{ chord: "Cm7", position: 42 }, { chord: "Bb", position: 65 }],
                [{ chord: "Gm7", position: 104 }, { chord: "Ab", position: 108 }],
                [{ chord: "Ab", position: 72 }],
                [{ chord: "Cm7", position: 43 }, { chord: "Bb", position: 51 }],
                [{ chord: "Bb", position: 67 }],
            ],
            },
            {
            type: "CHORUS:",
            lyrics: [
                "Let’s dance!",
                "We’re caught up in Your song of life",
                "Your love’s taking us by surprise",
                "Nothing You do is as it seems",
                "You surpass all our wildest dreams",
            ],
            chords: [
                [{ chord: "Ab", position: 22 }],
                [{ chord: "Cm7", position: 99 }, { chord: "Bb", position: 108 }],
                [{ chord: "Gm7", position: 90 }, { chord: "Ab", position: 101 }],
                [{ chord: "Ab", position: 35 }, { chord: "Cm7", position: 63 }, { chord: "Bb", position: 80 }],
                [{ chord: "Bb", position: 29 }, { chord: "Gm7", position: 67 }],
            ],
            },
            {
            type: "HOOK:",
            lyrics: [
                "Hallelujah",
                "Hallelujah (Wooah)",
                "Hallelujah",
                "Hallelujah",
            ],
            chords: [
                [{ chord: "Ab", position: 0 }],
                [{ chord: "Cm7", position: 41 }, { chord: "Bb", position: 54 }],
                [{ chord: "Bb", position: 0 }],
                [{ chord: "Bb", position: 28 }, { chord: "Gm7", position: 33 }],
            ],
            },
            {
            type: "BRIDGE:",
            lyrics: [
                "Wonderstruck",
                "God Your goodness has swept us up",
                "Compelled by love",
                "We’ll tell the world about what You’ve done",
            ],
            chords: [
                [{ chord: "Ab", position: 0 }],
                [{ chord: "Cm7", position: 42 }, { chord: "Bb", position: 80 }, { chord: "Gm7", position: 120 }],
                [{ chord: "Ab", position: 20 }],
                [{ chord: "Cm7", position: 54 }, { chord: "Bb", position: 86 }, { chord: "Gm7", position: 147 }],
            ],
            },
        ],
    },
    {
        title: "Have All of Me (Live)",
        artist: "AWAKE84",
        composer: "Hosanna Myrran Matienzo, Jazer Ambion, Jomer Christian Dula, Zeid Mitzi Cabales, Elizabeth Anne Tumaliuan, & Ian Tumaliuan",
        album: "Wonderstruck",
        releaseDate: "2023",
        originalKey: "F",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"],
        bpm: 70,
        sections: [
            {
                type: "INTRO:",
                lyrics: [""],
                chords: [
                    [
                        { chord: "Dm7", position: 0, leftRight: true }, { chord: "C", position: 4, right: true }, { chord: "Am7", position: 8 },
                        { chord: "Bb", position: 12, leftRight: true }
                    ],
                ],
            },
            {
                type: "VERSE 1",
                lyrics: [
                    "I've set my eyes on You",
                    "Your love draws me closer and closer",
                    "My life I give to You",
                    "Your heart is all I'm after",
                ],
                chords: [
                    [{ chord: "Dm7", position: 0 }, { chord: "C", position: 40 }],
                    [{ chord: "Am7", position: 0 }, { chord: "Bb", position: 40 }],
                    [{ chord: "Dm7", position: 0 }, { chord: "C", position: 35 }],
                    [{ chord: "Am7", position: 0 }, { chord: "Bb", position: 40 }],
                ],
            },
            {
                type: "VERSE 2",
                lyrics: [
                    "I've made up my mind",
                    "My God, there's no one else I'll follow",
                    "You have made me new",
                    "Jesus, it's only You I'll pursue",
                ],
                chords: [
                    [{ chord: "Dm7", position: 0 }, { chord: "C", position: 30 }],
                    [{ chord: "Am7", position: 0 }, { chord: "Bb", position: 50 }],
                    [{ chord: "Dm7", position: 0 }, { chord: "C", position: 35 }],
                    [{ chord: "Am7", position: 0 }, { chord: "Bb", position: 40 }],
                ],
            },
            {
                type: "CHORUS",
                lyrics: [
                    "Here I am, Oh Lord",
                    "You can have all of me",
                    "Before Your throne",
                    "Laying it all at Your feet",
                    "Your grace has set me free",
                    "So Jesus have all of me",
                ],
                chords: [
                    [{ chord: "Bb", position: 0 }, { chord: "C", position: 20 }, { chord: "Dm7", position: 40 }],
                    [{ chord: "Am7", position: 0 }, { chord: "Bb", position: 40 }],
                    [{ chord: "C", position: 0 }, { chord: "Dm", position: 30 }],
                    [{ chord: "Am7", position: 0 }, { chord: "Bb", position: 40 }],
                    [{ chord: "C", position: 0 }, { chord: "Dm7", position: 40 }],
                    [{ chord: "Am7", position: 0 }, { chord: "Bb", position: 40 }],
                ],
            },
            {
                type: "VERSE 3",
                lyrics: [
                    "In Your presence I bow down",
                    "Oh Lord, there's freedom in surrender",
                    "You've broken every chain",
                    "Savior, You're my one desire",
                ],
                chords: [
                    [{ chord: "Dm7", position: 0 }, { chord: "C", position: 40 }],
                    [{ chord: "Am7", position: 0 }, { chord: "Bb", position: 50 }],
                    [{ chord: "Dm7", position: 0 }, { chord: "C", position: 40 }],
                    [{ chord: "Am7", position: 0 }, { chord: "Bb", position: 40 }],
                ],
            },
            {
                type: "INSTRUMENTAL",
                lyrics: [""],
                chords: [
                    [
                        { chord: "Bb", position: 0, left: true }, { chord: "C", position: 4 }, { chord: "Dm7", position: 4, dash: true, right: true },
                        { chord: "Bb", position: 8 }, { chord: "C", position: 12 }, { chord: "Dm7", position: 12, dash: true, right: true },
                        { chord: "Gm7", position: 16, right: true }, { chord: "Dm7", position: 20 }, { chord: "C", position: 24, right: true }
                    ],
                ],
            },
            {
                type: "BRIDGE",
                lyrics: [
                    "Jesus, You're all I see",
                    "I know that You're with me",
                    "No turning back",
                    "No turning back",
                    "My cross, I'll carry",
                    "Though no one goes with me",
                    "No turning back",
                    "No turning back",
                ],
                chords: [
                    [{ chord: "Bb", position: 0 }, { chord: "C", position: 30 }, { chord: "Dm7", position: 60 }],
                    [{ chord: "Bb", position: 0 }, { chord: "C", position: 30 }, { chord: "Dm7", position: 60 }],
                    [{ chord: "Gm7", position: 0 }],
                    [{ chord: "Dm7", position: 0 }, { chord: "C", position: 30 }],
                    [{ chord: "Bb", position: 0 }, { chord: "C", position: 30 }, { chord: "Dm7", position: 60 }],
                    [{ chord: "Bb", position: 0 }, { chord: "C", position: 30 }, { chord: "Dm7", position: 60 }],
                    [{ chord: "Gm7", position: 0 }],
                    [{ chord: "Dm7", position: 0 }, { chord: "C", position: 30 }],
                ],
            },
        ],
    },
    {
        title: "New Gen",
        artist: "AWAKE84",
        composer: "Simon Calma, RN Noriega, Elle Cabiling Tumaliuan, & Ian Tumaliuan",
        album: "Living Awake",
        releaseDate: "2024",
        originalKey: "C",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"],
        bpm: 145,
        sections: [
            {
                type: "CHORUS:",
                lyrics: [
                    "You're calling a new generation",
                    "Children of light, sons and daughters",
                    "We'll be Your new generation",
                    "We carry a hope, Your salvation",
                ],
                chords: [
                    [{ chord: "F", position: 64 }, { chord: "Dm", position: 112 }],
                    [{ chord: "E7", position: 55 }, { chord: "Am", position: 130 }],
                    [{ chord: "F", position: 56 }, { chord: "Dm", position: 104 }],
                    [{ chord: "E7", position: 47 }, { chord: "Am", position: 108 }],
                ],
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "Set apart from darkness",
                    "Brought into Your light yeah yeah",
                    "We who once were lifeless",
                    "Were made alive with Christ",
                    "No longer bound in the night",
                    "Living free to go and follow Your way",
                ],
                chords: [
                    [{ chord: "Dm", position: 0 }, { chord: "Em", position: 0, dash: true }, { chord: "F", position: 0, dash: true }],
                    [{ chord: "F", position: 0 }, { chord: "E7", position: 0, dash: true }, { chord: "Am", position: 0, dash: true }],
                    [{ chord: "Dm", position: 0 }, { chord: "Em", position: 0, dash: true }, { chord: "F", position: 0, dash: true }],
                    [{ chord: "F", position: 0 }, { chord: "E7", position: 0, dash: true }, { chord: "Am", position: 0, dash: true }],
                    [{ chord: "F", position: 0 }, { chord: "Dm", position: 40 }],
                    [{ chord: "E7", position: 40 }],
                ],
            },
            {
                type: "PRE-CHORUS:",
                lyrics: [
                    "So we'll, we'll say yes, yes yes",
                    "We will, we will go, follow Your will",
                    "Let Your kingdom come",
                    "And let Your will be done",
                ],
                chords: [
                    [{ chord: "Dm", position: 0 }, { chord: "Em", position: 0, dash: true }, { chord: "F", position: 0, dash: true }],
                    [{ chord: "F", position: 0 }, { chord: "E7", position: 0, dash: true }, { chord: "Am", position: 0, dash: true }],
                    [{ chord: "Dm", position: 0 }, { chord: "Em", position: 0, dash: true }, { chord: "F", position: 0, dash: true }],
                    [{ chord: "F", position: 0 }, { chord: "Em", position: 0, dash: true }, { chord: "Am", position: 0, dash: true }],
                ],
            },
            {
                type: "TAG:",
                lyrics: [
                    "We follow Your way",
                    "Not gonna wait",
                    "Living awake",
                    "We are awake",
                ],
                chords: [
                    [{ chord: "F", position: 60 }, { chord: "Dm", position: 75 }],
                    [{ chord: "E7", position: 50 }, { chord: "Am", position: 60 }],
                    [{ chord: "F", position: 39 }, { chord: "Dm", position: 50 }],
                    [{ chord: "E7", position: 39 }, { chord: "Am", position: 50 }],
                ],
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "Always rejoicing",
                    "We pray without ceasing",
                    "Living in thanksgiving",
                    "That's how it is to go and follow Your way",
                ],
                chords: [
                    [{ chord: "F", position: 40 }, { chord: "Dm", position: 62 }],
                    [{ chord: "E7", position: 67 }, { chord: "Am", position: 90 }],
                    [{ chord: "F", position: 65 }, { chord: "Dm", position: 82 }],
                    [{ chord: "E7", position: 52 }],
                ],
            },
            {
                type: "INSTRUMENTAL:",
                lyrics: [""],
                chords: [
                    [
                        { chord: "Am", position: 0 }, { chord: "G", position: 4 }, { chord: "D/F#", position: 8 }, { chord: "F", position: 12 }, { chord: "G", position: 16 }
                    ],
                ],
            },
            {
                type: "BRIDGE:",
                lyrics: [
                    "Now we are awake",
                    "There's no time to wait",
                    "Living in the light",
                    "We won't hesitate",
                ],
                chords: [
                    [{ chord: "Am", position: 0 }],
                    [{ chord: "G", position: 0 }],
                    [{ chord: "D/F#", position: 0 }],
                    [{ chord: "F", position: 0 }, { chord: "G", position: 70 }],
                ],
            },
        ],
    },
]
