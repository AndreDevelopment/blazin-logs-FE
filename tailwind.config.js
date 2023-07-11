/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { },
    colors:{
      green :"#32a852",
      red: "#a83232",
      blue:"#0f4fb8",
      gray:{
         50: '#f9f9f9',
         100: '#ededed',
         200: '#d3d3d3',
         300: '#b3b3b3',
         400: '#a0a0a0',
         500: '#898989',
         600: '#3d3d3d',
         700: '#202020',
         800: '#121212',
         900: '#111'
         
         }
 }
  },
  plugins: [],
}

