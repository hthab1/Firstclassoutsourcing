/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        '20px': '20px',
        '40px': '40px',
        '60px': '60px',
        '70px': '70px',
        '80px': '80px',
        '100px': '100px',
      }
    },
    colors: {
      primary: "#219AD3",
      secondary: "#081A4B",
      teritiary: "#F4F4F9",
      quaternary: "#D9D9D9",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
