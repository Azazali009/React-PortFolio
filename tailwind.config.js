/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        designColor: "#ff013f",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        cardBg: "#444e52",
      },
      fontFamily: {
        primary: ["Montserrat"],
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        shadowTwo: "10px 10px 15px rgba(0,0,0,0.2), -5px -5px 15px #fff",
      },
    },
  },
  plugins: [require("daisyui")],
};
