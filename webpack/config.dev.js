var merge = require('webpack-merge');
var path  = require('path')

var config = require('./config')



module.exports = merge(config, {
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: [
          'style',
          'css?sourceMap,minimize',
          'postcss',
          'sass?sourceMap,indentedSyntax',
        ],
      },
    ],
  },



  devServer: {
    contentBase: 'build',
    hot: true,
    inline: true,
    port: process.env.npm_package_config_port,
  }
})