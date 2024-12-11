/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackBg: '#111111',
        mainColor: '#fa5b0f',
        grayColor: '#252525',
        white6: 'rgba(255, 255, 255, 0.6)',
        black5: 'rgba(0, 0, 0, .5)',
      },
      fontFamily: {
        Raleway: ["Raleway", 'sans-serif'],
      },
      screens: {
        "xs": "480px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
}