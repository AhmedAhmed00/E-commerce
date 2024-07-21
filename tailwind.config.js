/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',


  theme: {


    fontFamily: {
      oswald: ['oswald', 'sans-serif'],
      lato: ["Lato", "sans-serif"]
      , Merriweather: ["Merriweather", "serif"],
      Alegreya: ["Alegreya", "serif"]
    },

    container: {
      center: true,
      padding: "15px",

      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1336px"
      }

    },
    screens: {
      xs: 0,
      sm: "576px",
      md: " 768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1320px"
    },


    extend: {
      // 
      colors: {
        "bg-color": "var(--bg-color)",
        "bg-nav": "var(--bg-nav)",
        "brown-color": "var(--brown-color)",
        "primary": "var(--primary)",
        "primary-2": "var(--primary-2)",
        "primary-3": "var(--primary-3)",
        "vanilla": "var(--vanilla)",
        "sky": "var(--sky)",
        "teal": "var(--teal)",
        "title": "var(--title)",



      },

    },
  },
  plugins: [],
}

