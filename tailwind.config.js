/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  // content: ['./src/**/*.{html ,js, jsx, ts, tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

