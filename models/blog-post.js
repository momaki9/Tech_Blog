const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init(
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
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  }  
);

module.exports = BlogPost;