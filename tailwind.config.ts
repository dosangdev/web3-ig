import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        primaryText: "#f5f5f5",
        alert: "#ff3040",

        followBtn: "#0095f6",
        followText: "#363636",
        followHover: "#262626",
        threadHover: "#c2c2c2",
        footerText: "#737373",
      },
      fontFamily: {
        sans: [
          "'Instagram Sans UI'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      borderWidth: {
        "1": "1px",
      },
    },
  },
  plugins: [],
} satisfies Config;
