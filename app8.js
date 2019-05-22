
/**
 * 中间件之间的传值，不建议用return方式，建议中contenxt上下文方式 
 */
const Koa = require('koa')
const app = new Koa()
app.use(async (context, next) => {
  await next()
  const res = context.r;//一定要在next后面写
  console.log(res);

})

app.use(async (context, next) => {
  context.r = '1'
  await next()
})

app.listen(3000)