/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Rubik Doodle Shadow"'],
      },
      colors: {
        "bg-color": "#fbfaf7",
        "main-color": "#252525",
        "secondary-color": "#807c77",
        "third-color": "#fff",
        "accent-color": "#EF820D",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
  },
  plugins: [],
};
