module.exports = {
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
  },
  title: 'Hello VuePress',
  description: 'Just playing around',
//   head: [
//     ["style", { src: './node_modules/aos/dist/aos.css'}],
//     ]
}
