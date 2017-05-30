// webpack.config.js
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./lib/entry.jsx', './lib/styles/spicesheet.scss', './lib/styles/spicewheelweb.scss'],
  output: {
    filename: './bundle.js',
  },
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
          use: ExtractTextPlugin.extract({
            use: ['css-loader', 'sass-loader']
          })
        }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin({filename:'./lib/styles/app.css'})
  ],
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
