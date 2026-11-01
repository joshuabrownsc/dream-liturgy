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
  date: "November 1, 2026",
  season: "All Saints Day",
  title: "I Pledge Allegiance To…",
  preacher: "Pastor Joshua Brown",


  /* --------------------------------------------------------
     THE PSALM
     Each verse has a number, a first half (a), and a second
     half (b). The asterisk between them is added for you.
     -------------------------------------------------------- */
  psalm: {
    reference: "Psalm 34:1-10, 22",
    rubric: "Read together, the whole room, unhurried.",
    verses: [
      { n: 1, a: "I will bless the LORD at all times;",
             b: "his praise shall ever be in my mouth." },
      { n: 2, a: "I will glory in the LORD;",
             b: "let the humble hear and rejoice." },
      { n: 3, a: "Proclaim with me the greatness of the LORD;",
             b: "let us exalt his Name together." },
      { n: 4, a: "I sought the LORD, and he answered me",
             b: "and delivered me out of all my terror." },
      { n: 5, a: "Look upon him and be radiant,",
             b: "and let not your faces be ashamed." },
      { n: 6, a: "I called in my affliction and the LORD heard me",
             b: "and saved me from all my troubles." },
      { n: 7, a: "The angel of the LORD encompasses those who fear him,",
             b: "and he will deliver them." },
      { n: 8, a: "Taste and see that the LORD is good;",
             b: "happy are they who trust in him!" },
      { n: 9, a: "Fear the LORD, you that are his saints,",
             b: "for those who fear him lack nothing." },
      { n: 10, a: "The young lions lack and suffer hunger,",
             b: "but those who seek the LORD lack nothing that is good." },
      { n: 22, a: "The LORD ransoms the life of his servants,",
             b: "and none will be punished who trust in him." }
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
      title: "Slow Me Down",
      lyrics: [
        { label: "Verse 1", lines: [
          "O good shepherd",
          "Would you teach me how to rest",
          "I'm rushing on",
          "Will you make me to lie down",
          "Will you build a fold",
          "By the waters that refresh",
          "Will you call my name",
          "And lead me safely out"
        ]},
        { label: "Verse 2", lines: [
          "From my anxious drive",
          "To labor on and on",
          "From the restless grind",
          "That has put my mind to sleep",
          "Will you call me back",
          "And gently slow me down",
          "Will you show me now",
          "What to lose and what to keep"
        ]},
        { label: "Chorus", lines: [
          "O Good Shepherd",
          "O good friend",
          "Slow me down",
          "Slow me down"
        ]},
        { label: "Verse 3", lines: [
          "When my table's bent",
          "With only greed and gold",
          "And my grasping hands",
          "Are afraid you won't provide",
          "Will you pour the wine",
          "That loosens up my hold",
          "Set your table here",
          "With what truly satisfies"
        ]},
        { label: "Verse 4", lines: [
          "On the busy streets",
          "Trying to make myself a name",
          "If the work is yours",
          "There is nothing I can claim",
          "Will you lead me home",
          "To the pastures of your peace",
          "And the house is yours",
          "I'm sitting at your feet"
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
          "The Lord is our shepherd, we shall not want",
          "In valley or pasture, we shall not want",
          "Our cup runneth over and over",
          "For now and forever",
          "For now and forever"
        ]},
        { label: "Verse 3", lines: [
          "Oh that I could see your face",
          "How I'm longing for the day"
        ]},
      ]
    },
    {
      title: "Psalm 139 (I Am Safe)",
      lyrics: [
        { label: "Verse 1", lines: [
          "O Lord you have searched me",
          "You know everything",
          "You know when I sit down and rise up",
          "You have searched out my path",
          "And my lying down",
          "You're acquainted with all of my ways"
        ]},
        { label: "Pre-Chorus", lines: [
          "Such knowledge is too wonderful for me"
        ]},
        { label: "Chorus", lines: [
          "If I climb up to the heavens you're there",
          "If I fall into the depths you are there",
          "If I take the wings of the morning",
          "Fly to the furthest place",
          "Even there your hand will find me",
          "Even there your hand will hold me",
          "Even there I know I'm safe"
        ]},
        { label: "Verse 2", lines: [
          "If I say surely darkness",
          "Shall pull me underneath",
          "And the night wraps itself around me",
          "Even darkness isn't darkness",
          "To the one who is the light",
          "You have guided my path so I can see"
        ]},
        { label: "Verse 3", lines: [
          "In the depths of the womb",
          "I wasn't hidden from your love",
          "Your eyes saw who I would become",
          "Every day you wrote in secret",
          "Before any came to be",
          "My life responding to divinity"
        ]},
      ]
    },
  ],


  /* --------------------------------------------------------
     ANNOUNCEMENTS
     Three is the ceiling. Anything else goes in the newsletter.
     -------------------------------------------------------- */
  announcements: [
    { title: "Midweek",
      body: "This Tuesday night." },
    { title: "Church Thanksgiving",
      body: "Sunday, November 22 at 10 AM." },
  ],


  /* --------------------------------------------------------
     PRAYER
     The Collect appointed for this week.
     "Amen." is added for you at the end.
     -------------------------------------------------------- */
  collect: {
    title: "The Collect for All Saints Day",
    rubric: "Prayed together, out loud.",
    text: "Almighty God, you have knit together your elect in one communion and fellowship in the mystical body of your Son Christ our Lord: Give us grace so to follow your blessed saints in all virtuous and godly living, that we may come to those ineffable joys that you have prepared for those who truly love you; through Jesus Christ our Lord, who with you and the Holy Spirit lives and reigns, one God, in glory everlasting."
  },


  /* --------------------------------------------------------
     SERMON
     Just the passages. Leave "text" out if you only want the
     reference on the screen.
     -------------------------------------------------------- */
  sermon: {
    title: "I Pledge Allegiance To…",
    readings: [
      { reference: "Matthew 5:1-12 NRSV" },
      { reference: "Matthew 7:24-29 NRSV" },
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
