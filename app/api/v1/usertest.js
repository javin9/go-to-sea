const Router = require('koa-router')
const { connection } = require('../../../mysql/index')

const router = new Router();
router.get('/v1/getuser', async (ctx, next) => {
  connection.execute('select * from user', (err, results, fields) => {
    console.log(err)
    console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about result
    // ctx.body = {
    //   msg: 'success'
    // }
  })
})

module.exports = router