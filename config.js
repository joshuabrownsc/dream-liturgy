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

  // Optional italic line above the giving buttons. Set to "" to hide it.
  givingRubric: "Give as you are able, and never out of guilt. Everything given here stays here and does the work of this church.",

  give: [
    { label: "Give online", handle: "dreamcolumbia.com", url: "https://www.dreamcolumbia.com/give", primary: true },
    { label: "Venmo",       handle: "@dreamchurchcola",  url: "https://venmo.com/dreamchurchcola" },
    { label: "Cash App",    handle: "$dreamchurchcola",  url: "https://cash.app/dreamchurchcola" }
  ],

  social: [
    { label: "Instagram", url: "https://instagram.com/dreamchurchcola" },
    { label: "Facebook",  url: "https://facebook.com/dreamchurchcola" },
    { label: "YouTube",   url: "https://youtube.com/dreamchurchcola" },
    { label: "Website",   url: "https://dreamcolumbia.com" }
  ],

  // Required by CCLI whenever lyrics are displayed online. Put your real number here.
  ccliLicense: "CCLI Copy and Streaming License #0000000",

  // Credit line for the liturgical texts.
  textNote: "Psalms and Collects from The Book of Common Prayer (1979)."

};
