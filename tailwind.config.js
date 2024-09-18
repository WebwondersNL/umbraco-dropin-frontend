const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './Views/**/*.{html,cshtml}', 
    './Scripts/**/*.{js,jsx,ts,tsx,vue}',
    './Content/**/*.{css,scss,sass}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1640px',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '1rem',
      'base': '1.25rem',
      'lg': '1.375rem',
      'xl': '1.625rem',
      '2xl': '2rem',
      '3xl': '2.625rem',
      '4xl': '3rem',
      '5xl': '3rem',
      '6xl': '3.0625rem',
      'h1': ['clamp(2.75rem, 5vw, 5.1875rem)', '1'],
      'h2': ['clamp(1.6rem, 3.5vw, 3.125rem)', '1.24'],
      'h3': ['clamp(1.5rem, 5vw, 2rem)', '1.56'],

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000',
      'white': '#fff',
      primary: '#FEF903',
      'primary-hover': '#FEF903',
      secondary: '#181819',
      'secondary-hover': '#181819',
      accent: '#CE2A6A',
      'accent-hover': '#AF275C',
      'light': '#F6F6F6',
      'light-text': 'rgba(149, 149, 149, 0.69)',
      error: '#ef4444',
      warning: '#f97316',
      'theme': {
        'border': '#E2DFDF',
        'form-placeholder': 'rgba(149, 149, 149, 0.69)',
        'form': '#F6F6F6',
      }
    },
    extend: {
      fontFamily: {
        bitter: 'Bitter, serif',
        'body': 'roboto, sans-serif',
      },
      borderRadius: {
        'theme-form': '0.625rem',
      },
      spacing: {
        'block': '3rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.secondary'),
            '--tw-prose-headings': theme('colors.secondary'),
            '--tw-prose-lead': theme('colors.secondary'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.secondary'),
            '--tw-prose-counters': theme('colors.secondary'),
            '--tw-prose-bullets': theme('colors.accent'),
            '--tw-prose-hr': theme('colors.secondary'),
            '--tw-prose-quotes': theme('colors.secondary'),
            '--tw-prose-quote-borders': theme('colors.secondary'),
            '--tw-prose-captions': theme('colors.secondary'),
            '--tw-prose-code': theme('colors.secondary'),
            '--tw-prose-pre-code': theme('colors.secondary'),
            '--tw-prose-pre-bg': theme('colors.secondary'),
            '--tw-prose-th-borders': theme('colors.secondary'),
            '--tw-prose-td-borders': theme('colors.secondary'),
            '--tw-prose-invert-body': theme('colors.white'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.white'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.white'),
            '--tw-prose-invert-bullets': theme('colors.white'),
            '--tw-prose-invert-hr': theme('colors.white'),
            '--tw-prose-invert-quotes': theme('colors.white'),
            '--tw-prose-invert-quote-borders': theme('colors.white'),
            '--tw-prose-invert-captions': theme('colors.white'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.white'),
            '--tw-prose-invert-pre-bg': theme('colors.white'),
            '--tw-prose-invert-th-borders': theme('white'),
            '--tw-prose-invert-td-borders': theme('white'),
          },
        },
      }),
    },
  },
  safelist: [
    {
      pattern: /col-(span|start)-{1,12}/,
      variants: ['lg'],
    },
    {
      pattern: /basis-{1,12}/,
      variants: ['lg'],
    }
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
