/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '640px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
        padding:'1rem'
      },
    extend: {
      fontFamily:{
        roboto:"'Roboto Condensed', sans-serif"
      },
      colors:{
        'primary': '#FD3D57'
      }
    },
  },
  variants:{
    extends:{
      display : ['group-hover'],
      visibility : ['group-hover']
    }
  },
  plugins: [],
};
