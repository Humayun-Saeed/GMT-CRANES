/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    screens: {
      mobile: "300px",

      xs: "475px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    backgroundImage: {
      // "bg-gradient-to-t":"to-shade",
      "categories-hero-section": "url(./assets/CategoriesPageImage.jpeg)",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      shade: "#ffeeca",
      button: "#FF0000",
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      "text-color": "#4c5267",
    },

    fontFamily: {
      sans: ["Georgia", "sans-serif"],
    },
    spacing: {
      // '1': '16rem',
      // '2': '32rem',
      // '3': '48rem',
      // '4': '64rem',
      // '5': '80rem',
      // '6': '96rem',
    },
  },
  plugins: [require("tailwindcss-gradients")],
};
