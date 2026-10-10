/* ============================================================
   week.js — THIS IS THE ONLY FILE YOU CHANGE EACH WEEK.

   Rules of thumb:
   - Anything you leave empty ("" or []) disappears from the page.
   - Delete a whole section (set it to null) and it disappears too.
   - Keep the commas and quote marks exactly where they are.
   - Apostrophes inside text are fine. Quotation marks inside text
     need a backslash in front, like this: \\\"Come and see.\\\"
   ============================================================ */

const WEEK = {

  /* --------------------------------------------------------
     THE HEADER
     -------------------------------------------------------- */
  date: "October 11, 2026",
  season: "The Twentieth Sunday after Pentecost",
  title: "The Illogical Kingdom of God",
  preacher: "Pastor Joshua Brown",


  /* --------------------------------------------------------
     THE PSALM
     Each verse has a number, a first half (a), and a second
     half (b). The asterisk between them is added for you.
     -------------------------------------------------------- */
  psalm: {
    reference: "Psalm 106:1-6, 19-23",
    rubric: "Read together, the whole room, unhurried.",
    verses: [
      { n: 1, a: "Hallelujah! Give thanks to the LORD, for he is good,",
             b: "for his mercy endures for ever." },
      { n: 2, a: "Who can declare the mighty acts of the LORD",
             b: "or show forth all his praise?" },
      { n: 3, a: "Happy are those who act with justice",
             b: "and always do what is right!" },
      { n: 4, a: "Remember me, O LORD, with the favor you have for your people,",
             b: "and visit me with your saving help;" },
      { n: 5, a: "That I may see the prosperity of your elect and be glad with the gladness of your people,",
             b: "that I may glory with your inheritance." },
      { n: 6, a: "We have sinned as our forebears did;",
             b: "we have done wrong and dealt wickedly." },
      { n: 19, a: "Israel made a bull-calf at Horeb",
             b: "and worshiped a molten image;" },
      { n: 20, a: "And so they exchanged their Glory",
             b: "for the image of an ox that feeds on grass." },
      { n: 21, a: "They forgot God their Savior,",
             b: "who had done great things in Egypt," },
      { n: 22, a: "Wonderful deeds in the land of Ham,",
             b: "and fearful things at the Red Sea." },
      { n: 23, a: "So he would have destroyed them, had not Moses his chosen stood before him in the breach,",
             b: "to turn away his wrath from consuming them." }
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
        { label: "Pre-Chorus", lines: [
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
        { label: "Chorus 2", lines: [
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
          "He's building us a home",
          "Oh-oh-oh, oh, oh"
        ]},
        { label: "Pre-Chorus 2", lines: [
          "When his body gave its last breath",
          "And death rejoiced and sang their victory",
          "As his body laid in darkness",
          "He seemed to be surrounded by defeat",
          "But when that Son rose on that Sunday",
          "The Light of the World had rolled away the stone",
          "Oh, can you hear the heavens roaring",
          "Singing, \"Holy is, Holy is the Lord!\"?"
        ]},
      ]
    },
    {
      title: "In the Beginning Was Love",
      lyrics: [
        { label: "Verse 1", lines: [
          "In the beginning was love",
          "And the love was with God",
          "And the love was God",
          "He was with God in the beginning",
          "And the world was made through him",
          "And so was I"
        ]},
        { label: "Chorus", lines: [
          "And there was light",
          "And the light was the light of heaven",
          "And there was goodness",
          "And the goodness walked the earth",
          "And there was beauty",
          "And the beauty would sing",
          "Like a voice in the wilderness",
          "Calling my name",
          "And before I knew what love was",
          "Love was in the beginning"
        ]},
        { label: "Verse 2", lines: [
          "In the beginning was the song",
          "And the song was with God",
          "And the song was God",
          "He was the voice in the beginning",
          "And the stars would sing for him",
          "And so will I"
        ]},
        { label: "Bridge", lines: [
          "The light shines in the dark",
          "The dark has not overcome it"
        ]},
        { label: "Coda", lines: [
          "Love was in the beginning"
        ]},
      ]
    },
    {
      title: "So Good To Me",
      lyrics: [
        { label: "Verse 1", lines: [
          "I couldn't see you",
          "But you never left me",
          "I couldn't hear your voice",
          "But you heard mine",
          "My world was chaotic",
          "But you were the peace in the storm",
          "It's deep in the valley",
          "That I learned to trust you more"
        ]},
        { label: "Chorus", lines: [
          "In the middle of the darkest night",
          "When I didn't have the strength to fight",
          "You carried me when I couldn't see",
          "You have been so good to me",
          "When the tears would just fall like rain",
          "Feeling all alone in my pain",
          "And I didn't know if I still believed",
          "You have been so good to me"
        ]},
        { label: "Verse 2", lines: [
          "I thought if I faked it",
          "I'd finally make it",
          "But you never wanted more",
          "Than all that I am",
          "You don't care about perfection",
          "You care about who I'm meant to be",
          "It's when I feel broken",
          "That I learn to trust you more"
        ]},
        { label: "Bridge", lines: [
          "Awaken my soul",
          "It's time to come home",
          "I've sown many tears",
          "But I'm reaping hope",
          "You're giving me a new song to sing",
          "You've been so good to me",
          "The fear left me blind",
          "But love helped me see",
          "That you've never once forsaken me",
          "It's more than I was taught to believe",
          "You've been so good to me"
        ]},
        { label: "Chorus 2", lines: [
          "In the middle of the darkest of nights",
          "When I didn't have the strength to fight",
          "You carried me til now I can see",
          "You have been so good to me",
          "When the tears would just fall like rain",
          "And I felt alone in all my pain",
          "You have given me the faith to believe",
          "You have been so good to me"
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
      body: "Tuesday, October 13." },
  ],


  /* --------------------------------------------------------
     PRAYER
     The Collect appointed for this week.
     "Amen." is added for you at the end.
     -------------------------------------------------------- */
  collect: {
    title: "The Collect for the Twentieth Sunday after Pentecost",
    rubric: "Prayed together, out loud.",
    text: "Lord, we pray that your grace may always precede and follow us, that we may continually be given to good works; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever."
  },


  /* --------------------------------------------------------
     SERMON
     Just the passages. Leave "text" out if you only want the
     reference on the screen.
     -------------------------------------------------------- */
  sermon: {
    title: "The Illogical Kingdom of God",
    readings: [
      { reference: "Luke 5:1-11 NRSV" },
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
