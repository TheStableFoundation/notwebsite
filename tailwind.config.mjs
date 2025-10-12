/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Nordic modern palette inspired by NotWallet branding
        'nordic-dark': '#0A0E27',
        'nordic-blue': '#1E3A8A',
        'nordic-accent': '#3B82F6',
        'nordic-light': '#E0E7FF',
        'nordic-gray': '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
