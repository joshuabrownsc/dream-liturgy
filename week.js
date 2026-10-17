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
  date: "October 18, 2026",
  season: "The Twenty-first Sunday after Pentecost",
  title: "Asleep in the Storm",
  preacher: "Pastor Joshua Brown",


  /* --------------------------------------------------------
     THE PSALM
     Each verse has a number, a first half (a), and a second
     half (b). The asterisk between them is added for you.
     -------------------------------------------------------- */
  psalm: {
    reference: "Psalm 96:1-9, (10-13)",
    rubric: "Read together, the whole room, unhurried.",
    verses: [
      { n: 1, a: "Sing to the LORD a new song;",
             b: "sing to the LORD, all the whole earth." },
      { n: 2, a: "Sing to the LORD and bless his Name;",
             b: "proclaim the good news of his salvation from day to day." },
      { n: 3, a: "Declare his glory among the nations",
             b: "and his wonders among all peoples." },
      { n: 4, a: "For great is the LORD and greatly to be praised;",
             b: "he is more to be feared than all gods." },
      { n: 5, a: "As for all the gods of the nations, they are but idols;",
             b: "but it is the LORD who made the heavens." },
      { n: 6, a: "Oh, the majesty and magnificence of his presence!",
             b: "Oh, the power and the splendor of his sanctuary!" },
      { n: 7, a: "Ascribe to the LORD, you families of the peoples;",
             b: "ascribe to the LORD honor and power." },
      { n: 8, a: "Ascribe to the LORD the honor due his Name;",
             b: "bring offerings and come into his courts." },
      { n: 9, a: "Worship the LORD in the beauty of holiness;",
             b: "let the whole earth tremble before him." },
      { n: 10, a: "Tell it out among the nations: \"The LORD is King!",
             b: "he has made the world so firm that it cannot be moved; he will judge the peoples with equity.\"" },
      { n: 11, a: "Let the heavens rejoice, and let the earth be glad; let the sea thunder and all that is in it;",
             b: "let the field be joyful and all that is therein." },
      { n: 12, a: "Then shall all the trees of the wood shout for joy before the LORD when he comes,",
             b: "when he comes to judge the earth." },
      { n: 13, a: "He will judge the world with righteousness",
             b: "and the peoples with his truth." }
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
      title: "Plans",
      lyrics: [
        { label: "Verse 1", lines: [
          "I've got a hope and a future",
          "Still true through the thick and the thin",
          "When it's hard to see, I'll choose to believe",
          "That You see what I haven't yet",
          "When I'm afraid, You remind me",
          "I'm in Your capable hands",
          "I look back and notice, it's You that's been closest",
          "To help me to never forget"
        ]},
        { label: "Chorus", lines: [
          "You have good plans",
          "If it's not good, then You're not finished yet",
          "You have good plans",
          "It's true in the palace and true in the pit",
          "If You're in control, then I'm lifting my hands",
          "You have good, good plans",
          "Yes, You have good, good plans"
        ]},
        { label: "Verse 2", lines: [
          "I know that good things are coming",
          "'Cause that is the promise You made",
          "The times that are tested still come with a blessing",
          "Grace after grace after grace"
        ]},
        { label: "Bridge", lines: [
          "You're gonna lead me from glory to glory",
          "You're not done writing the best of my story"
        ]},
      ]
    },
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
      title: "Gratitude",
      lyrics: [
        { label: "Verse 1", lines: [
          "All my words fall short",
          "I got nothing new",
          "How could I express",
          "All my gratitude?"
        ]},
        { label: "Verse 2", lines: [
          "I could sing these songs",
          "As I often do",
          "But every song must end",
          "And you never do"
        ]},
        { label: "Chorus", lines: [
          "So I throw up my hands",
          "And praise You again and again",
          "'Cause all that I have is a hallelujah",
          "Hallelujah",
          "And I know it's not much",
          "But I've nothing else fit for a King",
          "Except for a heart singing hallelujah",
          "Hallelujah"
        ]},
        { label: "Verse 3", lines: [
          "I've got one response",
          "I've got just one move",
          "With my arm stretched wide",
          "I will worship You"
        ]},
        { label: "Bridge", lines: [
          "Come on, my soul. Don't you get shy on me",
          "Lift up your song",
          "'Cause you've got a lion inside of those lungs",
          "Get up and praise the Lord"
        ]},
        { label: "Bridge Turnaround", lines: [
          "Praise the Lord",
          "Praise the Lord",
          "Praise the Lord"
        ]},
      ]
    },
  ],


  /* --------------------------------------------------------
     ANNOUNCEMENTS
     Three is the ceiling. Anything else goes in the newsletter.
     -------------------------------------------------------- */
  announcements: [
    { title: "Midweek at The Pastor's Study",
      body: "Tuesday, October 20." },
  ],


  /* --------------------------------------------------------
     PRAYER
     The Collect appointed for this week.
     "Amen." is added for you at the end.
     -------------------------------------------------------- */
  collect: {
    title: "The Collect for the Twenty-first Sunday after Pentecost",
    rubric: "Prayed together, out loud.",
    text: "Almighty and everlasting God, in Christ you have revealed your glory among the nations: Preserve the works of your mercy, that your Church throughout the world may persevere with steadfast faith in the confession of your Name; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever."
  },


  /* --------------------------------------------------------
     SERMON
     Just the passages. Leave "text" out if you only want the
     reference on the screen.
     -------------------------------------------------------- */
  sermon: {
    title: "Asleep in the Storm",
    readings: [
      { reference: "Luke 8:22-25 NRSV" },
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
