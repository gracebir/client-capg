/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundColor:{
        bgGreen: '#33a15b'
      },
      backgroundImage: {
        footer: "./images/bg-footer-top-desktop.svg"
      },
      colors:{
        primary: '#417d57'
      }
    },
  },
  plugins: [],
}
