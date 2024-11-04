/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx,scss}", // Include SCSS files in the root src directory
    "./src/**/*.{js,jsx,ts,tsx,scss}", // Include SCSS files in all subdirectories
  ],
  theme: {
    extend: {
      spacing: {
        'A': '410px',    // Custom width
        'RA': '30rem',   // Custom width
        'RB': '50rem', 
        'P1': '96%',
        
        'P2': '90%'// Custom width
      },
      height: {  // Custom height
        'A': '420px', 
        'B': '470px', 
        'C': '520px', 
        'D': '570px', 
        'E': '1100px',
        'A1': '370px', 
        'B1': '420px', 
        'C1': '470px', 
        'D1': '520px', 
        'E1': '1050px',
        'F':'700px',
        'P':'30%',
        'P1':'98%'
      },
      margin: {
        'P1': '98%', 
      }
    },
  },
  plugins: [],
}
