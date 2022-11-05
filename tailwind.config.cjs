/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter","serif"],
        interBold:["InterBold","serif"],
        interExtraBold:["InterExtraBold","serif"],
        interRegular:["InterRegular","serif"]
      }
    },
    colors:{
      SoftOrange: "hsl(35, 77%, 62%)",
      SoftRed: "hsl(5, 85%, 63%)",
      OffWhite: "hsl(36, 100%, 99%)",
      GrayishBlue: "hsl(233, 8%, 79%)",
      DarkgrayishBlue: "hsl(236, 13%, 42%)",
      VeryDarkBlue: "hsl(240, 100%, 5%)"
    }
  },
  plugins: [],
}
