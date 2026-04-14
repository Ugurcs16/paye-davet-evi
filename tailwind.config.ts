import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        ivory: {
          DEFAULT: "hsl(var(--ivory))",
          muted: "hsl(var(--ivory-muted))",
        },
        champagne: "hsl(var(--champagne))",
        cream: "hsl(var(--cream))",
        olive: {
          DEFAULT: "hsl(var(--olive))",
          foreground: "hsl(var(--olive-foreground))",
          muted: "hsl(var(--olive-muted))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          soft: "hsl(var(--gold-soft))",
        },
        taupe: "hsl(var(--taupe))",
        charcoal: "hsl(var(--charcoal))",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
