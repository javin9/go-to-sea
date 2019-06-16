/**
 * 期刊
 */

const Router = require('koa-router')


const router = new Router()
const { HtppException } = require('../../../core/http-exception')

router.get('/v1/classic/latest', async (ctx, next) => {
  ctx.body = {
    key: "classic"
  }
})
router.post('/v1/:id/classic/detail', async (ctx, next) => {
  const params = ctx.params
  const query = ctx.request.query
  const header = ctx.request.header
  const body = ctx.request.body
  console.log(query)
  // if (true) {
  //   //动态语言可以随意修改属性
  //   const error = new Error('为什么错误')
  //   error.errorCode = 10001
  //   error.status = 400
  //   error.requestUrl = `${ctx.method} ${ctx.path}`
  //   throw error;
  // }
  if (true) {
    const error = new HtppException('为什么错误', 10001, 400)
    throw error;
  }

  ctx.body = {
    key: "classic"
  }
})
module.exports = router