/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'indicator-orange': '#F8B76B',
        'indicator-purple': '#8785FF',
        'indicator-red': '#EB5757',
        'indicator-yellow': '#F2C94C',
        'chat-orange': '#FCEED3',
        'chat-purple': '#EEDCFF',
        'chat-green': '#D2F2EA',
        'bubble-orange': '#E5A443',
        'bubble-purple': '#9B51E0',
        'bubble-green': '#43B78D',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#2F80ED',
          secondary: '#4F4F4F',
          accent: '#828282',
          neutral: '#E0E0E0',
          'base-100': '#FFFFFF',
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
