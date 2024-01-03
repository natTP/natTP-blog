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
      screens: {
        "3xs": "320px",
        "2xs": "380px",
        xs: "424px",
      },
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
      animation: {
        appear: "appear .5s ease-in-out forwards var(--delay, 0)",
        "wave-front": "wave 4s cubic-bezier(.37,.44,.64,.54) infinite",
        "wave-back": "wave 6s cubic-bezier(.37,.44,.64,.54) infinite",
        pachinko: "scroll 4s cubic-bezier(.42,0,.4,1) infinite",
        typing:
          "typing 6s steps(20, end) infinite, blink 0.75s step-end infinite",
        blink: "blink 1s step-end infinite",
        fall: "fall 12s ease-in-out infinite",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0%", transform: "scale(0.6) translateY(-4px))" },
          "100%": { opacity: "100%" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scroll: {
          "0%": {
            opacity: "100%",
            transform: "translateY(-2600%)",
          },
          "45%": {
            opacity: "100%",
            transform: "translateY(-2600%)",
          },
          "50%": {
            opacity: "30%",
            transform: "translateY(-2600%)",
          },
          "100%": {
            opacity: "100%",
            transform: "translateY(0%)",
          },
        },
        typing: {
          "from, to": { width: "0" },
          "30%": { width: "100%" },
          "70%": { width: "100%" },
        },
        blink: {
          "from, to": { "border-color": "transparent" },
          "50%": { "border-color": "#6D44C5" },
        },
        fall: {
          "0%": {
            transform: "translateY(-5%) rotate(5deg)",
          },
          "25%": {
            transform: "translateY(0%) rotate(10deg)",
          },
          "50%": {
            transform: "translateY(-5%) rotate(3deg)",
          },
          "75%": {
            transform: "translateY(0%) rotate(7deg)",
          },
          "100%": {
            transform: "translateY(-5%) rotate(5deg)",
          },
        },
        "fall-straight": {
          "0%": {
            transform: "translateY(-5%)",
          },
          "20%": {
            transform: "translateY(0%)",
          },
          "40%": {
            transform: "translateY(-2%)",
          },
          "60%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(-5%)",
          },
        },
      },
      typography: ({ theme }) => ({
        ci: {
          css: {
            "--tw-prose-body": theme("colors.neutral[900]"),
            "--tw-prose-headings": theme("colors.neutral[700]"),
            "--tw-prose-lead": theme("colors.neutral[700]"),
            "--tw-prose-links": theme("colors.amethyst[300]"),
            "--tw-prose-bold": theme("colors.neutral[900]"),
            "--tw-prose-counters": theme("colors.neutral[300]"),
            "--tw-prose-bullets": theme("colors.neutral[300]"),
            "--tw-prose-hr": theme("colors.neutral[100]"),
            "--tw-prose-quotes": theme("colors.amethyst[500]"),
            "--tw-prose-quote-borders": theme("colors.amethyst[0]"),
            "--tw-prose-captions": theme("colors.neutral[500]"),
            "--tw-prose-code": theme("colors.amethyst[500]"),
            "--tw-prose-pre-code": theme("colors.amethyst[500]"),
            "--tw-prose-pre-bg": theme("colors.amethyst[0]"),
            "--tw-prose-th-borders": theme("colors.neutral[300]"),
            "--tw-prose-td-borders": theme("colors.neutral[200]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
