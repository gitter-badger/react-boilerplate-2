var autoprefixer = require('autoprefixer')
var html         = require('html-webpack-plugin')
var path         = require('path')



module.exports = {
  cache: false,
  context: path.resolve('./src'),
  entry: './scripts/index.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'es2015',
            'stage-0',
          ],
        },
      },
      {
        test: /\.(jpg|png|svg|woff)$/,
        loader: 'file',
        query: {
          name: 'assets/[hash].[ext]',
        },
      },
    ],
  },
  output: {
    filename: '[hash].js',
    path: path.resolve('./build'),
    publicPath: '/',
  },
  plugins: [
    new html({
      minify: {
        collapseWhitespace: true,
      },
      template: './index.html',
    }),
  ],
  postcss: function() {
    return [
      autoprefixer,
    ]
  },
  resolve: {
    alias: {
      assets: path.resolve('./src/assets'),
      styles: path.resolve('./src/styles'),
    },
    extensions: [
      '',
      '.js',
      '.jsx',
      '.sass',
      '.scss',
    ],
  },
}