module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goldenrod: '#DAA520',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 