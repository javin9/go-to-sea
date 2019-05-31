/**
 * 多Router拆分路由
 * api都是有版本的
 * v1,v2,v3支持三个版本
 * 开闭原则：对修改关闭，对拓展开放
 * 版本号控制：
 * 1.路径里面            e.g '/v1/get/userinfo'
 * 2.查询字符串里面       e.g '/get/userinfo?version=v1'
 * 3.header             放到http header里面
 */
const Koa = require('koa')
const book = require('./app/api/v1/book')
const classic = require('./app/api/v1/classic')

const app = new Koa()
app.use(book.routes())
app.use(classic.routes())

app.listen(3000)


