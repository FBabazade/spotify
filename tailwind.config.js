/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backdrop:'#121212',
        primary:'#1db954',
        link:'#b3b3b3',
        iconhover:'#282828',
        black2: '#181818'
        
      },
      
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}