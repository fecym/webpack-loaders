// 使用 inline-loader
// require('inline-loader!./a')
// 经常在使用 inline-loader 时不希望使用别的的loader进行处理了，加个 !! 即可
require('!!inline-loader!./a')
// webpack 内置 loader 的用法
// !! 不使用其他loader处理
// -! 不要执行执行当前 inline-loader 前面的 loader
// ! normalLoader 不执行

//  source-map 错误测试
// class A {

// }

// const a = new A()
// a.getName()

// file-loader 使用
// 这么引入会被 file-loader 劫持此文件。产生一个新的文件到 dist 目录下
// 并且返回一个路径
// import girl from './girl.jpg'
// const img = new Image()
// img.src = girl
// document.body.appendChild(img)

// css 测试
import './style.less'