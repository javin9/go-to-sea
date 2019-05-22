/**
 * 洋葱模型的重要性
 * async和await 保证了洋葱模型的顺序调用
 */

const Koa = require('koa')
const axios = require('axios')
const app = new Koa()
app.use(async (ctx, next) => {
  const start = Date.now()
  const res = await axios.get('http://www.baidu.com')
  console.log(res)
  const end = Date.now()
  console.log(start - end)//0
})

app.listen(3000)