import type { Config } from "tailwindcss";
import tailwindScrollbar from 'tailwind-scrollbar';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(var(--primary-color) / <alpha-value>)",
        bgColor: "rgb(var(--background-color) / <alpha-value>)",
        primaryColorLight: "rgb(var(--light-primary-color) / <alpha-value>)",
        whiteColor: "rgb(var(--white-color) / <alpha-value>)",
        textColor: "rgb(var(--text-color) / <alpha-value>)",
        grayColor: "rgb(var(--gray-color) / <alpha-value>)",
      },
      screens: {
        "1xl": "1200px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
  ],
};
export default config;
