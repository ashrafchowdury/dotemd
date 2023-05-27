/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255, 255, 255, 0.15)",
        glassBorder: "rgba(255, 255, 255, 0.25)",
        primary: "#6016FC",
        secondary: "#16FCD2",
        dark: "#0B0B22",
      },
    },
  },
  plugins: [],
};
