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
        seconday: "#E51B23", 
        textSecondary: "#979797", 
      }
    },
  },
  plugins: [],
}