/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        elementDark : 'hsl(209, 23%, 22%)',
        backgroundDark : 'hsl(207, 26%, 17%)',
        backgroundLight : 'hsl(0, 0%, 98%)',
        textLight : 'hsl(200, 15%, 8%)',
        darkTextLightEl : 'hsl(0, 0%, 100%)',
        inputLight : 'hsl(0, 0%, 52%)',
      }
    },
  },
  plugins: [],
}
