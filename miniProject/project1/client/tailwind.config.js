/** @type {import('tailwindcss').Config} */

const rem0_10 = { ...Array.from(Array(11)).map((_, i) => `${i / 10}rem`) };
const rem0_100 = { ...Array.from(Array(101)).map((_, i) => `${i / 10}rem`) };
const rem0_800 = { ...Array.from(Array(801)).map((_, i) => `${i / 10}rem`) };
const rem0_1500 = { ...Array.from(Array(1501)).map((_, i) => `${i / 10}rem`) };

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: rem0_10,
      borderRadius: rem0_100,
      fontSize: rem0_100,
      lineHeight: rem0_100,
      minWidth: rem0_1500,
      minHeight: rem0_1500,
      spacing: rem0_1500,

      screens: {
        tablet: { max: "1199px" },
        mobile: { max: "767px" },
      },
      fontFamily: {
        sans: ["sans-serif"],
      },
    },
  },
  plugins: [],
};
