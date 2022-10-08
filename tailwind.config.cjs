/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackPrimary: "#0E0F0F",
        seconday: "#C70000", 
        textSecondary: "#979797", 
      }
    },
  },
  plugins: [],
}