module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        gray: {
        800: "#3A4374",
        100:"#F2F4FF",
        200:"#F7F8FD",

      },
      pink: {
        100:"#AD1FEA",

      },
      blue: {
        100:"#4661E6",

      },
    },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [],
  
  
}
