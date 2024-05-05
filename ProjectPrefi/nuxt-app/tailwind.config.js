/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./public/**/*.{html,js}",
    "./assets/css/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

