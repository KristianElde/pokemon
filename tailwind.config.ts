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
        background2: {
          DEFAULT: "var(--background2)",
          shade: "var(--background2-shade)",
        },
        selected: "var(--selected)",
        defaultBorder: "var(--border)",
      },
    },
  },
  plugins: [],
};
export default config;
