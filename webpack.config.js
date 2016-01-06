'use strict';

var webpack = require('webpack'),
  path = require('path');

module.exports = {
  target: 'web',
  cache: true,
  context: path.join(__dirname, 'src'),
  entry: [
    './index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: 'modules/[name].[chunkhash].js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
      // babel-loader
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
  ],
  debug: true,
  devtool: '#source-map',
  devServer: {
    contentBase: './dist'
  }
};
