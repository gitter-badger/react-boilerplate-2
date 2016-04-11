var extract = require('extract-text-webpack-plugin')
var merge   = require('webpack-merge')
var path    = require('path')
var webpack = require('webpack')

var config = require('./config')



module.exports = merge(config, {
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loader: extract.extract([
          'css?sourceMap,minimize',
          'postcss',
          'sass?sourceMap,indentedSyntax',
        ]),
      },
    ],
  },
  plugins: [
    new extract('[hash].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
})