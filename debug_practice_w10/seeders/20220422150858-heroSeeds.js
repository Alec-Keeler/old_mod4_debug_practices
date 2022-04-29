'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('People', [
     {
       name: 'Tony Stark',
       alias: 'Iron Man',
       comicUniverse: 'Marvel',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'Clark Kent',
       alias: 'Superman',
       comicUniverse: 'DC',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: '????',
       alias: 'Spider-Man',
       comicUniverse: 'Marvel',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'Diana Prince',
       alias: 'Wonder Woman',
       comicUniverse: 'DC',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'Sharks',
       alias: 'N/A',
       comicUniverse: 'Austin Powers',
       createdAt: new Date(),
       updatedAt: new Date()
     },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Superheros', null, {});
  }
};
