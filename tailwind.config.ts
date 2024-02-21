import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gray-1': '#333333',
        'mirage-black': '#101720'
      },
      fontFamily: {
        neue: ['var(--font-neue)']
      },
      keyframes: {
        pulseWidth: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.8)' },
        }
      },
      animation: {
        pulseWidth: 'pulseWidth 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
export default config;
