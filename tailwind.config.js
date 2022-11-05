/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {
      colors: {
        "custom-red": "hsl(0, 100%, 74%)",
        "custom-green": "hsl(154, 59%, 51%)",
        "custom-blue": "hsl(248, 32%, 49%)",
        "custom-dark-blue": "hsl(249, 10%, 26%)",
        "custom-grayish-blue": "hsl(246, 25%, 77%)",
      },
    },
  },
  plugins: [],
};
