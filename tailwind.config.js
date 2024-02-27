// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#ff9e0d',
        primaryLight: '#f8b243',
        secondary: '#000',
        dark: '#2a2a2a',
        subText: '#767676',
        lightDark: '#333',
        grey: '#ddd',
        light: '#fcfcfc',
        dimLight: '#fef9f5',
      },
      animation: {
        wiggle: 'wiggle 8s ease-in-out infinite',
        wave: 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { borderRadius: '40% 60% 70% 30% / 25% 30% 70% 80%' },
          '50%': { borderRadius: '50% 30% 30% 70% / 55% 60% 40% 50%' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(30deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      }
    },
  },
  plugins: [],
};
