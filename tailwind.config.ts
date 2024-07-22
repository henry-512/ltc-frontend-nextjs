import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      '2xs': '300px',
      xs: '380px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        rainbow: 'rainbow 10s linear infinite, floaty 20s ease-in-out infinite',
      },
      keyframes: {
        rainbow: {
          // magenta
          '0%, 100%': { color: '#FF00FF' },
          // blue
          '17%': { color: '#0000FF' },
          // cyan
          '34%': { color: '#00FFFF' },
          // green
          '51%': { color: '#00FF00' },
          // yellow
          '68%': { color: '#FFFF00' },
          // red
          '85%': { color: '#FF0000' },
        },
        floaty: {
          '0%, 100%': { top: '0px' },
          '50%': { top: '20px' },
        },
      },
    },
  },
  plugins: [],
}
export default config
