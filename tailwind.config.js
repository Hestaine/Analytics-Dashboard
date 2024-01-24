/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        "ash": {
          "0": "#FAFAFA",
          "50": "#F7F8FA",
          "100": "#F2F4F6"
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
      }
    },
  },
  plugins: [],
}

