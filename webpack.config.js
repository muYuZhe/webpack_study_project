const path = require('path');

module.exports = {
  // 设置入口路径
  entry:{
    app: './src/index.js',
    print: './src/print.js'
  },
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