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
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "bg": "#f7f7f8",
        primary: {
          DEFAULT: "#145886",
          hover: "#1a6ca8",
          light: "#e6f3ff",
        },
        secondary: {
          DEFAULT: "#F37920",
          hover: "#f58c3c",
        },
        success: "#55B848",
      },
      spacing: {
        'nav-height': '4rem',
        'container-padding': '2rem',
      },
      borderRadius: {
        'modal': '1rem',
      },
      boxShadow: {
        'floating': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'dropdown': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      transitionDuration: {
        'default': '200ms',
      },
      maxWidth: {
        'modal-width': '1200px',
      },
      zIndex: {
        'modal': 100,
        'dropdown': 50,
        'header': 40,
      }
    },
  },
  plugins: [heroui()],
}