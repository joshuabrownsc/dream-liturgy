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
  date: "September 6, 2026",
  season: "The Fifteenth Sunday after Pentecost",
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
      title: "Incarnate Love",
      lyrics: [
        { label: "Verse 1", lines: [
          "What love is this?",
          "Born to a world with no room for him",
          "What love is this?",
          "He took on flesh and gave his life so we could live again"
        ]},
        { label: "Pre-Chorus", lines: [
          "From the beginning of it all",
          "He knew that he would never let his children fall" 
        ]},
        { label: "Chorus", lines: [
          "Incarnate love",
          "Left the ninety-nine to save our lives",
          "And carry us back home",
          "Incarnate love",
          "Placed in a grave three days away",
          "From life forevermore" 
        ]},
         { label: "Verse 2", lines: [
          "What love is this?",
          "That a man would give himself to resurrect his friends",
          "What love is this?",
          "When on the cross, hope in his eyes, he prayed forgive them"
        ]},
        { label: "Bridge", lines: [
          "His hands have never held us closer",
          "To dance the dance of all creation",
          "His plan was always our redemption",
          "This is where we belong"
        ]},
      ]
    },
    {
      title: "Defender",
      lyrics: [
        { label: "Verse 1", lines: [
          "You go before I know",
          "That you've even gone to win my war",
          "You come back with the head of my enemy",
          "You come back and you call it my victory"
        ]},
        { label: "Verse 2", lines: [
          "You go before I know",
          "That you've even gone to win my war",
          "Your love becomes my greatest defense",
          "It leads me from the dry wilderness"
        ]},
        { label: "PreChorus", lines: [
          "All I did was praise",
          "All I did was worship",
          "All I did was bow down",
          "All I did was stay still"
        ]},
        { label: "Chorus", lines: [
          "Hallelujah you have saved me",
          "So much better your way",
          "Hallelujah great defender",
          "So much better your way"
        ]},
        { label: "Verse 3", lines: [
          "You know before I do",
          "Where my heart can seek to find your truth",
          "Your mercy is the shade I'm living in",
          "You restore my faith in hope again"
        ]},
        { label: "Bridge", lines: [
          "When I thought I lost me you knew where I left me",
          "You reintroduced me to your love",
          "You picked up all my pieces put me back together",
          "You are the defender of my heart" 
        ]},
      ]
    },
    {
      title: "Good Shepherd",
      lyrics: [
        { label: "Verse 1", lines: [
          "You make me lie down in fields of green",
          "Find rest by quiet streams",
          "My soul restoring",
          "Your rod and staff they comfort me",
          "I'll follow where you lead",
          "Fearing nothing"
        ]},
        { label: "Chorus", lines: [
          "Good shepherd",
          "Lead me on",
          "Good shepherd",
          "Now I'm right where I belong",
          "I belong here" 
        ]},
        { label: "Verse 2", lines: [
          "You prepare a table before me with all my enemies",
          "And serve forgiveness",
          "Your goodness and mercy shadow me for all my history",
          "Until I see heaven"
        ]},
        { label: "Bridge", lines: [
          "All my days I will stay",
          "In the house of my father",
          "All my days I'll remain",
          "In the arms of the good shepherd",
        ]},
         { label: "Verse 3", lines: [
          "Where my soul has finally found its rest",
          "And I have no regret",
          "I'm in need of nothing"
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
      body: "Check GroupMe for all details." },
    { title: "Fall Kickoff Potluck",
      body: "Sunday, September 27 at 10 AM. Sign-up sheet will be at church starting next Sunday." },
  ],


  /* --------------------------------------------------------
     PRAYER
     The Collect appointed for this week.
     "Amen." is added for you at the end.
     -------------------------------------------------------- */
  collect: {
    title: "The Collect for the Fourteenth Sunday after Pentecost",
    rubric: "Prayed together, out loud.",
    text: "Grant us, O Lord, to trust in you with all our hearts; for, as you always resist the proud who confide in their own strength, so you never forsake those who make their boast of your mercy; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever."
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
