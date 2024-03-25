/** @type {import('tailwindcss').Config} */

module.exports = {
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
    },
    colors: {
      'transparent': 'transparent',
      'text': '#121212',
      'background': '#f5f5f5',
      'primary': '#7d9173',
      'secondary': '#b6c6ae',
      'accent': '#f9ae51',
     },
     fontSize: {
      sm: '1.00rem',
      base: '1.1rem',
      xl: '1.2rem',
      '2xl': '1.421rem',
      '3xl': '1.794rem',
      '4xl': '2.525rem',
      '5xl': '3.366rem',
    },
    fontFamily: {
      heading: 'Hubballi',
      body: 'Hubballi',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
  },
  plugins: [],
};
