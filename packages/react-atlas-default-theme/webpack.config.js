var path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'lib'),
    publicPath: '/lib/'
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [ {
                       loader: 'css-loader',
                       query: {
                           modules: true,
                           importLoaders: 1,
                           localIdentName: '[hash:base64:5]',
                           minimize: true
                       }
                     },
                     'postcss-loader'
                     ]
                })
    }
    ],
  },
  plugins: [
    new ExtractTextPlugin("atlasThemes.min.css"),
  ]
};