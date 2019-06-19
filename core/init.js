/**
 * 初始化 路由
 *  类里面静态方法的好处，不需要实例化
 *  InitManager.app = app; //把app放到类上面，思想很重要。这样调用的时候，不需要传参数了
 *  const apiDirectory = `${process.cwd()}/app/api/v1` 用process.cwd()解决硬编码问题 
 */

const requireDirectoy = require('require-directory')
const Router = require('koa-router');
const parser = require('koa-bodyparser')
const catchError = require('../middlewares/exception.js')
const cwd = process.cwd()


class InitManager {
  static init (app) {
    InitManager.app = app

    //监听异常
    InitManager.registerCatchError()
    //注册body解析
    InitManager.registerParser()
    //注册路由
    InitManager.registerRouter()
    //配置全局变量
    InitManager.loadConfig()


  }
  //解析body
  static registerParser () {
    InitManager.app.use(parser())
  }
  //注册路由
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
  //监听异常
  static registerCatchError () {
    InitManager.app.use(catchError)
  }
  //配置全局文件
  static loadConfig (path = '') {
    const configPath = path.join(cwd, './config/index.js')
    const config = require(configPath)
    global.config = config
  }
}

module.exports = InitManager