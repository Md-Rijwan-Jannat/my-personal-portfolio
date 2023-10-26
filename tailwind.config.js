/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#000000",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(#145deg, #1e2024, #000033)",
        designColor: "#003FC7",
      },
      boxShadow: {
        shadowOne: "1px 1px 13px #20232e,-1px -1px 33px #000033",
      },
    },
  },
  plugins: [],
};
