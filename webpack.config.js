// webpack.config.js
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './lib/entry.jsx',
  output: {
    filename: './bundle.js',
  },
  plugins: [
  new ExtractTextPlugin('lib/styles/app.css')
  ],
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },{
          test: /\.scss$/,
          loader: "style!css!sass"
        }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
