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
  date: "August 30, 2026",
  season: "The Fourteenth Sunday after Pentecost",
  title: "Sunday Service",
  preacher: "Matthew Brown",


  /* --------------------------------------------------------
     THE PSALM
     Each verse has a number, a first half (a), and a second
     half (b). The asterisk between them is added for you.
     -------------------------------------------------------- */
  psalm: {
    reference: "Psalm 26",
    rubric: "Read together, the whole room, unhurried.",
    verses: [
      { n: 1, a: "Give judgment for me, O Lord, for I have lived with integrity;",
             b: "I have trusted in the Lord and have not faltered." },
      { n: 2, a: "Test me, O Lord, and try me;",
             b: "examine my heart and my mind." },
      { n: 3, a: "For your love is before my eyes;",
             b: "I have walked faithfully with you." },
      { n: 4, a: "I have not sat with the worthless,",
             b: "nor do I consort with the deceitful." },
      { n: 5, a: "I have hated the company of evildoers;",
             b: "I will not sit down with the wicked." },
      { n: 6, a: "I will wash my hands in innocence, O Lord,",
             b: "that I may go in procession round your altar," },
      { n: 7, a: "Singing aloud a song of thanksgiving",
             b: "and recounting all your wonderful deeds." },
      { n: 8, a: "Lord, I love the house in which you dwell",
             b: "and the place where your glory abides." },
      { n: 9, a: "Do not sweep me away with sinners,",
             b: "nor my life with those who thirst for blood," },
      { n: 10, a: "Whose hands are full of evil plots,",
              b: "and their right hand full of bribes." },
      { n: 11, a: "As for me, I will live with integrity;",
              b: "redeem me, O Lord, and have pity on me." },
      { n: 12, a: "My foot stands on level ground;",
              b: "in the full assembly I will bless the Lord." }
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
      title: "What a God",
      lyrics: [
        { label: "Verse 1", lines: [
          "Who thought I'd find you at the lowest place?",
          "Who thought you'd feel me in the crowd?",
          "Who knew you make good of my mistakes?",
          "You're nothing like I thought you were, you're better"
        ]},
        { label: "Chorus", lines: [
          "What a God, What a God"
        ]},
        { label: "Verse 2", lines: [
          "I thought you'd show up for perfection",
          "Cause what kind of God looks for the lost?",
          "Then say it's over for a sinner",
          "Although you say, \"No it's not, no, it's not\"",
          "You say, \"No it's not, no it's not\""
        ]},
        { label: "Bridge", lines: [
          "If the highest place I reach is at your feet",
          "Then I've done it all",
          "If the best thing that I've seen is your glory",
          "Then I've seen it all",
          "Your love has changed my life, forever satisfied",
          "God you are my everything",
          "If one word is the only thing you speak",
          "Then I've heard it all",
          "If I feel your heart and never see your hand",
          "I still have it all",
          "No treasure of this life, could ever satisfy",
          "God you are my everything"
        ]},
      ]
    },
    {
      title: "Carpenter Boy",
      lyrics: [
        { label: "Verse 1", lines: [
          "Carpenter Boy of Bethlehem",
          "Son of God made Son of Man",
          "Finished his days with splintered hands",
          "A taste of what would come ahead"
        ]},
        { label: "PreChorus", lines: [
          "Do you think that when he hung there",
          "The smell of wood reminded him of home?",
          "Did the sound of nails meeting wood",
          "Remind him of a time when he was not alone?"
        ]},
        { label: "Chorus", lines: [
          "Behold him",
          "The one who left his kingdom to be broken",
          "The one who put the cross upon his shoulders",
          "The king of kings has come and made me whole"
        ]},
        { label: "Verse 2", lines: [
          "Carpenter Boy, the perfect lamb",
          "Trusting in his father's plan",
          "No matter what would come ahead",
          "He'd be faithful to the very end"
        ]},
        { label: "Chorus", lines: [
          "Behold him",
          "The one who left his kingdom to be broken",
          "The one who put the cross upon his shoulders",
          "The king of kings has come and made me whole",
          "Praise the Savior",
          "Who died upon a tree that he created",
          "He carved my name, it's written up in heaven",
          "The Carpenter is building us a home"
        ]},
        { label: "Bridge", lines: [
          "He's building us a home"
        ]},
        { label: "PreChorus Two", lines: [
          "When his body gave its last breath",
          "And death rejoiced and sang their victory",
          "As his body laid in darkness",
          "He seemed to be surrounded by defeat",
          "But when that Son rose on that Sunday",
          "The Light of the World had rolled away the stone",
          "Oh, can you hear the heavens roaring",
          "Singing, \"Holy is, Holy is the Lord!\"?"
        ]}
      ]
    },
    {
      title: "Home to Me",
      lyrics: [
        { label: "Verse 1", lines: [
          "Like an unborn baby",
          "In a mother's womb",
          "Before my lungs could breathe",
          "I was alive in you",
          "Before my eyes were open",
          "Before my tongue could speak",
          "Before the bond was broken between you and me",
          "You were home to me"
        ]},
        { label: "Chorus", lines: [
          "You are home, home to me",
          "You are patient and kind",
          "You are peace, peace to me",
          "You are never failing"
        ]},
        { label: "Verse 2", lines: [
          "Like a house out in the country",
          "Like a boy out on the sea",
          "Like a river going somewhere",
          "We all want to be",
          "Like a voice that's so familiar",
          "Like the ground beneath my feet",
          "Like the way I always know how close you are to me",
          "You are home"
        ]},
        { label: "Bridge", lines: [
          "You are where we all come from",
          "You are where we long to go",
          "We have journeyed far from Eden",
          "And we are coming home",
          "Let our lives be filled with wonder",
          "Let our lives be filled with song",
          "May the way of Jesus lead back where we belong"
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
  ],


  /* --------------------------------------------------------
     PRAYER
     The Collect appointed for this week.
     "Amen." is added for you at the end.
     -------------------------------------------------------- */
  collect: {
    title: "The Collect for the Fourteenth Sunday after Pentecost",
    rubric: "Prayed together, out loud.",
    text: "Lord of all power and might, the author and giver of all good things: Graft in our hearts the love of your Name; increase in us true religion; nourish us with all goodness; and bring forth in us the fruit of good works; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever."
  },


  /* --------------------------------------------------------
     SERMON
     Just the passages. Leave "text" out if you only want the
     reference on the screen.
     -------------------------------------------------------- */
  sermon: {
    title: "Sunday Sermon",
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
