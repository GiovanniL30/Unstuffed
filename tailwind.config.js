/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0189BE",
      },
      // fontFamily: {
      //   jthin: ["Jost-Thin", "sans-serif"],
      //   jextralight: ["Jost-ExtraLight", "sans-serif"],
      //   jlight: ["Jost-Light", "sans-serif"],
      //   jregular: ["Jost-Regular", "sans-serif"],
      //   jmedium: ["Jost-Medium", "sans-serif"],
      //   jsemibold: ["Jost-SemiBold", "sans-serif"],
      //   jbold: ["Jost-Bold", "sans-serif"],
      //   jextrabold: ["Jost-ExtraBold", "sans-serif"],
      //   jblack: ["Jost-Black", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
