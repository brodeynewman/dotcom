const webpack = require('webpack');
const merge = require('webpack-merge');

const config = require('./webpack.common');

module.exports = merge(config, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: 'production',
      }),
    }),
  ],
});
