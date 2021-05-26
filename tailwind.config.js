const { boxShadow } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    colors: {
      black: {
        lighter: '#D9D9D9',
        light: '#ADADAD',
        dark: '#F7F8FA',
        darker: '#282828',
        darkest: '#111111'
      },
      yellow: {
        light: '#FEF8E8',
        dark: '#E9A840',
      },
      white: {
        lighter: '#E9A840',
        light: '#ffffff',
        dark: '#fbfafc',
        darker: '#666666',
        darkest: '#F1F1F4',
      }
    },
    fontFamily: {
      display: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      'title': '2rem',
      'priceTitle': '2.375rem',
      'tabTitle': '1.375rem'
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'xl': '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      '2xl': '1rem',
      'full': '9999px',
      'large': '12px',
    },
    customForms: theme => ({
      default: {
        input: {
          backgroundColor: theme("colors.gray.900"),
          "&::placeholder": {
            color: theme("colors.gray.500"),
            opacity: "1"
          },
          "&:focus": {
            outline: "none",
            boxShadow: theme("boxShadow.none"),
            borderColor: theme("colors.orange.500")
          }
        }
      }
    }),
    extend: {
      boxShadow: {
        ...boxShadow,
        outline: "0 0 0 3px rgba(239, 121, 48, 0.5)",
        'content': ' 0px 4px 12px 0px rgba(0, 0, 0, 0.08)',
        'coinList': '0px 2px 8px 0px rgba(0, 0, 0, 0.15)',
      },
      inset: {
        '12': '3rem',
      },
      fontFamily: {
        'WorkSans': ['WorkSans-Regular'],
        'WorkSansRegular': ['WorkSans-Regular_Bold'],
        'PingFangSC': ['PingFangSC-Regular'],
        'PingFang': ['PingFangSC-Semibold']
      },
      margin: {
        'auto': 'auto',
        '1': '.25rem',
        '1.5': '.375rem',
        '2': '.5rem',
        '2.5': '.625rem',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '7.5': '1.875rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
      },
      padding: {
        '2.5': '0.625rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
      },
      width: {
        'fitContent': 'fit-content',
        '152': '9.5rem',
        '424': '26.5rem',
      },
      height: {
        'fitContent': 'fit-content',
        '10': '2.5rem',
        '15': '3.75rem',
        '304': '19rem'
      },
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
