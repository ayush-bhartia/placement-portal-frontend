/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#640000",
        secondary: "#F0F0F0",
      },
      fontSize: {
        sm: "0.75rem",
        md: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
      },
    },
  },
  plugins: [nextui()],
};
