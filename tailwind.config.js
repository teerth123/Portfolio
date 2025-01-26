module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // make sure your file paths are correct
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
      colors: {
        'gradient-start': '#ff7a18', // Customize these gradient colors
        'gradient-middle': '#af002d',
        'gradient-end': '#319197',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      nameFont:['BricolageGrotesque', 'sans-serif'],
      BebasNeue: ['Bebas Neue', 'sans-serif'],
      Onest: ['Onest', 'sans-serif'],
    },
  },
  plugins: [],
}
