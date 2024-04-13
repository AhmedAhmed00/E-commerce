/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      oswald: ['oswald', 'sans-serif'],
      lato: ["Lato", "sans-serif"]
      , Merriweather: ["Merriweather", "serif"],
      Alegreya: ["Alegreya", "serif"]

    },
  

    container: {
      center: true,
      padding: "20px"

    },
    screens: {
      sm: "576px",
      md: " 768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px"
    },

    extend: {},
  },
  plugins: [],
}