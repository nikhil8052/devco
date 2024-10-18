/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all JS and TS files in the src directory and its subdirectories
    "./src/components/**/*.{js,ts,jsx,tsx}", // Specifically includes all JS and TS files in the components directory
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Specifically includes all JS and TS files in the pages directory
  ],
  theme: {
    extend: {
      fontFamily: {
       'sf-pro': ['SF Pro Display', 'sans-serif'],
      },
      colors: {

        customBlue: '#4253FF', // Define your custom blue color
        lightBlue:'#4444441',
        customwhite: '#F7F8F8',
        black: '#000000',
      },
      borderColor: {
        lightBlue:'rgba(255, 255, 255, 0.1)'

      },
      fontSize: {
        '64px': '64px',
        '22px': '22px',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1440px',
        },
      },
    },
  },
  plugins: [],
};
