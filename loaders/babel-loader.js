// babel-loader 的实现
// loader-utils  loader 提供了一个工具库用来获取各种参数
const loaderUtils = require('loader-utils')
const babel = require('@babel/core')
function loader(source) {
  // 获取 loader 传递的参数需要从 this 中拿到
  // console.log("loader -> this", Object.keys(this))
  // console.log(this.query);
  const options = loaderUtils.getOptions(this)
  // loader 有两种方式，同步可直接返回，异步可以传递多个参数
  // 调用了 cb 函数才能执行下一个loader
  let cb = this.async()
  console.log("loader -> options", options)
  babel.transform(source, {
    ...options,
    // 使用 sourceMap，才会产生 sourceMap，还需要在 webpack 中配置 devtool 才可以使用 sourceMap
    sourceMap: true,
    // 如果代码异常，告诉我们时哪个文件，若没有这个则不告我们哪个文件错了
    filename: this.resourcePath.split('/').pop()
    // filename: this.resourcePath
  }, function (err, result) {
    console.log("loader -> result", Object.keys(result))
    // 异步的 loader
    // cb 的第一个参数时错误信息
    cb(err, result.code, result.map)
  })
  // return source
}

module.exports = loader