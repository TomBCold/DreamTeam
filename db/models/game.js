'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Table, {foreignKey: 'gameId'});
      this.belongsTo(models.User, {foreignKey: 'creatorId'});
    }
  }
  Game.init({
    coordsA: DataTypes.DOUBLE(11),
    coordsB: DataTypes.DOUBLE(11),
    date: DataTypes.STRING,
    time: DataTypes.TIME,
    text: DataTypes.STRING,
    creatorId: DataTypes.INTEGER,
    adress: DataTypes.STRING,
    finish: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
