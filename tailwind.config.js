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
        brown: "#775F40",
        orange: "rgb(214,100,66)",
          darkOrange: "rgb(190,66,29)",
          yellow: "rgb(224,194,114)",
          darkYellow: "rgb(213,176,71)"
      },
    },
  },
  plugins: [],
}

