/** @type {import('tailwindcss').Config} */

const rem0_10 = { ...Array.from(Array(11)).map((_, i) => `${i / 10}rem`) };
const rem0_100 = { ...Array.from(Array(101)).map((_, i) => `${i / 10}rem`) };
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
      colors: {
        primary: "#112D4E",
        blue: {
          "3f": "#3F72AF",
          76: "#76A5EA",
          db: "#DBE2EF",
        },
        gray: {
          78: "#787486",
          "9f": "#9FA6B2",
          d9: "#D9D9D9",
          ee: "#EEEEEE",
          fa: "#FAFAFA",
        },
        black: {
          DEFAULT: "#000",
          17: "#171717",
          33: "#333236",
          "4b": "#4B4B4B",
          overlay: "rgba(0, 0, 0, 0.70)", // 모달창 뒷 배경
        },
        red: "#D6173A",
        green: "#7AC555",
        purple: "#760DDE",
        orange: "#FFA500",
        pink: "#E876EA",
        white: "#FFF",
        "beige-f9": "#F9F7F7",
      },

      screens: {
        tablet: { max: "1199px" },
        mobile: { max: "767px" },
      },
      fontFamily: {
        sans: ["sans-serif"],
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.15)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
