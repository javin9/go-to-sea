
/**
 * koa-router
 * https://www.npmjs.com/package/koa-route
 * 中间件需要注册，不是都要开发者自己注册
 */
const Koa = require('koa')
const Router = require('koa-route')
const router = new Router()

const app = new Koa()
router.get('/classic/latest', async (ctx, next) => {
  ctx.body = {
    msg: "Hello,world"
  }
  next()
})

app.use(router.routes())
app.listen(3000)