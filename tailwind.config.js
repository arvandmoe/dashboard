/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      purple: "#6864CF",
      gray: "#D0D0D0",
      green: colors.green,
      slate: colors.slate,
      white: colors.white,
      black: colors.black,
      red: colors.red,
      orange: colors.orange,
      blue: colors.blue,
    },
  },
  plugins: [],
};
