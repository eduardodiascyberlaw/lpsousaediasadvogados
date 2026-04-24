import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a1628",
          50: "#f0f3f8",
          100: "#d4dbe8",
          200: "#a9b7d1",
          300: "#7e93ba",
          400: "#536fa3",
          500: "#2d4f8a",
          600: "#1e3a6e",
          700: "#142952",
          800: "#0f1f3d",
          900: "#0a1628",
          950: "#050b14",
        },
        gold: {
          DEFAULT: "#c9a96e",
          50: "#fdf9f0",
          100: "#f8edd4",
          200: "#f0daa8",
          300: "#e4c47a",
          400: "#d9b174",
          500: "#c9a96e",
          600: "#b08a4a",
          700: "#8c6c3a",
          800: "#6b522d",
          900: "#4a3920",
        },
        cream: {
          DEFAULT: "#faf8f5",
          50: "#fefefe",
          100: "#faf8f5",
          200: "#f2ede6",
          300: "#e8e0d4",
        },
        charcoal: "#1a1a2e",
        body: "#3d3d4e",
        "body-light": "#6b6b7b",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "hero-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "section-title": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "section-subtitle": ["clamp(1.1rem, 1.5vw, 1.35rem)", { lineHeight: "1.5" }],
        "body-lg": ["1.125rem", { lineHeight: "1.8" }],
        "body-md": ["1rem", { lineHeight: "1.75" }],
        "body-sm": ["0.875rem", { lineHeight: "1.7" }],
        "caption": ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
        "overline": ["0.75rem", { lineHeight: "1", letterSpacing: "0.15em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "luxury": "0 4px 40px rgba(10, 22, 40, 0.08)",
        "luxury-lg": "0 8px 60px rgba(10, 22, 40, 0.12)",
        "luxury-xl": "0 20px 80px rgba(10, 22, 40, 0.15)",
        "gold": "0 4px 30px rgba(201, 169, 110, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "line-grow": "lineGrow 1.2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        lineGrow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
