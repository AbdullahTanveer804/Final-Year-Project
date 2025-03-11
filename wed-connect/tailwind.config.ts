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
        bggray: '#F5F5F5', 
        skin: '#F7F0E7', 
        gold: "#D4AF37",
        accent: '#ef84a8', 
        accentfaint: '#f3a6c1', 
        textgray: '#3D3D3D', 
      },
    },
  },
  plugins: [],
};
export default config;
