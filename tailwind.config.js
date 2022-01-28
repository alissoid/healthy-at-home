module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        spacing: {
          '140em':'140em'
        }
      },
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      fontFamily: {
        SourceSans: ["'Source Sans Pro'", "sans-serif"],
        Trocchi: ['Trocchi', "serif"],
        Manrope: ['Manrope', "sans-serif"],
      },
    },
  },
  plugins: [],
}