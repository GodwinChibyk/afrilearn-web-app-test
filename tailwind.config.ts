import type { Config } from "tailwindcss";

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
        bgColorLight: "rgb(var(--light-primary-color) / <alpha-value>)",
        whiteColor: "rgb(var(--white-color) / <alpha-value>)",
        textColor: "rgb(var(--text-color) / <alpha-value>)",
        grayColor: "rgb(var(--gray-color) / <alpha-value>)",
      },
      screens: {
        "1xl": "1368px",
      },
    },
  },
  plugins: [],
};
export default config;
