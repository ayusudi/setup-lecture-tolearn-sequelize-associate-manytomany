'use strict';
const data = require("../data/04-actors.json")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.forEach(el => {
      delete el.id
      el.createdAt = new Date()
      el.updatedAt = new Date()
    });
    await queryInterface.bulkInsert('Actors', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Actors', null, {});
  }
};