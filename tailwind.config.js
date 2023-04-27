/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        dimGray: "#B9BBB6",
        violetBlue: "#5f14b5",
        textColor: "#aeb0b1",
        textColor2: "#384759",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

