/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter-regular': ['Inter-Regular', 'sans-serif'],
        'inter-semibold': ['Inter-Semibold', 'sans-serif'],
        'inter-bold': ['Inter-Bold', 'sans-serif'],
      },
      colors: {
        primaryGreen: "hsl(75,94%,57%)",
        neutralWhite: "hsl(0,0%,100%)",
        neutralGrey: "hsl(0, 0%, 20%)",
        neutralDarkGrey: "hsl(0, 0%, 12%)",
        neutralBlack: "hsl(0, 0%, 8%)"
      }
    }
  },
  plugins: [],
}
