const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xxs: [
          '.625rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '1rem',
          },
        ], // Outline 10px
        xs: [
          '.75rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '1.125rem',
          },
        ], // Caption 12px
        sm: [
          '.875rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '1.3125rem',
          },
        ], // Small text 14px
        tiny: [
          '.875rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '1.3125rem',
          },
        ], // 14px
        base: [
          '1rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '1.5rem',
          },
        ], // 16px
        lg: [
          '1.125rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '1.75rem',
          },
        ], // Body 2 18px
        xl: [
          '1.3125rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '2rem',
          },
        ], // Body 1, Heading 6 21px
        '2xl': [
          '1.5rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '2.25rem',
          },
        ], // Heading 5 24px
        '3xl': [
          '1.75rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '2.5rem',
          },
        ], // Heading 4 28px
        '4xl': [
          '2.25rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '3.5rem',
          },
        ], // Heading 3 36px
        '5xl': [
          '2.5rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '3.5rem',
          },
        ], // Heading 2 40px
        '6xl': [
          '4rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '4.5rem',
          },
        ], // Heading 1 64px
        '5.5xl': [
          '3.5rem',
          {
            letterSpacing: '-0.01em',
            lineHeight: '4.25rem',
          },
        ], // Heading 2 56px
      },
      colors: {
        'color-primary': '#EB2B3E',
        // primaryGradient: '#',
        gray: colors.neutral,
        'text-primary': '#22313F',
        'text-secondary': '#808890',
        'text-textfield': '#B2B7BC',
        'text-white': '#FFFFFF',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')} !important`,
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')} !important`,
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: {
                color: theme('colors.gray.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
