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



    },
    screens: {
      sm: "576px",
      md: " 768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px"
    },

    extend: {
      colors: {
        "primary": "#002d58",
        "primary-2": "#e6f1fc",
        "primary-3": "#f6f3f0"

      },

    },
  },
  plugins: [],
}

