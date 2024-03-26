import type { Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme"


export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        stone: '#4a586e',
        pine: '#317256',
        goldenrod: '#daa520',
        slate: '#474747'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
} satisfies Config;
