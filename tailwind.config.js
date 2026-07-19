/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-cyan": "#00f5ff",
        "neon-purple": "#a855f7",
        "neon-pink": "#ec4899",
        "dark-900": "#0a0a0f",
        "dark-800": "#111827",
        "dark-700": "#1f2937",
        "dark-600": "#374151",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 245, 255, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 245, 255, 0.6), 0 0 60px rgba(0, 245, 255, 0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
}
