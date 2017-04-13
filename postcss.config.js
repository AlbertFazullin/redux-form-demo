module.exports = {
  plugins: [
    require('postcss-import')({
      root: '../',
    }),
    require('postcss-cssnext')({}),
    require('postcss-font-magician')({
      variants: {
        'Lato': {
          '300': [],
          '400': [],
          '700': [],
        },
      },
      foundries: ['google'],
    }),
    require('postcss-browser-reporter')({}),
  ],
};
