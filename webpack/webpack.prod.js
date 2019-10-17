const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common.js');
const paths = require('./paths.js');

module.exports = merge(common, {
  entry: {
    app: paths.demo
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].chunk.[contenthash].js',
    path: paths.dist,
  },
  mode: 'production',
  //devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'BundleAnalyzer.report.html'
    }),
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