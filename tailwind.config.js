const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#333333",
        gold: "#B1953A",
        blue: "#004B85",
        darkblue: "#013F70",
        gray: "#9E9E9E"
      },
      fontFamily: {
        marker: ["var(--marker-font)", ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}