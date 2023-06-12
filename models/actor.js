'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Actor.init({
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
    realName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg: "Name is required!"
        },
        notEmpty: {
          msg: "Name is required! Please input any character A-Z."
        },
      }
    },
    profile: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg: "Profile is required!"
        },
        notEmpty: {
          msg: "Profile is required! Please input any character."
        },
        isUrl: {
          msg: "Profile must be link to image!"
        }
      }
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      validate : {
        notNull: {
          msg: "Gender is required!"
        },
        notEmpty: {
          msg: "Gender is required! Please input between M or F."
        }
      }
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate : {
        notNull: {
          msg: "Birth date is required!"
        },
        isDate: {
          msg: "Input must format as a date!"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Actor',
  });
  return Actor;
};