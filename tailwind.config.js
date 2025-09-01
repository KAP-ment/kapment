/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0b0f14",
        navy: "#0d1b2a",
        neon: "#6ee7ff"
      },
      backgroundImage: {
        'gradient-glow': "radial-gradient(1000px 600px at 10% 10%, rgba(30,71,120,0.35), transparent), radial-gradient(800px 400px at 90% 20%, rgba(80,20,120,0.25), transparent)"
      }
    },
  },
  plugins: [],
}
