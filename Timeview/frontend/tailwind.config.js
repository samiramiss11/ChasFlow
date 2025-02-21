/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import typography from '@tailwindcss/typography' // Importing as an ES module
//import flowbite from 'flowbite/plugin' // Importing as an ES module
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // colors: {
      //   primary: '#2cb1bc', // Example primary color definition
      //   secondary: '#0e7c86', // Example secondary color definition
      //   accent: '#0e7c86', // Example accent color definition
      //   // Other color definitions...
      // },
      colors: {
        primary: {
          400: '#1D4ED8', // This is a custom blue shade (you can choose any color)
        },
        chasBlue: '#156079', //chasBlue
        chasCerise: '#FF6FB6', //chasCerise
        chasGreen: '#3AC856', //chasGreen
        chasOrange: '#F6B55F', //chasOrange
        chasGray: '#2B2F2F', //chasGray
        chasLightGray: '#FAFAFA', //chasLightGray
        banner: '#156079A1',
        bannerShade: '#7693A34D',
        input: '#156079',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        button: '20px',
      },
    },
  },
  plugins: [
    daisyui,
    typography,

    //require('@tailwindcss/typography'),
    //require('daisyui'),
    //require('flowbite/plugin'),
  ],
}
