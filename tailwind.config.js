
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "other":{'min': '350px', 'max': '1200px'},
      }
    },
  },
  plugins: [
    require('flowbite/plugin'), require("daisyui")
  ],

}