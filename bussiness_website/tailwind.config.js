const flowbite = require("flowbite-react/tailwind");



module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'Green': '#49982f',
        "nav":"#2D3748",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};



// const flowbite = require("flowbite-react/tailwind");

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     flowbite.content(),
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     flowbite.plugin(),
//   ],
// }
