const { LinValidator, Rule } = require('../../core/lin-validator')

class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super()
    this.id = [
      new Rule('isInt', '需要正整数', { min: 1 })
    ]
  }
}

class RegisterValidator extends LinValidator {
  constructor() {
    super()
    this.email = [
      new Rule('isEmail', '不符合规范')
    ]
    this.pwd1 = [
      new Rule('isLength', '密码最少6个字符，最多32个字符', { min: 6, max: 32 }),
      new Rule('matches', '密码不符合规范', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]')
    ]
    this.pwd2 = this.pwd2
    this.nickname = [
      new Rule('isLength', '匿名长度不符合规范', {
        min: 6,
        max: 8
      })
    ]
  }

  validatePwd (vals) {
    const { pwd1, pwd2 } = vals.body
    if (pwd1 !== pwd2) {
      throw new Error('密码不一致')
    }
  }
}

module.exports = {
  PositiveIntegerValidator,
  RegisterValidator
}