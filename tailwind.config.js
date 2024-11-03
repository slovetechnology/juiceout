/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": "#b3cde0",
        "dark": "#011f4b",
        "darker": "#041E42",
        "light-dark": "#03396b",
        "lighter-dark": "#005b96",
      }
    },
  },
  plugins: [],
}

