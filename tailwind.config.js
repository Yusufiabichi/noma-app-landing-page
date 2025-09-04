/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        noma: {
          green: "#14532D",
          yellow: "#FACC15",
          gray: "#374151",
          lightgreen: "#86EFAC",
          offwhite: "#F9FAFB",
        },
      },
    },
  }
}


