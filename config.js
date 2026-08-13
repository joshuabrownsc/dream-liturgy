/* ============================================================
   config.js — Dream Church
   Set this once. You should almost never need to touch it again.
   Everything that changes week to week lives in week.js.
   ============================================================ */

const SITE = {

  churchName: "Dream Church",
  city: "Columbia, South Carolina",
  address: "1633 Main St, Columbia, SC 29201",

  vision: "Dream Church is a church family being deeply formed in the love of Jesus and the ways of his kingdom.",

  // Small line printed above the footer at the very end of the service.
  closingMark: "Go in peace",

  // Printed directly under the logo in the footer.
  dismissal: "Go in peace to love and serve the Lord.",

  // Optional italic line above the giving buttons. Set to "" to hide it.
  givingRubric: "Let us with gladness present the offerings and gifts of our life and labor to the Lord.",

  give: [
    { label: "Give online", handle: "dreamcolumbia.com", url: "https://www.dreamcolumbia.com/give", primary: true },
    { label: "Venmo",       handle: "@dreamchurchcola",  url: "https://venmo.com/dreamchurchcola",
      appUrl: "venmo://paycharge?txn=pay&recipients=dreamchurchcola" },
    { label: "Cash App",    handle: "$dreamchurchcola",  url: "https://cash.app/$dreamchurchcola" }
  ],

  social: [
    { label: "Instagram", url: "https://instagram.com/dreamchurchcola" },
    { label: "Facebook",  url: "https://facebook.com/dreamchurchcola" },
    { label: "YouTube",   url: "https://youtube.com/dreamchurchcola" },
    { label: "Website",   url: "https://dreamcolumbia.com" }
  ],

  // Credit line for the liturgical texts.
  textNote: "Psalms and Collects from The Book of Common Prayer (1979)."

};
