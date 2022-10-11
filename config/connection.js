const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {

 sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize (
    "techblog_db",
    "root",
    'R0JmN1mf3l',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306 
    }
    );
}

module.exports = sequelize;