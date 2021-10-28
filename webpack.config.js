const path = require('path')
module.exports = {
  // 入口
  entry: './src/index.js',
  mode: 'development',
  // 出口
  output: {
    // 打包文件夹
    publicPath: path.resolve(__dirname, 'dist'),
    // 打包文件
    filename: 'jade-open.js',
    // 设置对外暴露对象的全局名称
    library: 'jadeOpen',
    // 打包生成通过esm、commonjs、requirejs的语法引入
    libraryTarget: 'umd',
  },
  // 配置webpack-dev-server
  devServer: {
    // 静态根目录
    //contentBase: './test',
    // 端口号
    port: 8080,
    // 自动打开
    open: false,
  },
}
