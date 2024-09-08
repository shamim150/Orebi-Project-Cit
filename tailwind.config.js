/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Primary": "#262626",
        "Secondary": "#767676",
      },
    },
    fontFamily: {
      DM: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
