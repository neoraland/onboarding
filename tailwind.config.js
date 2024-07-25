/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "neora-blue": "#53BDDB",
        "neora-blue-faded": "#A8DEED",
      },
    },
  },
  plugins: [],
};
