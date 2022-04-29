'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SuperheroPowers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      heroId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Superheros'},
        unqiue: true
      },
      powerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Powers'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SuperheroPowers');
  }
};