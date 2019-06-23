
const { Sequelize, Model } = require('sequelize')
const { sequelize } = require('../../core/db')

class User extends Model {

}
User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nickname: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unquie: true
  },
  pwd: Sequelize.STRING,
  openid: {
    type: Sequelize.STRING(64),
    unquie: true
  }
}, {
    sequelize,
    tableName: 'user'
  })