import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#243c5a",
        background: {
          100: "#cfffe",//todo
          200: "#a5f3fc",//todo
          300: "#67e8f9",//todo
          400: "#030c0f",
          500: "#010202",
          600: "#0b1720",
          700: "#163448",
          800: "#0A151D",
          900:"#060d13"
        },
        secondary: "#243c5a",
        "prime-black": "#00000",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
