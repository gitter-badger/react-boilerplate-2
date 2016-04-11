var merge   = require('webpack-merge');
var path    = require('path')
var webpack = require('webpack')

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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],



  devServer: {
    contentBase: 'build',
    hot: true,
    inline: true,
    port: process.env.npm_package_config_port,
  }
})