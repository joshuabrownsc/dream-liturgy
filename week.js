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
  date: "October 4, 2026",
  season: "The Nineteenth Sunday after Pentecost",
  title: "Incarnational Gospel",
  preacher: "Pastor Joshua Brown",


  /* --------------------------------------------------------
     THE PSALM
     Each verse has a number, a first half (a), and a second
     half (b). The asterisk between them is added for you.
     -------------------------------------------------------- */
  psalm: {
    reference: "Psalm 19",
    rubric: "Read together, the whole room, unhurried.",
    verses: [
      { n: 1, a: "The heavens declare the glory of God,",
             b: "and the firmament shows his handiwork." },
      { n: 2, a: "One day tells its tale to another,",
             b: "and one night imparts knowledge to another." },
      { n: 3, a: "Although they have no words or language,",
             b: "and their voices are not heard," },
      { n: 4, a: "Their sound has gone out into all lands,",
             b: "and their message to the ends of the world." },
      { n: 5, a: "In the deep has he set a pavilion for the sun;",
             b: "it comes forth like a bridegroom out of his chamber; it rejoices like a champion to run its course." },
      { n: 6, a: "It goes forth from the uttermost edge of the heavens and runs about to the end of it again;",
             b: "nothing is hidden from its burning heat." },
      { n: 7, a: "The law of the Lord is perfect and revives the soul;",
             b: "the testimony of the Lord is sure and gives wisdom to the innocent." },
      { n: 8, a: "The statutes of the Lord are just and rejoice the heart;",
             b: "the commandment of the Lord is clear and gives light to the eyes." },
      { n: 9, a: "The fear of the Lord is clean and endures for ever;",
             b: "the judgments of the Lord are true and righteous altogether." },
      { n: 10, a: "More to be desired are they than gold, more than much fine gold,",
             b: "sweeter far than honey, than honey in the comb." },
      { n: 11, a: "By them also is your servant enlightened,",
             b: "and in keeping them there is great reward." },
      { n: 12, a: "Who can tell how often he offends?",
             b: "cleanse me from my secret faults." },
      { n: 13, a: "Above all, keep your servant from presumptuous sins; let them not get dominion over me;",
             b: "then shall I be whole and sound, and innocent of a great offense." },
      { n: 14, a: "Let the words of my mouth and the meditation of my heart be acceptable in your sight,",
             b: "O Lord, my strength and my redeemer." }
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
      title: "Christ is Lower Still",
      lyrics: [
        { label: "Verse 1", lines: [
          "Breathe in reach out",
          "Touch the hem of Your garment now",
          "Help me heal me",
          "My mind my body and soul"
        ]},
        { label: "Chorus", lines: [
          "Let the King descend",
          "Living word made flesh",
          "Lift this heavy heart",
          "To Your throne, O God",
          "In Your wounds I find",
          "Room for all of mine",
          "When from grace I fell",
          "Christ was lower still"
        ]},
        { label: "Verse 2", lines: [
          "Humbly lowly",
          "Jesus waits in the valley",
          "My Savior suffers with me",
          "With Him I'll rise again"
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
          "He's giving me a new song to sing",
          "He's been so good to me",
          "The fear left me blind",
          "But love helped me see",
          "That he's never once forsaken me",
          "It's more than I was taught to believe",
          "He's been so good to me"
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
    title: "The Collect for the Nineteenth Sunday after Pentecost",
    rubric: "Prayed together, out loud.",
    text: "Almighty and everlasting God, you are always more ready to hear than we to pray, and to give more than we either desire or deserve: Pour upon us the abundance of your mercy, forgiving us those things of which our conscience is afraid, and giving us those good things for which we are not worthy to ask, except through the merits and mediation of Jesus Christ our Savior; who lives and reigns with you and the Holy Spirit, one God, for ever and ever."
  },


  /* --------------------------------------------------------
     SERMON
     Just the passages. Leave "text" out if you only want the
     reference on the screen.
     -------------------------------------------------------- */
  sermon: {
    title: "Incarnational Gospel",
    readings: [
      { reference: "Ephesians 2 NRSV" },
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
