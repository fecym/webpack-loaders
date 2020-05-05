const loaderUtils = require('loader-utils')
const mime = require('mime')

function loader(source) {
  const fileUrl = loaderUtils.interpolateName(this, '[hash:8].[ext]', { content: source })
  const { limit } = loaderUtils.getOptions(this)
  // 把文件发射到 dist 目录下
  this.emitFile(fileUrl, source)
  if (limit > source.length) {
    // 转 base64
    // data:image/jpg;base64,
    const code = `data:${mime.getType(this.resourcePath)};base64,${source.toString('base64')}`
    console.log("loader -> code", code)
    return `module.exports = "${code}"`
  } else {
    // 调用file-loader
    return require('./file-loader').call(this, source)
  }
}

// loader 处理的是一个二进制文件，就需要设置 raw 为 true，此时是一个 buffer，否则 source 会被默认 toString
loader.raw = true

module.exports = loader