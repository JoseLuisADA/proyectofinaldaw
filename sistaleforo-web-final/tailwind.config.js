module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    // Asegúrate de agregar otras carpetas donde utilizas clases de Tailwind
  ],
  theme: {
    extend: {
      fontFamily: {
        'crush': ['CrushBubble', 'sans-serif'], // Usa 'sans-serif' como fallback
      }
    },
  },
  plugins: [],
}