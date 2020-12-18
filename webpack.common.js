  const path = require('path');
  const {CleanWebpackPlugin} = require('clean-webpack-plugin');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const webpack = require('webpack');
 
  module.exports = {
    entry: {
      app: './src/index.js',
      author: './src/author_module.js'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Production'
      })
    ],
    optimization: {
      splitChunks: {
          chunks: 'all',
          name: 'common'
        }
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
      // publicPath: '/'
    },
    module:{
      rules:[{
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }]
    }
  };