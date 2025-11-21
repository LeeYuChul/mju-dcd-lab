/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        "background-light": "#ffffff",
        "background-dark": "#111111",
        "text-light": "#1f2937",
        "text-dark": "#e5e7eb",
        "text-secondary-light": "#6b7280",
        "text-secondary-dark": "#9ca3af",
        "border-light": "#e5e7eb",
        "border-dark": "#374151"
      },
      fontFamily: {
        display: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
}