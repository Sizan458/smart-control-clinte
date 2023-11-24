/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Rancho, cursive',
        // Adds a new `font-display` class
      }

    },
  },
  plugins: [require("daisyui")],
}

