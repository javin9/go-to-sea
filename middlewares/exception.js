//全局异常处理 中间件就是一个函数，接受两个参数contenxt，next
const { HttpException } = require("../core/http-exception")
const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    if (error instanceof HttpException) {
      //一直错误
      ctx.body = {
        msg: error.message,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code
    }
  }
}

module.exports = catchError