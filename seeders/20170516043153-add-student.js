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
    return queryInterface.bulkInsert('Students', [{
      first_name: 'Deri',
      last_name: 'Kurniawan',
      createdAt: new Date().toISOString,
      updatedAt: new Date().toISOString
    }], [{
      first_name: 'Nugraha',
      last_name: 'Nugraha',
      createdAt: new Date().toISOString,
      updatedAt: new Date().toISOString
    }], [{
      first_name: 'Ambo',
      last_name: 'Dalle',
      createdAt: new Date().toISOString,
      updatedAt: new Date().toISOString
    }], [{
      first_name: 'Widya',
      last_name: 'Kandau',
      createdAt: new Date().toISOString,
      updatedAt: new Date().toISOString
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
  //  return queryInterface.bulkDelete('Students', null, {});
};
