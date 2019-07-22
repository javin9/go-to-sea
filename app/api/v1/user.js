const Router = require('koa-router')
const { RegisterValidator } = require('../../validators/validator')

// const router = new Router({
//   prefix: '/v1/user'
// })
const router = new Router()
const { User } = require('../../model/user.js')

router.post('/v1/user/register', async (ctx, next) => {
  //思路：接受参数-> Validator校验
  const v = new RegisterValidator().validate(ctx)
  const user = {
    nickname: v.get("body.nickname"),
    email: v.get('body.email'),
    pwd: v.get('body.pwd1')
  }
  console.log('&&&')
  console.log(user);

  // 返回的模型
  const r = await User.create(user)

})

module.exports = router