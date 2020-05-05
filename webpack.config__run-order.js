const path = require('path')
/**
 * 解析 webpack 中loader的方式
 * 1. 直接把编写的loader放到编写的 node_modules 目录下
 * 2. resolveLoader（modules）alias
 * 3. 直接写绝对路径
 */
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  resolve: {},
  resolveLoader: {
    modules: [path.resolve('node_modules'), path.resolve(__dirname, 'loaders')]
    // alias: {
    //   loader1: path.resolve(__dirname, 'loaders', 'loader1.js'),
    //   loader2: path.resolve(__dirname, 'loaders', 'loader2.js'),
    //   loader3: path.resolve(__dirname, 'loaders', 'loader3.js'),
    // }
  },
  module: {
    // loader 类型 pre 前置loader，normal 正常loader，inline 行内loader（export-loader!&?jquery）,post 后置loader
    // 执行顺序，从右向左，从下向上
    // 内部 webpack 设置了一个数组，
    rules: [
      {
        test: /\.js$/,
        // 改变 loader 的执行顺序
        enforce: 'pre',
        use: {
          loader: 'loader1'
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'loader2'
        }
      },
      {
        test: /\.js$/,
        enforce: 'post',
        use: {
          loader: 'loader3'
        }
      }
    ]
  }
}