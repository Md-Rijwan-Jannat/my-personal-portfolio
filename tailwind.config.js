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
        titleFont: ["Montserrat"],
      },
      colors: {
        bodyColor: "#000000",
        lightText: "#757474",
        boxBg: "linear-gradient(#145deg, #1e2024, #000033)",
        designColor: "#C0C0C0",
      },
      boxShadow: {
        shadowOne: "1px 1px 13px #191b1c,-1px -1px 33px #1d1d1e",
      },
    },
  },
  plugins: [],
};
