'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Bulbasaur',
        lastName: 'Caught',
        email: 'bulbasaur@pokedex.mon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Ivysaur',
        lastName: 'Free',
        email: 'ivysaur@pokedex.mon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Venusaur',
        lastName: 'Caught',
        email: 'venusaur@pokedex.mon',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
