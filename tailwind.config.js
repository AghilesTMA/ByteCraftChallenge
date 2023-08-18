/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Primary-Purple":"#5D50C6",
        "Primary-Pink":"#F85E9F",
        "Primary-Orange":"#FF5722",
        "Neutral-Light-Yellow":"#FACD4914"
      },
      fontFamily:{
        "Poppins":["Poppins"],
      },
      screens:{
        "tablet": "450px",
        "desktop": "1024px"
      }
    },
  },
  plugins: [],
}

