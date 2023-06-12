'use strict';
const data = require("../data/03-likes.json")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.forEach(el => {
      delete el.id
      el.createdAt = new Date()
      el.updatedAt = new Date()
    });
    await queryInterface.bulkInsert('Likes', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Likes', null, {});
  }
};