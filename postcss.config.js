module.exports = {
    plugins: [
      [
        "postcss-preset-env",
      ],

      require('autoprefixer', {
        browsers: [ 'last 2 versions' ]
      })
    ],
  };