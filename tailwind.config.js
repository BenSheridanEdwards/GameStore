module.exports = {
  mode: "jit",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBg: "#101320",
        bodyBg: "#151829",
        cardBg: "#1E2131",
        cardBgHover: "#282B40",
        primaryBtn: "#3F48D8",
        primaryBtnHover: "#4B56FF",
        secondaryBtn: "#303550",
        secondaryBtnHover: "#3b4161",
        divider: "#2f344b",
        light: "#f5f5f5",
        tinted: "#878ca8",
        dark: "#24273A",
        accent: "#13F0AF",
      },
    },
  },
  plugins: [],
};
