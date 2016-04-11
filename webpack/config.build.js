var extract = require('extract-text-webpack-plugin')
var merge   = require('webpack-merge')
var webpack = require('webpack')

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
  output: {
    filename: '[hash].js',
  },
  plugins: [
    new extract('[hash].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
})