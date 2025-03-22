import {heroui} from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
      colors: {
        "bg": "#f7f7f8",
        1: "#145886",
        2: "#F37920",
        3: "#55B848"

      },
    },
  },
  plugins: [heroui()],
}