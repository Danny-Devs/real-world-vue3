module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        // hacky way to set default Tailwind font to Poppins
        sans: ['Poppins', 'sans-serf'],
      },
    },
  },
  plugins: [],
}
