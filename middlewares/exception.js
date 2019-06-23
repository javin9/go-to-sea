//全局异常处理 中间件就是一个函数，接受两个参数contenxt，next
const { HttpException } = require("../core/http-exception")
const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    const isHttpException = error instanceof HttpException
    const isDev = global.config.env = 'dev'
    if (!isHttpException && isDev) {
      throw error
    }

    if (isHttpException) {
      // 已知错误
      ctx.body = {
        msg: error.message,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code
    } else {
      //位置错误
      ctx.body = {
        msg: 'service error',
        error_code: 999,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = 500
    }
  }
}

module.exports = catchError