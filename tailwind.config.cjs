/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#22292f',
      white: colors.white,
      gray: colors.gray
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1536px'
    },
		extend: {
      colors: {
        lightgray: '#f7f7f7',
        navy: '#052d49'
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#052d49',
            fontWeight: '300',
            lineHeight: '1.5rem',
            h1: {
              color: '#052d49',
              fontSize: '2.25rem',
              fontWeight: '700',
              lineHeight: '2.5rem',
              marginTop: '0',
              marginBottom: '1rem'
            },
            h2: {
              color: '#052d49',
              fontSize: '1.875rem',
              fontWeight: '700',
              lineHeight: '2.25rem',
              marginTop: '0',
              marginBottom: '.75rem'
            },
            h3: {
              color: '#052d49',
              fontSize: '1.5rem',
              fontWeight: '700',
              lineHeight: '2rem',
              marginTop: '0',
              marginBottom: '.75rem'
            },
            h4: {
              color: '#052d49',
              fontSize: '1.25rem',
              fontWeight: '700',
              lineHeight: '1.75rem',
              marginTop: '0',
              marginBottom: '.75rem'
            },
            h5: {
              color: '#052d49',
              fontSize: '1.125rem',
              fontWeight: '700',
              lineHeight: '1.75rem',
              marginTop: '0',
              marginBottom: '.75rem'
            },
            h6: {
              color: '#052d49',
              fontSize: '1rem',
              fontWeight: '700',
              lineHeight: '1.5rem',
              marginTop: '0',
              marginBottom: '.75rem'
            },
            p: {
              marginBottom: '1.25rem'
            },
            a: {
              color: '#052d49',
              '&:hover': {
                textDecoration: 'none'
              }
            },
            hr: {
              borderColor: '#b8cdc9',
              margin: '1.5rem 0'
            },
            li: {
              margin: '0',
              '&::marker': {
                color: '#052d49',
                fontWeight: '300'
              }
            }
          },
        }
      }
    },
	},
	plugins: [
    require('@tailwindcss/typography')
  ],
}
