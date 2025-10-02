/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand Colors
        brand: {
          red: '#F0011C',
          'red-hover': '#D0010F',
        },
        // Primary Actions (Steel Blue)
        primary: {
          DEFAULT: '#2F6F8F',
          hover: '#245A75',
          active: '#1A4A61',
        },
        // Backgrounds
        bg: {
          primary: '#F9F9F9',
          card: '#F2F2F2',
        },
        // Text Colors
        text: {
          primary: '#1C1C1C',
          secondary: '#5A5A5A',
          muted: '#8A8A8A',
        },
        // Feedback Colors
        success: '#2D7D32',
        warning: '#F57C00',
        error: '#C62828',
        // Borders
        border: {
          DEFAULT: '#E0E0E0',
          focus: '#2F6F8F',
        },
        disabled: '#BDBDBD',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};