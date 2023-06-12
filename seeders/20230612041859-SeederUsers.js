'use strict';
const data = require("../data/01-users.json")
const { hashPassword } = require("../helpers/bcrypt")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.forEach(el => {
      delete el.id
      el.password = hashPassword(el.password)
      el.createdAt = new Date()
      el.updatedAt = new Date()
    });
    await queryInterface.bulkInsert('Users', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
