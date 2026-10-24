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
  date: "October 25, 2026",
  season: "The Twenty-second Sunday after Pentecost",
  title: "Calling Things Up From The Dead",
  preacher: "Pastor Joshua Brown",


  /* --------------------------------------------------------
     THE PSALM
     Each verse has a number, a first half (a), and a second
     half (b). The asterisk between them is added for you.
     -------------------------------------------------------- */
  psalm: {
    reference: "Psalm 90:1-6, 13-17",
    rubric: "Read together, the whole room, unhurried.",
    verses: [
      { n: 1, a: "Lord, you have been our refuge",
             b: "from one generation to another." },
      { n: 2, a: "Before the mountains were brought forth, or the land and the earth were born,",
             b: "from age to age you are God." },
      { n: 3, a: "You turn us back to the dust and say,",
             b: "\"Go back, O child of earth.\"" },
      { n: 4, a: "For a thousand years in your sight are like yesterday when it is past",
             b: "and like a watch in the night." },
      { n: 5, a: "You sweep us away like a dream;",
             b: "we fade away suddenly like the grass." },
      { n: 6, a: "In the morning it is green and flourishes;",
             b: "in the evening it is dried up and withered." },
      { n: 13, a: "Return, O LORD, how long will you tarry?",
             b: "be gracious to your servants." },
      { n: 14, a: "Satisfy us by your loving-kindness in the morning;",
             b: "so shall we rejoice and be glad all the days of our life." },
      { n: 15, a: "Make us glad by the measure of the days that you afflicted us",
             b: "and the years in which we suffered adversity." },
      { n: 16, a: "Show your servants your works",
             b: "and your splendor to their children." },
      { n: 17, a: "May the graciousness of the LORD our God be upon us;",
             b: "prosper the work of our hands; prosper our handiwork." }
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
      title: "The One You Love (feat. Chandler Moore)",
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
          "Even when I think I don't deserve it",
          "Yes, I am a perfect child",
          "But I still make my Father smile",
          "I know you're proud of me"
        ]},
        { label: "Bridge", lines: [
          "Your love, Your love never fails",
          "Your love never fails"
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
    {
      title: "Psalm 139 (I Am Safe)",
      lyrics: [
        { label: "Verse 1", lines: [
          "O Lord you have searched me",
          "You know everything",
          "You know when I sit down and rise up",
          "You have searched out my path",
          "And my lying down",
          "You're acquainted with all of my ways"
        ]},
        { label: "Pre-Chorus", lines: [
          "Such knowledge is too wonderful for me"
        ]},
        { label: "Chorus", lines: [
          "If I climb up to the heavens you're there",
          "If I fall into the depths you are there",
          "If I take the wings of the morning",
          "Fly to the furthest place",
          "Even there your hand will find me",
          "Even there your hand will hold me",
          "Even there I know I'm safe"
        ]},
        { label: "Verse 2", lines: [
          "If I say surely darkness",
          "Shall pull me underneath",
          "And the night wraps itself around me",
          "Even darkness isn't darkness",
          "To the one who is the light",
          "You have guided my path so I can see"
        ]},
        { label: "Verse 3", lines: [
          "In the depths of the womb",
          "I wasn't hidden from your love",
          "Your eyes saw who I would become",
          "Every day you wrote in secret",
          "Before any came to be",
          "My life responding to divinity"
        ]},
      ]
    },
  ],


  /* --------------------------------------------------------
     ANNOUNCEMENTS
     Three is the ceiling. Anything else goes in the newsletter.
     -------------------------------------------------------- */
  announcements: [
    { title: "Midweek",
      body: "No Midweek this Tuesday." },
    { title: "Dream Family Thanksgiving",
      body: "Sunday, November 22 at 10 AM." },
  ],


  /* --------------------------------------------------------
     PRAYER
     The Collect appointed for this week.
     "Amen." is added for you at the end.
     -------------------------------------------------------- */
  collect: {
    title: "The Collect for the Twenty-second Sunday after Pentecost",
    rubric: "Prayed together, out loud.",
    text: "Almighty and everliving God, you have made all things in your wisdom and established the boundaries of life and death: Grant that we may obey your voice in this world, and in the world to come may enjoy that rest and peace which you have appointed for your people; through Jesus Christ who is Resurrection and Life, and who lives and reigns for ever and ever."
  },


  /* --------------------------------------------------------
     SERMON
     Just the passages. Leave "text" out if you only want the
     reference on the screen.
     -------------------------------------------------------- */
  sermon: {
    title: "Calling Things Up From The Dead",
    readings: [
      { reference: "1 Samuel 28:3-25" },
      { reference: "Psalm 130" },
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
