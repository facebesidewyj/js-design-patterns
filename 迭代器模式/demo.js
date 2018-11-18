/**
 * 内部迭代器
 * @param {Array} ary 迭代对象函数
 * @param {Function} callback 回调函数
 */
function each(ary, callback) {
  for (let i = 0, l = ary.length; i < l; i++) {
    callback.call(ary[i], i, ary[i])
  }
}

/**
 * 外部迭代器
 * @class
 */
class Iterator {
  constructor(obj) {
    this.current = 0
    this.obj = obj
    this.length = obj.length
  }
  /**
   * 迭代索引递增
   */
  next() {
    this.current += 1
  }
  /**
   * 判断是否迭代完毕
   */
  isDone() {
    return this.current === this.length
  }
  /**
   * 获取当前元素
   */
  getCurrentItem() {
    return this.obj[this.current]
  }
}
let iterator = new Iterator([1, 2, 3, 4])
while (!iterator.isDone()) {
  console.log(iterator.getCurrentItem())
  iterator.next()
}
