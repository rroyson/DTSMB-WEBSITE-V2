import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out',
        slideIn: 'slideIn 0.8s ease-out',
        fadeInScale: 'fadeInScale 0.6s ease-out',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
      },
      fontSize: {
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dtsmb: {
          primary: '#3b82f6',
          secondary: '#8b5cf6',
          accent: '#f59e0b',
          neutral: '#1f2937',
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-300': '#e5e7eb',
          'base-content': '#1f2937',
          info: '#3b82f6',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
        dtsmbDark: {
          primary: '#60a5fa', // Lighter blue for dark mode
          secondary: '#a78bfa', // Lighter purple for dark mode
          accent: '#fbbf24', // Slightly brighter amber for visibility
          neutral: '#1e293b', // Soft dark blue-gray

          // Soft dark background gradient (not pure black)
          'base-100': '#1e293b', // Soft navy blue-gray
          'base-200': '#293548', // Slightly lighter blue-gray
          'base-300': '#334155', // Even lighter for contrast elements

          // High contrast text for readability
          'base-content': '#e2e8f0', // Light gray with slight blue tint
          'primary-content': '#ffffff',
          'secondary-content': '#ffffff',
          'accent-content': '#1e293b',

          // Information colors
          'info-content': '#cbd5e1', // Very readable muted white
          info: '#38bdf8',
          success: '#34d399',
          warning: '#fbbf24',
          error: '#f87171',
        },
      },
      'light',
      'emerald',
      'cmyk',
    ],
    darkTheme: 'dtsmbDark',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: false,
  },
}

export default config
