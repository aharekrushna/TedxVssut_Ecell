
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      animation: {
        glow: "glow 1s infinite ease-in-out",
        flip: "flip 0.6s ease-in-out",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px #ff0000, 0 0 20px #ff0000" },
          "50%": { boxShadow: "0 0 20px #ff4d4d, 0 0 30px #ff4d4d" },
        },
        flip: {
          "0%": { transform: "rotateX(0deg)" },
          "50%": { transform: "rotateX(-90deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
      },
      fontFamily: {
        helvetica: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
