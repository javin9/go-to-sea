/**
 * 强制Promise
 * 规则:强制加上async 和 await  
 * async 和 await 是异步编程的终极方案
 * 1.next()返回的是一个promise
 * 2.中间件里面是可以return 
 */

const Koa = require('koa')
const app = new Koa()
app.use((context, next) => {
  console.log(1)
  const promise = next()
  console.log(promise);//结果 Promise{'node koa'}
  console.log(2)
})

app.use((context, next) => {
  console.log(3)
  next()
  console.log(4)
  /**
   * 此处可以返回任何东西，包括 return new Promise()
   */
  return 'node koa'
})

app.listen(3000)