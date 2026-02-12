/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      white: "#ffffff",

      teal: "#5eead4",
      violet: "#7c3aed",
      orange: "#f97316",
      purple: "#c084fc",
      green: "#009a34",
      blue: {
        100: "#38bdf8",
        200: "#2563eb",
      },
      yellow: {
        100 : '#fde047',
        200: '#ffea00'
      },
      bunker: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#202020",
        950: "#070707",
      },
      jade: {
        50: "#f4f9f8",
        100: "#dbece7",
        200: "#b8d7ce",
        300: "#8cbcb0",
        400: "#649d91",
        500: "#43766c",
        600: "#396860",
        700: "#31544e",
        800: "#2a4541",
        900: "#263b37",
        950: "#122120",
      },
    },
  },
  plugins: [],
};
