import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
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
          400: "#22d3ee",//todo
          500: "#06b6d4",//todo
          600: "#0891b2",//todo
          700: "#163448",
          800: "#0A151D",
          900:"#060d13"
        },
        secondary: "#243c5a",
        "prime-black": "#00000",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
