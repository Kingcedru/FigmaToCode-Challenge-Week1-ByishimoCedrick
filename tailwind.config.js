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
        paragraphs: {
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
        subtitles: {
          50: "#ebf8ff",
          100: "#d1efff",
          200: "#aee4ff",
          300: "#76d5ff",
          400: "#35bcff",
          500: "#0797ff",
          600: "#0070ff",
          700: "#0057ff",
          800: "#0047d7",
          900: "#0042a8",
          950: "#031432",
        },
        background:{
          lightBlue: "#F2F7FF"
        }
      },
      fontFamily: {
        sora: ["sora", "sans-serif"],
        poppin: ["poppin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
