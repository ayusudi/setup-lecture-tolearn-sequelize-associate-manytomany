'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg: "Name is required!"
        },
        notEmpty: {
          msg: "Name is required! Please input any character."
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate : {
        notNull: {
          msg: "Email is required!"
        },
        notEmpty: {
          msg: "Email is required! Please input any character."
        },
        isEmail: {
          msg: "Format must be an email!"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg: "Password is required!"
        },
        notEmpty: {
          msg: "Password is required! Please input any character."
        },
        len: {
          args: [5],
          msg: "Minimum total character of password is 5!"
        }
      }
    },
  }, {
    sequelize,
    hooks: {
      beforeCreate(instance) {
        if (instance.password) {
          instance.password = hashPassword(instance.password)
        }
      }
    },
    modelName: 'User',
  });
  return User;
};