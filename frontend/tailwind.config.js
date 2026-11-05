/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        exam: {
          bg: '#f4f6f9',
          primary: '#1d4ed8',
          success: '#16a34a',
          warning: '#eab308',
          danger: '#dc2626',
        }
      },
      fontFamily: {
        digital: ['"Courier New"', 'monospace', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

