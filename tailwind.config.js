/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#057D65",
        secundary: "#191919",
        fondo: "#131313",

      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

