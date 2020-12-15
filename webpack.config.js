const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 设置入口路径
  entry:{
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  // 自定义输出
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
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