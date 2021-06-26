module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#070D1C",
        lightBlack: "#0B0E16"
      },
      backgroundColor: ['even'],
      keyframes: {
        'pop': {
          '0%': { transfrom: 'scale(0)' },
          '100%': { transfrom: 'scale(1)' }
        }
      },
      animation: {
        pop: 'pop 200ms ease-in-out forwards'
      },
      height: {
        lg: '40rem',
        lgg: '45rem',
        lggg: "60rem",
        mid: "35rem",
      },
      width: {
        lg: '35rem',
        lgg: '45rem',
        lggg: "60rem",
        mid: "35rem"
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
