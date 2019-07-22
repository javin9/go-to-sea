const Sequelize = require('sequelize')
/**
 * db: {
    dbName: 'rupid',
    host: "root",
    port: 3306,
    user: 'cupid',
    pwd: '!QAZ2wsx'
  }
 */
const { dbName, host, port, user, pwd } = require('../config/index').db
//dbname,user,password,{}
const sequelize = new Sequelize(dbName, user, pwd, {
  //数据库的类型 .如果连接mysql 需要安装npm包 mysql2
  /**
   * 
   * # And one of the following: 
   * npm install --save pg pg-hstore # Postgres 
   * npm install --save mysql2
   * npm install --save mariadb
   * npm install --save sqlite3
   * npm install --save tedious # Microsoft SQL Server 
   */
  dialect: 'mysql',
  host,
  port,
  //显示sql语句
  logging: false,
  //时区
  timezone: '+08:00',
  define: {
    //设置为true，会自动创建create_time update_time 
    timestamps: true,
    // delte_time
    paranoid: true,
    // 命名风格的更改
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'update_at',
    deletedAt: 'delete_at'
  }
})

//如果表存在，不会再次生成.如果想覆盖，需要设置 {force:true}
// sequelize.authenticate()
//   .then(function () {
//     console.log('Connection has been established successfully.')
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err)
//     process.exit(1)
//   })

// 同步模型
sequelize.sync()
  .then(function (res) {
    // console.log(res, 'init db ok')
  })
  .catch(function (err) {
    // console.log('init db error', err)
  })

module.exports = {
  sequelize
}