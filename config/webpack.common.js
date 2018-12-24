const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelrc = require('./babel.config');

module.exports = {
  entry: [
    'normalize.css',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(jsx?)$/,
        type: 'javascript/auto',
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            ...babelrc,
          },
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '..', 'static', 'index.html'),
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
      },
    }),
  ],
  devtool: 'eval-source-map',
  performance: {
    hints: false,
  },
  devServer: {
    hot: true,
    port: 8008,
    noInfo: true,
    compress: true,
    stats: 'errors-only',
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
  },
};
