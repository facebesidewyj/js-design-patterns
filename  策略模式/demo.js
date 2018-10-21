/**
 * 策略对象：封装了一系列策略
 * @type {Object}
 */
let strategies = {
  "S":function(value){
    return value * 4
  },
  "A":function(value){
    return value * 3
  },
  "B":function(value){
    return value * 2
  }
}

/**
 * 策略执行方法
 * @param {String} level 策略方法
 * @param {Number} value 计算的值
 * @returns {Number} 根据策略执行返回的结果
 */
function calculateBouns(level,value) {
  return strategies[level].apply(value)
}