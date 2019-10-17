const path = require('path');
const paths = require('./paths.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      // {
      //   // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      //   enforce: "pre",
      //   test: /\.js$/,
      //   loader: "source-map-loader"
      // },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env', '@babel/preset-react'] }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240//10KB  大于该字节则直接引入文件
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|pdf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024000//1MB
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react',
      favicon: paths.favicon,
      template: paths.template
    }),
  ],
  resolve: { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
};