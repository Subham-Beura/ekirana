/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(to  bottom, black,red),url('/img/mobile-bg2.jpg')",
      },
    },
  },
  plugins: [],
};
