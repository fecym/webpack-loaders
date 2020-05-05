// 实现一个 banner-loader
const loaderUtils = require('loader-utils')
// 校验传递的参数
const validateOptions = require('schema-utils')
const fs = require('fs')
const path = require('path')
function loader(source) {
  // 默认 loader 都会被添加到缓存，可以使用 cacheable 不添加到缓存，不推荐使用
  this.cacheable(false)
  const options = loaderUtils.getOptions(this)
  console.log("loader -> options", options)
  const schema = {
    type: "object",
    properties: {
      text: {
        type: 'string'
      },
      filename: {
        type: 'string'
      }
    }
  }
  validateOptions(schema, options, 'banner-loader')
  if (options.filename) {
    // 如果依赖的某个文件发生变化，可以做到实时更新
    // 添加到依赖
    this.addDependency(path.resolve(__dirname, '..', options.filename))
    return fs.readFileSync(options.filename, 'utf8') + source
  }
  return options.text + source
}

module.exports = loader