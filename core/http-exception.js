/**
 * 异常处理基类,继承Error，因为要通过throw 抛出实例
 */

class HttpException extends Error {
  constructor(msg = '服务器异常', errorCode = 10000, code = 400) {
    super()
    this.errorCode = errorCode
    this.code = code
    this.msg = msg
  }
}

class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.code = 400;
    this.msg = msg || '参数错误'
    this.errorCode = errorCode || 10000

  }
}

module.exports = {
  HttpException,
  ParameterException
}


