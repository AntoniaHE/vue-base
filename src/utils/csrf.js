
/**
 * @authors       hemei
 * @email         hemeihemei520@gmail.com
 * @date          2018年08月09日10:45:10
 * @description   避免 CSRF(跨站域请求伪造）攻击
 */
const url = require('url')
// const config = require('../../config/dev.env')

module.exports = function (req, res, next) {
  // 引入 "来源" 判断，避免 CSRF 攻击
  // 如果 referer 不存在那么返回 403
  if (!req.headers.referer) {
    res.sendStatus(403)
    return
  }
  // 利用 url.parse 获取 hostname
  const refererURL = url.parse(req.headers.referer)
  console.log(req.headers.referer)
  // 判断 hostname 是否合法
  const isAllowed = refererURL.hostname.endsWith(`.base.com`)

  if (!isAllowed) {
    res.sendStatus(403)
    return
  }
  next()
}
