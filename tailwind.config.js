/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

const color = (name) => `color-mix(in srgb, var(--color-${name}) calc(<alpha-value> * 100%), transparent)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem" },
      screens: { xl: "72rem" },
    },
    extend: {
      colors: {
        alpha: color("alpha"),
        white: color("white"),
        black: color("black"),
        dark: color("dark"),
        error: color("error"),
        "pure-white": "#ffffff",
        "pure-black": "#000000",
      },
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      keyframes: {
        "scroll-hint": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
        shimmer: {
          to: { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "scroll-hint": "scroll-hint 2s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("light", "html.light &");
    }),
  ],
};
