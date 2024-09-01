/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b1b29', // Um azul bem escuro, quase preto, para o fundo principal
        secondary: '#08d9d6', // Um tom de azul claro e vibrante, como um destaque
        accent: '#1f2937', // Um cinza escuro para contrastar
        black: '#000', // Preto puro para textos ou outros detalhes
        gray: {
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A', // Quase preto, ótimo para fundos
        },
      },
    },
  },
  plugins: [],
}
