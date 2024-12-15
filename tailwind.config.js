/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#015A03",
        secondary: "#064307",
        graylight: "#76B378",
        textdark: "#333333",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
