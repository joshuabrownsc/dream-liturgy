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

 date: "November 29, 2026",

 season: "The First Sunday of Advent",

 title: "Advent Week 1: The God Who is Hidden",

 preacher: "Pastor Joshua Brown",

/* --------------------------------------------------------
THE PSALM

 Each verse has a number, a first half (a), and a second
 half (b). The asterisk between them is added for you.

-------------------------------------------------------- */

psalm: {
 reference: "Psalm 80:1-7, 16-18",
 rubric: "Read together, the whole room, unhurried.",
 verses: [
  { n: 1, a: "Hear, O Shepherd of Israel, leading Joseph like a flock;",
   b: "shine forth, you that are enthroned upon the cherubim." },

  { n: 2, a: "In the presence of Ephraim, Benjamin, and Manasseh,",
   b: "stir up your strength and come to help us." },

  { n: 3, a: "Restore us, O God of hosts;",
   b: "show the light of your countenance, and we shall be saved." },

  { n: 4, a: "O LORD God of hosts,",
   b: "how long will you be angered despite the prayers of your people?" },

  { n: 5, a: "You have fed them with the bread of tears;",
   b: "you have given them bowls of tears to drink." },

  { n: 6, a: "You have made us the derision of our neighbors,",
   b: "and our enemies laugh us to scorn." },

  { n: 7, a: "Restore us, O God of hosts;",
   b: "show the light of your countenance, and we shall be saved." },

  { n: 16, a: "Let your hand be upon the man of your right hand,",
   b: "the son of man you have made so strong for yourself." },

  { n: 17, a: "And so will we never turn away from you;",
   b: "give us life, that we may call upon your Name." },

  { n: 18, a: "Restore us, O LORD God of hosts;",
   b: "show the light of your countenance, and we shall be saved." }

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
 title: "King Of Hearts",
 lyrics: [
  { label: "Verse 1", lines: [
   "I saw the nails",
   "I heard the hammer",
   "King of the Jews",
   "Carved into a wooden banner",
   "Made You a crown",
   "Bloodied Your temple",
   "You could have come down",
   "But in silence, we both trembled"
 ]},
  { label: "Chorus", lines: [
   "You gave Your life, I gave You nothing",
   "You poured me grace, I poured You poison",
   "But still You drank my cup of shame",
   "With all that I've done, could I be forgiven?",
   "Is there still a way to enter Your kingdom?",
   "I'm just a thief beside a King",
   "King of hearts"
 ]},
  { label: "Verse 2", lines: [
   "I looked to my side",
   "I only had seconds",
   "Please remember we met",
   "When You're seated high in Heaven",
   "He spoke in a whisper",
   "Looking deep in my eyes",
   "Said, \"Son, this time tomorrow, we will be in paradise\""
 ]},
  { label: "Bridge", lines: [
   "King of the poor, King of the lowly",
   "King of the broken, King of the lonely",
   "King of the hopeless, King of the gone-too-fars",
   "King of hearts",
   "King of the lost, King of the guilty",
   "King of the misfits, King of the filthy",
   "King of critics, King of the brand-new start",
   "King of hearts"
 ]}
 ]
},
{
 title: "Noel",
 lyrics: [
  { label: "Verse 1", lines: [
   "The first Noel, the angel did say",
   "Was to certain poor shepherds in fields as they lay",
   "In fields where they lay keeping their sheep",
   "On a cold winter's night that was so deep"
 ]},
  { label: "Chorus", lines: [
   "Noel, Noel",
   "Noel, Noel",
   "Born is the King of Israel"
 ]},
  { label: "Verse 2", lines: [
   "Now let us all with one accord",
   "Sing praises to our heavenly Lord",
   "That hath made Heaven and Earth of naught",
   "And with his blood mankind has bought"
 ]},
  { label: "Bridge 1", lines: [
   "He is born, He is born",
   "The Son of God has come to dwell",
   "The King of kings and Lord of lords",
   "Emmanuel",
   "He is born, He is born",
   "Hope for all, now, go and tell",
   "He has come to save the world",
   "We sing Noel"
 ]},
  { label: "Bridge 2", lines: [
   "Noel, Noel",
   "Noel, Noel",
   "The King of kings and Lord of lords",
   "Emmanuel",
   "Noel, Noel",
   "Noel, Noel",
   "He has come to save the world",
   "We sing Noel, Noel"
 ]}
 ]
},
{
 title: "Christ Is Lower Still",
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
 ]}
 ]
}
],

/* --------------------------------------------------------
ANNOUNCEMENTS

 Three is the ceiling. Anything else goes in the newsletter.
-------------------------------------------------------- */

announcements: [
 { title: "Midweek",
  body: "Tuesday, December 1 at 7 PM at the Pastor's Study." },
],

/* --------------------------------------------------------
PRAYER

 The Collect appointed for this week.
 "Amen." is added for you at the end.
-------------------------------------------------------- */

collect: {
 title: "The Collect for the First Sunday of Advent",
 rubric: "Prayed together, out loud.",
 text: "Almighty God, give us grace to cast away the works of darkness, and put on the armor of light, now in the time of this mortal life in which your Son Jesus Christ came to visit us in great humility; that in the last day, when he shall come again in his glorious majesty to judge both the living and the dead, we may rise to the life immortal; through him who lives and reigns with you and the Holy Spirit, one God, now and for ever."
},

/* --------------------------------------------------------
SERMON

 Just the passages. Leave "text" out if you only want the
 reference on the screen.
-------------------------------------------------------- */

sermon: {
 title: "Advent Week 1: The God Who is Hidden",
 readings: [
  { reference: "Isaiah 63:7-19" },
  { reference: "Isaiah 9:1-7" },
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
