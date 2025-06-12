/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust if using a different folder structure
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' if preferred
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'sans-serif'],
      },
      colors: {
        primary: '#3b82f6', // blue-500
        secondary: '#10b981', // green-500
        accent: '#f59e0b', // amber-500
        dark: '#111827',
        light: '#f9fafb',
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to top right, #e0eafc, #cfdef3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'inner-lg': 'inset 0 4px 6px rgba(0,0,0,0.05)',
        'card': '0 4px 14px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
