const Koa = require('koa')
const app = new Koa()
/**
 * 通常我们不会直接定义一个中间件（函数），然后app.use注册
 * 而是，直接在app.use里面写上匿名的箭头函数
 * 
 */

/**
* 可以注册多个中间件,
* 但是，Koa只能自动执行第一个中间件,其他的中间件需要自己去注册
* 解决方法：Koa在执行中间件的时候，默认传递两个参数 (ctx,next)
* ctx:上下文(context)
* next:下一个中间件函数
**/

app.use((ctx, next) => {
  console.log('hellow ')
  next()
})

app.use(() => {
  console.log('world')
})
/**
 * 打印结果：
 * hello，
 * world
 */
app.listen(3000)

/**
 * 所有Koa的内容都是围绕：监听(listen),中间件(箭头函数),注册(use)=>上下文，next展开的
 *
 */