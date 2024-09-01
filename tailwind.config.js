/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend:
    {
      screens:
      {
        'mobile-sm': '320px',
        // => @media (min-width: 320px) { ... }
        
        'mobile-md': '375px',
        // => @media (min-width: 375px) { ... }

        'mobile-lg': '425px',
        // => @media (min-width: 425px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        
        'md-lg': '896px',
        // => @media (min-width: 896px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1080px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily:
      {
        'Inter': ['Inter Regular'],
        'Inter-L': ['Inter Light'],
        'Inter-M': ['Inter Medium'],
        'Inter-SB': ['Inter SemiBold'],
        'Inter-B': ['Inter Bold'],
        'Inter-EXB': ['Inter ExtraBold'],
        'Inter-BLK': ['Inter Black']
      },
      width:
      {
        'col-1': '8.33%',
        'col-2': '16.66%',
        'col-3': '25%',
        'col-4': '33.33%',
        'col-5': '41.66%',
        'col-6': '50%',
        'col-7': '58.33%',
        'col-8': '66.66%',
        'col-9': '75%',
        'col-10': '83.33%',
        'col-11': '91.66%',
        'col-12': '100%'
      },
      colors:
      {
        'primary': '#0071e3',
        'light': '#0071e3',
        'light-transparent': 'rgba(0, 113, 227, 0.2)',
        'light-invisible': 'rgba(0, 113, 227, 0)',
        'dark': '#1B2A4E',
        'paragraph': '#506690',
        'stats-name': '#869AB8',
        'stats-box': '#eaf3ff',
        'placeholder': '#c0dbff',
        'background': '#f5f5f7'
      },
      borderRadius:
      {
        'circular': '50%',
        'panel': '3em'
      },
      dropShadow:
      {
        'default': '0 1em 1em rgba(0, 113, 227, 0.25)',
        'field': '0 0.5em 0.5em rgba(0, 113, 227, 0.25)',
        'button': '0 0.75em 0.5em rgba(0, 113, 227, 0.25)',
        'app-logo': '0 0.5em 0.5em rgba(0, 0, 0, 0.33)',
      },
      backgroundImage:
      {
        'Dotted-Grid-Pattern': "url('./Assets/Math_Symbols_Grid_Pattern.png')"
      },
      backgroundSize:
      {
        'grid-size': '400px'
      },
      animation:
      {
        'grid-infinite-scroll': 'infinite-scroll 45s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          '0%':   { 'background-position': '0px 0px' },
          '100%': { 'background-position': '-1600px -1600px'}
        }
      }
    },
  },
  plugins: [],
}

