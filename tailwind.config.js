/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'purple-rgba': 'rgba(152,45,181,0.39)',
        'black-rgba': 'rgba(0,0,0, 0.1)',
        'lilac-rgba': 'rgba(152,45, 181, 0.3)',
      }
    },
  },
  plugins: [],
}
