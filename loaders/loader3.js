// 参数是源代码，不推荐写成箭头函数，因为是要用到 this 的
function loader(source) {
  console.log(3);
  return source
}

loader.pitch = function() {
  console.log('loader3-pitch');
}

module.exports = loader