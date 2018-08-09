const apiOriginList = require('../../config/dev.env').apiOriginList

module.exports = function cors (req, res) {
  if (req.headers['access-control-request-headers'] && req.headers['access-control-request-headers'] === 'content-type') {
    // 如果浏览器请求包括Access-Control-Request-Headers字段，则Access-Control-Allow-Headers字段是必需的。
    // 因为 patch 请求包含该字段并值为：content-type，所以服务端也设置该字段。
    res.header('Access-Control-Allow-Headers', 'content-type')
  }
  res.header('Access-Control-Allow-Credentials', true)
  // api 白名单
  let legalOrigin
  // 如果配置中心配置了该选项，则进行校验
  if (apiOriginList) {
    // 判断 origin 是否在白名单内
    legalOrigin = apiOriginList.split(',').find(item => {
      return req.headers.origin === item
    })
  } else {
    legalOrigin = '*'
  }
  if (legalOrigin) {
    res.header('Access-Control-Allow-Origin', legalOrigin)
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE')
}
