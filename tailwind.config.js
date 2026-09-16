/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#241914",
        chocolate: "#3A2920",
        ivory: "#F6F1E8",
        sand: "#D8C9B5",
        taupe: "#B8AA99",
        champagne: "#C8A96B",
        champagneLight: "#E4D3B0",
        charcoal: "#25211E"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 20px 60px rgba(36,25,20,.12)"
      }
    }
  },
  plugins: []
};