/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Warga 10-7",
  photo: "./img/terang.jpg",       // Place your photo in the img/ folder
  music: "./music/lagune.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#87cfeb",           // Main accent color (Sky Color)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Halo",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎓",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "HAPPY GRADUATION FOR U ALL GUYS!!",
    },
    {
      type: "chatbox",
      message:
        "Happy Graduation!! Semoga semua urusan kita nanti dipermudah dan dilancarkan, juga semoga semua keinginan kita nanti di kabulkan, aamiin, jangan lupain 10-7 well, Keep Moving Forward and Stay positive, work hard, Make it happen",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "eitt",
        "Bentar dulu..",
        "Masih <strong>ada</strong>  kelanjutannya.",
        "Kata-kata hari ini!! <span>:)</span>",
      ]
    },
    {
      type: "quote",
      text: "Jadikanlah setiap 'tidak tahu' sebagai rasa penasaran, setiap kegagalan sebagai pelajaran, dan setiap keberanian sebagai kebiasaan Well!!",
      author: "Wahyu",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "profile",
      wishTitle: "10-7",
      wishText: "WE ALL CAN BE STARS !!",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Okay, Dah gitu aja, maaf kalo ada kesalahan. <span></span>",
      replayText: "click, if u want to watch it again.",
    },
  ],
};
