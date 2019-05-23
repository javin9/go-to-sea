//洋葱模型
const Koa = require('koa')

const app = new Koa()

/**
 * 执行顺序：
 * 1->3->4->2
 * 
 * 洋葱模型图
 */

app.use((context, next) => {
  console.log(1)
  next()
  console.log(2)
})

app.use((ctx, next) => {
  console.log(3)
  next()
  console.log(4)
})



app.listen(3000)