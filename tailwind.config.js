module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: '#4a586e',
        pine: '#317256',
        goldenrod: '#daa520',
        slate: '#474747',
        neon: '#2CDB2C'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 