const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme'); // Import defaultTheme

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ['Poppins', ...defaultTheme.fontFamily.sans], // Extend font family with Poppins
      },
    },
  },
  plugins: [],
});

