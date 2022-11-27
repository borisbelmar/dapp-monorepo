/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('tw-config/tailwind.config'),
  ],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui-web3/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
