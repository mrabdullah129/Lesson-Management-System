/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#effdf5',
          100: '#d9fbe8',
          500: '#15803d',
          600: '#166534',
          700: '#14532d'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
