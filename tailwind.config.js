/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Satoshi_300: ["Satoshi_300"],
        Satoshi_400: ["Satoshi_400"],
        Satoshi_500: ["Satoshi_500"],
        Satoshi_700: ["Satoshi_700"],
        Satoshi_900: ["Satoshi_900"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        c_bg_black: "#121212",
      },
    },
  },
  plugins: [],
};
