/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(25,64,95) 2px, #0F172A 5px, #0F172A 100px);",
        circularDark:
          "repeating-radial-gradient(rgba(165,165,175) 2px, #015249 5px, #015249 100px);",
        circularLightLg:
          "repeating-radial-gradient(rgba(25,64,95) 2px, #0F172A 5px, #0F172A 80px);",
        circularDarkLg:
          "repeating-radial-gradient(rgba(165,165,175) 2px, #015249 5px, #015249 80px);",
        circularLightMd:
          "repeating-radial-gradient(rgba(25,64,95) 2px, #0F172A 5px, #0F172A 60px);",
        circularDarkMd:
          "repeating-radial-gradient(rgba(165,165,175) 2px, #015249 5px, #015249 60px);",
        circularLightSm:
          "repeating-radial-gradient(rgba(25,64,95) 2px, #0F172A 5px, #0F172A 40px);",
        circularDarkSm:
          "repeating-radial-gradient(rgba(165,165,175) 2px, #015249 4px, #015249 40px);",
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [ require('tailwind-scrollbar'),],
};
