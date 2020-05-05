const less = require('less')
function loader(source) {
  let code = `
    const style = document.createElement('style')
    style.innerHTML = ${JSON.stringify(source)}
    document.head.appendChild(style)
  `

  return code
}

module.exports = loader

// less-loader 转换成 css
// style-loader 可以插入到 style 标签中
// css-loader 可以解析 background: url('./xxx.jpg') => background: url(require('./xxx.jpg'))