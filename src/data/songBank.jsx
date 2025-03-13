export default [
    {
        title: "Grace Abounds",
        artist: "AWAKE84",
        publisher: "VICTORY",
        composer: "Elle Tumaliuan, Isa Cuna, Joe Ramos, and Charles Bautista",
        album: "Wonderstruck",
        releaseDate: "2023",
        originalKey: "E",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        bpm: 130,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/ZavV3JgdK8Q?si=QEaiqMYobdpbv_-T' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/6LxaXoGSuy4hjTGiKWyfTr?si=5e5ddcdc67c04af2' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/grace-abounds-live/1681953784?i=1681954098' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1a9OQVknWEx3R8hU8yqQKVRiaeXdDtvu0/view' },
        ],
        sections: [
            {
                type: "Intro",
                lyrics: ["","Are you ready...",""],
                italize: [false, true],
                addBreak: [false, true],
                chords: [
                    [
                    { chord: "A", position: 0, left: true, number: 4 }, { chord: "C#m7", position: 4, number: 6 }, { chord: "B", position: 4, right: true, dash: true, number: 5 },
                    { chord: "E", position: 8, number: 1 }, { chord: "G#m7", position: 12, number: 3 }, { chord: "A", position: 12, right: true, dash: true, number: 4  },
                    ],
                    [],
                    [
                    { chord: "A", position: 0, left: true, number: 4 }, { chord: "C#m7", position: 4, number: 6 }, { chord: "B", position: 4, right: true, dash: true, number: 5 },
                    { chord: "E", position: 8, number: 1 }, { chord: "G#m7", position: 12, number: 3 }, { chord: "A", position: 12, right: true, dash: true, number: 4  },
                    ],
                ],
                times: [2, '', 4],
                isNotLyric: true,
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
                    [{ chord: "G#m7", position: 25, number: 3 }, { chord: "A", position: 40, number: 4 }, { chord: "B", position: 70, number: 5 }],
                    [{ chord: "G#m7", position: 30, number: 3 }, { chord: "A", position: 40, number: 4 }, { chord: "B", position: 67, number: 5 }],
                    [{ chord: "G#m7", position: 28, number: 3 }, { chord: "A", position: 42, number: 4 }, { chord: "B", position: 60, number: 5 }],
                    [{ chord: "G#m7", position: 57, number: 3 }],
                    [{ chord: "A", position: 17, number: 4 }, { chord: "B", position: 52, number: 5 }],
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
                [{ chord: "G#m7", position: 46, number: 3 }, { chord: "A", position: 56, number: 4 }, { chord: "B", position: 70, number: 5 }],
                [{ chord: "G#m7", position: 28, number: 3 }, { chord: "A", position: 40, number: 4 }, { chord: "B", position: 68, number: 5 }],
                [{ chord: "G#m7", position: 32, number: 3 }, { chord: "A", position: 38, number: 4 }, { chord: "B", position: 50, number: 5 }],
                [{ chord: "G#m7", position: 49, number: 3 }],
                [{ chord: "A", position: 18, number: 4 }, { chord: "B", position: 44, number: 5 }],
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
                    [{ chord: "A", position: 18, number: 4 }, { chord: "E", position: 40, number: 1 }],
                    [{ chord: "C#m", position: 16, number: 6 }, { chord: "B", position: 20, number: 5 }],
                    [{ chord: "A", position: 8, number: 4 }, { chord: "E", position: 44, number: 1 }],
                    [{ chord: "C#m7", position: 27, number: 6 }, { chord: "B", position: 56, number: 5 }],
                ],
            },
            {
                type: "DROP:",
                lyrics: ['',''],
                chords: [
                    [{ chord: "A", position: 0, left: true }, { chord: "E", position: 3, left: true }, { chord: "C#m", position: 5, left: true }, { chord: "B", position: 7, leftRight: true,  }],
                    [{ chord: "A", position: 0, left: true }, { chord: "E", position: 3, left: true }, { chord: "C#m", position: 5, left: true }, { chord: "B", position: 7, leftRight: true,  }],
                ],
                isNotLyric: true,
            },
            {
                type: "INSTRUMENTAL:",
                lyrics: ['',''],
                chords: [
                    [{ chord: "A", position: 0, left: true }, { chord: "E", position: 4, left: true }, { chord: "C#m7", position: 8, left: true }, { chord: "B", position: 12, leftRight: true }],
                    [{ chord: "A", position: 0, left: true }, { chord: "E", position: 4, left: true }, { chord: "C#m7", position: 8, left: true }, { chord: "B", position: 12, leftRight: true }],
                ],
                isNotLyric: true,
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
                [{ chord: "A", position: 8 }, { chord: "E/G#", position: 44, number: "1/3" }],
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
                isNotLyric: true,
            },
        ],
    },
    {
        title: "Wonderstruck",
        artist: "AWAKE84",
        publisher: "VICTORY",
        composer: "Chrysse Colleen Manuel-Pili, Francesca Nicole Torres, & Nathan Gabriel M. Punzalan",
        album: "Wonderstruck",
        releaseDate: "2023",
        originalKey: "Eb",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"],
        bpm: 128,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/nXkVsMmgyGs?si=GAF6ezCJpG9zuppz' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/66kjME9bCPZyk8mL6cgEys?si=27255301f59f4cfe' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/wonderstruck/1666486248?i=1666486258' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1vrzwqnDG7VSuwDy5Vrwrg7AbBN9Gmj8K/view' },
        ],
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
                isNotLyric: true,
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
        publisher: "VICTORY",
        composer: "Hosanna Myrran Matienzo, Jazer Ambion, Jomer Christian Dula, Zeid Mitzi Cabales, Elizabeth Anne Tumaliuan, & Ian Tumaliuan",
        album: "Wonderstruck",
        releaseDate: "2023",
        originalKey: "F",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"],
        bpm: 70,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/waoT01SNhkc?si=I4tC-e4SKpIC7ynr' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/5dPe8ahss4C7NvjP1iiXOI?si=e7eb5c06850c4ecf' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/have-all-of-me-live/1681953784?i=1681954112' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1EVplBKIoh4rf1nZv6l2buBRXve3Ac8Ou/view' },
        ],
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
                isNotLyric: true,
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
                isNotLyric: true,
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
        publisher: "VICTORY",
        composer: "Simon Calma, RN Noriega, Elle Cabiling Tumaliuan, & Ian Tumaliuan",
        album: "Living Awake",
        releaseDate: "2024",
        originalKey: "C",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"],
        bpm: 145,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/kRGzCtnpJ3o?si=VhxjSG89Roq8Qrdi' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/2fp3evS8EUjNT8qD7smgtO?si=b925cf48a9964c7b' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/new-gen/1746738986?i=1746738998' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1cXVT4y7nG75FkxpvMtfVg-UzImSvMAwM/view' },
        ],
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
                        { chord: "Am", position: 0 }, { chord: "G", position: 4 }, { chord: "D/F#", position: 8, number: "2/#4" }, { chord: "F", position: 12 }, { chord: "G", position: 16 }
                    ],
                ],
                isNotLyric: true,
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
                    [{ chord: "D/F#", position: 0, number: "2/#4" }],
                    [{ chord: "F", position: 0 }, { chord: "G", position: 70 }],
                ],
            },
        ],
    },
    {
        title: "This Is Who You Are",
        artist: "AWAKE84",
        publisher: "VICTORY",
        composer: "Gilbert Espiridion, Barbie Honasan, Myka Magsaysay Sigua, and Elle Cabiling Tumaliuan",
        album: "Living Awake",
        releaseDate: "2024",
        originalKey: "Bm",
        bpm: 140,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/0fmZDVvJGsw?si=uBrCrPl3TqR74q_n' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/70AKiyIR3bXTBqMNPamwYC?si=1b0e4e20579e4e7f' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/this-is-who-you-are-feat-bishop-ferdie-cabiling/1746738986?i=1746739217' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1rzC-CGF3PIqI6WzIKcFx4DV0XWl47vEh/view' },
        ],
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"],
        sections: [
            {
                type: "INTRO:",
                lyrics: ['',''],
                chords: [
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "F#m", position: 0, dash: true }, { chord: "E", position: 0, dash: true }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "Em", position: 0, dash: true }, { chord: "D", position: 0, dash: true }],
                ],
                times: [3],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "You called us out of darkness",
                    "Into Your wonderful light",
                    "You called us Your possession",
                    "In whom is Your delight",
                    "You took our guilt and shame",
                    "And made us righteous in Your eyes",
                    "You conquered sin and death",
                    "To give us everlasting life"
                ],
                chords: [
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "F#m", position: 0, dash: true }, { chord: "E", position: 0, dash: true }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "F#m", position: 0, dash: true }, { chord: "E", position: 0, dash: true }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "F#m", position: 0, dash: true }, { chord: "E", position: 0, dash: true }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "Em", position: 0, dash: true }, { chord: "D", position: 0, dash: true }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "F#m", position: 0, dash: true }, { chord: "E", position: 0, dash: true }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "F#m", position: 0, dash: true }, { chord: "E", position: 0, dash: true }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "F#m", position: 0, dash: true }, { chord: "E", position: 0, dash: true }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "Em", position: 0, dash: true }, { chord: "D", position: 0, dash: true }],
                ]
            },
            {
                type: "PRE-CHORUS:",
                lyrics: [
                    "Jesus, Your love has set us free",
                    "We shine Your light for the world to see",
                    "That You're the God of victory",
                    "Oh, this is who You are"
                ],
                chords: [
                    [{ chord: "G", position: 0 }, { chord: "A", position: 71 }],
                    [{ chord: "G", position: 0 }, { chord: "A", position: 99 }],
                    [{ chord: "G", position: 0 }, { chord: "A", position: 84 }],
                    [{ chord: "G", position: 0 }, { chord: "A", position: 85 }]
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "",
                    "This is who You are"
                ],
                chords: [
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "F#m", position: 0, dash: true }, { chord: "E", position: 0, dash: true }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "Em", position: 0, dash: true }, { chord: "D", position: 0, dash: true }]
                ]
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "You chose us as Your people",
                    "We follow where You lead",
                    "We are a holy nation",
                    "You made us Your hands and feet"
                ],
                chords: [
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "F#m", position: 0, dash: true }, { chord: "E", position: 0, dash: true }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "F#m", position: 0, dash: true }, { chord: "E", position: 0, dash: true }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "F#m", position: 0, dash: true }, { chord: "E", position: 0, dash: true }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "Em", position: 0, dash: true }, { chord: "D", position: 0, dash: true }]
                ]
            },
            {
                type: "",
                lyrics: [
                    "[REPEAT CHORUS]", 
                ],
                chords: [],
                isNotLyric: true,
            },
            {
                type: "INSTRUMENTAL:",
                lyrics: ['',''],
                chords: [
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "F#m", position: 0, dash: true }, { chord: "E", position: 0, dash: true }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 0, dash: true }, { chord: "Em", position: 0, dash: true }, { chord: "D", position: 0, dash: true }]
                ],
                times: [3],
                isNotLyric: true,
            },
            {
                type: "EXHORTATION:",
                lyrics: [
                    "You are the Alpha and Omega",
                    "King of Kings, Lord of lords",
                    "Our everlasting God",
                    "Creator of the ends of the earth",
                    "The Word that became flesh",
                    "Our almighty savior",
                    "JESUS"
                ],
                chords: [
                    [{ chord: "G", position: 0 }, { chord: "A", position: 5 }],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
                times: [4],
            },
            {
                type: "BRIDGE: (same as verse chords)",
                lyrics: [
                    "Jesus, You have overcome",
                    "No power on earth can ever hold You",
                    "Your Kingdom come",
                    "You're victorious",
                    "You're victorious"
                ],
                chords: [
                    [],
                    [],
                    [],
                    [],
                    [],
                ]
            }
        ]
    },
    {
        title: "Can't Get Enough",
        artist: "AWAKE84",
        publisher: "VICTORY",
        composer: "Bryson Breakey, Sarah Bulahan, Elle Cabiling Tumaliuan, Jose Villanueva III",
        album: "Living Awake",
        releaseDate: "2024",
        originalKey: "Eb",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"],
        bpm: 120,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/ip_nZZ00vE8?si=_s9F1Y8jEBJ7tZOx' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/44NQoRiwxvjJeqca7W3lPe?si=617bcc2ecd764a7a' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/cant-get-enough/1746738986?i=1746739373' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1euejMbFHewE8tENDPEHPreAkkNEBtbNX/view' },
        ],
        sections: [
            {
                type: "INTRO:",
                lyrics: [""],
                chords: [
                    [{ chord: "Eb", position: 0 }, { chord: "Ab", position: 4 }, { chord: "Cm", position: 8 }, { chord: "Ab", position: 12 }]
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "There's a new song burning in our hearts",
                    "It's brighter than the morning",
                    "All the melodies are pouring out",
                    "They're overflowing",
                ],
                chords: [
                    [{ chord: "Eb", position: 36 }],
                    [{ chord: "Ab", position: 80 }],
                    [{ chord: "Eb", position: 30 }],
                    [{ chord: "Ab", position: 46 }]
                ],
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "There's joy that's rising in our souls",
                    "It's new every morning",
                    "Bringing flavor, color",
                    "Like we've never seen",
                ],
                chords: [
                    [{ chord: "Eb", position: 28 }],
                    [{ chord: "Ab", position: 52 }],
                    [{ chord: "Eb", position: 32 }],
                    [{ chord: "Ab", position: 42 }]
                ],
            },
            {
                type: "PRE-CHORUS:",
                lyrics: [
                    "You're marvelous in all that You are",
                    "We've seen a glimpse now we're after Your heart",
                ],
                chords: [
                    [{ chord: "Fm", position: 0 }, { chord: "Gm", position: 115 }, { chord: "Ab", position: 115, dash: true }],
                    []
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "Let our praise fill the air",
                    "Changing the atmosphere",
                    "Had a taste of Your love",
                    "And we can't get enough",
                    "With our hands lifted up",
                    "And a hope that won't stop",
                    "We've been changed by Your love",
                    "And we can't get enough",
                ],
                chords: [
                    [{ chord: "Eb", position: 31 }],
                    [],
                    [{ chord: "Ab", position: 28 }],
                    [],
                    [{ chord: "Cm", position: 40 }],
                    [],
                    [{ chord: "Ab", position: 47 }],
                    []
                ],
            },
            {
                type: "INSTRUMENTAL:",
                lyrics: [""],
                chords: [
                    [{ chord: "Eb", position: 0 }]
                ],
                isNotLyric: true,
            },
            {
                type: "BRIDGE:",
                lyrics: [
                    "You are our treasure",
                    "You hold our future",
                    "We are forever Yours",
                ],
                chords: [
                    [{ chord: "Eb", position: 0 }],
                    [{ chord: "Bb/D", position: 0, number: "5/7" }],
                    [{ chord: "Db", position: 0, number: "♭7" }, { chord: "Ab", position: 70 }, { chord: "Bb", position: 70, dash: true }]
                ],
            },
        ],
    },
    {
        title: "Dwelling Place",
        artist: "AWAKE84",
        publisher: "VICTORY",
        composer: "Sofia Paderez, Raya Rabanal, Josiah Tumaliuan",
        album: "Living Awake",
        releaseDate: "2024",
        originalKey: "E",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"],
        bpm: 68,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/JIgJRFSOYj0?si=oIPp8-bucpZu0Mzs' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/3iqYa7x1JcfhYumSRjXmSy?si=2d31644b432544aa' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/dwelling-place/1746738986?i=1746739387' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1PpmMspPyC4jRCzbPHPcFYeV7WH6Cvmr4/view' },
        ],
        sections: [
            {
                type: "INTRO:",
                lyrics: [""],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "B/E", position: 4, number: "5/1" }, { chord: "A", position: 8 }, { chord: "F#m", position: 12 }]
                ],
                times: [2],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "There will come a day",
                    "When this earth will fade away",
                    "And Your holy city takes its place",
                    "Where Your glory reigns",
                    "There's no need for moon and stars",
                    "For the light will be right where You are",
                ],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "B/E", position: 60, number: "5/1" }],
                    [{ chord: "F#m", position: 115 }],
                    [{ chord: "A", position: 80 }, { chord: "B", position: 110 }],
                    [{ chord: "E", position: 0 }, { chord: "B/E", position: 70, number: "5/1" }],
                    [{ chord: "F#m", position: 130 }],
                    [{ chord: "A", position: 100 }, { chord: "B", position: 144 }]
                ],
            },
            {
                type: "PRE-CHORUS:",
                lyrics: [
                    "Tears have dried",
                    "Death has lost its sting",
                    "God enthroned, making new all things",
                ],
                chords: [
                    [{ chord: "F#m", position: 0 }, { chord: "A", position: 40 }],
                    [{ chord: "E", position: 45 }, { chord: "B", position: 74 }],
                    [{ chord: "F#m", position: 0 }, { chord: "A", position: 18 }, { chord: "E", position: 75 },{ chord: "B", position: 100 }]
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "Holy, Holy",
                    "All creation praising God Almighty",
                    "Holy, Holy",
                    "Your dwelling place is with Your people",
                ],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "B", position: 20 },],
                    [{ chord: "F#m", position: 15 }, { chord: "C#m", position: 65 }, { chord: "B", position: 80 }],
                    [{ chord: "E", position: 0 }, { chord: "B", position: 20 }],
                    [{ chord: "A", position: 15 }, { chord: "C#m", position: 85 }, { chord: "B", position: 105 }]
                ],
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "Shining from the sky",
                    "Is the brilliance of Your bride",
                    "Free from every curse and every lie",
                    "No temple will stand",
                    "For the Lord our God and Lamb",
                    "Will be the temple of His people",
                ],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "B/E", position: 65, number: "5/1" }],
                    [{ chord: "F#m", position: 104 }],
                    [{ chord: "A", position: 106 }, { chord: "B", position: 125 }],
                    [{ chord: "E", position: 0 }, { chord: "B/E", position: 65, number: "5/1" }],
                    [{ chord: "F#m", position: 110 }],
                    [{ chord: "A", position: 102 }, { chord: "B", position: 115 }],
                ],
            },
            {
                type: "INSTRUMENTAL:",
                lyrics: [""],
                chords: [
                    [{ chord: "A", position: 0 }, { chord: "E", position: 4 }, { chord: "C#m", position: 8 }, { chord: "B", position: 12 }]
                ],
                times: [2],
                isNotLyric: true,
            },
            {
                type: "BRIDGE:",
                lyrics: [
                    "Behold the Lord",
                    "In all His majesty",
                    "Behold the Lord",
                    "He is the King of Kings",
                ],
                chords: [
                    [{ chord: "A", position: 10 }, { chord: "E", position: 40 }],
                    [{ chord: "C#m", position: 38 }, { chord: "B", position: 45 }],
                    [{ chord: "A", position: 10 }, { chord: "E", position: 42 }],
                    [{ chord: "C#m", position: 38 }, { chord: "B", position: 51 }],
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "Holy, Holy",
                    "All creation praising God Almighty",
                    "Holy, Holy",
                    "Your dwelling place is with Your people",
                    "Your dwelling place is with Your people",
                    "Your dwelling place is we Your people",
                ],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "D", position: 18 }],
                    [{ chord: "F#m", position: 15 }, { chord: "C#m", position: 64 }, { chord: "B", position: 76 }],
                    [{ chord: "E", position: 0 }, { chord: "Bm", position: 20 }],
                    [{ chord: "F#m", position: 22 }, { chord: "C#m", position: 72 }, { chord: "B", position: 94 }],
                    [{ chord: "F#m", position: 22 }, { chord: "A", position: 38 }, { chord: "C#m", position: 66 }, { chord: "B", position: 87 }],
                    [{ chord: "A", position: 22 }, { chord: "C#m", position: 85 }, { chord: "B", position: 105 }]
                ],
            }
        ],
    },
    {
        title: "Everything You Are (Live)",
        artist: "AWAKE84",
        publisher: "VICTORY",
        composer: "Nathan Earl Huang, Daniel Kelvin Monong, & Ron Timothy Marquez",
        album: "Wonderstruck",
        releaseDate: "2023",
        originalKey: "B",
        chordMap: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"],
        bpm: 120,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/2Sxidc7gy-w?si=RLXnCYYnuUrsbhgq' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/72ghj0myktpqOCFAax5ZHE?si=a1f959157f884ecc' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/everything-you-are-live/1681953784?i=1681954100' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1bCuQCWnGTCOpnV-rLlOwv496HhO8Dtb0/view' },
        ],
        sections: [
            {
                type: "INTRO:",
                lyrics: [""],
                chords: [
                    [{ chord: "E", position: 0, left: true, leftColon: true }, { chord: "F#", position: 4, left: true }, { chord: "D#m7", position: 7, left: true }, { chord: "E", position: 11, leftRight: true, rightColon: true }],
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "I was broken with blinded eyes",
                    "I was caught up in the chains of darkness",
                    "Fragile heart, meant to die",
                    "Till You found me and saved my life",
                ],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "F#", position: 48 }],
                    [{ chord: "D#m7", position: 0 }, { chord: "E", position: 73 }],
                    [{ chord: "E", position: 0 }, { chord: "F#", position: 46 }],
                    [{ chord: "D#m7", position: 0 }, { chord: "E", position: 43.5 }],
                ],
            },
            {
                type: "PRE CHORUS:",
                lyrics: [
                    "I'm never lost, 'cause in You, I take refuge",
                    "Wherever I go",
                    "Your love surrounds, in You, I'm found",
                ],
                chords: [
                    [{ chord: "F#", position: 0 }, { chord: "D#m7", position: 37 }, { chord: "E", position: 95 }],
                    [{ chord: "E", position: 22 }, { chord: "F#", position: 42 }],
                    [{ chord: "D#m7", position: 20 }, { chord: "E", position: 70 }]
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "I'll sing Your praises",
                    "I'll scream hallelujah",
                    "Found in Your freedom",
                    "All I need is",
                    "Everything You are",
                ],
                chords: [
                    [{ chord: "C#m7", position: 0 }, { chord: "B", position: 36 }],
                    [{ chord: "F#", position: 0 }, { chord: "D#m7", position: 38 }],
                    [{ chord: "C#m7", position: 0 }, { chord: "B", position: 34 }],
                    [{ chord: "F#", position: 0 }],
                    [{ chord: "D#m7", position: 0 }]
                ],
            },
            {
                type: "INSTRUMENTAL:",
                lyrics: [""],
                chords: [
                    [{ chord: "E", position: 0, left: true, leftColon: true }, { chord: "F#", position: 4, left: true }, { chord: "D#m7", position: 7, left: true }, { chord: "E", position: 11, leftRight: true, rightColon: true }]
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "You are my strength, my cup, my portion",
                    "You, oh Lord, are my heart’s devotion",
                    "As I hold on to Your embrace",
                    "My life has fallen into Your grace",
                ],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "F#", position: 90 }],
                    [{ chord: "D#m7", position: 0 }, { chord: "E", position: 57 }],
                    [{ chord: "F#", position: 57 }],
                    [{ chord: "D#m7", position: 0 }, { chord: "E", position: 51 }],
                ],
            },
            {
                type: "",
                lyrics: ["[PRE-CHORUS]", "[CHORUS]"],
                chords: [[]],
                isNotLyric: true,
            },
            {
                type: "INSTRUMENTAL:",
                lyrics: [""],
                chords: [
                    [{ chord: "E", position: 0, left: true, leftColon: true }, { chord: "F#", position: 4, left: true }, { chord: "D#m7", position: 7, left: true }, { chord: "E", position: 11, leftRight: true, rightColon: true }]
                ],
                isNotLyric: true,
            },
            {
                type: "BRIDGE:",
                lyrics: [
                    "I will not be shaken",
                    "'Cause Jesus You have risen",
                    "In Your presence, there is freedom",
                    "Joy's awakening",
                ],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "F#", position: 40 }],
                    [{ chord: "D#m7", position: 0 }, { chord: "E", position: 67}],
                    [{ chord: "E", position: 0 }, { chord: "F#", position: 85 }],
                    [{ chord: "D#m7", position: 0 }, { chord: "E", position: 5 }],
                ],
            },
            {
                type: "",
                lyrics: ["[REPEAT BRIDGE]"],
                chords: [[]],
                isNotLyric: true,
            },
            {
                type: "INSTRUMENTAL:",
                lyrics: [""],
                chords: [
                    [{ chord: "D#m7", position: 0, left: true, leftColon: true }, { chord: "B", position: 4, left: true }, { chord: "F#", position: 8, left: true }, { chord: "D#m7", position: 11, leftRight: true, rightColon: true }]
                ],
                isNotLyric: true,
            },
            {
                type: "",
                lyrics: ["[CHORUS]"],
                chords: [[]],
                isNotLyric: true,
            },
            {
                type: "CHORUS DROP:",
                lyrics: [
                    "All I need is everything You are",
                ],
                chords: [
                    [{ chord: "F#", position: 48 }, { chord: "E", position: 48, dash: true }, { chord: "D#m7", position: 48, dash: true }, { chord: "C#m7", position: 48, dash: true }, { chord: "E", position: 57 }]
                ],
            }
        ],
    },
    {
        title: "Everlasting",
        artist: "AWAKE84",
        publisher: "VICTORY",
        composer: "Chino Celeste, Andrew James Jiao, & Ian Tumaliuan",
        album: "Living Awake",
        releaseDate: "2024",
        originalKey: "D",
        chordMap: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        bpm: 72,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/DeIq8pWd2rU?si=sQvjTZybSuhZQVfH' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/4W9fda6lW3g85sD4iFALlW?si=9ae7b14b29604b95' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/everlasting/1746738986?i=1746739640' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1-ysKFqRYaFsXC5tGlEq2pJnY8WAJVEK_/view' },
        ],
        sections: [
            {
                type: "INTRO:",
                lyrics: [""],
                chords: [
                    [{ chord: "G", position: 0 }, { chord: "A", position: 4 }, { chord: "Bm", position: 8 }, { chord: "F#m", position: 12 }],
                    [{ chord: "G", position: 0 }, { chord: "A", position: 4 }, { chord: "Bm", position: 8 }, { chord: "D/F#", position: 12, number: '1/3' }]
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "Gracious Father",
                    "I look to You",
                    "Mighty Savior",
                    "I run to You",
                ],
                chords: [
                    [{ chord: "G", position: 0 }, { chord: "A", position: 57 }],
                    [{ chord: "Bm", position: 35 }, { chord: "D/F#", position: 40, number: "1/3" }],
                    [{ chord: "G", position: 0 }, { chord: "A", position: 55 }],
                    [{ chord: "Bm", position: 32 }, { chord: "F#m", position: 40 }],
                ],
            },
            {
                type: "PRE-CHORUS 1:",
                lyrics: [
                    "My Defender",
                    "My fortress and my strength",
                    "My Redeemer",
                    "In You my soul will rest",
                ],
                chords: [
                    [{ chord: "G", position: 0 }, { chord: "A", position: 46 }],
                    [{ chord: "Bm", position: 78 }, { chord: "D/F#", position: 103, number: "1/3" }],
                    [{ chord: "G", position: 0 }, { chord: "A", position: 52 }],
                    [{ chord: "Bm", position: 77 }, { chord: "D/F#", position: 84, number: "1/3" }],
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "For as high as the heavens",
                    "For as high as the heavens are above the earth",
                    "For as high as the heavens",
                    "So great is Your love for us",
                ],
                chords: [
                    [{ chord: "G", position: 74 }, { chord: "A", position: 102 }],
                    [{ chord: "Bm", position: 74 }, { chord: "D/F#", position: 120 }],
                    [{ chord: "G", position: 74 }, { chord: "A", position: 102 }],
                    [{ chord: "Bm", position: 65 }, { chord: "D", position: 86 }],
                ],
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "In the darkness",
                    "You hold my hand",
                    "In my weakness",
                    "You are my strength",
                ],
                chords: [
                    [{ chord: "G", position: 0 }, { chord: "A", position: 57 }],
                    [{ chord: "Bm", position: 53 }, { chord: "F#m", position: 62 }],
                    [{ chord: "G", position: 0 }, { chord: "A", position: 59 }],
                    [{ chord: "Bm", position: 5 }, { chord: "D/F#", position: 19, number: "1/3" }],
                ],
            },
            {
                type: "PRE-CHORUS 2:",
                lyrics: [
                    "You are founder",
                    "Perfector of my faith",
                    "You are with us",
                    "Forever You remain",
                ],
                chords: [
                    [{ chord: "G", position: 0 }, { chord: "A", position: 60 }],
                    [{ chord: "Bm", position: 64 }, { chord: "F#m", position: 72 }],
                    [{ chord: "G", position: 0 }, { chord: "A", position: 56 }],
                    [{ chord: "Bm", position: 62 }, { chord: "D", position: 68 }]
                ],
            },
            {
                type: "[REPEAT CHORUS]",
                lyrics: [""],
                chords: [[]],
                isNotLyric: true,
            },
            {
                type: "BRIDGE:",
                lyrics: [
                    "With times and seasons constantly changing",
                    "Our eyes behold your kingdom coming",
                    "From everlasting to everlasting",
                    "Your presence with us, Your love unfailing",
                ],
                chords: [
                    [{ chord: "G", position: 0 }, { chord: "A", position: 87.5 }, { chord: "Bm", position: 166 }],
                    [{ chord: "F#m", position: 86 }],
                    [{ chord: "G", position: 0 }, { chord: "A", position: 60 }, { chord: "Bm", position: 113 }],
                    [{ chord: "F#m", position: 88 }],
                ],
            },
            {
                type: "BRIDGE 2:",
                lyrics: [
                    "With times and seasons constantly changing",
                    "Our eyes behold your kingdom coming",
                    "From everlasting to everlasting",
                    "Your presence with us, Your love unfailing",
                ],
                chords: [
                    [{ chord: "G", position: 0 }, { chord: "A", position: 87.5 }, { chord: "Bm", position: 166 }],
                    [{ chord: "F#m", position: 86 }],
                    [{ chord: "G", position: 0 }, { chord: "A", position: 60 }, { chord: "Bm", position: 113 }],
                    [{ chord: "D", position: 90 }],
                ],
            },
            {
                type: "INSTRUMENTAL:",
                lyrics: ["",""],
                chords: [
                    [{ chord: "G", position: 0 }, { chord: "A", position: 4 }, { chord: "Bm", position: 8 }, { chord: "D/F#", position: 12 }, { chord: "A/C#m", position: 16, number: "5/7" }, { chord: "D", position: 20, dash: true }],
                    [{ chord: "G", position: 0 }, { chord: "A", position: 4 }, { chord: "Bm", position: 8 }, { chord: "D/F#", position: 12 }],
                ],
                isNotLyric: true,
            }
        ],
    },
    {
        title: "Where Your Heart Is",
        artist: "AWAKE84",
        publisher: "VICTORY",
        composer: "Laean Angeles, Zeid Mitzi Cabales, & RM Noriega",
        album: "Living Awake",
        releaseDate: "2024",
        originalKey: "D",
        chordMap: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        bpm: 65,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/uw2LbVeMqR4?si=orcB2m9TGQUjHg2S' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/4jmWTsHTROxRomQoeTmEDv?si=ebfa971f48544d54' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/where-your-heart-is/1746738986?i=1746739653' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1_68l82_8oYjK8AKacl1K8EsJEM5FOpo3/view' },
        ],
        sections: [
            {
                type: "INTRO:",
                lyrics: ["", ""],
                chords: [
                    [{ chord: "D", position: 0 }, { chord: "G", position: 4 }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 4 }, { chord: "G", position: 8 }],
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "You make simple things",
                    "Better than wildest dreams",
                    "Always more than I’ll ever ask or think",
                    "Even when the lies try",
                    "To take hold of my mind",
                    "Lord, Your truth is the one that reminds me",
                    "that",
                ],
                chords: [
                    [{ chord: "D", position: 0 }],
                    [{ chord: "G", position: 0 }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 17 }, { chord: "G", position: 60 }],
                    [{ chord: "D", position: 0 }],
                    [{ chord: "G", position: 0 }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 27 }, { chord: "G", position: 65 }],
                ],
            },
            {
                type: "PRE-CHORUS:",
                lyrics: [
                    "You, You’re in control",
                    "So in You, I’ll rest my soul",
                ],
                chords: [
                    [{ chord: "Em", position: 0 }, { chord: "F#m", position: 6 }, { chord: "G", position: 40 }],
                    [{ chord: "Em", position: 23 }, { chord: "F#m", position: 29 }, { chord: "G", position: 54 }],
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "All I want Lord is to hear from You again",
                    "All I need Lord is to be led by Your hand",
                    "Take me to wherever You want me to be",
                    "No matter if it’s to the deepest sea",
                    "I just wanna be where Your heart is",
                ],
                chords: [
                    [{ chord: "D", position: 17 }, { chord: "G", position: 67 }],
                    [{ chord: "D", position: 17 }, { chord: "G", position: 69 }],
                    [{ chord: "Em", position: 30 }],
                    [{ chord: "F#m", position: 16 }],
                    [{ chord: "Em", position: 0 }, { chord: "F#m", position: 42 }, { chord: "G", position: 70 }],
                ],
            },
            {
                type: "INSTRUMENTAL:",
                lyrics: ["", ""],
                chords: [
                    [{ chord: "D", position: 0 }, { chord: "G", position: 4 }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 4 }, { chord: "G", position: 8 }],
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "Every good thing, every good thing comes",
                    "from You",
                    "So what can I do but let my heart sing to You",
                    "I won’t be shaken",
                    "My faith is strengthened",
                    "Jesus, You’re enough",
                    "Jesus, You’re enough",
                ],
                chords: [
                    [{ chord: "D", position: 0 }],
                    [],
                    [{ chord: "A", position: 0 }],
                    [{ chord: "Bm", position: 0 }],
                    [{ chord: "F#m", position: 0 }],
                    [{ chord: "G", position: 0 }],
                    [{ chord: "Bm", position: 0 }, { chord: "F#m", position: 11 }, { chord: "G", position: 30 }],
                ],
            },
        ],
    },
    {
        title: "Best Friend",
        artist: "AWAKE84",
        publisher: "VICTORY",
        composer: "Aubrey Alamani & Lee Simon Brown",
        album: "Living Awake",
        releaseDate: "2024",
        originalKey: "C",
        chordMap: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        bpm: 71,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/N6S2sNp85ZA?si=RMIBDSAomoE_h4KJ' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/7elnl9RJME8faLaChg3XIb?si=943af9a148c54df9' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/best-friend/1746738986?i=1746739658' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1r3Zhy1c4SiZS1v65C6O_cB_t318ZHdr3/view' },
        ],
        sections: [
            {
                type: "INTRO:",
                lyrics: ["", ""],
                chords: [
                    [{ chord: "F", position: 0 }, { chord: "Am", position: 4 }, { chord: "G", position: 8 }],
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "Who does my heart call upon",
                    "When the rain starts to fall",
                    "Who is my more than enough",
                    "In the valley of dark?",
                    "Only You",
                    "Only You",
                ],
                chords: [
                    [{ chord: "C", position: 0 }, { chord: "CMaj7", position: 94, number: "1Maj7" }],
                    [{ chord: "F", position: 94 }],
                    [{ chord: "C", position: 0 }, { chord: "CMaj7", position: 86, number: "1Maj7" }],
                    [{ chord: "F", position: 61 }],
                    [{ chord: "C", position: 0 }, { chord: "C/Em", position: 16, number: "1/3" }],
                    [{ chord: "F", position: 0 }, { chord: "G", position: 16 }],
                ],
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "Whose love and faithfulness",
                    "Keep me for all of my days?",
                    "Who will remain",
                    "And will never forsake me today?",
                    "Only You",
                    "Only You",
                ],
                chords: [
                    [{ chord: "C", position: 0 }],
                    [{ chord: "CMaj7", position: 0, number: "1Maj7" }, { chord: "F", position: 60 }],
                    [{ chord: "C", position: 0 }],
                    [{ chord: "CMaj7", position: 37, number: "1Maj7" }, { chord: "F", position: 84 }],
                    [{ chord: "C", position: 0 }, { chord: "C/Em", position: 16, number: "1/3" }],
                    [{ chord: "F", position: 0 }, { chord: "G", position: 16 }],
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "The friend who stays close by my side",
                    "The friend who will lay down His life",
                    "There will never be anyone like",
                    "My best friend",
                    "My Jesus",
                ],
                chords: [
                    [{ chord: "F", position: 17 }, { chord: "C/Em", position: 120, number: "1/3" }],
                    [{ chord: "F", position: 17 }, { chord: "Am", position: 116 }, { chord: "G", position: 116, dash: true }],
                    [{ chord: "Dm", position: 41 }, { chord: "C/Em", position: 86, number: "1/3" }],
                    [{ chord: "F", position: 16 }],
                    [{ chord: "G", position: 0 }],
                ],
            },
            {
                type: "VERSE 3:",
                lyrics: [
                    "Whose hand will take all my shame",
                    "And will call me by name?",
                    "Who fully knows who I am",
                    "Yet still loves me the same?",
                    "Only You",
                    "Only You",
                    "Only You",
                    "Only You",
                ],
                chords: [
                    [{ chord: "C", position: 0 }, { chord: "CMaj7", position: 109, number: "1Maj7" }],
                    [{ chord: "F", position: 76 }],
                    [{ chord: "C", position: 0 }, { chord: "CMaj7", position: 87, number: "1Maj7" }],
                    [{ chord: "F", position: 84 }],
                    [{ chord: "Dm", position: 0 }, { chord: "C/Em", position: 6, number: "1/3" }],
                    [{ chord: "F", position: 0 }, { chord: "C/Em", position: 16, number: "1/3" }],
                    [{ chord: "Dm", position: 0 }, { chord: "C/Em", position: 6, number: "1/3" }],
                    [{ chord: "F", position: 0 }, { chord: "C/Em", position: 16, number: "1/3" }],
                ],
            },
            {
                type: "INSTRUMENTAL:",
                lyrics: ["", ""],
                chords: [
                    [{ chord: "F", position: 0 }, { chord: "Am", position: 4 }, { chord: "G", position: 8 }],
                ],
                isNotLyric: true,
            },
            {
                type: "BRIDGE:",
                lyrics: [
                    "You always surround me", 
                    "With goodness and mercy"
                ],
                chords: [
                    [{ chord: "F", position: 0 }],
                    [{ chord: "Am", position: 23 }, { chord: "G", position: 67 }, { chord: "F", position: 87 }, { chord: "Am", position: 91 }, { chord: "G", position: 95 }],
                ],
                isNotLyric: true,
            },
        ],
    },
    {
        title: "Holy, Holy, Holy",
        artist: "AWAKE84",
        publisher: "VICTORY",
        composer: "Laean Angeles, Sofia Paderes, Elle Cabiling Tumaliuan, & Ian Tumaliuan",
        album: "Living Awake",
        releaseDate: "2024",
        originalKey: "Ab",
        chordMap: ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"],
        bpm: 68,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/eTr4rJRLeAY?si=sSMkJJxM-Rhhq0a9' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/2BfabJI0M9UkwUq6bBtoTG?si=0f34354c0f414de6' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/holy-holy-holy/1746738986?i=1746739666' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1HJLwPvp2K0XYuUIsyyWmw6lK1gPZY2W_/view' },
        ],
        sections: [
            {
                type: "INTRO:",
                lyrics: ["", ""],
                chords: [
                    [{ chord: "Fm", position: 0 }, { chord: "Cm", position: 4 }, { chord: "Db", position: 8 }],
                ],
                times: [4],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "Holy, holy, holy!   Lord God Almighty!",
                    "Early in the morning our song shall rise to",
                    "Thee",
                    "Holy, holy, holy!   Merciful and mighty!",
                    "God in three Persons, blessed Trinity!",
                ],
                chords: [
                    [{ chord: "Fm", position: 0 }, { chord: "Eb/Gm", position: 5, number: "5/7" }, { chord: "Ab", position: 11 }, { chord: "Bbm", position: 18.5 }, { chord: "Cm", position: 43 }],
                    [{ chord: "Fm", position: 0 }, { chord: "Eb/Gm", position: 5, number: "5/7" }, { chord: "Ab", position: 11 }, { chord: "Eb", position: 48 }],
                    [],
                    [{ chord: "Fm", position: 0 }, { chord: "Eb/Gm", position: 5, number: "5/7" }, { chord: "Ab", position: 11 }, { chord: "Bbm", position: 19 }, { chord: "Cm", position: 46 }],
                    [{ chord: "Fm", position: 0 }, { chord: "Eb/Gm", position: 5, number: "5/7" }, { chord: "Ab", position: 11 }, { chord: "Bbm", position: 37 }],
                ],
            },
            {
                type: "INTERLUDE:",
                lyrics: ["", ""],
                chords: [
                    [{ chord: "Fm", position: 0 }, { chord: "Cm", position: 4 }, { chord: "Db", position: 8 }],
                ],
                times: [2],
                isNotLyric: true,
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "Holy, holy, holy!   Though the darkness hide",
                    "Thee",
                    "Though the eye of sinful man, Thy glory may",
                    "not see",
                    "Only Thou art holy, there is none beside Thee",
                    "Perfect   in   pow'r, in love, and purity",
                ],
                chords: [
                    [{ chord: "Fm", position: 0 }, { chord: "Eb/Gm", position: 5, number: "5/7" }, { chord: "Ab", position: 11 }, { chord: "Bbm", position: 18.5 }, { chord: "Cm", position: 81 }],
                    [],
                    [{ chord: "Fm", position: 0 }, { chord: "Eb/Gm", position: 30, number: "5/7" }, { chord: "Ab", position: 35 }, { chord: "Eb", position: 82 }],
                    [],
                    [{ chord: "Fm", position: 0 }, { chord: "Eb/Gm", position: 8, number: "5/7" }, { chord: "Ab", position: 17.2 }, { chord: "Bbm", position: 27 }, { chord: "Cm", position: 67 }],
                    [{ chord: "Fm", position: 0 }, { chord: "Eb/Gm", position: 8, number: "5/7" }, { chord: "Ab", position: 17 }, { chord: "Bbm", position: 34 }],
                ],
            },
            {
                type: "INSTRUMENTAL:",
                lyrics: ["", ""],
                chords: [
                    [{ chord: "Db", position: 0 }, { chord: "Fm", position: 4 }],
                ],
                times: [2],
                isNotLyric: true,
            },
            {
                type: "BRIDGE 1:",
                lyrics: [
                    "Woe to me",
                    "Was lost and unclean",
                    "My eyes have seen",
                    "The only holy King",   
                    "You reached for me",
                    "And paid the greatest price",
                    "My sin atoned",
                    "Now I am justified",
                ],
                chords: [
                    [{ chord: "Db", position: 0 }],
                    [],
                    [{ chord: "Fm", position: 16 }],
                    [],
                    [{ chord: "Db", position: 16 }],
                    [],
                    [{ chord: "Fm", position: 16 }],
                ],
            },
            {
                type: "BRIDGE 2:",
                lyrics: [
                    "From Your throne",
                    "Your voice it calls aloud",
                    '"Who will go?',
                    'Whom shall I send now?”',   
                    "Lord, here I am",
                    "Use me as You will",
                    "For all my days",
                    "This anthem I will raise",
                ],
                chords: [
                    [{ chord: "Db", position: 0 }],
                    [],
                    [{ chord: "Fm", position: 0 }],
                    [],
                    [{ chord: "Db", position: 23 }],
                    [],
                    [{ chord: "Fm", position: 17 }],
                ],
            },
            {
                type: "TAG:",
                lyrics: [
                    "Holy,   holy,   holy!",
                ],
                chords: [
                    [{ chord: "Db", position: 0 }, { chord: "Bbm", position: 17, number: "5/7" }, { chord: "Fm", position: 24 }],
                ],
            },
            {
                type: "VERSE 3:",
                lyrics: [
                    "Holy,   holy,   holy!   Lord God Almighty!",
                    "All Thy works shall praise Thy name, in earth",
                    "and sky and sea",
                    "Holy,   holy,   holy!   Merciful and mighty!",
                    "God in three Persons, blessed Trinity!",
                    "Blessed Trinity!",
                ],
                chords: [
                    [{ chord: "Fm", position: 0 }, { chord: "Eb/Gm", position: 10, number: "5/7" }, { chord: "Ab", position: 16 }, { chord: "Bbm", position: 29 }, { chord: "Cm", position: 55 }],
                    [{ chord: "Fm", position: 0 }, { chord: "Eb/Gm", position: 16, number: "5/7" }, { chord: "Ab", position: 37 }, { chord: "Eb", position: 100 }],
                    [],
                    [{ chord: "Fm", position: 0 }, { chord: "Eb/Gm", position: 8, number: "5/7" }, { chord: "Ab", position: 17.2 }, { chord: "Bbm", position: 30 }, { chord: "Cm", position: 59 }],
                    [{ chord: "Fm", position: 0 }, { chord: "Eb/Gm", position: 8, number: "5/7" }, { chord: "Ab", position: 18 }, { chord: "Bbm", position: 35 }, { chord: "Fm", position: 58 }, { chord: "Cm", position: 58, dash: true }, { chord: "Db", position: 58, dash: true }],
                    [{ chord: "Bbm", position: 0 }, { chord: "Db", position: 27 }],
                ],
            },
        ],
    },
    {
        title: "As Above, So Here On Earth",
        artist: "AWAKE84",
        publisher: "VICTORY",
        composer: "Joseph Paul Cruz, Leilani Estrella, Yanie Ollica, & Josiah Tumaliuan",
        album: "Living Awake",
        releaseDate: "2024",
        originalKey: "Ab",
        chordMap: ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        bpm: 99,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/Pd9Ku0mKQQ4?si=-eqa5fpSriqDYQK1' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/73aYAohSN9vCRxpYUdD1k0?si=ce9a4916a56a4211' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/as-above-so-here-on-earth/1746738986?i=1746739912' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1_jtx-yHi_LF2-Qfnaai8ck5zUqVAbTls/view' },
        ],
        sections: [
            {
                type: "INTRO:",
                lyrics: ["", ""],
                chords: [
                    [{ chord: "Db", position: 0 }, { chord: "Eb", position: 4 }, { chord: "Cm", position: 8 }, { chord: "Db", position: 12 }],
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "Always longed to see Your face",
                    "My spirit cries Your holy praise",
                    "God Your glory will remain",
                    "Your throne will never be replaced",
                ],
                chords: [
                    [{ chord: "Db", position: 0 }, { chord: "Eb", position: 102 }],
                    [{ chord: "Cm", position: 20 }, { chord: "Db", position: 88 }],
                    [{ chord: "Db", position: 0 }, { chord: "Eb", position: 78 }],
                    [{ chord: "Cm", position: 20 }, { chord: "Db", position: 98 }],
                ],
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "My awe can not be contained",
                    "Your presence sets my heart ablaze",
                    "Beauty shining from Your face",
                    "Dazzling light of saving grace",
                ],
                chords: [
                    [{ chord: "Db", position: 0 }, { chord: "Eb", position: 78 }],
                    [{ chord: "Cm", position: 22 }, { chord: "Db", position: 102 }],
                    [{ chord: "Db", position: 0 }, { chord: "Eb", position: 92 }],
                    [{ chord: "Cm", position: 0 }, { chord: "Db", position: 84 }],
                ],
            },
            {
                type: "PRE-CHORUS:",
                lyrics: [
                    "You dealt with the curse and shackles of",
                    "fear",
                    "The weight of the past has now disappeared",
                    "Here in Your presence we have Your peace",
                    "Your kingdom on earth we’re ready to see",
                ],
                chords: [
                    [{ chord: "Db", position: 18 }],
                    [],
                    [{ chord: "Eb", position: 17.5 }],
                    [{ chord: "Cm", position: 0 }],
                    [{ chord: "Db", position: 20.5 }],
                ],
            },
            {
                type: "",
                lyrics: ["[REPEAT VERSE 2]", "[REPEAT PRE-CHORUS]", "[REPEAT CHORUS]"],
                chords: [[]],
                isNotLyric: true,
            },
            {
                type: "BRIDGE:",
                lyrics: [
                    "Hearts are turning into Yours",
                    "Joy of salvation You restore",
                    "Oh, Let your kingdom come",
                    "Jesus, Let Your will be done",
                ],
                chords: [
                    [{ chord: "Db", position: 0 }, { chord: "Eb", position: 59 }],
                    [{ chord: "Cm", position: 18 }, { chord: "Fm", position: 76 }],
                    [{ chord: "Db", position: 0 }, { chord: "Eb", position: 7 }],
                    [{ chord: "Cm", position: 0 }, { chord: "Fm", position: 12 }],
                ],
            },
            {
                type: "",
                lyrics: ["[REPEAT CHORUS]"],
                chords: [[]],
                isNotLyric: true,
            },
        ],
    },
    {
        title: "W.O.W.",
        artist: "AWAKE84",
        publisher: "VICTORY",
        composer: "Laean Angeles, Simon Calma, RM Noriega, Elle Cabiling Tumaliuan, Ian Tumaliuan, & Josiah Tumaliuan",
        album: "Living Awake",
        releaseDate: "2024",
        originalKey: "A",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        bpm: 136,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/jAIfevrvQsE?si=kGaFU3vqFQ9tPFWQ' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/7fPJl3EfTuDJOliQa8i4qb?si=4a6905b5a4974dca' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/w-o-w/1746738986?i=1746739921' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1O3_okLiRQsze9sWoSoMZyI6uzZVpntuC/view' },
        ],
        sections: [
            {
                type: "INTRO:",
                lyrics: ["", ""],
                chords: [
                    [{ chord: "Bm7", position: 0 }, { chord: "C#m7", position: 4 }],
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "Look at all the birds of the air, do they worry?",
                    "How about the flowers of the fields, don’t they",
                    "grow?",
                    "‘Cause every day is passing by at speed of light",
                    "Lord, I’m getting tired of just standing by",
                    "Then You come out of nowhere, by surprise",
                    "Performing miracles before my eyes",
                ],
                chords: [
                    [{ chord: "Bm7", position: 58 }, { chord: "C#m7", position: 150 }],
                    [{ chord: "Bm7", position: 62 }],
                    [{ chord: "C#m7", position: 25 }],
                    [{ chord: "Bm7", position: 80 }],
                    [{ chord: "C#m7", position: 69 }],
                    [{ chord: "Bm7", position: 92 }],
                    [{ chord: "C#m7", position: 95 }],
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "WOW",
                    "I’m in awe of Your ways and Your wonders",
                    "Like when You walked",
                    "When You walked through the storm on the",
                    "water",
                    "You’re the cloud by day, in the night my light",
                    "Robbed the grave for my eternity",
                    "I can’t help but say",
                    "WOW",
                    "I’m in awe of Your ways and Your wonders",
                ],
                chords: [
                    [{ chord: "Bm7", position: 0 }],
                    [{ chord: "C#m7", position: 135 }],
                    [{ chord: "Bm7", position: 53 }],
                    [],
                    [{ chord: "C#m7", position: 0 }],
                    [{ chord: "Bm7", position: 43 }],
                    [{ chord: "C#m7", position: 50 }],
                    [],
                    [{ chord: "Bm7", position: 0 }],
                    [{ chord: "C#m7", position: 136 }],
                ],
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "I’ve been wandering on my own",
                    "Everything I've seen all day long, same",
                    "phase, same places",
                    "But You've been showing new ways yeah",
                    "Over and over You run after me",
                    "Working Your wonders now it’s clear to me",
                    "That I've been raised from my lows",
                    "Blown away by what You’ve shown",
                    "So I'll say"
                ],                
                chords: [
                    [{ chord: "Bm7", position: 0 }, { chord: "C#m7", position: 92 }],
                    [{ chord: "Bm7", position: 110 }],
                    [],
                    [{ chord: "C#m7", position: 67 }],
                    [{ chord: "Bm7", position: 38 }],
                    [{ chord: "C#m7", position: 58 }],
                    [{ chord: "Bm7", position: 56 }],
                    [{ chord: "C#m7", position: 26 }],
                ],
            },
            {
                type: "",
                lyrics: ["[REPEAT CHORUS]"],
                chords: [[]],
                isNotLyric: true,
            },
            {
                type: "BRIDGE:",
                lyrics: [
                    "When in high and low I know",
                    "You're everywhere I go",
                    "I'm confident, it’s evident",
                    "Your love for me it never ends",
                    "You’re always by my side",
                    "I'm always on Your mind",
                    "You’ve shown me time and time again",
                    "Your love for me, it never ends",
                ],                               
                chords: [
                    [{ chord: "Bm7", position: 37 }],
                    [],
                    [{ chord: "C#m7", position: 15 }],
                    [],
                    [{ chord: "Bm7", position: 27 }],
                    [],
                    [{ chord: "C#m7", position: 32 }],
                ],
            },
            {
                type: "",
                lyrics: [
                    "(How deep, how wide, how high)",
                    "Your love for me, it never ends",
                    "(How deep, how wide, how high)",
                    "Your love for me, it never ends",
                    "(How deep, how wide, how high)",
                    "Deep, wide, high"
                ],                               
                chords: [
                    [{ chord: "Bm7", position: 0 }],
                    [],
                    [{ chord: "C#m7", position: 0 }],
                    [],
                    [{ chord: "Bm7", position: 0 }],
                    [],
                    [{ chord: "C#m7", position: 0 }],
                ],
            },
            {
                type: "",
                lyrics: ["[REPEAT CHORUS]"],
                chords: [[]],
                isNotLyric: true,
            },
            {
                type: "OUTRO:",
                lyrics: [
                    "Every day You show me",
                    "Wonders on wonders",
                    "Wonders on wonders",
                    "Wonders on wonders"
                ],                
                chords: [
                    [{ chord: "Bm7", position: 0 }],
                    [],
                    [{ chord: "C#m7", position: 0 }]
                ],
            },
        ],
    },
    {
        title: "Draw near to the cross",
        artist: "AWAKE84",
        publisher: "VICTORY",
        composer: "Noel Biroan Jr., Chrysse Pili, Ivan Emperador, & Josh Tumaliuan",
        album: "",
        releaseDate: "2025",
        originalKey: "A",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        timeSignature: "4/4",
        sections: [
            {
                type: "VERSE:",
                lyrics: [
                    "      Your cross is our way to the Father's arms",
                    "      We once were dead but You gave new life",
                    "      Holy, Chosen, called to bear Your light",
                    "      Let the world know God be glorified",
                ],
                chords: [
                    [{ chord: "A/C#", position: 0, number: "1/3" }, { chord: "D", position: 25 }, { chord: "F#m", position: 51 }, { chord: "E", position: 60 }],
                    [{ chord: "A/C#", position: 0, number: "1/3" }, { chord: "D", position: 22 }, { chord: "F#m", position: 60 }, { chord: "E", position: 108 }],
                    [{ chord: "A/C#", position: 0, number: "1/3" }, { chord: "D", position: 26 }, { chord: "F#m", position: 55 }, { chord: "E", position: 88 }],
                    [{ chord: "A/C#", position: 0, number: "1/3" }, { chord: "D", position: 33 }, { chord: "F#m", position: 77 }, { chord: "E", position: 105 }]
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "We draw near to the cross",
                    "Where your blood was shed for us",
                    "And all things we count as lost",
                    "In the light of my Sa - vior...     Woohh",
                ],
                chords: [
                    [{ chord: "D", position: 40 }, { chord: "E", position: 82 }],
                    [{ chord: "A", position: 50 }, { chord: "E/G#", position: 87, number: "5/7" }, { chord: "F#m", position: 114 }, { chord: "A/C#", position: 120, number: "1/3" }],
                    [{ chord: "D", position: 35 }, { chord: "E", position: 103 }],
                    [{ chord: "A", position: 26 }, { chord: "E/G#", position: 65, number: "5/7" }, { chord: "F#m", position: 74 }, { chord: "A/C#", position: 90, number: "1/3" }, { chord: "D", position: 100 }],
                ],
            },
            {
                type: "REPEAT VERSE",
                lyrics: [""],
                chords: [[]],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "We draw near to the cross",
                    "Where your blood was shed for us",
                    "And all things we count as lost",
                    "In the light of my Sa - vior, Woohh",
                    "We draw near to the cross",
                    "Where your blood was shed for us",
                    "And all things we count as lost",
                    "In the light of my Sa - vior, Woooohh",
                ],
                chords: [
                    [{ chord: "D", position: 40 }, { chord: "E", position: 82 }],
                    [{ chord: "A", position: 50 }, { chord: "E/G#", position: 87, number: "5/7" }, { chord: "F#m", position: 114 }, { chord: "A/C#", position: 120, number: "1/3" }],
                    [{ chord: "D", position: 35 }, { chord: "E", position: 103 }],
                    [{ chord: "A", position: 26 }, { chord: "E/G#", position: 65, number: "5/7" }, { chord: "F#m", position: 74 }, { chord: "A/C#", position: 90, number: "1/3" }],
                    [{ chord: "D", position: 40 }, { chord: "E", position: 82 }],
                    [{ chord: "A", position: 50 }, { chord: "E/G#", position: 87, number: "5/7" }, { chord: "F#m", position: 114 }, { chord: "A/C#", position: 120, number: "1/3" }],
                    [{ chord: "D", position: 35 }, { chord: "E", position: 103 }],
                    [{ chord: "A", position: 26 }, { chord: "E/G#", position: 65, number: "5/7" }, { chord: "F#m", position: 74 }, { chord: "A/C#", position: 90, number: "1/3" }, { chord: "D", position: 100 }, { chord: "E", position: 110 }],
                ],
            },
            {
                type: "BRIDGE: (4x)",
                lyrics: [
                    "If the Son sets us free",
                    "We are free indeed",
                    "We are free indeed",
                ],
                chords: [
                    [{ chord: "D", position: 23 }, { chord: "F#m", position: 64 }],
                    [{ chord: "A", position: 50 }],
                    [{ chord: "E", position: 50 }],
                    [{ chord: "D", position: 23 }, { chord: "F#m", position: 64 }],
                    [{ chord: "A", position: 50 }],
                    [{ chord: "E", position: 50 }],
                    [{ chord: "D", position: 23 }, { chord: "F#m", position: 64 }],
                    [{ chord: "A", position: 50 }],
                    [{ chord: "E", position: 50 }],
                    [{ chord: "D", position: 23 }, { chord: "F#m", position: 64 }],
                    [{ chord: "A", position: 50 }],
                    [{ chord: "E", position: 50 }],
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "We draw near to the cross",
                    "Where your blood was shed for us",
                    "And all things we count as lost",
                    "In the light of my Sa - vior, Woohh",
                ],
                chords: [
                    [{ chord: "D", position: 40 }, { chord: "E", position: 82 }],
                    [{ chord: "A", position: 50 }, { chord: "E/G#", position: 87, number: "5/7" }, { chord: "F#m", position: 114 }, { chord: "A/C#", position: 120, number: "1/3" }],
                    [{ chord: "D", position: 35 }, { chord: "E", position: 103 }],
                    [{ chord: "A", position: 26 }, { chord: "E/G#", position: 65, number: "5/7" }, { chord: "F#m", position: 74 }, { chord: "A/C#", position: 90, number: "1/3" }, { chord: "D", position: 100 }],
                ],
            },
        ],
    },
    {
        title: "I Have Decided (Hymn)",
        artist: "AWAKE84",
        album: "Move in Miracles",
        publisher: "VICTORY",
        composer: "Simon Marak",
        releaseDate: "2023",
        originalKey: "F",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        timeSignature: "4/4",
        link: [
            { platform: 'youtube', url: 'https://youtu.be/KYQXkDjtzsU?si=9VOyZbxZi4f6JYIM' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/2CKAPp91zotBZPPidbx5Rx?si=f4f80c180b1b4f58' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/i-have-decided-hymn-live-from-moa-arena/1706762891?i=1706763218' },
        ],
        sections: [
            {
                type: "VERSE 1: (2x)",
                lyrics: [
                    "I have decided to follow Jesus",
                    "I have decided to follow Jesus",
                    "I have decided to follow Jesus",
                    "No turning back, no turning back.",
                ],
                chords: [
                    [{ chord: "F", position: 37 }],
                    [{ chord: "Bb", position: 36 }, { chord: "F/A", position: 88, number: "1/3" }],
                    [{ chord: "F", position: 37 }, { chord: "Dm7", position: 94 }],
                    [{ chord: "Gm7", position: 47 }, { chord: "C", position: 63 }, { chord: "F", position: 89 }],
                ],
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "Though none go with me, I still will follow",
                    "Though none go with me, I still will follow",
                    "Though none go with me, I still will follow",
                    "No turning back, no turning back.",
                ],
                chords: [
                    [{ chord: "F", position: 71 }],
                    [{ chord: "Bb", position: 70 }, { chord: "F/A", position: 132, number: "1/3" }],
                    [{ chord: "F", position: 71 }, { chord: "Dm7", position: 138 }],
                    [{ chord: "Gm7", position: 47 }, { chord: "C", position: 63 }, { chord: "F", position: 89 }],
                ],
            },
            {
                type: "VERSE 3:",
                lyrics: [
                    "My cross I'll carry till I see Jesus",
                    "My cross I'll carry till I see Jesus",
                    "My cross I'll carry till I see Jesus",
                    "No turning back, no turning back.",
                ],
                chords: [
                    [{ chord: "F", position: 51 }],
                    [{ chord: "Bb", position: 50 }, { chord: "F/A", position: 95, number: "1/3" }],
                    [{ chord: "F", position: 51 }, { chord: "Dm7", position: 100 }],
                    [{ chord: "Gm7", position: 47 }, { chord: "C", position: 63 }, { chord: "F", position: 89 }],
                ],
            },
            {
                type: "VERSE 4:",
                lyrics: [
                    "The world behind me, the cross before me",
                    "The world behind me, the cross before me",
                    "The world behind me, the cross before me",
                    "No turning back, no turning back.",
                ],
                chords: [
                    [{ chord: "F", position: 52 }],
                    [{ chord: "Bb", position: 51 }, { chord: "F/A", position: 126, number: "1/3" }],
                    [{ chord: "F", position: 52 }, { chord: "Dm7", position: 132 }],
                    [{ chord: "Gm7", position: 47 }, { chord: "C", position: 63 }, { chord: "F", position: 89 }],
                ],
            },
        ],
    },
    //VICTORY WORSHIP
    {
        title: "Beautiful Love",
        artist: "Victory Worship",
        publisher: "VICTORY",
        composer: "Franklin Asuncion, Lee Simon Brown, Moira Hernandez, James Murrell & Kensho Yo",
        album: "Beautiful Love",
        releaseDate: "2017",
        originalKey: "B",
        chordMap: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        bpm: 68,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/4r2U8RWY1ck?si=3Qat8UHJEvaVzX_8' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/5kQgNSiqglNC0c5lc4K073?si=8dd10827ff3b4bd5' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/beautiful-love-feat-joe-ramos/1291497116?i=1291497122' },
            { platform: 'pdf', url: 'https://www.everynationmusic.org/wp-content/uploads/2022/03/beautiful-love-for-your-purpose-victory-worship.pdf' },
        ],
        sections: [
            {
                type: "INTRO:",
                lyrics: [""],
                chords: [
                    [{ chord: "E", position: 0, left: true, leftColon: true }, { chord: "F#", position: 4, right: true }, { chord: "B", position: 8, right: true, forwardSlash: 3, rightColon: true }]
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 1",
                lyrics: [
                    "They curse and laugh, You do not fight",
                    "A thousand men yell 'crucify'",
                    "As crimson stains, I fill Your mind",
                    "You look upon me with delight",
                    "From throne to cross You came to die",
                    "A crown for thorns to bring new life",
                    "With every nail I fill Your mind",
                    "You look upon me with delight",
                ],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "F#", position: 59 }, { chord: "B", position: 118 }],
                    [{ chord: "E", position: 0 }, { chord: "F#", position: 41 }, { chord: "B", position: 77 }],
                    [{ chord: "E", position: 0 }, { chord: "F#", position: 41 }, { chord: "G#m", position: 93 }],
                    [{ chord: "E", position: 44 }, { chord: "F#", position: 74 }, { chord: "B", position: 91 }],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                type: "CHORUS",
                lyrics: [
                    "Oh what love",
                    "How can it be",
                    "From that cross You looked at me",
                    "Oh what love",
                    "Poured out for me",
                    "What a beautiful love",
                ],
                chords: [
                    [{ chord: "E", position: 39 }],
                    [{ chord: "F#", position: 22 }, { chord: "B", position: 45 }],
                    [{ chord: "E", position: 49 }, { chord: "F#", position: 78 }, { chord: "B", position: 110 }],
                    [{ chord: "E", position: 40 }],
                    [{ chord: "F#", position: 29 }, { chord: "G#m", position: 52 }],
                    [{ chord: "E", position: 0 }, { chord: "F#", position: 24 }, { chord: "B", position: 55 }],
                ],
            },
            {
                type: "VERSE 2",
                lyrics: [
                    "Your death gives way to glorious light",
                    "And tears away the chains that bind",
                    "Now sons and daughters in Your eyes",
                    "You look upon us with delight",
                ],
                chords: [
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                type: "BRIDGE",
                lyrics: [
                    "(Love) so glorious",
                    "Came down unashamed",
                    "You called me Yours",
                    "Caught up in Your grace, You're all I need",
                    "There's nothing more beautiful than Your love",
                    "So glorious",
                    "Came down unashamed",
                    "You called me Yours",
                    "Caught up in Your grace, You're all I need",
                    "There's nothing more beautiful than Your love",
                ],
                chords: [
                    [{ chord: "B/D#", position: 0, number: "1/3" }, { chord: "E", position: 35 }, { chord: "F#", position: 40 }],
                    [{ chord: "B/D#", position: 65, number: "1/3" }],
                    [{ chord: "E", position: 45 }, { chord: "F#", position: 60 }],
                    [{ chord: "B/D#", position: 75, number: "1/3" }, { chord: "E", position: 117 }, { chord: "F#", position: 125 }],
                    [{ chord: "C#m", position: 88 }, { chord: "F#", position: 95 }],
                    [{ chord: "B", position: 0 }, { chord: "F#", position: 60 }],
                    [{ chord: "B/D#", position: 64, number: "1/3" }],
                    [{ chord: "E", position: 43 }, { chord: "F#", position: 80 }],
                    [{ chord: "B/D#", position: 0, number: "1/3" }, { chord: "E", position: 40 }, { chord: "F#", position: 80 }],
                    [{ chord: "C#m", position: 0 }, { chord: "F#", position: 40 }],
                ],
            },
            {
                type: "BRIDGE TAG:",
                lyrics: [
                    "(More beautiful) than Your love",
                ],
                chords: [
                    [{ chord: "C#m", position: 0 }, { chord: "F#", position: 40 }, { chord: "B", position: 80 }],
                ],
            },
            {
                type: "CHORUS",
                lyrics: [""],
                chords: [[]],
                isNotLyric: true,
            },
            {
                type: "TAG:",
                lyrics: [
                    "What a beautiful love",
                    "What a beautiful love",
                ],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "F#", position: 40 }, { chord: "G#m", position: 80 }],
                    [{ chord: "E", position: 0 }, { chord: "F#", position: 40 }],
                ],
            },
        ],
    },
    {
        title: "A Thousand Hallelujahs",
        artist: "Victory Worship",
        publisher: "VICTORY",
        composer: "Jacqueline de Villiers, Albertus Mostert, Alesia Post, & Brian O'Neill",
        album: "Tribe",
        releaseDate: "2019",
        originalKey: "D",
        chordMap: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        bpm: 71,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/JiOsxqP-M1A?si=4wsIY9UGSM6qhIUP' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/033eMXabq63pwdFsDtBjzE?si=e93fc9fd04a6406d' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/a-thousand-hallelujahs/1450243207?i=1450243491' },
            { platform: 'pdf', url: 'https://drive.google.com/file/d/1hJhCe7B_bQdaO_hqImYbPqkRp7xkTYHm/view' },
        ],
        sections: [
            {
                type: "INTRO:",
                lyrics: [""],
                chords: [
                    [{ chord: "G", position: 0, left: true, leftColon: true }, { chord: "D", position: 4, left: true }, { chord: "Bm", position: 8, left: true }, { chord: "D/F#", position: 12, number: "1/3", leftRight: true, rightColon: true }]
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "May Your praises live in every word we speak",
                    "And with every gift of breath we breathe You in",
                    "All the works that You have done",
                    "Consume our hearts",
                    "Who in all the earth compares to who You are",
                    "Who in all the earth compares to who You are",
                ],
                chords: [
                    [{ chord: "G", position: 40 }, { chord: "D", position: 170 }],
                    [{ chord: "Bm", position: 39 }, { chord: "D/F#", position: 72, number: "1/3" }],
                    [{ chord: "G", position: 29 }],
                    [{ chord: "D", position: 58 }],
                    [{ chord: "Bm", position: 31 }, { chord: "D/F#", position: 154, number: "1/3" }],
                    [{ chord: "G", position: 33 }, { chord: "A", position: 167.5 }]
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "A thousand hallelujahs",
                    "God we lift unto Your name",
                    "A thousand hallelujahs",
                    "God we lift up once again",
                    "All creation lifts its voice",
                    "Declaring till the end",
                    "O Lord, how great You are",
                ],
                chords: [
                    [{ chord: "G", position: 10 }],
                    [{ chord: "A", position: 37 }, { chord: "Bm", position: 76 }],
                    [{ chord: "G", position: 35 }],
                    [{ chord: "A", position: 20 }, { chord: "Bm", position: 40 }],
                    [{ chord: "G", position: 14 }],
                    [{ chord: "A", position: 20 }, { chord: "Bm", position: 78 }],
                    [{ chord: "D/F#", position: 0, number: "1/3" }, { chord: "G", position: 12 }, { chord: "A", position: 36 }],
                ],
            },
            {
                type: "INTERLUDE:",
                lyrics: [""],
                chords: [
                    [{ chord: "G", position: 0, left: true, leftColon: true }, { chord: "D", position: 4, left: true }, { chord: "Bm", position: 8, left: true }, { chord: "D/F#", position: 12, leftRight: true, rightColon: true }]
                ],
                isNotLyric: true,
            },
            {
                type: "",
                lyrics: ["[VERSE]", "[CHORUS]"],
                chords: [[]],
                isNotLyric: true,
            },
            {
                type: "INSTRUMENTAL:",
                lyrics: [""],
                chords: [
                    [{ chord: "G", position: 0, left: true, leftColon: true }, { chord: "A", position: 4, left: true }, { chord: "Bm", position: 8, left: true }, { chord: "A", position: 12, leftRight: true, rightColon: true }]
                ],
                isNotLyric: true,
            },
            {
                type: "BRIDGE:",
                lyrics: [
                    "You are holy, strong and mighty",
                    "Everlasting God",
                    "You are holy, strong and mighty",
                    "Ever faithful God",
                ],
                chords: [
                    [{ chord: "G", position: 0 }, { chord: "A", position: 58 }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 37 }],
                    [{ chord: "G", position: 0 }, { chord: "A", position: 51 }],
                    [{ chord: "Bm", position: 0 }, { chord: "A", position: 43 }],
                ],
            },
            {
                type: "",
                lyrics: ["[CHORUS]"],
                chords: [[]],
                isNotLyric: true,
            },
            {
                type: "TAG:",
                lyrics: [
                    "      O Lord, how great You are",
                ],
                chords: [
                    [{ chord: "Bm", position: 0 }, { chord: "G", position: 32 }, { chord: "A", position: 54 }, { chord: "D", position: 87 }],
                ],
            }
        ],
    },
    {
        title: "My God",
        artist: "Victory Worship",
        publisher: "VICTORY",
        composer: "PJ Corpuz",
        album: "Rise Heart",
        releaseDate: "2015",
        originalKey: "B",
        chordMap: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        bpm: 160,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/-wieKLN7eUE?si=mFyM4IlOZh7GJmh3' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/7IIP0Zt1iUp3Javlwlvnk2?si=c864564a8a524dc7' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/my-god-feat-joe-ramos/1225095814?i=1225096398' },
        ],
        sections: [
            {
                type: "INTRO Riff (4x):",
                lyrics: ["",""],
                chords: [
                    [{ chord: "G#m", position: 0, left: true, forwardSlash: 3 }, { chord: "G#m", position: 4, left: true, forwardSlash: 1 }, { chord: "B", position: 8, right: true, forwardSlash: 1 }],
                    [{ chord: "G#m", position: 0, left: true, forwardSlash: 3 }, { chord: "G#m", position: 4, left: true, forwardSlash: 1 }, { chord: "C#m", position: 8, right: true, forwardSlash: 1 }],
                ],
                isNotLyric: true,
            },
            {
                type: "INTRO 2:",
                lyrics: ["",""],
                chords: [
                    [{ chord: "E", position: 0, leftRight: true, forwardSlash: 3 }, { chord: "E", position: 4, forwardSlash: 3, right: true },{ chord: "E", position: 8, right: true, forwardSlash: 3 }, { chord: "E", position: 12, forwardSlash: 3, right: true }],
                    [{ chord: "B", position: 0, leftRight: true, forwardSlash: 3 }, { chord: "B", position: 4, forwardSlash: 3, right: true },{ chord: "B", position: 8, right: true, forwardSlash: 3 }, { chord: "B", position: 12, forwardSlash: 3, right: true }],
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE:",
                lyrics: [
                    "We cry out blessed be Your Name",
                    "Blessed be Your Name",
                    "Lord, You are worthy of all praise",
                    "Worthy of all praise",
                ],
                chords: [
                    [{ chord: "E", position: 0 }],
                    [{ chord: "B", position: 80 }],
                    [{ chord: "E ", position: 0 }],
                    [{ chord: "B", position: 68 }],
                ],
            },
            {
                type: "PRE-CHORUS:",
                lyrics: [
                    "We lift our hands and raise our voices",
                    "All the earth will hear rejoicing",
                    "When Your people sing",
                    "(Blessed be Your name)",
                ],
                chords: [
                    [{ chord: "E", position: 0 }],
                    [],
                    [{ chord: "C#m", position: 0 }, { chord: "B/D#", position: 35, number: "1/3" }, { chord: "E", position: 43 }],
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "My God You alone are truly great",  
                    "Your words will never ever break",  
                    "Your plans won’t deviate",  
                    "From the promises",
                    "The promises You’ve made",  
                    "And I will never be the same",  
                    "Your blood has washed away the shame",
                    "You took away my pain",  
                    "And Your love, and Your love will remain",
                ],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "B", position: 110 }],
                    [{ chord: "G#m", position: 107 }],
                    [],
                    [{ chord: "C#m", position: 42 }],
                    [{ chord: "B/D#", position: 20, number: "1/3" }, { chord: "E", position: 75 }],
                    [{ chord: "E", position: 0}, { chord: "B", position: 92 }],
                    [{ chord: "G#m", position: 134 }],
                    [],
                    [{ chord: "C#m", position: 25 }, { chord: "B/D#", position: 62, number: "1/3" }, { chord: "E", position: 73 }],
                ],
            },
            {
                type: "",
                lyrics: [
                    "INTRO 2", "VERSE", "PRE-CHORUS", "CHORUS"
                ],
                chords: [[]],
                isNotLyric: true,
            },
            {
                type: "INTERLUDE Riff (2x)",
                lyrics: ["",""],
                chords: [
                    [{ chord: "G#m", leftRight: true, forwardSlash: 3 }, { chord: "G#m", position: 4, forwardSlash: 1 }, { chord: "B", position: 8, forwardSlash: 1, right: true }],
                    [{ chord: "G#m", leftRight: true, forwardSlash: 3 }, { chord: "G#m", position: 4, forwardSlash: 1 }, { chord: "C#m", position: 8, forwardSlash: 1, right: true }],
                ],
                isNotLyric: true,
            },
            {
                type: "BRIDGE: (4x)",
                lyrics: [
                    "God You are so worthy",
                    "God You are so holy",
                ],
                chords: [
                    [{ chord: "G#m", position: 0 }, { chord: "E", position: 46 }],
                    [{ chord: "G#m", position: 0 }, { chord: "E", position: 46 }],
                ],
            },
            {
                type: "",
                lyrics: ["CHORUS (2x)"],
                chords: [[]],
                isNotLyric: true,
            },
            {
                type: "OUTRO (2x)",
                lyrics: ["Your love and Your love will remain"],
                chords: [
                    [{ chord: "C#m", position: 0 }, { chord: "B/D#", position: 61, number: "1/3" }, { chord: "E", position: 89 }],
                ],
                isNotLyric: true,
            },
        ],
    },
    {
        title: "Great God",
        artist: "Victory Worship",
        publisher: "VICTORY",
        composer: "Archie Castillo & James Murrell",
        album: "Radical Love",
        releaseDate: "2014",
        originalKey: "B",
        bpm: 84,
        chordMap: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        link: [
            { platform: 'youtube', url: 'https://youtu.be/ywresPZeZ24?si=pPt6jSdAsGNQfy_E' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/5QrFx6Dl2CPR3Ksxs7vFXn?si=efe94bd6438c4d7c' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/great-god-feat-jam-capistrano/1225096250?i=1225096451' },
            { platform: 'pdf', url: 'https://www.everynationmusic.org/wp-content/uploads/2022/03/great-god-radical-love-victory-worship.pdf' },
        ],
        sections: [
            {
                type: "CHORUS:",
                lyrics: [
                    "He is a great God",
                    "He is awesome, wonderful God",
                    "Mighty in power, author of wisdom",
                    "Better than life"
                ],
                chords: [
                    [{ chord: "B", position: 38 }],
                    [{ chord: "E", position: 38 }],
                    [{ chord: "G#m", position: 47 }],
                    [{ chord: "E", position: 53 }]
                ],
            },
            {
                type: "INSTRUMENTAL:",
                lyrics: [""],
                chords: [
                    [{ chord: "B", position: 0, leftColon: true, left: true }, { chord: "E", position: 4, left: true }, { chord: "C#m", position: 8, left: true }, { chord: "B", position: 12, leftRight: true, rightColon: true }]
                ],
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "When the wind blows and it storms",
                    "And the darkness begins to form",
                    "I will worship the name of Jesus",
                    "He calms the raging seas",
                    "Overcomes our enemies",
                    "And turns our darkness into light"
                ],
                chords: [
                    [{ chord: "B", position: 46 }],
                    [{ chord: "E", position: 40 }],
                    [{ chord: "C#m", position: 21 }, { chord: "B", position: 99 }],
                    [{ chord: "B", position: 14 }],
                    [{ chord: "E", position: 17 }],
                    [{ chord: "C#m", position: 65 }, { chord: "B", position: 110 }],
                ],
            },
            {
                type: "PRE-CHORUS 1:",
                lyrics: [
                    "We will lift up our hands",
                    "We will rise and take a stand"
                ],
                chords: [
                    [{ chord: "E", position: 33 }, { chord: "F#", position: 41 }],
                    [{ chord: "E", position: 40 }, { chord: "F#", position: 98 }],
                ],
            },
            {
                type: "[REPEAT CHORUS]",
                lyrics: [""],
                chords: [[]],
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "Our God who sits on the throne",
                    "He will reign forevermore",
                    "And His kingdom will never end",
                    "Come all let’s worship the Lord",
                    "Every tribe confessing He's King",
                    "As we worship the name of Jesus"
                ],
                chords: [
                    [{ chord: "B", position: 18 }],
                    [{ chord: "E", position: 39 }],
                    [{ chord: "C#m", position: 41 }, { chord: "B", position: 109 }],
                    [{ chord: "B", position: 27 }],
                    [{ chord: "E", position: 21 }],
                    [{ chord: "C#m", position: 28 }, { chord: "B", position: 110 }],
                ],
            },
            {
                type: "PRE-CHORUS 2:",
                lyrics: [
                    "We will lift up our hands",
                    "We will rise and take a stand"
                ],
                chords: [
                    [{ chord: "E", position: 33 }, { chord: "F#", position: 77 }],
                    [{ chord: "E/G#", position: 40, number: "4" }, { chord: "F#/A#", position: 80, number: "5" }],
                ],
            },
            {
                type: "[REPEAT CHORUS]",
                lyrics: [""],
                chords: [[]],
            },
            {
                type: "BRIDGE (x2):",
                lyrics: [
                    "There is power, power",
                    "Power in the name of Jesus",
                    "There is power, power",
                    "Power in the name of God",
                    "His kingdom shall reign forever",
                    "Jesus reigns",
                    "There is power, power",
                    "Power in the name of Jesus",
                    "There is power, power",
                    "Power in the name of God"
                ],
                chords: [
                    [{ chord: "B", position: 40 }, { chord: "C#m", position: 74 }],
                    [{ chord: "B/D#", position: 0, number: "1/3" }, { chord: "E", position: 67 }],
                    [{ chord: "B", position: 40 }, { chord: "C#m", position: 74 }],
                    [{ chord: "B/D#", position: 0, number: "1/3" }, { chord: "E", position: 67 }],
                    [{ chord: "B", position: 16 }, { chord: "C#m", position: 74 }],
                    [{ chord: "B/D#", position: 0, number: "1/3" }, { chord: "E", position: 18 }],
                    [{ chord: "B/F#", position: 40, number: "1/5" }, { chord: "G#m", position: 55 }],
                    [{ chord: "B/D#", position: 0, number: "1/3" }, { chord: "E", position: 78 }],
                    [{ chord: "B/F#", position: 40, number: "1/5" }, { chord: "G#m", position: 55 }],
                    [{ chord: "B/D#", position: 0, number: "1/3" }, { chord: "E", position: 78 }],
                ],
            },
            {
                type: "OUTRO:",
                lyrics: [
                    []
                ],
                chords: [
                    [{ chord: "B", position: 0, leftColon: true, left: true },{ chord: "C#m", position: 4, left: true }, { chord: "B/D#", position: 8, left: true }, { chord: "E", position: 12, left: true }, { chord: "F", position: 16, leftRight: true, rightColon: true }],
                ],
            }
        ],
    },
    {
        title: "Dance in Freedom",
        artist: "Victory Worship",
        composer: "Victor Asuncion",
        publisher: "VICTORY",
        album: "Rise Heart",
        releaseDate: "2015",
        originalKey: "B",
        bpm: 150,
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        link: [
            { platform: 'youtube', url: 'https://youtu.be/PPAU2BgO54c?si=76uhQr2KpzVuB74z' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/3AXNYwo2ZAdI6KvNj2kPeW?si=da547f587aaa4796' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/dance-in-freedom-feat-victor-asuncion/1225095814?i=1225096508' },
            { platform: 'pdf', url: 'https://www.everynationmusic.org/wp-content/uploads/2022/03/dance-in-freedom-rise-heart-victory-worship.pdf'}
        ],
        sections: [
            {
                type: "INTRO:",
                lyrics: ["",""],
                chords: [
                    [{ chord: "B", position: 0, forwardSlash: 3, left: true }, { chord: "B", position: 4, forwardSlash: 3, left: true }, { chord: "B", position: 8, forwardSlash: 3, left: true }, { chord: "B", position: 12, forwardSlash: 3, leftRight: true }],
                    [{ chord: "G#m", position: 0, forwardSlash: 3, left: true }, { chord: "E", position: 4, forwardSlash: 3, left: true }, { chord: "B", position: 8, forwardSlash: 3, left: true }, { chord: "B", position: 12, forwardSlash: 3, leftRight: true }],
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "He did not hold back",
                    "He did not hesitate",
                    "He gave His life away, He is love",
                    "",
                    "Our Savior came",
                    "To seek and save the lost",
                    "He's the only way, He is love",
                    ""
                ],
                chords: [
                    [{ chord: "B", position: 51 }],
                    [{ chord: "E", position: 51 }],
                    [{ chord: "G#m", position: 51 }, { chord: "E", position: 69 }],
                    [{ chord: "B", position: 30 }],
                    [{ chord: "B", position: 50 }],
                    [{ chord: "E", position: 53 }],
                    [{ chord: "G#m", position: 35 }, { chord: "E", position: 56 }],
                    [{ chord: "B", position: 30 }],
                ],
            },
            {
                type: "PRE-CHORUS:",
                lyrics: [
                    "Through Him, we overcome",
                    "Through Him, we overcome",
                ],
                chords: [
                    [{ chord: "F#", position: 0 }, { chord: "G#m", position: 59 }, { chord: "E", position: 83 }],
                    [{ chord: "F#", position: 0 }, { chord: "G#m", position: 59 }, { chord: "E", position: 83 }],
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "Jesus, You’re alive, You’re alive in us",
                    "Nothing can separate us from",
                    "The love that You give away",
                    "Jesus, You're the truth, You are the life",
                    "We dance in freedom",
                    "We dance in freedom",
                    "Cause You set us free"
                ],
                chords: [
                    [{ chord: "B", position: 0 }, { chord: "E", position: 125 }],
                    [{ chord: "G#m", position: 50 }, { chord: "F#", position: 81 }],
                    [{ chord: "E", position: 78 }],
                    [{ chord: "B", position: 0 }, { chord: "E", position: 125 }],
                    [{ chord: "G#m", position: 70 }, { chord: "F#", position: 75 }],
                    [{ chord: "E", position: 70 }],
                ],
            },
            {
                type: "INTERLUDE:",
                lyrics: ["", ""],
                chords: [
                    [{ chord: "B", position: 0, forwardSlash: 3, left: true }, { chord: "B", position: 4, forwardSlash: 3, left: true }, { chord: "B", position: 8, forwardSlash: 3, left: true }, { chord: "B", position: 12, forwardSlash: 3, leftRight: true }],
                    [{ chord: "G#m", position: 0, forwardSlash: 3, left: true }, { chord: "E", position: 4, forwardSlash: 3, left: true }, { chord: "B", position: 8, forwardSlash: 3, left: true }, { chord: "B", position: 12, forwardSlash: 3, leftRight: true }],
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "He paid the price",
                    "He took our guilt and shame",
                    "He made a way for us to see His light",
                    "",
                    "Now standing strong",
                    "We fix our eyes on Him",
                    "He alone is good, He is love",
                    "",
                ],
                chords: [
                    [{ chord: "B", position: 51 }],
                    [{ chord: "E", position: 51 }],
                    [{ chord: "G#m", position: 51 }, { chord: "E", position: 81 }],
                    [{ chord: "B", position: 30 }],
                    [{ chord: "B", position: 50 }],
                    [{ chord: "E", position: 53 }],
                    [{ chord: "G#m", position: 35 }, { chord: "E", position: 56 }],
                    [{ chord: "B", position: 30 }],
                ],
            },
            {
                type: "",
                lyrics: ["[PRE-CHORUS (2x)]", "[CHORUS]"],
                chords: [],
                isNotLyric: true,
            },
            {
                type: "INTERLUDE:",
                lyrics: ["", ""],
                chords: [
                    [{ chord: "B", position: 0, forwardSlash: 3, left: true }, { chord: "B", position: 4, forwardSlash: 3, left: true }, { chord: "B", position: 8, forwardSlash: 3, left: true }, { chord: "B", position: 12, forwardSlash: 3, leftRight: true }],
                    [{ chord: "G#m", position: 0, forwardSlash: 3, left: true }, { chord: "E", position: 4, forwardSlash: 3, left: true }, { chord: "B", position: 8, forwardSlash: 3, left: true }, { chord: "B", position: 12, forwardSlash: 3, leftRight: true }],
                ],
                isNotLyric: true,
            },
            {
                type: "BRIDGE (x4):",
                lyrics: [
                    "Whoa",
                    "I am living in freedom",
                    "Living in freedom",
                    "Whoa",
                    "Jesus lives inside of me",
                    "Now I am alive and free"
                ],
                chords: [
                    [{ chord: "B", position: 0 }],
                    [{ chord: "E", position: 23 }],
                    [],
                    [{ chord: "G#m", position: 0 }, { chord: "F#", position: 15 }],
                    [{ chord: "E", position: 25 }]
                ],
            },
            {
                type: "",
                lyrics: ["[PRE-CHORUS]", "[CHORUS]"],
                chords: [],
                isNotLyric: true,
            },
            {
                type: "OUTRO:",
                lyrics: ["", ""],
                chords: [
                    [{ chord: "B", position: 0, forwardSlash: 3, left: true }, { chord: "B", position: 4, forwardSlash: 3, left: true }, { chord: "B", position: 8, forwardSlash: 3, left: true }, { chord: "B", position: 12, forwardSlash: 3, leftRight: true }],
                    [{ chord: "G#m", position: 0, forwardSlash: 3, left: true }, { chord: "E", position: 4, forwardSlash: 3, left: true }, { chord: "B", position: 8, forwardSlash: 3, left: true }, { chord: "B", position: 12, forwardSlash: 3, leftRight: true }],
                ],
                isNotLyric: true,
            },
        ],
    },
    {
        title: "You Are With Me",
        artist: "Victory Worship",
        publisher: "VICTORY",
        composer: "Catherine Go, Charles Bautista, & Lee Brown",
        album: "Yahweh",
        releaseDate: "2022",
        originalKey: "G",
        bpm: 85,
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        link: [
            { platform: 'youtube', url: 'https://youtu.be/Ip98WRC5z80?si=7Vt3pEXafHj_zmvq' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/2tREP1yKfVfad1rOqrsEIa?si=2656a72e1b3641bc' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/you-are-with-me-live/1633604406?i=1633604415' },
            { platform: 'pdf', url: 'https://www.everynationmusic.org/wp-content/uploads/2022/07/you-are-with-me-chord-chart.pdf'}
        ],
        sections: [
            {
                type: "INTRO:",
                lyrics: [""],
                chords: [
                    [{ chord: "G", position: 0, left: true }, { chord: "A", position: 4 }, { chord: "Bm", position: 8, left: true }, { chord: "Em", position: 12, left: true }, { chord: "D/F#", position: 16, left: true }, { chord: "G", position: 20, right: true }]
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    " Seems like I'm surrounded",
                    " My enemies I see",
                    " But Your love I hear resounding",
                    " This freedom I shall see"
                ],
                chords: [
                    [{ chord: "D/F#", position: 0, number: "5/7" }, { chord: "G", position: 54 }],
                    [{ chord: "D/F#", position: 0, number: "5/7" }, { chord: "G", position: 45 }],
                    [{ chord: "D/F#", position: 0, number: "5/7" }, { chord: "G", position: 73 }],
                    [{ chord: "Bm", position: 0 }, { chord: "A/C#", position: 15, number: "2/#4" }, { chord: "D", position: 52 }]
                ],
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    " No trouble can destroy my hope",
                    " For Your scars have made me whole",
                    " Turning down all the voices of despair",
                    " On Your promises I stand"
                ],
                chords: [
                    [{ chord: "D/F#", position: 0, number: "5/7" }, { chord: "G", position: 61 }],
                    [{ chord: "D/F#", position: 0, number: "5/7" }, { chord: "G", position: 95 }],
                    [{ chord: "D/F#", position: 0, number: "5/7" }, { chord: "G", position: 77 }],
                    [{ chord: "Bm", position: 0 }, { chord: "A/C#", position: 29, number: "2/#4" }, { chord: "D", position: 49 }]
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "I will not fear when the waters rise",
                    "I will not fear though I walk through fire",
                    "For You are with me, You are with me",
                    "You have redeemed my life"
                ],
                chords: [
                    [{ chord: "D", position: 39 }, { chord: "Dsus", position: 119 }],
                    [{ chord: "D", position: 39 }, { chord: "Bm" , position: 139 }, { chord: "A" , position: 143 }],
                    [{ chord: "G", position: 47 }],
                    [{ chord: "Em", position: 47 }, { chord: "D/F#", position: 84, number: "5/7" }, { chord: "G", position: 88 }]
                ],
            },
            {
                type: "",
                lyrics: ["[REPEAT VERSE 2]", "[REPEAT CHORUS]"],
                chords: [[]],
                isNotLyric: true,
            },
            {
                type: "BRIDGE:",
                lyrics: [
                    "Your grace sustains me",
                    "Your love, my victory",
                    "I'll walk the valley, trusting You",
                    "Your grace unfailing",
                    "Your love, my victory",
                    "I'll walk the valley, trusting You"
                ],
                chords: [
                    [{ chord: "G", position: 20 }, { chord: "A", position: 76 }],
                    [{ chord: "Bm7", position: 17 }],
                    [{ chord: "Em", position: 8 }, { chord: "D/F#", position: 44, number: "5/7" }, { chord: "G", position: 47.5 }],
                    [{ chord: "G", position: 20 }, { chord: "A", position: 76 }],
                    [{ chord: "Bm7", position: 17 }],
                    [{ chord: "Em", position: 8 }, { chord: "D/F#", position: 44, number: "5/7" }, { chord: "G", position: 47.5 }],
                ],
            },
            {
                type: "",
                lyrics: ["[REPEAT CHORUS]"],
                chords: [[]],
                isNotLyric: true,
            }
        ],
    },
    {
        title: "Tribes",
        artist: "Victory Worship",
        publisher: "VICTORY",
        composer: "Bryson Brealey, Sarah Batson, Elle Tumaliuan, & Jzon Villanueva II",
        album: "Tribes",
        releaseDate: "2019",
        originalKey: "Eb",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"],
        bpm: 124,
        sections: [
            {
                type: "INTRO:",
                lyrics: [""],
                chords: [
                    [{ chord: "Eb", position: 0, leftColon: true, left: true, percentage: true, leftRightPercentage: true }, { chord: "Ab", position: 4, right: true, percentage: true, leftPercentage: true, rightColon: true }],
                ],
                isNotLyric: true
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "  Every tribe will see Your glory",
                    "  Every nation bow before You",
                    "  All our treasure turned to ashes",
                    "In the light of You"
                ],
                chords: [
                    [{ chord: "Eb", position: 0 }, { chord: "Ab", position: 92 }],
                    [{ chord: "Eb", position: 0 }, { chord: "Ab", position: 81 }],
                    [{ chord: "Eb", position: 0 }, { chord: "Ab", position: 100 }],
                    [{ chord: "Eb/G", position: 57, number: '1/3' }, { chord: "Ab", position: 65 }]
                ],
            },
            {
                type: "PRE-CHORUS:",
                lyrics: [
                    "As we're singing",
                    "Holy is the Lord Almighty",
                    "Only You are worthy",
                    "Worthy of it all"
                ],
                chords: [
                    [],
                    [{ chord: "Bb", position: 0 },{ chord: "Cm", position: 65 }],
                    [{ chord: "Bb", position: 53 }],
                    [{ chord: "Ab", position: 52 }]
                ],
            },
            {
                type: "",
                lyrics: ["[VERSE]", "[PRE-CHORUS]"],
                chords: [[]],
                isNotLyric: true
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "Praise and glory, honor and strength",
                    "Unto our God, unto our God",
                    "Matchless, endless love unrestrained",
                    "This our God, every tribe sing"
                ],
                chords: [
                    [{ chord: "Eb", position: 0 }],
                    [{ chord: "Ab", position: 34 }],
                    [{ chord: "Cm", position: 0 }],
                    [{ chord: "Ab", position: 25 }]
                ],
            },
            {
                type: "INTERLUDE",
                lyrics: [""],
                chords: [
                    [{ chord: "Eb", position: 0, leftColon: true, left: true, percentage: true, leftRightPercentage: true }, { chord: "Ab", position: 4, right: true, percentage: true, leftPercentage: true, rightColon: true }],
                ],
                isNotLyric: true
            },
            {
                type: "BRIDGE:",
                lyrics: [
                    "There is no one like our God",
                    "There is no one like our God",
                    "There is no one like our God",
                    "There is no one like our God",
                ],
                chords: [
                    [{ chord: "Eb", position: 0 }],
                    [{ chord: "Ab", position: 0 }],
                    [{ chord: "Eb", position: 0 }],
                    [{ chord: "Ab", position: 0 }],
                ],
            },
            {
                type: "",
                lyrics: [
                    "Filipino:",
                    "Wala Kang katulad O Diyos",
                    "Wala Kang katulad O Diyos",
                ],
                italize: [true],
                chords: [
                    [],
                    [{ chord: "Eb", position: 0 }],
                    [{ chord: "Ab", position: 0 }],
                ],
            },
            {
                type: "",
                lyrics: [
                    "Spanish:",
                    "No hay nadie como nuestro Dios",
                    "No hay nadie como nuestro Dios",
                ],
                italize: [true],
                chords: [
                    [],
                    [{ chord: "Eb", position: 0 }],
                    [{ chord: "Ab", position: 0 }],
                ],
            },
            {
                type: "",
                lyrics: [
                    "There is no one like our God",
                    "There is no one like our God",
                    "There is no one like our God",
                    "There is no one like our God",
                ],
                chords: [
                    [{ chord: "Eb", position: 0 }],
                    [{ chord: "Ab", position: 0 }],
                    [{ chord: "Cm", position: 0 }],
                    [{ chord: "Ab", position: 0 }],
                ],
            },
            {
                type: "",
                lyrics: ["[CHORUS]"],
                chords: [[]],
                isNotLyric: true
            },
            {
                type: "OUTRO",
                lyrics: [""],
                chords: [
                    [{ chord: "Eb", position: 0, leftColon: true, left: true, percentage: true, leftRightPercentage: true }, { chord: "Ab", position: 4, right: true, percentage: true, leftPercentage: true, rightColon: true }],
                ],
                isNotLyric: true
            },
        ],
    },
    //EVERY NATION MUSIC
    {
        title: "The Beat",
        artist: "Every Nation Music",
        composer: "Franklin Asuncion, Lee Simon Brown, Moira Hernandez, James Murrell & Kensho Yo",
        album: "Doxology",
        releaseDate: "2017",
        originalKey: "E",
        chordMap: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        bpm: 68,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/HPTRq91CiYA?si=A6hjoiaP2TFyRUh8' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/the-beat-feat-langelihle-mbonambi/1154127453?i=1154127596' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/5Mu324S2iRxxqv9U6Gq1h1?si=e2e46ad82a764ae9' },
        ],
        sections: [
            {
                type: "INTRO:",
                lyrics: [""],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "A", position: 4 }]
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 1",
                lyrics: [
                    "For freedom sake, you gave your son to die",
                    "Adopted us, from darkness into light",
                    "And now I am safe, within Your loving arms",
                    "And I can hear, the yearning of Your heart",
                ],
                chords: [
                    [{ chord: "E", position: 15 }, { chord: "A", position: 158 }],
                    [{ chord: "E", position: 16 }, { chord: "A", position: 127 }],
                    [{ chord: "C#m", position: 36 }, { chord: "B", position: 72 }, { chord: "A", position: 135 }],
                    [{ chord: "C#m", position: 17 }, { chord: "B", position: 133 }],
                ],
            },
            {
                type: "CHORUS",
                lyrics: [
                    "For the lost, it beats, it beats,",
                    "We can hear it calling",
                    "Make our hearts beat, and beat, and beat",
                    "For those sons and daughters",
                    "For the lost, it beats, it beats,",
                    "We can hear it calling",
                    "Make our hearts beat, and beat, and beat",
                    "And beat with You",
                ],
                chords: [
                    [{ chord: "E", position: 30 }],
                    [{ chord: "A", position: 60 }],
                    [{ chord: "C#m", position: 66 }, { chord: "B", position: 134 }],
                    [{ chord: "A", position: 80 }],
                    [{ chord: "E", position: 30 }],
                    [{ chord: "A", position: 60 }],
                    [{ chord: "C#m", position: 68 }, { chord: "B", position: 130 }],
                    [{ chord: "A", position: 59 }],
                ],
            },
            {
                type: "INTERLUDE:",
                lyrics: [""],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "A", position: 4 }, { chord: "B", position: 8 }, { chord: "A", position: 12 }]
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 2",
                lyrics: [
                    "The orphaned and abandoned find a home",
                    "The widow has a place before Your throne",
                    "For strong and deep and uncontainable",
                    "Is Your heart of love that beats for all the world",
                ],
                chords: [
                    [{ chord: "E", position: 18 }, { chord: "A", position: 150 }],
                    [{ chord: "E", position: 18 }, { chord: "A", position: 149 }],
                    [{ chord: "C#m", position: 15 }, { chord: "B", position: 89 }, { chord: "A", position: 127 }],
                    [{ chord: "C#m", position: 30 }, { chord: "E", position: 106 }, { chord: "B", position: 149 }],
                ],
            },
            {
                type: "",
                lyrics: [
                    "[CHORUS]",
                ],
                chords: [[]],
                isNotLyric: true,
            },
            {
                type: "BRIDGE 1",
                lyrics: [
                    "Make our hearts beat",
                    "Make our hearts beat with You",
                    "Make our hearts beat",
                    "Make our hearts beat with You",
                ],
                chords: [
                    [{ chord: "C#m", position: 68 }],
                    [{ chord: "A", position: 68 }],
                    [{ chord: "C#m", position: 68 }],
                    [{ chord: "B", position: 68 }],
                ],
            },
            {
                type: "BRIDGE 2",
                lyrics: [
                    "Naririnig ang iyong tinig",
                    "Diringgin ang iyong tawag",
                    "Naririnig ang iyong tinig",
                    "Diringgin ang iyong tawag",
                ],
                chords: [
                    [{ chord: "C#m", position: 10 }],
                    [{ chord: "A", position: 21 }],
                    [{ chord: "C#m", position: 10 }],
                    [{ chord: "B", position: 21 }],
                ],
            },
            {
                type: "",
                lyrics: [
                    "[CHORUS]",
                ],
                chords: [[]],
                isNotLyric: true,
            },
        ],
    },
    //Jesus Culture
    {
        title: "One Thing Remains",
        artist: "Jesus Culture",
        composer: "Brian Johnson, Jeremy Riddle, Christa Black Gifford",
        album: "Come Away",
        releaseDate: "2010",
        originalKey: "B",
        chordMap: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
        link: [
            { platform: 'youtube', url: 'https://youtu.be/zglFV4mtewU?si=zN5T48sC3j5N7y5R' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/one-thing-remains-live/1440851609?i=1440851911' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/29YUMVIUxuMi2QtK6sg0lI?si=2bd88516c5624cde' },
        ],
        bpm: 74,
        sections: [
            {
                type: "INTRO:",
                lyrics: [""],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "B", position: 4 }, { chord: "F#", position: 8 }]
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "Higher than the mountains that I face",
                    "Stronger than the power of the grave",
                    "Constant through the trial and the change",
                    "One thing remains",
                    "One thing remains",
                ],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "B", position: 61 }, { chord: "F#", position: 124 }],
                    [{ chord: "E", position: 0 }, { chord: "B", position: 69 }, { chord: "F#", position: 114 }],
                    [{ chord: "E", position: 0 }, { chord: "B", position: 73 }, { chord: "F#", position: 127 }],
                    [{ chord: "E", position: 20 }, { chord: "B", position: 35 }, { chord: "F#", position: 50 }],
                    [{ chord: "E", position: 20 }, { chord: "B", position: 35 }, { chord: "F#", position: 50 }],
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "Your love never fails, it never gives up",
                    "It ever runs out on me",
                    "Your love never fails, it never gives up",
                    "Never runs out on me",
                    "Your love never fails, it never gives up",
                    "It never runs out on me",
                ],
                chords: [
                    [{ chord: "G#m7", position: 0 }, { chord: "E", position: 40 }],
                    [{ chord: "B", position: 0 }, { chord: "F#", position: 40 }],
                    [{ chord: "G#m7", position: 0 }, { chord: "E", position: 40 }],
                    [{ chord: "B", position: 0 }, { chord: "F#", position: 40 }],
                    [{ chord: "G#m7", position: 0 }, { chord: "E", position: 40 }],
                    [{ chord: "B", position: 0 }, { chord: "F#", position: 40 }],
                ],
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "On and on and on and on it goes",
                    "It overwhelms and satisfies my soul",
                    "And I never, ever, have to be afraid",
                    "One thing remains",
                    "One thing remains",
                ],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "B", position: 61 }, { chord: "F#", position: 100 }],
                    [{ chord: "E", position: 0 }, { chord: "B", position: 69 }, { chord: "F#", position: 105 }],
                    [{ chord: "E", position: 0 }, { chord: "B", position: 73 }, { chord: "F#", position: 110 }],
                    [{ chord: "E", position: 20 }, { chord: "B", position: 35 }, { chord: "F#", position: 50 }],
                    [{ chord: "E", position: 20 }, { chord: "B", position: 35 }, { chord: "F#", position: 50 }],
                ],
            },
            {
                type: "BRIDGE:",
                lyrics: [
                    "In death, In life, I'm confident and",
                    "Covered by the power of Your great love",
                    "My debt is paid, there's nothing that can",
                    "Separate my heart from Your great love",
                ],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "B", position: 40 }, { chord: "F#", position: 80 }],
                    [{ chord: "C#m", position: 0 }, { chord: "E", position: 40 }, { chord: "B", position: 80 }, { chord: "F#", position: 120 }],
                    [{ chord: "E", position: 0 }, { chord: "B", position: 40 }, { chord: "F#", position: 80 }],
                    [{ chord: "C#m", position: 0 }, { chord: "E", position: 40 }, { chord: "B", position: 80 }, { chord: "F#", position: 120 }],
                ],
            },
            {
                type: "TAG:",
                lyrics: [
                    "Your love",
                ],
                chords: [
                    [{ chord: "E", position: 0 }, { chord: "F#", position: 10 }, { chord: "D#m7", position: 20 }]
                ],
            }
        ],
    },
    //Mid-Cities Worship
    {
        title: "Hands to the Sky",
        artist: "Mid-Cities Worship",
        composer: "Erich Herzberger, Lane Oliver, & Chris Davis",
        album: "Hands to the Sky",
        releaseDate: "2015",
        originalKey: "Bb",
        chordMap: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"],
        bpm: 123,
        link: [
            { platform: 'youtube', url: 'https://youtu.be/M4WKGVZaGrA?si=BbiOP6jOu_yaAALz' },
            { platform: 'appleMusic', url: 'https://music.apple.com/us/album/hands-to-the-sky/1008501635?i=1008501822' },
            { platform: 'spotify', url: 'https://open.spotify.com/track/5mqMY3RLWtcn9xYj4Kizkz?si=384e82eff7fd4f89' },
        ],
        sections: [
            {
                type: "WHOLE SONG:",
                lyrics: [""],
                chords: [
                    [{ chord: "Bb", position: 0, number: 1 }, { chord: "Fm7", position: 4, number: 5 }, { chord: "Ab", position: 8, number: "♭7"  }, { chord: "Eb", position: 12, number: 4  }],
                ],
                isNotLyric: true,
            },
            {
                type: "VERSE 1:",
                lyrics: [
                    "I’m waking up to Your glory",
                    "Your mercy falls like the sun still rises",
                    "Your grace is new every morning",
                    "To light the world with the hope inside us",
                ],
                chords: [
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                type: "PRE-CHORUS:",
                lyrics: [
                    "I hear the sound of",
                    "A roarin’ anthem",
                    "Burning with Your love",
                    "Let every voice sing",
                    "Let every part of me",
                    "Speak of all You’ve done",
                ],
                chords: [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                type: "CHORUS:",
                lyrics: [
                    "I am alive",
                    "You have made this heart brand new",
                    "Hands to the sky",
                    "Pouring out my love for You",
                ],
                chords: [
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                type: "VERSE 2:",
                lyrics: [
                    "Our praises echo Your goodness",
                    "We lift you up as You rain down on us",
                    "We’re overwhelmed by Your freedom",
                    "There’s nothing like living in Your purpose",
                ],
                chords: [
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                type: "BRIDGE:",
                lyrics: [
                    "I’m alive ‘cause You’re alive",
                    "Forever I will shine Your light",
                    "I’m alive ‘cause You’re alive",
                    "You have opened up my eyes",
                ],
                chords: [
                    [],
                    [],
                    [],
                    [],
                ],
            }
        ],
    }
]
