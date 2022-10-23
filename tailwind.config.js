/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#1F1F1F",
      neutral: {
        100: "#F6F4FB",
        200: "#E6E1F1",
        300: "#C5BDD7",
        500: "#7E7492",
        700: "#585361",
        900: "#3E3A47",
      },
      amethyst: {
        000: "#F5F0FF",
        200: "#C9B0FD",
        300: "#9361FF",
        500: "#6D44C5",
        700: "#563996",
      },
      rhodonite: {
        200: "#FCA9C4",
        300: "#FD7395",
        500: "#E8516D",
        700: "#DD2F4E",
      },
    },
    fontFamily: {
      looped: ["IBM Plex Sans Thai Looped", "sans-serif"],
      loopless: ["FC Sound Rounded", "sans-serif"],
      decorative: ["FC Palette", "sans-serif"],
    },
    borderRadius: {
      DEFAULT: "0.375rem",
      lg: "1.25rem",
      full: "9999px",
    },
    extend: {
      fontSize: {
        h1: ["2.25rem", "2.8125rem"],
        "h1-mobile": ["1.75rem", "2.1875rem"],
        h2: ["1.5rem", "2.25rem"],
        h3: ["1.25rem", "1.875rem"],
        h4: ["1.125rem", "1.5rem"],
        h5: ["1.125rem", "1.25rem"],
        h6: ["1rem", "1.5rem"],
        body: ["1rem", "1.8125rem"],
      },
    },
  },
  plugins: [],
};
