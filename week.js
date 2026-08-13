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
  season: "The Twelfth Sunday after Pentecost",
  title: "A High View of Church",
  preacher: "Pastor Joshua Brown",


  /* --------------------------------------------------------
     THE PSALM
     Each verse has a number, a first half (a), and a second
     half (b). The asterisk between them is added for you.
     -------------------------------------------------------- */
psalm: {
    reference: "Psalm 60",
    rubric: "Read together, the whole room, unhurried.",
    verses: [
      { n: 1, a: "O God, you have cast us off and broken us;",
             b: "you have been angry; oh, take us back to you again." },
      { n: 2, a: "You have shaken the earth and split it open;",
             b: "repair the cracks in it, for it totters." },
      { n: 3, a: "You have made your people know hardship;",
             b: "you have given us wine that makes us stagger." },
      { n: 4, a: "You have set up a banner for those who fear you,",
             b: "to be a refuge from the power of the bow." },
      { n: 5, a: "Save us by your right hand and answer us,",
             b: "that those who are dear to you may be delivered." },
      { n: 6, a: "God spoke from his holy place and said:",
             b: "\"I will exult and parcel out Shechem; I will divide the valley of Succoth." },
      { n: 7, a: "Gilead is mine, and Manasseh is mine;",
             b: "Ephraim is my helmet and Judah my scepter." },
      { n: 8, a: "Moab is my wash-basin; on Edom I throw down my sandal;",
             b: "and over Philistia will I shout in triumph.\"" },
      { n: 9, a: "Who will lead me into the strong city?",
             b: "who will bring me into Edom?" },
      { n: 10, a: "Have you not cast us off, O God?",
             b: "you no longer go out, O God, with our armies." },
      { n: 11, a: "Grant us your help against the enemy,",
             b: "for vain is the help of man." },
      { n: 12, a: "With God we will do valiant deeds,",
             b: "and he shall tread our enemies under foot." }
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
    { title: "Midweek This Tuesday at 7 PM",
      body: "We will be continuing in Acts 5. Check GroupMe for all details." },
    { title: "Fireflies Game | Saturday, August 22",
      body: "We are going to the Columbia Fireflies game as a church for Faith and Family Night. Purchase tickets here:
      link: "https://www.gofevo.com/event/Dreamchurch2"
      linkLabel: "Get Tickets"}
  ],


  /* --------------------------------------------------------
     PRAYER
     The Collect appointed for this week.
     "Amen." is added for you at the end.
     -------------------------------------------------------- */
  collect: {
    title: "The Collect for the Twelfth Sunday after Pentecost",
    rubric: "Prayed together, out loud.",
    text: "Almighty God, you have given your only Son to be for us a sacrifice for sin, and also an example of godly life: Give us grace to receive thankfully the fruits of his redeeming work, and to follow daily in the blessed steps of his most holy life; through Jesus Christ your Son our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen."
  },


  /* --------------------------------------------------------
     SERMON
     Just the passages. Leave "text" out if you only want the
     reference on the screen.
     -------------------------------------------------------- */
  sermon: {
    title: "A High View of Church",
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
