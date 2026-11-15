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

 date: "November 15, 2026",

 season: "The Twenty-fifth Sunday after Pentecost",

 title: "Resistance and Establishment",

 preacher: "Pastor Joshua Brown",

/* --------------------------------------------------------
THE PSALM

 Each verse has a number, a first half (a), and a second
 half (b). The asterisk between them is added for you.

-------------------------------------------------------- */

psalm: {
 reference: "Psalm 123",
 rubric: "Read together, the whole room, unhurried.",
 verses: [
  { n: 1, a: "To you I lift up my eyes,",
   b: "to you enthroned in the heavens." },

  { n: 2, a: "As the eyes of servants look to the hand of their masters,",
   b: "and the eyes of a maid to the hand of her mistress," },

  { n: 3, a: "So our eyes look to the LORD our God,",
   b: "until he show us his mercy." },

  { n: 4, a: "Have mercy upon us, O LORD, have mercy,",
   b: "for we have had more than enough of contempt," },

  { n: 5, a: "Too much of the scorn of the indolent rich,",
   b: "and of the derision of the proud." }

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
 title: "You Hold It All Together",
 lyrics: [
  { label: "Verse 1", lines: [
   "You come, at the right time,",
   "When I least expect it,",
   "Never behind",
   "So why would I be surprised,",
   "When You deliver,",
   "Every time"
 ]},
  { label: "Pre-Chorus", lines: [
   "On mountaintops",
   "You stay the same",
   "In valleys low, You never change"
 ]},
  { label: "Chorus", lines: [
   "And I believe that I will see",
   "The goodness of the Lord",
   "I'm confident as seasons change",
   "Your faithfulness remains"
 ]},
  { label: "Verse 2", lines: [
   "You go, You go before me",
   "To prepare the blessing",
   "You made a way",
   "It's more than I could imagine",
   "More than I can fathom",
   "Or comprehend"
 ]},
  { label: "Bridge", lines: [
   "God of my present, God of my future",
   "You write my story",
   "You hold it all together"
 ]},
  { label: "Chorus 2", lines: [
   "And I believe that I will see",
   "The goodness of the Lord",
   "I'm confident as seasons change",
   "Your faithfulness remains",
   "Your faithfulness remains",
   "Your faithfulness remains",
   "Your faithfulness remains"
 ]}
 ]
},
{
 title: "Worthy Of It All",
 lyrics: [
  { label: "Verse", lines: [
   "All the saints and angels",
   "They bow before Your throne",
   "All the elders cast their crowns",
   "Before the Lamb of God and sing"
 ]},
  { label: "Chorus", lines: [
   "You are worthy of it all",
   "You are worthy of it all",
   "For from You are all things",
   "And to You are all things",
   "You deserve the glory"
 ]},
  { label: "Bridge", lines: [
   "Day and night night and day let incense arise",
   "Day and night night and day let incense arise",
   "Day and night night and day let incense arise",
   "Day and night night and day"
 ]}
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
   "That you've never once",
   "forsaken me",
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
 ]}
 ]
}
],

/* --------------------------------------------------------
ANNOUNCEMENTS

 Three is the ceiling. Anything else goes in the newsletter.
-------------------------------------------------------- */

announcements: [
 { title: "Dream Family Thanksgiving",
  body: "Sunday, November 22 at 10:30 AM at the Pastor's Study. Sign up sheet is in the back near the coffee area." },
 { title: "Midweek",
  body: "This Tuesday at 7 PM at the Pastor's Study." },
],

/* --------------------------------------------------------
PRAYER

 The Collect appointed for this week.
 "Amen." is added for you at the end.
-------------------------------------------------------- */

collect: {
 title: "The Collect for Proper 28",
 rubric: "Prayed together, out loud.",
 text: "Blessed Lord, who caused all holy Scriptures to be written for our learning: Grant us so to hear them, read, mark, learn, and inwardly digest them, that we may embrace and ever hold fast the blessed hope of everlasting life, which you have given us in our Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, for ever and ever."
},

/* --------------------------------------------------------
SERMON

 Just the passages. Leave "text" out if you only want the
 reference on the screen.
-------------------------------------------------------- */

sermon: {
 title: "Resistance and Establishment",
 readings: [
  { reference: "1 Peter 5:6-11 NRSV" },
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
