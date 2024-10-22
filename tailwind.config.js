/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      keyframes: {
        "spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "my-spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "beat-spin": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "beat-spin-low": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-slow-reverse": "spin-reverse 8s linear infinite",
        "my-spin-reverse": "my-spin-reverse 8s linear infinite",
        "beat-spin": "beat-spin 2s ease-in-out infinite",
        "beat-spin-low": "beat-spin-low 2s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        "2xl": { min: "1535px" },
        // => @media (min-width: 1535px) { ... }

        xl: { min: "1279px" },
        // => @media (min-width: 1279px) { ... }

        lg: { min: "1023px" },
        // => @media (min-width: 1023px) { ... }

        md: { min: "767px" },
        // => @media (min-width: 767px) { ... }

        sm: { min: "639px" },
        // => @media (min-width: 639px) { ... }

        xs: { min: "479px" },
        // => @media (min-width: 479px) { ... }
      },
    },
  },
  plugins: [
    // require("tailwindcss-animate"),
    // Letakkan plugin lain di atas ini jika diperlukan
  ],
};
