module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/image/hero.png')",
        concept: "url('/bg-about.png')"
      },
      colors: {
        'black-base': '#334240',
        'base-green': '#00AA90',
      },
    },
  },
  plugins: [],
};
