const Sequelize = require('sequelize')

const { dbName, host, port, user, pwd } = require('../config/index').db
//dbname,user,password,{}
const sequelize = new Sequelize(dbName, user, pwd, {
  //数据库的类型 .如果连接mysql 需要安装npm包 mysql2
  dialect: 'mysql',
  host,
  port,
  //显示sql语句
  logging: true,
  //时区
  timezone: '+08:00'
})

module.exports = sequelize