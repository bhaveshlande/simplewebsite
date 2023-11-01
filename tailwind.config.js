module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1E293B",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
