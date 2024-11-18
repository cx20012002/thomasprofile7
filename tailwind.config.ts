import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        orange: "var(--orange)",
        darkGrey: "var(--darkGrey)",
      },
      fontFamily: {
        ClashDisplay: ["var(--font-clash-display)"],
        Inter: ["var(--font-inter)"],
      },
      animation: {
        "up-down": "up-down 1.5s infinite",
      },
      keyframes: {
        "up-down": {
          "0%, 100%": { transform: "translateY(2)" },
          "50%": { transform: "translateY(-2px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
