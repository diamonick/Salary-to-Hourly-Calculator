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
  
        'lg': '1080px',
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
      borderRadius:
      {
        'circular': '50%'
      },
      dropShadow:
      {
        'default': '0 16px 32px rgba(0, 0, 0, 0.25)'
      },
    },
  },
  plugins: [],
}

