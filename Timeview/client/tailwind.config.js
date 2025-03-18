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
        chasBlueHover:'#082A35',
        chasCerise: '#FF6FB6', //chasCerise
        chasGreen: '#3AC856', //chasGreen
        chasOrange: '#F6B55F', //chasOrange
        chasGray: '#2B2F2F', //chasGray
        chasLightGray: '#FAFAFA', //chasLightGray
        banner: '#156079A1',
        bannerShade: '#7693A34D',
        input: '#156079',
        viewBookingButton: '#7693A340',
        grayChas: '#F8F8F8',
        policy: '#D3DBE0',
        postive: '#A3C856',
        negative: '#FF9FB6',
        neutral:'#2B2F2F',
      },
      fontFamily: {
         sans: ['Roboto','PlayFair Display', 'sans-serif'], // Body text font
        heading: ['Playpen Sans', 'sans-serif'],
        caveat: ['Caveat', 'sans-serif'],
      },
      borderRadius: {
        button: '20px',
      },
      fontWeight: {
        light: '300', // Poppins Light
      },
       lineHeight: {
        h1: '45px',
        h2: '38px',
        h3: '34px',
        body: '24px',
        bodyHighlight: '24px', // Same line-height for highlighted text
        small: '20px', // For smaller text
        button: '18px', // For button text line height
      },

      spacing: {
        gutter: '24px', // Space between columns
        margin: '48px', // Margin for containers
        section: '32px', // Space between sections
        component: '16px', // Space within components
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      daisyui: {
        themes: [
          {}
        ]
      }
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
