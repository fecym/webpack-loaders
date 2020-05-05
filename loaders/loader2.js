// 参数是源代码，不推荐写成箭头函数，因为是要用到 this 的
function loader(source) {
  console.log(2);
  return source
}

loader.pitch = function() {
  console.log('loader2-pitch');
  // return 'xxxx'
}

module.exports = loader

// loader 的特点
// 尽可能职责单一，每个loader 只干一件事
// 这个就可以多个 loader 组合，pitch 可以中断loader的执行，像中间件函数
// 只要在 pitch 函数中 return 出结果了，后面的 loader就不执行了
// loader 不能有状态（官方不推荐），只能是一个纯函数
// less-loader style-loader process-loader
// loader 其实是正着走的，但是loader执行顺序是倒叙的