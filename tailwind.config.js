/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          light: "#fffcf8",
        beige: "#E5D3B2",
        darkGreen: "rgb(79,125,74)",
        green: "rgb(105,153,105)",
        orange: "rgb(214,100,66)",
          darkOrange: "rgb(190,66,29)",
          yellow: "rgb(224,194,114)",
          darkYellow: "rgb(213,176,71)",
          darkBrown: "#281b1b",
          brown: "#695F5F",
          black: "#121b2a"
      },
    },
  },
  plugins: [],
}

