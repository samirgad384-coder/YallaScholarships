/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff4ff',
          100: '#dce7ff',
          500: '#4f7cff',
          600: '#365eff',
          700: '#2746d9',
        },
      },
      boxShadow: {
        glow: '0 20px 80px rgba(79,124,255,0.35)',
      },
      backgroundImage: {
        'hero-light':
          'radial-gradient(1200px 600px at 10% -10%, rgba(79,124,255,0.25), transparent), radial-gradient(1000px 500px at 100% 0%, rgba(5,181,255,0.2), transparent)',
        'hero-dark':
          'radial-gradient(1200px 600px at 10% -10%, rgba(79,124,255,0.35), transparent), radial-gradient(1000px 500px at 100% 0%, rgba(98,0,255,0.22), transparent)',
      },
    },
  },
  plugins: [],
};
