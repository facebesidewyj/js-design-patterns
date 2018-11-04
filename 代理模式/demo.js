let obj = {
  test: function() {
    console.log('目标对象执行了')
  }
}

let proxyObj = {
  proxyTest: function() {
    console.log('代理对象执行了')

    obj.test()
  }
}

// 代理执行
proxyObj.proxyTest()
