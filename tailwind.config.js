module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Update content configuration to include TypeScript files
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      screens: {
        // Add or modify screen sizes as needed
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
        // Add custom fonts
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat"],
      },
      colors: {
        // Customize colors
        bodyColor: "#010008",
        lightText: "#757474",
        boxBg: "linear-gradient(#145deg, #1e2024, #000033)",
        designColor: "#CD6A15",
      },
      boxShadow: {
        // Customize box shadows
        shadowOne: "1px 1px 13px #1D1F23,-1px -1px 33px #1D1F23",
        shadowTwo:
          "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        // Customize animations
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        // Customize keyframes for animations
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
