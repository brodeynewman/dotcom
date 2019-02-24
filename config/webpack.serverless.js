const path = require('path');
const webpack = require('webpack');
const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  stats: 'minimal',
  devtool: 'source-map',
  mode: 'production',
  target: 'node',
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
  },
  plugins: [
    new webpack.IgnorePlugin(/^.*\/aws-sdk$/),
  ],
};
