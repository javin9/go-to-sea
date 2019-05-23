
/**
 * request文档
 * request.path 别名ctx.path
 * request.method 别名ctx.method
 * 
 * body上面放返回的数据，koa会从body上取，然后返回给客户端
 * ==body 返回字符串：ctx.body=“hello,world"
 * ===    返回对象：  ctx.body={key:1234}
 */
const Koa = require('koa')
const app = new Koa()
app.use(async (ctx, next) => {
  console.log(ctx.method);
  console.log(ctx.path);
  if (ctx.path === '/get/name' && ctx.method === 'GET') {
    ctx.body = {
      key: 'Hello,world'
    }
  }

})
app.listen(3000)