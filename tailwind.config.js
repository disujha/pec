/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Industrial color palette
        'pec-dark': '#0a0f1c',
        'pec-navy': '#1a2332',
        'pec-charcoal': '#2d3748',
        'pec-rust': '#8d3b29',
        'pec-copper': '#d97706',
        'pec-accent': '#f59e0b',
        'pec-slate': '#64748b',
        'pec-blue': '#1e40af',
        'pec-grid': '#1e293b',
        
        // Semantic colors
        primary: '#8d3b29',
        secondary: '#64748b',
        accent: '#f59e0b',
        dark: '#0a0f1c',
        navy: '#1a2332',
        rust: '#8d3b29',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pipeline-flow': 'pipeline-flow 3s ease-in-out infinite',
        'node-blink': 'node-blink 2s ease-in-out infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'fade-in': 'fade-in 0.8s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        'pipeline-flow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'node-blink': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        'grid-move': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(30, 41, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.1) 1px, transparent 1px)",
        'blueprint': "radial-gradient(circle at 1px 1px, rgba(217, 119, 6, 0.15) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '50px 50px',
        'blueprint': '20px 20px',
      },
    },
  },
  plugins: [],
}
