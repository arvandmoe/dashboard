/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      mpurple: "#6864CF",
      mgray: "#D0D0D0",
      gray: colors.gray,
      green: colors.green,
      slate: colors.slate,
      white: colors.white,
      black: colors.black,
      red: colors.red,
      orange: colors.orange,
      blue: colors.blue,
    },
  },
  plugins: [require("flowbite/plugin")],
};
