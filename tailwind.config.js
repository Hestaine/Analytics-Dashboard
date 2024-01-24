/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        "ash": {
          "50": "#FAFAFA",
          '100': '#F5F5F5',
          '200': '#E5E5E5',
          '300': 'B2ABAB',
          '400': 'A3A3A3',
          '500': '737373',
          '600': '#525252',
          '700': '#404040',
          '800': '262626',
          '900': '#171717',
          "1000": "#F7F8FA",
          "1100": "#F2F4F6"
        },
        "white": "#FFFFFF",
        "indigo": "#6160DC",
        "lightblue": "#54C5EB",
        "yellow": "#FFB74A",
        "lightred": "#ED544E",
        "lightgreen": "#34CAA5",
        
      },
      screens: {
        'sm': '340px',
        "md": '787px',
        'lg': '1100px'      
      },
      fontFamily: {
        'jarkata': 'Plus Jakarta Sans',
      },
      fontSize: {
        'h1': '64px',
        'h2': '48px',
        'h3': '32px',
        'h4': '24px',
        'h5': '20px'
      }
    },
  },
  plugins: [],
}

