const Sequelize = require('sequelize')
const config = require('dotenv').config()

const {
  database,
  username,
  password,
  host,
  dialect
} = config.ENV === 'PRODUCTION' ?
      require('../config/config').production :
      require('../config/config').development

const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host,
    dialect,

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = sequelize
