/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        clinic: {
          red: '#c41e3a',
          'red-dark': '#a01830',
          orange: '#e67e22',
          'orange-light': '#f5b041',
          pink: '#fadbd8',
          'pink-dark': '#e8b4b8',
          sky: '#aed6f1',
          'sky-dark': '#85c1e9',
          cream: '#fdf2e9',
          beige: '#f5f0e8',
          green: '#52be80',
          purple: '#af7ac5',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'Nunito', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgb(196 30 58 / 0.12), 0 8px 24px -4px rgb(0 0 0 / 0.08)',
        'premium-lg': '0 12px 40px -8px rgb(196 30 58 / 0.15), 0 20px 48px -12px rgb(0 0 0 / 0.1)',
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 6px 16px -4px rgb(0 0 0 / 0.06), 0 0 0 1px rgb(0 0 0 / 0.02)',
        'card-hover': '0 4px 6px -2px rgb(0 0 0 / 0.04), 0 12px 24px -4px rgb(196 30 58 / 0.08), 0 20px 40px -8px rgb(0 0 0 / 0.08), 0 0 0 1px rgb(196 30 58 / 0.06)',
        'card-soft': '0 2px 8px -2px rgb(0 0 0 / 0.04), 0 8px 24px -4px rgb(0 0 0 / 0.06)',
        'card-soft-hover': '0 8px 16px -4px rgb(0 0 0 / 0.06), 0 16px 32px -8px rgb(196 30 58 / 0.06)',
      },
      borderRadius: {
        'card': '1rem',
        'card-lg': '1.25rem',
        'card-xl': '1.5rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        navLinkUnderline: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUpStagger: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        ghibliFloat: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) scale(1)' },
          '33%': { transform: 'translateY(-8px) translateX(2px) scale(1.01)' },
          '66%': { transform: 'translateY(-4px) translateX(-1px) scale(0.995)' },
        },
        ghibliGlow: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.55' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'slide-down': 'slideDown 0.25s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-up-stagger': 'slideUpStagger 0.5s ease-out forwards',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
        'ghibli-float': 'ghibliFloat 5s ease-in-out infinite',
        'ghibli-glow': 'ghibliGlow 4s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      animationFillMode: {
        forwards: 'forwards',
      },
    },
  },
  plugins: [],
}
