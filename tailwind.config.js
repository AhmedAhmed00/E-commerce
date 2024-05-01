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
      colors: {
        "primary": "#002d58",
        "primary-2": "#e6f1fc",
        "primary-3": "#f6f3f0",
        "vanilla": "#fbece3",
        "sky": "#0071dc",
        "teal": "085f63",
        "title": "#aa813f"


      },

    },
  },
  plugins: [],
}

