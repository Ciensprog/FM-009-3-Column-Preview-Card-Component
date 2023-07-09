const colors = {
  default: '#F2F2F2',
}

/*
|-------------------------------------------------------------------------------
| Configuration
|-------------------------------------------------------------------------------
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: colors,
      borderColor: colors,
      colors,
      fontFamily: {
        'big-shoulders-display': "'Big Shoulders Display', cursive",
      },
      screens: {
        tb: '992px',
      },
      minHeight: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
}
