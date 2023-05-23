const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      features: {
        'nesting-rules': true,
        // Enable custom selector 
        'custom-selectors': true,
      }
    }),
    require('autoprefixer'),
    require('cssnano'),
  ],
};