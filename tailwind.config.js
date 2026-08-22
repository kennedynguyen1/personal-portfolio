/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Warm cream/brown palette (solarized-inspired)
        stone: {
          50: "#fdf6e3",
          100: "#f6efdb",
          200: "#eee8d5",
          300: "#d6cfb8",
          400: "#a89680",
          500: "#8a7361",
          600: "#6b5545",
          700: "#55402f",
          800: "#3b2a1a",
          900: "#2a1d10",
          950: "#1f150a",
        },
        neutral: {
          50: "#fdf6e3",
          100: "#f6efdb",
          200: "#eee8d5",
          300: "#d6cfb8",
          400: "#a89680",
          500: "#8a7361",
          600: "#6b5545",
          700: "#55402f",
          800: "#3b2a1a",
          900: "#2a1d10",
          950: "#1f150a",
        },
        accent: "#d16d3e",
        secondary: "#77934d",
        link: "#268bd2",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      fontSize: {
        micro: "0.625rem",
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
