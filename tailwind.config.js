/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontSize: {
        sm: "clamp(0.8rem, 0.17vi + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vi + 0.91rem, 1.19rem)",
        lg: " clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem)",
        xl: "clamp(1.56rem, 1vi + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vi + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2.38vi + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 3.54vi + 2.17rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vi + 2.52rem, 6.66rem)",
        "6xl": "clamp(4.77rem, 7.48vi + 2.9rem, 8.88rem)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%": {
            filter: "drop-shadow(5px 5px 10px #000)",
            transform: "translatey(0px)",
          },
          "50%": {
            filter: "drop-shadow(5px 5px 10px #000)",
            transform: "translatey(-20px)",
          },
          "100%": {
            filter: "drop-shadow(5px 5px 10px #000)",
            transform: "translatey(0px)",
          },
        },
      },
    },
    screens: {
      tablet: "768px",
      desktop: "1024px",
    },
    colors: {
      primary: {
        50: "#e6e8eb",
        100: "#cdd2d6",
        200: "#9ba4ad",
        300: "#687784",
        400: "#36495b",
        500: "#041c32",
        600: "#031628",
        700: "#02111e",
        800: "#020b14",
        900: "#01060a",
      },
      accent: {
        50: "#fff2e6",
        100: "#ffe5cc",
        200: "#ffca99",
        300: "#ffb066",
        400: "#ff9533",
        500: "#ff7b00",
        600: "#cc6200",
        700: "#994a00",
        800: "#663100",
        900: "#331900",
      },
      secondary: {
        50: "#e6edef",
        100: "#cddae0",
        200: "#9bb5c1",
        300: "#6a90a1",
        400: "#386b82",
        500: "#064663",
        600: "#05384f",
        700: "#042a3b",
        800: "#021c28",
        900: "#010e14",
      },
      white: "#FFF",
      transparent: "transparent",
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-duration": (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme("transitionDuration") }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") }
      );
    }),
  ],
};
