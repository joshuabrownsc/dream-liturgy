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
  date: "August 23, 2026",
  season: "The Thirteenth Sunday after Pentecost",
  title: "Keepers of the Flame",
  preacher: "Pastor Joshua Brown",


  /* --------------------------------------------------------
     THE PSALM
     Each verse has a number, a first half (a), and a second
     half (b). The asterisk between them is added for you.
     -------------------------------------------------------- */
psalm: {
    reference: "Psalm 138",
    rubric: "Read together, the whole room, unhurried.",
    verses:   psalm: {
    reference: "Psalm 138",
    rubric: "Read together, the whole room, unhurried.",
    verses: [
      { n: 1, a: "I will give thanks to you, O Lord, with my whole heart;",
             b: "before the gods I will sing your praise." },
      { n: 2, a: "I will bow down toward your holy temple and praise your Name,",
             b: "because of your love and faithfulness;" },
      { n: 3, a: "For you have glorified your Name",
             b: "and your word above all things." },
      { n: 4, a: "When I called, you answered me;",
             b: "you increased my strength within me." },
      { n: 5, a: "All the kings of the earth will praise you, O Lord,",
             b: "when they have heard the words of your mouth." },
      { n: 6, a: "They will sing of the ways of the Lord,",
             b: "that great is the glory of the Lord." },
      { n: 7, a: "Though the Lord be high, he cares for the lowly;",
             b: "he perceives the haughty from afar." },
      { n: 8, a: "Though I walk in the midst of trouble, you keep me safe;",
             b: "you stretch forth your hand against the fury of my enemies; your right hand shall save me." },
      { n: 9, a: "The Lord will make good his purpose for me;",
             b: "O Lord, your love endures for ever; do not abandon the works of your hands." }
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
          "Cause that is the promise you made",
          "When it's hard to see, I'll choose to believe",
          "You see what I haven't yet",
          "When I'm afraid you remind me",
          "I'm in your capable hands",
          "I look back and notice, it's you who's been closest",
          "To help me to never forget"
        ]},
        { label: "Chorus", lines: [
          "You have good plans",
          "If it's not good then you're not finished yet",
          "You have good plans",
          "It's true in the palace, it's true in the pit",
          "If you're in control then I'm lifting my hands",
          "You have good good plans"
        ]},
        { label: "Verse 2", lines: [
          "I know that good things are coming",
          "Cause that is the promise you made",
          "The times that are tested still come with a blessing",
          "And grace after grace after grace"
        ]},
        { label: "Bridge", lines: [
          "You're gonna lead me from glory to glory",
          "You're not done writing the best of my story"
        ]},
      ]
    },
    {
      title: "Fear Is Not My Future",
      lyrics: [
        { label: "Verse 1", lines: [
          "Let him turn it in your favor",
          "Watch him work it for your good",
          "He's not done with what he's started",
          "He's not done until it's good"
        ]},
        { label: "Chorus", lines: [
          "Hello peace, hello joy, hello love",
          "Hello strength, hello hope, it's a new horizon"
        ]},
        { label: "Verse 2", lines: [
          "If you're ready for a breakthrough",
          "Just open up and just receive",
          "Cause what he's pouring out is nothing",
          "You've ever seen"
        ]},
        { label: "Bridge", lines: [
          "Fear is not my future, you are",
          "Sickness is not my story, you are",
          "Heartbreak is not my home, you are",
          "Death is not the end, you are"
        ]},
      ]
    },
    {
      title: "Worthy of It All",
      lyrics: [
        { label: "Verse", lines: [
          "All the saints and angels",
          "Bow before the throne",
          "All the elders cast",
          "Their crowns before the Lamb of God and sing"
        { label: "Chorus", lines: [
          "You're worthy of it all",
          "You're worthy of it all",
          "From you are all things",
          "To you are all things",
          "You deserve the glory"
        ]},
        { label: "Bridge", lines: [
          "Day and night, night and day",
          "Let incense arise"
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
      body: "We will be continuing in Acts 7 and 8. Check GroupMe for all details." },
  ],


  /* --------------------------------------------------------
     PRAYER
     The Collect appointed for this week.
     "Amen." is added for you at the end.
     -------------------------------------------------------- */
  collect: {
    title: "The Collect for the Thirteenth Sunday after Pentecost",
    rubric: "Prayed together, out loud.",
    text: "Grant, O merciful God, that your Church, being gathered together in unity by your Holy Spirit, may show forth your power among all peoples, to the glory of your Name; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen."
  },


  /* --------------------------------------------------------
     SERMON
     Just the passages. Leave "text" out if you only want the
     reference on the screen.
     -------------------------------------------------------- */
  sermon: {
    title: "Keepers of the Flame",
    readings: [
      { reference: "1 Peter 2:1-10 NRSV" },
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
