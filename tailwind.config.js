/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
const primary = "#E30B13";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // здесь мы можем переназначить или расширить базовую тему Tailwind
  theme: {
    colors: {
      primary,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent, // прозрачный цвет
      // т.о. можно указать оттенки цвета
      yellow: {
        700: "#F5C521"
      },
      gray: {
        300: "#d9dae8",
        500: "#999aa5",
        600: "#66676e",
        700: "#39393f",
        800: "#242529",
        900: "#191b1f",
        950: "#101215",
      }
    },
    // расширяем базовые стили
    extend: {
      spacing: {
        0.5: "0.12rem",
        layout: "2.75rem"
      },
      fontSize: {
        "2lg": "1.38rem"
      },
      borderRadius: {
        image: "0.5rem",
        layout: '0.8rem'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out' // изменили дефолтное значение
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3'
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          '50%': {
            opacity: 0.3
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          },
        }
      },
      animation: {
        fade: 'fade 0.5s ease-in-out', // будет использован keyframe fade, описанный выше
        scaleIn: 'scaleIn 0.35s ease-in-out' // будет использован keyframe scaleIn, описанный выше
      }
    },
  },
  plugins: [
    plugin(({ addComponents, theme, addUtilities }) => {

      // компоненты это стили для кнопок, ссылок и т.д.
      addComponents({

        // изменили стили кнопок
        ".btn-primary": {
          backgroundColor: 'primary',
          color: '#fff',
          backgroundRadius: '0.65rem',
          transition: 'background-color 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: '#ff0009'
          }
        },

        // изменили стили ссылок
        '.text-link': {
          textUnderlineOffset: 4,
          color: 'rgba(255, 255, 255,0.9)',
          transition: 'text-decoration-color 0.3s ease-in-out',
          textDecorationLine: 'underline',
          textDecorationColor: 'rgba(255,255,255, 0.2)',
          '&:hover': {
            textDecorationColor: 'rgba(255,255,255,0.9)'
          }
        },

        '.air-block': {
          borderRadius: theme('borderRadius.layout'),
          backgroundColor: theme('colors.gray.950'),
          color: theme('colors.white'),
          boxShadow: theme('boxShadow.lg')
        }
      }),

      // утилиты это свойства по типу миксинов в SCSS
      addUtilities({
        // изначально в Tailwind нет стилей для текста
        '.text-shadow': {
          textShadow: '1px 1px rgba(0,0,0,0.4)'
        },

        // в Tailwind нельзя одним классом объединить эти два свойства outline и border, поэтому нам нужен этот класс
        '.outline-border-none': {
          outline: 'none',
          border: 'none'
        },

        // часто приходится использовать эти три свойства
        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },

        // в Next нельзя задавать картинку фоном 'background-image: ...', так как не будет оптимизации
        '.image-like-bg': {
          objectPosition: 'center',
          objectFit: 'cover',
          pointerEvents: 'none'
        }
      })
    })
  ],
}
