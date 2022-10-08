const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//add code here to see if user is logged in
class BlogUser extends Model {}

BlogUser.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }

    }
  },
  // add hooks code here
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog-user'
  }  
);

module.exports = BlogUser;