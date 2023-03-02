module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
        xxl: "1440px",
      },
      colors: {
        fontColorDark: "#00252E",
        fontColorLight: "#808E9A",
        primaryColor: "#FF52C1",
        primaryColorLight: "#FF8ED7",
        secondaryColor: "#00C7FA",
        warningColor: "#FF4343",
      },
      fontFamily: {
        headingFont: ["Poppins", "sans-serif"],
        bodyFont: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        xl: ["clamp(0.875rem, 0.6549rem + 0.939vw, 1.5rem);"],
        lg: ["clamp(0.875rem, 0.743rem + 0.5634vw, 1.25rem)"],
        base: ["clamp(0.875rem, 0.831rem + 0.1878vw, 1rem)"],
        sm: ["clamp(0.75rem, 0.5739rem + 0.7512vw, 1.25rem)"],
        xs: [
          "clamp(0.5625rem, 0.4085rem + 0.6573vw, 1rem)",
          {
            lineHeight: "1.3",
          },
        ],
      },
      gridTemplateColumns: {
        stats: "repeat(2, min-content)",
      },
    },
  },
  plugins: [],
};
