'use strict';

var webpack = require('webpack'),
  path = require('path');

module.exports = {
  target: 'web',
  cache: true,
  entry: [
    'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: 'modules/[name].[chunkhash].js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
      // react hot loader
      { test: /\.jsx?$/, loader: 'react-hot', include: path.join(__dirname, 'src') },
      // stylesheet
      {test: /\.css$/, loader: 'style-loader!css-loader'},
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
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    // HotModuleReplacementPlugin only be needed when start webpack-dev-server from API, it need to be removed
    // when start server from CLI with --hot option.
    new webpack.HotModuleReplacementPlugin()
  ],
  debug: true,
  devtool: '#source-map',
  devServer: {
    contentBase: './dist'
  }
};
