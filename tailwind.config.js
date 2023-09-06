/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'lm': '1024px',
        'lg': '1440px',
      },
    },
  },
  plugins: [],
}