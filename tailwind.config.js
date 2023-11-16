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
                keyframes: {
                    popup: {
                        "0%": { transform: "scale(0)" },
                        "60%": { transform: "scale(1.40)" },
                        "100%": { transform: "scale(1)" },
                    }
                },
                animation: {
                    "cloud-popup-1": "300ms ease-in .1s popup forwards",
                    "cloud-popup-2": "300ms ease-in .3s popup forwards",
                    "cloud-popup-3": "300ms ease-in .5s popup forwards",
                    "sun-popup": "400ms ease-in .2s popup forwards",
                }
          },
    },
    plugins: [],
}

