/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        gold: '#C4965A',
        'gold-dark': '#A87A40',
        'dark-bg': '#1C1712',
        cream: '#F5F0E8',
        sand: '#E8DDD0',
        'text-dark': '#1A1A1A',
        'text-mid': '#4A4A4A',
        'text-light': '#888888',
        border: '#E0D8CC',
      },
      fontFamily: {
        display: ['Optima', 'sans-serif'],
        body: ['Optima', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
