/**
 * 异步模型
 * 规则:强制加上async 和 await  
 * async 和 await 是异步编程的终极方案
 */

const Koa = require('koa')
const app = new Koa()
app.use(async (context, next) => {
  console.log(1)
  await next()
  console.log(2)
})

app.use(async (context, next) => {
  console.log(3)
  await next()
  console.log(4)
})

app.listen(3000)