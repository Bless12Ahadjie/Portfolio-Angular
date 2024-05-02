/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        modalOverlayDark: "rgb(21, 22, 25, 0.5)",
        modalOverlay: "rgba(124, 129, 135, 0.5)",
      }
    },
  },
  plugins: [],
}