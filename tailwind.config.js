/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          '50': '#fff1f1',
          '100': '#ffe0e1',
          '200': '#ffc7c9',
          '300': '#ffa0a3',
          '400': '#ff6a6f',
          '500': '#f83b42',
          '600': '#e61e25',
          '700': '#c1141a',
          '800': '#a01419',
          '900': '#84181c',
          '950': '#480709',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
