'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Powers', [
     {
       type: 'Strength',
       description: 'Innate or technilogically enhanced super human strength',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       type: 'Flight',
       description: 'Innate or technological ability to fly',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       type: 'Durability',
       description: 'Can sustain significant injury/attack without faltering',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       type: 'Laser Beams',
       description: 'Innate or technological ability to shoot fricken laser beams',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       type: 'Genius',
       description: 'Significantly above average intelligence',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       type: 'Spidey-Sense',
       description: 'Innate sixth sense warning of imminent danger',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       type: 'Speed',
       description: 'Zoom zoom',
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
   return queryInterface.bulkDelete('Powers', null, {});
  }
};
