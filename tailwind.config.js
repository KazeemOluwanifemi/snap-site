/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'almost-white' : 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)'
      },
      fontFamily: {
        'epilogue' : ['Epilogue', 'sans-serif'],
        url:('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap'),
      },
      width: {
        'w-navbar': '540px',
        'w-main': '85vw',
      },

      height: {
        'h-main': '50vh',
      }

    },
  },
  plugins: [],
}