/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js,jsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1024px',
    },
    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#808080',
        accent: {
          DEFAULT: '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cd',
        },
        grey: '#e8f0f1',
      },
      fontFamily: {
        primary: 'Poppins',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8,70,78,0.08)',
        custom2: '0px 0px 30px 0px rgba(8,73,81,0.06)',
      },
      backgroundImage: {
        services: 'url(../dist/img/bg-services.svg)',
        testimonials: 'url(../dist/img/bg-testimonials.svg)',
        departments: 'url(../dist/img/bg-dept.svg)',
        quoteLeft: 'url(../dist/img/quote-left.svg)',
        quoteRight: 'url(../dist/img/quote-right.svg)',
      },
    },
  },
  plugins: [],
};
