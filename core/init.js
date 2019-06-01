/**
 * 初始化 路由
 *  类里面静态方法的好处，不需要实例化
 *  InitManager.app = app; //把app放到类上面，思想很重要。这样调用的时候，不需要传参数了
 *  const apiDirectory = `${process.cwd()}/app/api/v1` 用process.cwd()解决硬编码问题 
 */

const requireDirectoy = require('require-directory')
const Router = require('koa-router');
const parser = require('koa-bodyparser')


class InitManager {
  static init (app) {
    InitManager.app = app
    //注册body解析
    InitManager.registerParser()
    //注册路由
    InitManager.registerRouter()
   
  }

  static registerParser () {
    InitManager.app.use(parser())
  }

  static registerRouter () {
    const apiDirectory = `${process.cwd()}/app/api/v1`
    requireDirectoy(module, apiDirectory, {
      visit: (item) => {
        if (item instanceof Router) {
          InitManager.app.use(item.routes())
        }
      }
    })
  }
}

module.exports = InitManager