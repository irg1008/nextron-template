const base = require('tailwind-config/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: ['./src/renderer/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    ...base.theme,
    extend: {
      animation: {
        'fade-in': 'fadeIn 200ms ease',
        'fade-out': 'fadeOut 200ms ease',
        'fade-in-up': 'fadeInUp 200ms ease',
        'fade-in-down': 'fadeInDown 200ms ease',
        'fade-out-up': 'fadeOutUp 200ms ease',
        'fade-out-down': 'fadeOutDown 200ms ease',
        'scale-in': 'scaleIn 200ms ease',
        'scale-out': 'scaleOut 200ms ease',
        'enter-left': 'enterFromLeft 250ms ease',
        'enter-right': 'enterFromRight 250ms ease',
        'exit-left': 'exitToLeft 250ms ease',
        'exit-right': 'exitToRight 250ms ease',
        'collapse-in': 'collapseIn 2000ms ease',
        'collapse-out': 'collapseOut 2000ms ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOutUp: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-20px)' },
        },
        fadeOutDown: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(20px)' },
        },
        enterFromRight: {
          from: { opacity: 0, transform: 'translateX(200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: 'translateX(-200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'scale(0.9)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
        scaleOut: {
          from: { opacity: 1, transform: 'scale(1)' },
          to: { opacity: 0, transform: 'scale(0.95)' },
        },
      },
      transitionTimingFunction: {
        'out-back': 'var(--ease-out-back)',
        'in-back': 'var(--ease-in-back)',
        'in-out-back': 'var(--ease-in-out-back)',
        'out-expo': 'var(--ease-out-expo)',
        'in-expo': 'var(--ease-in-expo)',
        'in-out-expo': 'var(--ease-in-out-expo)',
      },
    },
  },
  daisyui: {
    ...base.daisyui,
    themes: [
      {
        custom: {
          primary: 'hsl(200, 100%, 21%)',
          'primary-content': 'hsl(210, 100%, 100%)',
          secondary: 'hsl(42, 100%, 70%)',
          accent: 'hsl(200, 100%, 80%)',
          neutral: 'hsl(210, 10%, 70%)',
          'base-100': 'hsl(0, 0%, 100%)',
          'base-200': 'hsl(210, 20%, 96%)',
          'base-300': 'hsl(216, 4%, 88%)',
          'base-content': 'hsl(215, 28%, 17%)',
          '--btn-focus-scale': '0.98',
        },
      },
    ],
  },
};
