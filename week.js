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
  date: "August 16, 2026",
  season: "The Eleventh Sunday after Pentecost",
  title: "The Fire He Came to Kindle",
  preacher: "Pastor Joshua Brown",


  /* --------------------------------------------------------
     THE PSALM
     Each verse has a number, a first half (a), and a second
     half (b). The asterisk between them is added for you.
     -------------------------------------------------------- */
  psalm: {
    reference: "Psalm 82",
    rubric: "Read together, the whole room, unhurried.",
    verses: [
      { n: 1, a: "God takes his stand in the council of heaven;",
             b: "he gives judgment in the midst of the gods:" },
      { n: 2, a: "How long will you judge unjustly,",
             b: "and show favor to the wicked?" },
      { n: 3, a: "Save the weak and the orphan;",
             b: "defend the humble and needy;" },
      { n: 4, a: "Rescue the weak and the poor;",
             b: "deliver them from the power of the wicked." },
      { n: 5, a: "They do not know, neither do they understand; they go about in darkness;",
             b: "all the foundations of the earth are shaken." },
      { n: 6, a: "Now I say to you, 'You are gods,",
             b: "and all of you children of the Most High;" },
      { n: 7, a: "Nevertheless, you shall die like mortals,",
             b: "and fall like any prince.'" },
      { n: 8, a: "Arise, O God, and rule the earth,",
             b: "for you shall take all nations for your own." }
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
      title: "Come Thou Fount of Every Blessing",
      lyrics: [
        { label: "Verse 1", lines: [
          "Come, thou fount of every blessing,",
          "tune my heart to sing thy grace;",
          "streams of mercy, never ceasing,",
          "call for songs of loudest praise."
        ]},
        { label: "Verse 3", lines: [
          "O to grace how great a debtor",
          "daily I'm constrained to be;",
          "let thy goodness, like a fetter,",
          "bind my wandering heart to thee."
        ]}
      ]
    },
    {
      title: "Holy, Holy, Holy"
    },
    {
      title: "Song Title Here"
    }
  ],


  /* --------------------------------------------------------
     ANNOUNCEMENTS
     Three is the ceiling. Anything else goes in the newsletter.
     -------------------------------------------------------- */
  announcements: [
    { title: "Sunday Lunch, August 23",
      body: "We are eating together after the service in the fellowship space. Bring something to share if you can, and come anyway if you can't." },
    { title: "Baptism Sunday, September 6",
      body: "If you want to be baptized, talk to Joshua after the service or reply to the newsletter this week." }
  ],


  /* --------------------------------------------------------
     PRAYER
     The Collect appointed for this week.
     "Amen." is added for you at the end.
     -------------------------------------------------------- */
  collect: {
    title: "The Collect for the Eleventh Sunday after Pentecost",
    rubric: "Prayed together, out loud.",
    text: "Almighty God, you have given your only Son to be for us a sacrifice for sin, and also an example of godly life: Give us grace to receive thankfully the fruits of his redeeming work, and to follow daily in the blessed steps of his most holy life; through Jesus Christ your Son our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever."
  },


  /* --------------------------------------------------------
     SERMON
     Just the passages. Leave "text" out if you only want the
     reference on the screen.
     -------------------------------------------------------- */
  sermon: {
    title: "The Fire He Came to Kindle",
    readings: [
      { reference: "Luke 12:49–56" },
      { reference: "Hebrews 11:29 – 12:2" }
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
