export default {
  darkMode: ["class", '[data-theme="dark"]'],

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-gradient": "linear-gradient(135deg, #232526 0%, #414345 100%)",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      keyframes: {
        cardSlideIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        cardSlideIn: "cardSlideIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
