const Sequelize = require('sequelize');
const env = "development";
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.USER = require('./user')(sequelize, Sequelize)

module.exports = db;
