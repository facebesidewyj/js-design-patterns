/**
 * 单例模式
 */
function singleton({ fn }) {
  let res
  return function() {
    return res || (res = fn.apply(this, arguments))
  }
}
