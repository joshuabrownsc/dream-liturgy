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
  date: "November 8, 2026",
  season: "The Twenty-third Sunday after Pentecost",
  title: "Hear the Word of the Lord",
  preacher: "Pastor Joshua Brown",


  /* --------------------------------------------------------
     THE PSALM
     Each verse has a number, a first half (a), and a second
     half (b). The asterisk between them is added for you.
     -------------------------------------------------------- */
  psalm: {
    reference: "Psalm 70",
    rubric: "Read together, the whole room, unhurried.",
    verses: [
      { n: 1, a: "Be pleased, O God, to deliver me;",
             b: "O LORD, make haste to help me." },
      { n: 2, a: "Let those who seek my life be ashamed and altogether dismayed;",
             b: "let those who take pleasure in my misfortune draw back and be disgraced." },
      { n: 3, a: "Let those who say to me \"Aha!\" and gloat over me turn back,",
             b: "because they are ashamed." },
      { n: 4, a: "Let all who seek you rejoice and be glad in you;",
             b: "let those who love your salvation say for ever, \"Great is the LORD!\"" },
      { n: 5, a: "But as for me, I am poor and needy;",
             b: "come to me speedily, O God." },
      { n: 6, a: "You are my helper and my deliverer;",
             b: "O LORD, do not tarry." }
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
      title: "Promised Land",
      lyrics: [
        { label: "Verse 1", lines: [
          "I know that You've been good to me",
          "I know that You've been good to me",
          "I know that You've been good to me",
          "More than I ever hoped",
          "I know that You've been good to me",
          "I know that You've been good to me",
          "I know that You've been good to me",
          "More than I ever hoped"
        ]},
        { label: "Chorus", lines: [
          "It's a promised land, I'm never leaving",
          "It's a promised land, I'm never leaving",
          "It's a promised land, I'm never leaving",
          "I'm never leaving You"
        ]},
        { label: "Verse 2", lines: [
          "I know that You're still in control",
          "I know that You're still in control",
          "I know that You're still in control",
          "You never ever change",
          "I know that You're still in control",
          "I know that You're still in control",
          "I know that You're still in control",
          "You never ever change"
        ]},
        { label: "Bridge", lines: [
          "You pulled back the curtain and let in the light",
          "You pulled back the curtain and let in the light",
          "You let in the light"
        ]},
      ]
    },
    {
      title: "Goodness Of God",
      lyrics: [
        { label: "Verse 1", lines: [
          "I love you, Lord",
          "For your mercy never fails me",
          "All my days, I've been held in your hands",
          "From the moment that I wake up",
          "Until I lay my head",
          "I will sing of the goodness of God"
        ]},
        { label: "Chorus", lines: [
          "All my life you have been faithful",
          "All my life you have been so, so good",
          "With every breath that I am able",
          "I will sing of the goodness of God"
        ]},
        { label: "Verse 2", lines: [
          "I love your voice",
          "You have led me through the fire",
          "In darkest night you are close like no other",
          "I've known you as a father",
          "I've known you as a friend",
          "I have lived in the goodness of God"
        ]},
        { label: "Bridge", lines: [
          "Your goodness is running after",
          "It's running after me",
          "Your goodness is running after",
          "It's running after me",
          "With my life laid down, I'm surrendered now",
          "I give you everything",
          "Your goodness is running after",
          "It's running after me"
        ]},
      ]
    },
    {
      title: "Incarnate Love",
      lyrics: [
        { label: "Verse 1", lines: [
          "What love is this",
          "Born to a world with no room for him",
          "What love is this",
          "He took on flesh and gave his life so we could live again"
        ]},
        { label: "Pre-Chorus", lines: [
          "From the beginning of it all",
          "He knew that he would never let his children fall"
        ]},
        { label: "Chorus", lines: [
          "Incarnate love",
          "Left the ninety-nine",
          "To save our lives",
          "And carry us back home",
          "Incarnate love",
          "Placed in a grave",
          "3 days away",
          "From life forevermore"
        ]},
        { label: "Verse 2", lines: [
          "What love is this?",
          "That a man would give himself to resurrect his friends",
          "What love is this?",
          "When on the cross, hope in his eyes, he prayed forgive them"
        ]},
        { label: "Bridge", lines: [
          "His hands",
          "Have never held us closer",
          "To dance",
          "The dance of all creation",
          "His plan",
          "Was always our redemption",
          "This is where we belong"
        ]},
        { label: "Chorus 2", lines: [
          "Incarnate love",
          "Left the ninety-nine",
          "To save my life",
          "And carry me back home",
          "Incarnate love",
          "Conquered the grave",
          "And now he reigns",
          "In life forevermore"
        ]},
      ]
    },
  ],


  /* --------------------------------------------------------
     ANNOUNCEMENTS
     Three is the ceiling. Anything else goes in the newsletter.
     -------------------------------------------------------- */
  announcements: [
    { title: "Dream Family Thanksgiving",
      body: "Sunday, November 22 at 10 AM at the Pastor's Study. Sign up sheet is in the back near the coffee area." },
    { title: "Midweek",
      body: "No Midweek this week." },
  ],


  /* --------------------------------------------------------
     PRAYER
     The Collect appointed for this week.
     "Amen." is added for you at the end.
     -------------------------------------------------------- */
  collect: {
    title: "The Collect for Proper 27",
    rubric: "Prayed together, out loud.",
    text: "O God, whose blessed Son came into the world that he might destroy the works of the devil and make us children of God and heirs of eternal life: Grant that, having this hope, we may purify ourselves as he is pure; that, when he comes again with power and great glory, we may be made like him in his eternal and glorious kingdom; where he lives and reigns with you and the Holy Spirit, one God, for ever and ever."
  },


  /* --------------------------------------------------------
     SERMON
     Just the passages. Leave "text" out if you only want the
     reference on the screen.
     -------------------------------------------------------- */
  sermon: {
    title: "Hear the Word of the Lord",
    readings: [
      { reference: "Jeremiah 22:29 NRSV" },
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
