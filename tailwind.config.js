/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      purple: "#6864CF",
      gray: colors.gray,
      green: colors.green,
      slate: colors.slate,
      white: colors.white,
    },
  },
  plugins: [],
};
