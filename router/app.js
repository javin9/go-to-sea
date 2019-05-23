/**
 * koa-router使用
 * REST
 * - GET:查询数据
 * - POST:新增数据操作
 * - PUT:更新数据操作
 * - DELETE:查询数据操作
 * 
 */
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
//第二个参数也是一个中间件 就是一个函数
router.get('/get/name', async (ctx, next) => {
  ctx.body = {
    key: 'Hello,world!'
  }
})

app.use(router.routes())
app.listen(3000)