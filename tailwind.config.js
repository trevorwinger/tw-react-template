module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary:'#50fa7b', 
      secondary:'#8be9fd',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
