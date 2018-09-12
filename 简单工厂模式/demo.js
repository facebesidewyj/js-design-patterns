/**
 * 工厂模式：创建xhr实例
 */
let factory = {}
factory.createObj = function(){
  let xhr
  if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest()
  }else if(window.ActiveXObject){
    XMLHttp = new ActiveXObject("Microsoft.XMLHTTP")
  }

  return xhr
}

let xhr = factory.createObj()