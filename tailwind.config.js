/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,js}",
  '*.{html,js}'],
  theme: {
    extend: {
      colors: {
        "nav-hover-clr": "var(--nav-hover-clr)"
      },
      typography: {
        xl: {
          css: {
            em: {
              'display': 'block',
              'text-align': 'center',
            },
            pre: {
              'padding': 0,
              'line-height': '1.5rem',
            },
            code: {
              'border-radius': '1rem',
              '--tw-shadow': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
              '--tw-shadow-colored': 'inset 0 2px 4px 0 var(--tw-shadow-color)',
              'box-shadow': 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
            },
            p: {
              'text-align': 'justify',
            },
            ul: {
              'padding-left': 0
            },
            h1: {
              'text-align': 'center'
            }
          },
        },
        base: {
          css: {
            em: {
              'display': 'block',
              'text-align': 'center',
            },
            pre: {
              'padding': 0,
              'line-height': '1.5rem',
              'font-size': '1rem'
            },
            code: {
              'border-radius': '1rem',
              '--tw-shadow': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
              '--tw-shadow-colored': 'inset 0 2px 4px 0 var(--tw-shadow-color)',
              'box-shadow': 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
            },
            p: {
              'text-align': 'justify',
            },
            ul: {
              'padding-left': 0
            },
            h1: {
              'text-align': 'center'
            }
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

