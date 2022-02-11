'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      coordsA: {
        type: Sequelize.DOUBLE(11),
      },
      coordsB: {
        type: Sequelize.DOUBLE(11),
      },
      date: {
        type: Sequelize.STRING,
      },
      time: {
        type: Sequelize.TIME,
      },
      text: {
        type: Sequelize.STRING,
      },
      creatorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      adress: {
        type: Sequelize.STRING,
      },
      finish: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Games');
  }
};
