/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all JS and TS files in the src directory and its subdirectories
    "./src/components/**/*.{js,ts,jsx,tsx}", // Specifically includes all JS and TS files in the components directory
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Specifically includes all JS and TS files in the pages directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
