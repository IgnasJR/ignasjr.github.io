/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
    extend: {
      animation: {
        "ping-once": "ping-once 1s cubic-bezier(0, 0, 0.2, 1) forwards",
        "slideInLeft": 'slideInLeft 1s ease-out forwards',
        "slideInRight": 'slideInRight 1s ease-out forwards',
      },
      keyframes: {
        "ping-once": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        "slideInLeft": {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        "slideInRight": {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
