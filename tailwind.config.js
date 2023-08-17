/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(1rem, 4.4vw + 0.2rem, 3rem)",
      },
      screens: {
        "2xsm": "640px",
      }
    },
  },
  plugins: [],
}