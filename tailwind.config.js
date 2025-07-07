/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "earth-light": "#e5e2d6", // your light cream
        "earth-dark": "#000000", // black
        gold: "#f1d782",
        "golden-brown": "#c5a468",
        "earth-brown": "#966639",
      },
    },
  },
  plugins: [],
};
