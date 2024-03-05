import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#221e1f",
        white: "#f9f9f9",
        "mandys-pink": "#efc0b1",
        "pale-copper": "#e68769",
        flame: "#dd4f21",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
