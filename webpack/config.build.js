var extract = require('extract-text-webpack-plugin')
var merge   = require('webpack-merge')
var path    = require('path')

var config = require('./config')



module.exports = merge(config, {
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loader: extract.extract([
          'css',
          'postcss',
          'sass?indentedSyntax',
        ]),
      },
    ],
  },
  plugins: [
    new extract('[hash].css'),
  ],
})