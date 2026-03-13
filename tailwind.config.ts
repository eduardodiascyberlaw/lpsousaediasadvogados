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
        /* GNS exact palette */
        blue: "#0e76bc",
        dark: "#1b1b1b",
        "dark-90": "rgba(27, 27, 27, 0.90)",
        body: "#252525",
        "body-light": "#222222",
        muted: "#adadad",
        "section-light": "#f8fafc",
        hero: "#363636",
      },
      fontFamily: {
        /* 3 fonts: Bebas (display), Libre (subtitle/italic), Montserrat (body/nav/buttons) */
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        serif: ["var(--font-libre)", "Georgia", "serif"],
        body: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      fontSize: {
        /* GNS exact sizes */
        "display-hero": ["104px", { lineHeight: "1", letterSpacing: "30px" }],
        "display-lg": ["104px", { lineHeight: "1", letterSpacing: "30px" }],
        "display-md": ["48px", { lineHeight: "1.1", letterSpacing: "0" }],
        "display-sm": ["37px", { lineHeight: "1.2", letterSpacing: "1px" }],
        "subtitle": ["24px", { lineHeight: "1.4" }],
        "hero-title": ["41px", { lineHeight: "1.2" }],
        "nav": ["18px", { lineHeight: "1" }],
        "cta": ["17px", { lineHeight: "1" }],
        "body-lg": ["18px", { lineHeight: "32px" }],
        "body-md": ["16px", { lineHeight: "28px" }],
        "body-sm": ["14px", { lineHeight: "24px" }],
      },
      spacing: {
        /* WP spacing presets */
        "wp-40": "1rem",
        "wp-50": "1.5rem",
        "wp-60": "2.25rem",
        "wp-70": "3.38rem",
        "wp-80": "5.06rem",
      },
    },
  },
  plugins: [],
};
export default config;
