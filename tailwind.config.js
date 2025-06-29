/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ Επιτρέπει toggle με κλάση
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        ntr: ['"NTR"', 'sans-serif'],
      },
    },
  },
  theme: {
    extend: {
      animation: {
        blink: "blink 1s step-end infinite"
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 }
        }
      }
    }
  },
  plugins: [],
}
