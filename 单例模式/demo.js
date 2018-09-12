/**
 * 单例模式
 * @param {Function} fun 执行函数
 * @returns {Object} 执行函数的返回值
 */
function singleton({ fun }) {
  let res
  return function() {
    return res || (res = fun.apply(this, arguments))
  }
}
