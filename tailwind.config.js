/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        baseColor: "#00B4D8",
        gelapDikit: "#0077B6",
        gelapBanget: "#03045E",
        terangDikit: "#90E0EF",
        terangBanget: "#CAF0F8",
        // white: '#FFFFFF',
        // primary: '#E6407B',
        // secondary: '#CCC',
        // highlight: '#FF2353',
        // grey: '#605B57',
        // lightGrey: '#B1B5C7'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
