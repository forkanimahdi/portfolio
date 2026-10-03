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
        display: ["Syne Variable", "Syne Fallback", "system-ui", "sans-serif"],
        sans: ["Manrope Variable", "Manrope Fallback", "system-ui", "sans-serif"],
      },
      keyframes: {
        "scroll-hint": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
        shimmer: {
          to: { backgroundPosition: "200% center" },
        },
        glow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.15)", opacity: "1" },
        },
        // No opacity: text stays painted from the first frame, so it counts for LCP without waiting for JS.
        rise: {
          from: { transform: "translateY(24px)", filter: "blur(10px)" },
        },
        "hero-zoom": {
          from: { transform: "scale(1.12)" },
        },
        reveal: {
          from: { transform: "translateY(110%)" },
        },
        draw: {
          from: { transform: "scaleX(0)" },
        },
      },
      animation: {
        "scroll-hint": "scroll-hint 2s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        glow: "glow 8s ease-in-out infinite",
        rise: "rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) both",
        "hero-zoom": "hero-zoom 2.4s cubic-bezier(0.22, 1, 0.36, 1) both",
        reveal: "reveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        draw: "draw 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("light", "html.light &");
    }),
  ],
};
