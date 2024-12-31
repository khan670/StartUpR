/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-body": "#293B5F",
        "color-theme": "#FC4D4A",
        "color-text": "#7A7A7A",
      },
      borderRadius: {
        "custom-radius": "15px 0px 15px 15px",
      },
      animation: {
        "scale-infinite": "scaleIn 4s infinite",
        "scale-infinite-2": "scaleIn 3s infinite .5s",
      },
      keyframes: {
        scaleIn: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.6)", opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
