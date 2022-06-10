module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  
  darkmode: 'class',//or media or class 
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../images/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../images/sanFranciscoDesktop.jpg')",
        'bali': "url('../images/bali.jpg')",
        'chicago': "url('../images/chicago.jpg')",
        'europe': "url('../images/europe.jpg')",
        'iceland': "url('../images/iceland.jpg')",
        'LA': "url('../images/LA.jpg')",
        'miami': "url('../images/miami.jpg')",
        'newYork': "url('../images/new_york.jpg')",
        'norway': "url('../images/norway.jpg')",
        'seattle': "url('../images/seattle.jpg')",
        'switzerland': "url('../images/switzerland.jpg')",
        'sydney': "url('../images/sydney.jpg')",
        'yosemite': "url('../images/yosemite.jpg')",
      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary':'#CC2D4A;',
        'secondary':' #8FA206;',
        'third': '#61AEC9',
        'LogBack':'#FCE7F3;',
      }),
      textColor: {
        'primary':'#CC2D4A;',
        'secondary':' #8FA206;',
        'third': '#61AEC9'
      },
      fontFamily: {
        Montserrat:['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide','tailwindcss-dark-mode')
  ],
}
