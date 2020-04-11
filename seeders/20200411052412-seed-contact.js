'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [
      {
        firstname: 'Daniel',
        lastname: 'Ramos',
        phone: '3219952993',
        email: 'drramosdev@gamil.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      },
      {
        firstname: 'Diego',
        lastname: 'Ramos',
        phone: '3219952990',
        email: 'diego@gamil.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
