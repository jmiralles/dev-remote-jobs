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
        "blue-text-title": "#243757",
        "dark-purple": "#2c003e",
        "mid-purple": "#600047",
        "light-purple": "#8b004f",
        "dark-red": "#b30054",
        "mid-red": "#d90057",
        "light-red": "#ff005a",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
