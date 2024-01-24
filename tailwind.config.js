/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dodger-blue": {
          50: "#eff7ff",
          100: "#dbecfe",
          200: "#bfdffe",
          300: "#93ccfd",
          400: "#60affa",
          500: "#3a8ef6",
          600: "#2570eb",
          700: "#1d5bd8",
          800: "#1e4aaf",
          900: "#1e418a",
          950: "#172954",
        },
        title: {
          50: "#eefffb",
          100: "#c6fff2",
          200: "#8effe8",
          300: "#4dfbdb",
          400: "#19e8c9",
          500: "#00bfa5",
          600: "#00a492",
          700: "#028376",
          800: "#08675e",
          900: "#0c554e",
          950: "#003432",
        },
        "ship-cove": {
          50: "#f4f8fa",
          100: "#e6edf3",
          200: "#d4dfe9",
          300: "#b6cada",
          400: "#92afc8",
          500: "#7897b9",
          600: "#6c87ae",
          700: "#5a719b",
          800: "#4d5e80",
          900: "#414f67",
          950: "#2b3240",
        },
      },
      fontFamily: {
        sora: ["sora", "sans-serif"],
        poppin: ["poppin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
