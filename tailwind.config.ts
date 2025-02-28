import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ff007e",
        secondary: "#0d091f",
        bg_blue: "#09061b",
        l_green: "#17ebd6",
        p_black: "#1E1E1E",
        l_yellow: "#c5ca65",
        bg_gray: "#F6F9FF",
      },
    },
  },
  plugins: [],
};
export default config;
