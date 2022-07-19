/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
