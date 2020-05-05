const loaderUtils = require('loader-utils')

function loader(source) {
  console.log("loader -> source", source)
  const fileUrl = loaderUtils.interpolateName(this, '[hash].[ext]', { content: source })
  // 把文件发射到 dist 目录下
  this.emitFile(fileUrl, source)
  console.log("loader -> fileUrl", fileUrl)
  // 最终的 loader 要被插入到页面中，所以类型只能是 buffer 或者 string
  return `module.export = "${fileUrl}"`
}

// loader 处理的是一个二进制文件，就需要设置 raw 为 true，此时是一个 buffer，否则 source 会被默认 toString
loader.raw = true

module.exports = loader