const Sequelize = require('sequelize')
const config = require('dotenv')
  .config()

const dbConf = config.ENV === 'PRODUCTION' ?
      require('./config').production :
      require('./config').development
const sequelize = new Sequelize(
  dbConf.database,
  dbConf.username,
  dbConf.password,
  {
    host: config.MYSQL_HOST,
    dialect: 'mysql',
    port: 3306,

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
