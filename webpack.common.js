  const path = require('path');
  const webpack = require('webpack');
  const {CleanWebpackPlugin} = require('clean-webpack-plugin');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
 
  module.exports = {
    entry: {
      app: './src/index.js',
      vendor: ['lodash']
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.HashedModuleIdsPlugin(),
      new HtmlWebpackPlugin({
        title: 'Production'
      }),
    ],
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
      // publicPath: '/'
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name:'vendor'
      },
      splitChunks: {
          chunks: 'all',
          name:'manifest'
      }
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