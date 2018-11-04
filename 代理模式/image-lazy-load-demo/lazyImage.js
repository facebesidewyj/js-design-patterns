/**
 * 图片加载对象
 * @type {Object}
 */
let image = (function() {
  let imageNode = document.createElement('img')
  document.body.appendChild(imageNode)
  return {
    setSrc: function(src) {
      imageNode.src = src
    }
  }
})()

/**
 * 代理对象
 * @type {Object}
 */
let proxyImage = (function() {
  let img = new Image()
  img.onload = function() {
    image.setSrc(this.src)
  }

  return {
    setSrc: function(src) {
      image.setSrc('dome.png')
      img.src = src
    }
  }
})()

proxyImage.setSrc('house.png')
