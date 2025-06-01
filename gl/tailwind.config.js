/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        bicubik: ['Bicubik', 'sans-serif'],
      },
       colors: {
        cloud: '#CECBC8',
        zeus: '#28221E',
        kabul: '#614E41',
        shadow: '#7F6951',
        lightbrown : '#a1887f',
      },
      fontSize: {
        'mega': '12.75rem' // you can name it anything
      },
        backgroundImage: {
        'img': "url('/assets/img/bg2.jpg')",
        // Add more as needed
      },
      inset: {
        '16': '4rem',  // 16 * 0.25rem = 4rem
      }
    },
  },
  plugins: [],
}
