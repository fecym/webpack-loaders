// 参数是源代码，不推荐写成箭头函数，因为是要用到 this 的
function loader(source) {
  console.log(1);
  return source
}

// loader 有个 pitch 方法，loader 的第二部分，loader 会先走 pitch 方法
loader.pitch = function() {
  console.log('loader1-pitch');
}

module.exports = loader

// loader 的特点
// 尽可能职责单一，每个loader 只干一件事
// 这个就可以多个 loader 组合，pitch 可以中断loader的执行，像中间件函数
// less-loader style-loader process-loader