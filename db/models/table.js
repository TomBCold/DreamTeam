'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Game, {foreignKey: 'gameId'});
      this.belongsTo(models.User, {foreignKey: 'creatorId'});
    }
  }
  Table.init({
    creatorId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    sostavA: DataTypes.STRING,
    sostavB: DataTypes.STRING,
    teamA: DataTypes.INTEGER,
    teamB: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Table',
  });
  return Table;
};
