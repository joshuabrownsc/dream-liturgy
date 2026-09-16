/* ============================================================
   week.js — THIS IS THE ONLY FILE YOU CHANGE EACH WEEK.

   Rules of thumb:
   - Anything you leave empty ("" or []) disappears from the page.
   - Delete a whole section (set it to null) and it disappears too.
   - Keep the commas and quote marks exactly where they are.
   - Apostrophes inside text are fine. Quotation marks inside text
     need a backslash in front, like this: \"Come and see.\"
   ============================================================ */

const WEEK = {

  /* --------------------------------------------------------
     THE HEADER
     -------------------------------------------------------- */
  date: "September 20, 2026",
  season: "The Seventeenth Sunday after Pentecost",
  title: "The Cost of Participation",
  preacher: "Pastor Joshua Brown",


  /* --------------------------------------------------------
     THE PSALM
     Each verse has a number, a first half (a), and a second
     half (b). The asterisk between them is added for you.
     -------------------------------------------------------- */
    psalm: {
    reference: "Psalm 149",
    rubric: "Read together, the whole room, unhurried.",
    verses: [
      { n: 1, a: "Hallelujah! Sing to the Lord a new song;",
             b: "sing his praise in the congregation of the faithful." },
      { n: 2, a: "Let Israel rejoice in his Maker;",
             b: "let the children of Zion be joyful in their King." },
      { n: 3, a: "Let them praise his Name in the dance;",
             b: "let them sing praise to him with timbrel and harp." },
      { n: 4, a: "For the Lord takes pleasure in his people",
             b: "and adorns the poor with victory." },
      { n: 5, a: "Let the faithful rejoice in triumph;",
             b: "let them be joyful on their beds." },
      { n: 6, a: "Let the praises of God be in their throat",
             b: "and a two-edged sword in their hand;" },
      { n: 7, a: "To wreak vengeance on the nations",
             b: "and punishment on the peoples;" },
      { n: 8, a: "To bind their kings in chains",
             b: "and their nobles with links of iron;" },
      { n: 9, a: "To inflict on them the judgment decreed;",
             b: "this is glory for all his faithful people." }
    ]
  },


  /* --------------------------------------------------------
     SONGS
     Just a title, and optionally the lyrics you want printed.
     "lyrics" is optional — delete the whole lyrics block for a
     song and only the title will show.
     -------------------------------------------------------- */
  songs: [
 {
      title: "Good Plans",
      lyrics: [
        { label: "Verse 1", lines: [
          "The Lord is my shepherd, and he is everything I need",
          "I will not worry; I will not fear the enemy",
          "He said that he loves me, He said that he's with me even though",
          "I walk through the valley of shadow of death and still I know"
        ]},
        { label: "Chorus", lines: [
          "He has good plans, he has good plans",
          "For me, so I will take heart in deserts and gardens",
          "He has good plans, he has good plans",
          "For me, if I know my father I know my father has",
          "Good plans"
        ]},
         { label: "Verse 2", lines: [
          "The Lord is my savior, so why should I doubt my victory",
          "Why would I question the rod and the staff that comforts me",
          "He quiets the waters, he quiets the storm inside of me",
          "What could be better than walking with him when I believe"
        ]},
        { label: "Bridge", lines: [
          "Surely your goodness and mercy follow me",
          "Fear will not find me",
          "For I'll be dwelling in the house of God"
        ]},
      ]
    },
    {
      title: "Your Labor is Not in Vain",
      lyrics: [
        { label: "Verse 1", lines: [
          "Your labor is not in vain",
          "Though the ground underneath you is cursed and stained",
          "Your planting and reaping are never the same",
          "Your labor is not in vein"
        ]},
        { label: "Verse 2", lines: [
          "Your labor is not unknown",
          "Though the rocks they cry out and the sea it may groan",
          "The place of your toil may not seem like a home",
          "Your labor is not unknown"
        ]},
        { label: "Chorus", lines: [
          "I am with you",
          "For I have called you, called you by name",
          "Your labor is not in vain"
        ]},
        { label: "Verse 3", lines: [
          "The vineyards you plan will bear fruit",
          "The fields will sing out and rejoice in the truth",
          "For all that is old will at last be made new",
          "The vineyards you plant will bear fruit"
        ]},
        { label: "Verse 4", lines: [
          "The houses you labored to build",
          "Will finally with laughter and joy be filled",
          "The serpent that hurts and destroys will be killed",
          "And all that is broken be healed"
        ]},
      ]
    },
    {
      title: "Kingdom of God",
      lyrics: [
        { label: "Verse 1", lines: [
          "Oh that I could see your face",
          "How I'm longing for the day",
          "Brighter sun of holy grace",
          "Make my heart a holy place"
        ]},
        { label: "Chorus", lines: [
          "Blessed are the poor who have nothing to own",
          "Blessed are the mourners who are crying alone",
          "Blessed are the guilty who have nowhere to go",
          "For their hearts have a road",
          "To the kingdom of God",
          "And their souls are the songs",
          "Of the kingdom of God",
          "And they will find a refuge",
          "For theirs is the kingdom of God"
        ]},
        { label: "Verse 2", lines: [
          "Beauty shining from your face",
          "Always longed to see this place",
          "Is there somewhere I can stay?",
          "Even just a couple days?"
        ]},
        { label: "Bridge", lines: [
          "The Lord is our shepherd",
          "We shall not want",
          "Our cup runneth over and over",
          "For now and forever",
        ]},
      ]
    },
  ],


  /* --------------------------------------------------------
     ANNOUNCEMENTS
     Three is the ceiling. Anything else goes in the newsletter.
     -------------------------------------------------------- */
  announcements: [
    { title: "Midweek This Tuesday at 7 PM",
      body: "Location: The Pastor's Study." },
    { title: "Fall Kickoff Potluck",
      body: "Sunday, September 27 at 10 AM. Sign-up sheet will be at church starting next Sunday." },
  ],


  /* --------------------------------------------------------
     PRAYER
     The Collect appointed for this week.
     "Amen." is added for you at the end.
     -------------------------------------------------------- */
  collect: {
    title: "The Collect for the Seventeenth Sunday after Pentecost",
    rubric: "Prayed together, out loud.",
    text: "Grant us, Lord, not to be anxious about earthly things, but to love things heavenly; and even now, while we are placed among things that are passing away, to hold fast to those that shall endure; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever."
  },


  /* --------------------------------------------------------
     SERMON
     Just the passages. Leave "text" out if you only want the
     reference on the screen.
     -------------------------------------------------------- */
  sermon: {
    title: "The Cost of Participation",
    readings: [
      { reference: "Philippians 3:1-11 NRSV" },
    ]
  },


  /* --------------------------------------------------------
     SENDING (optional)
     Delete this whole block, or set it to null, to hide it.
     "response" is the spoken line under the blessing, printed
     in red. Leave it out to hide it.
     -------------------------------------------------------- */
  sending: {
    rubric: "Spoken with hands raised over the room.",
    text: "The Lord bless you and keep you; the Lord make his face to shine upon you, and be gracious to you; the Lord lift up his countenance upon you, and give you peace.",
    response: "In the name of the Father, Son, and Holy Spirit, Amen."
  }

};
