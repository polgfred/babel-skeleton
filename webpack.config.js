let path = require('path'),
    webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: [ path.resolve(__dirname, 'node_modules') ]
      }
    ]
  }
};
