import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        gray: {
          "50": "hsl(var(--gray-50))",
          "100": "hsl(var(--gray-100))",
          "200": "hsl(var(--gray-200))",
          "300": "hsl(var(--gray-300))",
          "400": "hsl(var(--gray-400))",
          "500": "hsl(var(--gray-500))",
          "600": "hsl(var(--gray-600))",
          "700": "hsl(var(--gray-700))",
          "800": "hsl(var(--gray-800))",
          "900": "hsl(var(--gray-900))",
          "950": "hsl(var(--gray-950))",
        },
        brand: {
          "50": "hsl(var(--brand-50))",
          "100": "hsl(var(--brand-100))",
          "200": "hsl(var(--brand-200))",
          "300": "hsl(var(--brand-300))",
          "400": "hsl(var(--brand-400))",
          "500": "hsl(var(--brand-500))",
          "600": "hsl(var(--brand-600))",
          "700": "hsl(var(--brand-700))",
          "800": "hsl(var(--brand-800))",
          "900": "hsl(var(--brand-900))",
          "950": "hsl(var(--brand-950))",
        },
        blue: {
          "50": "hsl(var(--blue-50))",
          "100": "hsl(var(--blue-100))",
          "200": "hsl(var(--blue-200))",
          "300": "hsl(var(--blue-300))",
          "400": "hsl(var(--blue-400))",
          "500": "hsl(var(--blue-500))",
          "600": "hsl(var(--blue-600))",
          "700": "hsl(var(--blue-700))",
          "800": "hsl(var(--blue-800))",
          "900": "hsl(var(--blue-900))",
          "950": "hsl(var(--blue-950))",
        },
        indigo: {
          "50": "hsl(var(--indigo-50))",
          "100": "hsl(var(--indigo-100))",
          "200": "hsl(var(--indigo-200))",
          "300": "hsl(var(--indigo-300))",
          "400": "hsl(var(--indigo-400))",
          "500": "hsl(var(--indigo-500))",
          "600": "hsl(var(--indigo-600))",
          "700": "hsl(var(--indigo-700))",
          "800": "hsl(var(--indigo-800))",
          "900": "hsl(var(--indigo-900))",
          "950": "hsl(var(--indigo-950))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        "nav-show": "nav-show 0.4s linear 1",
        "line-drop": "line-drop 7s 0s infinite",
      },
      keyframes: {
        "nav-show": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "line-drop": {
          "0%": { transform: "translateY(-50vh)" },
          "100%": { transform: "translateY(110vh)" },
        },
      },
      transitionDelay: {
        "2000": "2000ms",
        "2500": "2500ms",
      },
      boxShadow: {
        tag: "inset 1px 1px, inset -1px -1px",
      },
      backgroundImage: {
        divider:
          "linear-gradient(to right, hsl(var(--background)), hsl(var(--divider)), hsl(var(--background)))",
        line: "linear-gradient(to bottom, rgba(68,80,105,0) 0%, hsl(var(--divider)) 75%, hsl(var(--divider)) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
