import Lodash from 'lodash'
/**
 * 填单校验规则类
 * @class
 */
export default class Rules {
  constructor() {}
  /**
   * 判空校验
   * @param {Array|Object|string} value 校验的数据
   * @param {String} errorMsg 错误提示
   * @returns {String} 错误提示
   */
  isEmpty(value, errorMsg) {
    if (Lodash.isEmpty(value)) {
      return errorMsg
    }
  }
  /**
   * 最小值校验
   * @param {Number} value 校验的数据
   * @param {Number} count 最小值
   * @param {String} errorMsg 错误提示
   * @returns {String} 错误提示
   */
  minCount(value, count, errorMsg) {
    if (value < count) {
      return errorMsg
    }
  }
  /**
   * 最大值校验
   * @param {Number} value 校验的数据
   * @param {Number} count 最大值
   * @param {String} errorMsg 错误提示
   * @returns {String} 错误提示
   */
  maxCount(value, count, errorMsg) {
    if (value > count) {
      return errorMsg
    }
  }
}
