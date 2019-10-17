const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const paths = require('./paths.js');

module.exports = merge(common, {
  entry: {
    app: paths.demo
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: paths.dist,
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.dist,
    port: 3000,
    hotOnly: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader',// translates CSS into CommonJS
          options: { sourceMap: true }
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
    ]
  },
});