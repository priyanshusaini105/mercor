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
        "secondary": '#1e1f26',
        "accent": "#487FD9",
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