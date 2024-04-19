/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'grb': '61.8%',
        'grs': '38.2%',
      },
      height: {
        'grb': '61.8%',
        'grs': '38.2%',
      }
    },
  },
  plugins: [],
}

