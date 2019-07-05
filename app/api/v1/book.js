/**
 *书籍
 */
const Router = require('koa-router')
const { PositiveIntegerValidator } = require('../../validators/validator')


const router = new Router()

router.get('/v1/book/latest/:id', async (ctx, next) => {

  const v = new PositiveIntegerValidator().validate(ctx)
  // console.log(v);

  ctx.body = {
    key: "book"
  }

})

module.exports = router