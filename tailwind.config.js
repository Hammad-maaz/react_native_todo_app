/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        whiteColor: '#ffffff',
        greenColor: '#4CAF50',
        redColor: '#ff0000',
        blueColor: '#0000ff',
        blackColor: '#000000',
        grayColor: '#808080',
        orangeColor: '#ff8000',
        purpleColor: '#800080',
        cyanColor: '#00ffff',
        magentaColor: '#ff00ff',
        yellowColor: '#ffff00',
        lightGrayColor: '#c0c0c0',
      }
    },
  },
  corePlugins: {
    opacity: true
  },
  plugins: [],
}