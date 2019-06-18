
/**
 * 把路由初始化放到core/init.js 类的静态方法上面
 */

const Koa = require('koa')
const InitManager = require('./core/init')


const app = new Koa()

InitManager.init(app)

app.listen(3000)