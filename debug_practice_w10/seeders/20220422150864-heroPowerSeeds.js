'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('SuperheroPowers', [
     {
       heroId: 1,
       powerId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 1,
       powerId: 3,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 1,
       powerId: 4,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 1,
       powerId: 5,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 2,
       powerId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 2,
       powerId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 2,
       powerId: 3,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 2,
       powerId: 4,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 2,
       powerId: 7,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 3,
       powerId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 3,
       powerId: 3,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 3,
       powerId: 5,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 3,
       powerId: 6,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 3,
       powerId: 7,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 4,
       powerId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 4,
       powerId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 4,
       powerId: 3,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 4,
       powerId: 7,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       heroId: 5,
       powerId: 4,
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
   return queryInterface.bulkDelete('SuperheroPowers', null, {});
  }
};
