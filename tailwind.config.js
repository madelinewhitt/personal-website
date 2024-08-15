/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        hero_background_placeholder:
          "url('/src/assets/girl-with-red-hat-tbdCaCSet9k-unsplash.jpg')",
      },
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '16ch' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 3s steps(16) 1, blink 1s step-end infinite', // Changed to run typing animation only once
      },
    },
  },
  plugins: [],
}
