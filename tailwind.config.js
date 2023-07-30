/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "3xl": ["0 0 60px  green", "0 0 45px green", "0 0 15px  blue"],
        "4xl": ["0 0 100px  white", "0 0 75px yellow", "0 0 15px  #023434"],
        "5xl": ["0 0 100px  black", "0 0 75px black", "0 0 15px  white"],
        "6xl": ["0 0 100px  white", "0 0 75px yellow", "0 0 15px  yellow"],
        "7xl": ["0 0 100px  white", "0 0 75px yellow", "0 0 15px  green"],
      },
    },
  },
  plugins: [],
};
