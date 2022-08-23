const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./public/index.html'],
  theme: {
    extend: {
      colors: {
        darkYellow: "hsl(33, 78%, 62%)",
        coldPink: "hsl(315, 64%, 61%)",
        calmWhite: " hsl(30, 25%, 98%)",
        lightViolet: "hsl(267, 22%, 24%)",
        darkViolet: "hsl(243, 62%, 17%)",
        lightCofee: "hsl(27, 46%, 81%)",
      },
      fontFamily: {
        sans: ["Cairo", "sans-serif", ...defaultTheme.fontFamily.sans],
        nova: ["Nova Round", "cursive"],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
