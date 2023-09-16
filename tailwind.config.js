const {plugin} = require('twrnc');
module.exports = {
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        'font-nunito': {
          fontFamily: 'Nunito-Regular',
        },
        'font-nunito-bold': {
          fontFamily: 'Nunito-Bold',
        },
        'font-nunito-semibold': {
          fontFamily: 'Nunito-SemiBold',
        },
        roundedLayout: `bg-white rounded-t-7`,
      });
    }),
  ],
  "theme": {
    "extend": {
      "colors": {
        "primary": '#16171C',
        "secondary": '#43464D',
        "accent": {
          "50": "#FADEB7",
          "100": "#F7C987",
          "200": "#F6BE6F",
          "300": "#F3A83F",
          "400": "#f09819", // Base color
          "500": "#D8840E",
          "600": "#A8660B",
          "700": "#784908",
          "800": "#482C05",
          "900": "#180F02"
        },
        "text": {
          "50": "#f0f0f0",
          "100": "#d9d9d9",
          "200": "#c2c2c2",
          "300": "#a6a6a6",
          "400": "#929292", // Base color
          "500": "#7c7c7c",
          "600": "#646464",
          "700": "#4d4d4d",
          "800": "#353535",
          "900": "#1e1e1e"
        },
        "accent-alt": {
          "50": "#e8d3bb",
          "100": "#d0a878",
          "200": "#b88738",
          "300": "#a06707",
          "400": "#93541b", // Base color
          "500": "#7c4316",
          "600": "#65310e",
          "700": "#4d1e07",
          "800": "#361a04",
          "900": "#1f1002"
        }
      }
    }
  },
  "variants": {},
  "plugins": []
};