'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Title is required!"
        },
        notEmpty: {
          msg: "Title is required! Please input any character."
        }
      }
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Synopsis is required!"
        },
        notEmpty: {
          msg: "Synopsis is required! Please input any character."
        },
        customValidateCheckTotalWord(string) {
          let totalWords = string.split(" ").length
          if (totalWords < 3) {
            throw "Minimum 3 words in synopsis!"
          }
        }
      },
      poster: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Poster is required!"
          },
          notEmpty: {
            msg: "Poster is required! Please input any character."
          },
          isUrl: {
            msg: "Poster must be link to image!"
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};