const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  development: {
    username: process.env.DB_User,
    password: process.env.DB_Password,
    database: process.env.DB_Database,
    host: process.env.DB_Host,
    dialect: 'mysql',
    operatorsAliases: 0,
  }
}
