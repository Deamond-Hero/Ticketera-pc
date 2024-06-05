/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'blue-ppal': '#004562',
        'default-btn': '#80A2B0',
        'shadow-input': '#00A4E8',
        'text-dark': '#303030',
        'text-light': '#808080',
        'text-reviews': '#707070',
        
      },   
      boxShadow: {
        'input-focus': '0px 0px 4px .1px #00A4E8',
      }, 
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }, 
    }
  },
  plugins: []
}

