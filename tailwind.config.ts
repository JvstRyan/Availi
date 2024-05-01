import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme: any) => ({
        "gradient-primary": `linear-gradient(to right, ${theme(
          "colors.firstblue"
        )}, ${theme("colors.secondblue")})`,
      }),
    },
    colors: {
      firstblue: "#38B6FF",
      secondblue: "#5271FF",
      white: '#fff',
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    borderRadius: {
      md: "10px",
    },
  },
  plugins: [],
};
export default config;
