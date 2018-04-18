const path = require('path');
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'source-map' : false,
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: 'babel-loader'
      }
    ]
  }
};