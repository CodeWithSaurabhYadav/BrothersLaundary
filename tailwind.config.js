/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "brand-color": "#36BA98",
        "brand-color": {
          lighter: "#9BD8B0",
          light: "#4FB674",
          default: "#329254",
          dark: "#0F5628",
          darker: "#053014",
        },
        "primary-color": "rgb(41, 41, 41)",
        "grey-o": {
          100: "rgba(128, 128, 128, 0.1)",
          200: "rgba(128, 128, 128, 0.2)",
          300: "rgba(128, 128, 128, 0.3)",
          400: "rgba(128, 128, 128, 0.4)",
          500: "rgba(128, 128, 128, 0.5)",
          600: "rgba(128, 128, 128, 0.6)",
          700: "rgba(128, 128, 128, 0.7)",
          800: "rgba(128, 128, 128, 0.8)",
          900: "rgba(128, 128, 128, 0.9)",
          1000: "rgba(128, 128, 128, 1.0)",
        },
      },
      width: {
        // "1/3": "35%",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
