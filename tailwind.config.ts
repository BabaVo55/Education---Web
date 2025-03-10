import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ethemSky: '#C3EBFA',
        ethemSkylIGHT: '#EDF9FD',
        ethemPurple: '#CFCEFF',
        ethemPurpleLight: '#f1f0ff',
        ethemYellow: '#FAE27C',
        ethemYellowLight: "#FEFCE8",
        ethemNavy: '#455d7a',
        ethemRed: '#f95959'
      }
    },
  },
  plugins: [],
};
export default config;