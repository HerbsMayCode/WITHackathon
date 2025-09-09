/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        instagram: {
          primary: '#405de6',
          secondary: '#5851db',
          accent: '#833ab4',
          pink: '#c13584',
          orange: '#fd1d1d',
          yellow: '#fcb045'
        }
      },
      fontFamily: {
        'instagram': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
