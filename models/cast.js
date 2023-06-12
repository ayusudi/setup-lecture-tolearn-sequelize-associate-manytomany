'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cast.init({
    MovieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "MovieId is required!"
        },
        isInt: {
          msg: "MovieId is ForeignKey! Input must be integer."
        }
      }
    },
    ActorId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "ActorId is required!"
        },
        isInt: {
          msg: "ActorId is ForeignKey! Input must be integer."
        }
      }
    },
    characterName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg: "Character name is required!"
        },
        notEmpty: {
          msg: "Character name is required! Please input any character."
        }
      }
    },
    mainCharacter:  {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate : {
        notNull: {
          msg: "Main character is required true or false!"
        }
      }
    },
    characterType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg: "Character type is required!"
        },
        notEmpty: {
          msg: "Character type is required! Please input any character  : protagonist/antagonist/deutrogonist."
        },
        isIn: {
          args: ["protagonist","antagonist","deutrogonist"],
          msg: "Character type is between protagonist/antagonist/deutrogonist "
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg: "Image is required!"
        },
        notEmpty: {
          msg: "Image is required! Please input any character."
        },
        isUrl: {
          msg: "Image must be link to image!"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Cast',
  });
  return Cast;
};