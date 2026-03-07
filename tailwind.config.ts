import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    // Completely custom — no defaults leaking
    extend: {
      colors: {
        // Pantone 2026 Cloud Dancer foundation
        cloud:   "#F0EEE9",   // base bg — warm off-white
        linen:   "#E8E4DC",   // section bg
        silk:    "#D8D2C8",   // borders / dividers
        stone:   "#A89E90",   // muted / secondary text
        iron:    "#4A4540",   // body text
        obsidian:"#141210",   // headings / near black

        // Verdant Green — 2026 nature/tech accent
        verdant:     "#1B5E3B",
        "verdant-hi":"#2A7A50",
        "verdant-pale":"#E8F2EC",

        // Supporting
        rust:    "#B84C2A",   // sparingly — error/highlight
        gold:    "#C8962A",   // data callouts only
      },
      fontFamily: {
        serif:  ["'Playfair Display'", "Georgia", "serif"],
        sans:   ["'DM Sans'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        mono:   ["'DM Mono'", "monospace"],
      },
      fontSize: {
        "hero":  ["clamp(4.5rem,12vw,13rem)", { lineHeight: "0.9",  letterSpacing: "-0.04em" }],
        "h1":    ["clamp(3rem,8vw,8rem)",     { lineHeight: "0.94", letterSpacing: "-0.03em" }],
        "h2":    ["clamp(2rem,4.5vw,5rem)",   { lineHeight: "1.0",  letterSpacing: "-0.03em" }],
        "label": ["0.68rem",                  { lineHeight: "1",    letterSpacing: "0.18em"  }],
      },
      keyframes: {
        ticker: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        lineGrow: {
          from: { scaleX: "0" },
          to:   { scaleX: "1" },
        },
      },
      animation: {
        ticker:   "ticker 55s linear infinite",
        slideUp:  "slideUp 0.9s cubic-bezier(0.16,1,0.3,1) both",
        lineGrow: "lineGrow 1s ease both",
      },
    },
  },
  plugins: [],
};
export default config;
