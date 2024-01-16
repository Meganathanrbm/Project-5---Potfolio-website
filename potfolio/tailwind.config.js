/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
        fontSize: {
            xs: ['12px', '16px'],
            sm: ['14px', '20px'],
            base: ['16px', '19.5px'],
            lg: ['18px', '21.94px'],
            xl: ['20px', '24.38px'],
            '2xl': ['24px', '29.26px'],
            '3xl': ['32px', '40px'],
            '4xl': ['48px', '58px'],
            '5xl': ['60px', '72.75px'],  
            '6xl': ['72px', '87.75px'],  
            '7xl': ['84px', '102.75px'], 
            '8xl': ['96px', '106px']
          },
      extend: {
        fontFamily: {
            basefont: ['DM Sans', 'sans-serif'],
          },
        colors:{
          "primary":"blue-500",
            "secondary":"#edf2f8",
            "lightGray_color":" #e4e4e4",
            "gray_color":" #6b7688",
            "darkGray_color":"#e1e1e133",
            "brown_color":" #46364a",
            "line_color":"#e91e63",
        }
      },
    },
    plugins: [],
  }