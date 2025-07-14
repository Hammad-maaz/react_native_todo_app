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
        greenLight: '#81C784',

        redColor: '#FF0000',
        redLight: '#FF6F61',

        blueColor: '#0000FF',
        blueLight: '#5C6BC0',

        blackColor: '#000000',
        blackLight: '#4F4F4F',

        grayColor: '#808080',
        grayLight: '#BDBDBD',

        orangeColor: '#FF8000',
        orangeLight: '#FFA726',

        purpleColor: '#800080',
        purpleLight: '#BA68C8',

        cyanColor: '#00FFFF',
        cyanLight: '#4DD0E1',

        magentaColor: '#FF00FF',
        magentaLight: '#F06292',

        yellowColor: '#FFFF00',
        yellowLight: '#FFF176',
      }
    },
  },
  corePlugins: {
    opacity: true
  },
  plugins: [],
}