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
        "3xl": ["0 0 25px  yellow"],
        "4xl": ["0 0 30px  green"],
        "5xl": ["0 0 20px  #61DBFB"],
      },
    },
  },
  plugins: [],
};
