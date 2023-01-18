/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        "20px": "20px",
        "40px": "40px",
        "60px": "60px",
        "70px": "70px",
        "80px": "80px",
        "100px": "100px",
        "110px": "110px",
        "120px": "120px",
        "130px": "130px",
        "140px": "140px",
        "150px": "150px",
        "160px": "160px",
        "170px": "170px",
      },
      width: {
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
      },
      height: {
        "290px": "290px",
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
      },
    },
    colors: {
      primary: "#219AD3",
      secondary: "#081A4B",
      teritiary: "#F4F4F9",
      quaternary: "#D9D9D9",
      darkGray: "#525F7F",
      lightGray: "#F4F4F9",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
