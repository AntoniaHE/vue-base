'use strict'
module.exports = function () {
  const data = []
  for (let i = 0; i < 20; i++) {
    const randData = Math.random().toFixed(1) * 10
    data.push({
      id: (i + 1) * 10 + randData,
      name: '啊哈哈哈' + i
    })
  }
  return data
}
