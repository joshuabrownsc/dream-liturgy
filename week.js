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
    reference: "Psalm 67",
    rubric: "Read together, the whole room, unhurried.",
    verses: [
      { n: 1, a: "May God be merciful to us and bless us,",
             b: "show us the light of his countenance and come to us." },
      { n: 2, a: "Let your ways be known upon earth,",
             b: "your saving health among all nations." },
      { n: 3, a: "Let the peoples praise you, O God;",
             b: "let all the peoples praise you." },
      { n: 4, a: "Let the nations be glad and sing for joy,",
             b: "for you judge the peoples with equity and guide all the nations upon earth." },
      { n: 5, a: "Let the peoples praise you, O God;",
             b: "let all the peoples praise you." },
      { n: 6, a: "The earth has brought forth her increase;",
             b: "may God, our own God, give us his blessing." },
      { n: 7, a: "May God give us his blessing,",
             b: "and may all the ends of the earth stand in awe of him." }
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
      title: "Carpenter Boy",
      lyrics: [
        { label: "Verse 1", lines: [
          "Carpenter Boy of Bethlehem",
          "Son of God made Son of Man",
          "Finished his days with splintered hands",
          "A taste of what would come ahead"
        ]},
        { label: "Pre-chorus", lines: [
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
        { label: "Pre-chorus Two", lines: [
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
      title: "The One You Love",
      lyrics: [
        { label: "Verse 1", lines: [
          "I can be real with you",
          "Say anything and not be afraid",
          "You made me and you like what you made",
          "You made me and you don't make mistakes",
          "I can be real with you" 
        ]},
        { label: "Chorus", lines: [
          "You take me just as I am",
          "You choose me all over again",
          "I am the one you love",
          "I am the one you love",
          "I don't have to prove anything",
          "There's room at your table for me",
          "I am the one you love",
          "I am the one you love"
        ]},
        { label: "Verse 2", lines: [
          "I know you're proud of me",
          "Even when I don't think I deserve it",
          "Yes, I am a perfect child",
          "And I make my father smile",
          "I know you're proud of me"
        ]},
        { label: "Chorus", lines: [
          "You take me just as I am",
          "You choose me all over again",
          "I am the one you love",
          "I am the one you love",
          "I don't have to prove anything",
          "There's room at your table for me",
          "I am the one you love",
          "I am the one you love"
        ]},
        { label: "Bridge", lines: [
          "Your love your love never fails",
          "Your love never fails"
        ]},
      ]
    },
    {
      title: "You Hold It All Together",
      lyrics: [
        { label: "Verse 1", lines: [
          "You come at the right time",
          "When I least expect it never behind",
          "So why would I be surprised",
          "When you deliver every time"
        ]},
        { label: "Pre-chorus", lines: [
          "On mountain tops you stay the same",
          "In valleys low you never change"
        ]},
        { label: "Chorus", lines: [
          "I believe that I will see",
          "The goodness of the Lord",
          "I'm confident as seasons change",
          "Your faithfulness remains"
        ]},
        { label: "Verse 2", lines: [
          "You go you go before me",
          "to prepare the blessing you made a way",
          "It's more than I could imagine",
          "More than I can fathom or comprehend"
        ]},
        { label: "Bridge", lines: [
          "God of my present, God of my future",
          "You write my story, you hold it all together"
        ]},
      ]
    },
     {
      title: "The Breastplate of Saint Patrick",
      lyrics: [
        { label: "Verse 1", lines: [
          "When my work takes me places I don't want to go",
          "Christ before me",
          "And my heart aches with sorrow as I hit the road",
          "Christ be with me"
        ]},
        { label: "Verse 2", lines: [
          "When the care of my family takes all that I have",
          "Christ within me",
          "When I'm worn and exhausted, ashamed that I'm mad",
          "Christ defend me"
        ]},
        { label: "Chorus", lines: [
          "I rise up today in a strength that is not my own",
          "I'm held by the promise of God that I'm never alone"
        ]},
        { label: "Verse 3", lines: [
          "When I'm tossed to the side and I want to give up",
          "Christ beside me",
          "When I'm busting my tail but it's never enough",
          "Christ beside me"
        ]},
        { label: "Verse 4", lines: [
          "When I work hard but someone else gets the reward",
          "God's eyes see me",
          "And I ask for promotion and they shut the door",
          "God's ears hear me"
        ]},
        { label: "Verse 5", lines: [
          "When I climb the first steps toward a long held dream",
          "Christ above me",
          "And I leap out in faith and I hope to find wings",
          "Christ beneath me"
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
      body: "We will be continuing in Acts 5. Check GroupMe for all details." },
{ title: "Fireflies Game | Saturday, August 22",
      body: "We are going to the Columbia Fireflies game as a church for Faith and Family Night. Purchase tickets here:",
      link: "https://www.gofevo.com/event/Dreamchurch2",
      linkLabel: "Get Tickets" }
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
      { reference: "1 Corinthians 12:12-27 NRSV" },
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
