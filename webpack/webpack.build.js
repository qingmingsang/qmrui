const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const paths = require('./paths.js');

module.exports = merge(common, {
  externals: 'react',
  entry: {
    index: paths.src
  },
  output: {
    filename: '[name].js',
    path: paths.dist,
    libraryTarget: 'umd'
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'react test',
      favicon: './favicon.ico',
      template: 'template.html'
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',//runtime分离出去
    splitChunks: {
      cacheGroups: {//库分离出去
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
});