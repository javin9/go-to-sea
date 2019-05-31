/**
 * require-directory 实现路由自动加载
 * //相对于 入口文件的所有的 模块
 * - const modules=requireDirectory(module) 
 * //会返回所有模块 包括不是路由的模块
 * - const modules = requireDirectory(module, './api/v1') 
 * //在visit 做过滤，只返回路由模块 .路由模块 导出的是module.exports=router .是Router的一个实例，所以可以通过判断 item instanceof Router 判断是不是一个路由
 * - const modules=requireDirectory(module,'./api/v1',{
 *      visit:()=>{
 *        if (item instanceof Router) {
             app.use(item.routes())
          }
 *     }
 * })
 */
const Koa = require('koa')
const Router = require('koa-router')
const requireDirectory = require('require-directory')

const app = new Koa()
// const modules=requireDirectory(module) 
// const modules = requireDirectory(module, './api/v1') //
const modules = requireDirectory(module, '../app/api/v1', {
  visit: (item) => {
    if (item instanceof Router) {
      app.use(item.routes())
    }
  }
})

app.listen(3000)


