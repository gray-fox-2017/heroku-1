'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Employees', [{
      name: "nugraha",
      position: "junior developer",
      sallary: 8000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "cindy",
      position: "senior developer",
      sallary: 18000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "cindy",
      position: "manager",
      sallary: 28000000,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Employees', null, {})
  }
};
