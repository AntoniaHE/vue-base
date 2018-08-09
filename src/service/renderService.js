'use strict'
module.exports = function (data, name) {
  const pageName = name || '404'
  const output = `<div>
    <p>对不起，您访问的页面不存在!</p>
  </div>`
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${pageName}</title>
    </head>
    <body>
      <div id="app">
      ${output}
      </div>
    </body>
  </html>`
}
