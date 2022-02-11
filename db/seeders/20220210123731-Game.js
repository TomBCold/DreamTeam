'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Games', [{
      coordsA: 55.74915765003671,
      coordsB: 37.68943847656249,
      date: '2022-03-06',
      time: '21:30:00',
      text: 'Приходите',
      creatorId: 1,
      adress: 'adressssssssss',
      finish: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      coordsA: 55.818032493400324,
      coordsB: 37.635880126953104,
      date: '2022-06-03',
      time: '23:00:00',
      text: 'Поиграем?',
      creatorId: 1,
      adress: 'adressssssssss',
      finish: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      coordsA: 55.725913849480925,
      coordsB: 37.508164062499986,
      date: '2022-02-22',
      time: '20:55:00',
      text: 'Приходите все!',
      creatorId: 1,
      adress: 'adressssssssss',
      finish: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Games', null, {});
  }
};
