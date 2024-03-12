/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 5s ease-in-out infinite",
        spinslow: "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
