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
        ]},
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
