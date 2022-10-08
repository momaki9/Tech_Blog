const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogUser extends Model {}

BlogUser.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }

    }
  }  
);

module.exports = BlogUser;