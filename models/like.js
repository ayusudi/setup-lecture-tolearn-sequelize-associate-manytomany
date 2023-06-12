'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Like.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "userId is required!"
        },
        isInt: {
          msg: "userId is ForeignKey! Input must be integer."
        }
      }
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "movieId is required!"
        },
        isInt: {
          msg: "movieId is ForeignKey! Input must be integer."
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};