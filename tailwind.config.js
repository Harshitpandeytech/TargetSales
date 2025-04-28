/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4169E1",
        secondary: "#63B3ED",
        accent: "#4FD1C5",
        success: "#68D391",
        background: "#F9FAFB",
        foreground: "#1F2937",
        muted: "#9CA3AF"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      borderRadius: {
        xl: '1rem',
        "2xl": '1.5rem'
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.05)"
      }
    }
  },
  plugins: []
}
