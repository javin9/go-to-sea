/**
 * 深入理解async和await
 * 用awai代替promise.then的写法
 * await:求值关键字
 * 1.对表达式求值，不只是对promise求值 e.g await 100*100;
 * 2.会阻塞当前的线程
 * 异步的场景有哪些
 * 1.对资源处理，比如读写文件，操作数据库
 * 2.发送http请求
 * async
 * 1.返回的都是promise
 */

const Koa = require('koa')
const app = new Koa()
app.use(async (context, next) => {
  console.log(1)
  const a = await next()
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