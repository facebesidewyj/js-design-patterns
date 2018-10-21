import Rules from './rules'
/**
 * 填单校验器
 * @class
 */
export default class Validator {
  constructor() {
    // 校验缓存数组
    this.cache = []
  }
  /**
   * 添加校验
   * @param {Array|Object|string|Number} value 校验值
   * @param {String} ruleName 规则名称
   * @param {String} errorMsg 错误提示
   */
  add(value, ruleName, errorMsg) {
    let arg = ruleName.split(':')
    // 取出校验方法名称
    let ruleFunc = arg.shift()
    // 将校验的值放入数组起始位置
    arg.unshift(value)
    // 将错误提示添加数组
    arg.push(errorMsg)
    this.cache.push(function() {
      return new Rules()[ruleFunc].apply(this, arg)
    })
  }
  /**
   * 执行校验
   * @returns {String} 错误提示
   */
  start() {
    for (const ruleFunc of this.cache) {
      let msg = ruleFunc()
      if (msg) {
        return msg
      }
    }
  }
}
