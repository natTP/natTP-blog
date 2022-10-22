/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      looped: ["IBM Plex Sans Thai Looped", "sans-serif"],
      loopless: ["FC Sound Rounded", "sans-serif"],
      decorative: ["FC Palette", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
