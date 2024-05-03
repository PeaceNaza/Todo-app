/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },

  fontFamily: {
    primary: "Montserrat",
    secondary: "Roboto",
  },

  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],

  daisyui: {
    themes: ["retro", "nord", "dark", "light", "dim", "garden", "valentine", "synthwave"],
  },

}

