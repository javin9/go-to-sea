/**
 * 期刊
 */

const Router = require('koa-router')


const router = new Router()

router.get('/v1/classic/latest', async (ctx, next) => {
  ctx.body = {
    key: "classic"
  }
})
router.post('/v1/:id/classic/detail', async (ctx, next) => {
  const params = ctx.params
  console.log(params);
  const query = ctx.request.query
  console.log(query);
  const header = ctx.request.header
  console.log(header);
  const body = ctx.request.body
  console.log(body);

  ctx.body = {
    key: "classic"
  }
})
module.exports = router