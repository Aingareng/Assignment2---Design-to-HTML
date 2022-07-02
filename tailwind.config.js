/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./assets/build/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'watch-video': "url('/assets/img/icon/main-icon/tribal-evaluation-background-1920px-min.jpg')",
        'card-image': "url('/assets/img/icon/main-icon/pexels-photo-11740674.jpeg')",
        'senior-maketer': "url('/assets/img/icon/main-icon/BG2.svg')",
        'free-consulthing': "url('/assets/img/icon/main-icon/FAQ-SECTION/bgVector (1).svg')",
      },
      colors: {
        'my-gray': '#F5F5F5',
        'my-white': '#E5E5E5'
      },
    },
  },
  plugins: [],
}
