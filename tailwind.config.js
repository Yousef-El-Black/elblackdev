/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "calc-100": "calc(100vh - 100px)",
        "calc-75": "calc(100vh - 75px)",
      },
      width: {
        "calc1.3": "calc(100% + 1.3px)",
      },
      animation: {
        move: "move 30s linear infinite",
        phoneMove: "phonemove 60s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translate(0%)" },
          "50%": { transform: "translate(-40%)" },
          "100%": { transform: "translate(0%)" },
        },
        phonemove: {
          "0%, 100%": { transform: "translate(0%)" },
          "50%": { transform: "translate(-80%)" },
        },
      },
    },
    colors: {
      // Light Mode
      cultured: "#F6F6F6", // Backgrond
      dimGray: "#333333", // Heading
      lightSlateGray: "#666666", // Body
      amber: "#FFC107", // Highlight
      // Dark Mode
      eerieBlack: "#1C1C1E", // Background
      white: "#FFFFFF", // Heading
      gainsboro: "#D0D0D0", // Body
      blue: "#2196F3", // Highlight
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
