const path = require('path');

module.exports = {
  // 设置入口路径
  entry: './src/index.js',
  // 自定义输出
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};