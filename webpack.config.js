var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src');
var APP_DIR = path.resolve(__dirname, 'public');

var config = {
  'mode': 'development',
  'entry': './src',
  'output': {
    'path': path.join(__dirname, 'public'),
    'filename': 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

module.exports = config;