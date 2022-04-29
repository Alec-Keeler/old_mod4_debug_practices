'use strict';
module.exports = (sequelize, DataTypes) => {
  const Power = sequelize.define('Power', {
    type: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Power.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'SuperheroPower',
      foreignKey: 'powerId',
      otherKey: 'heroId'
    }
    Power.belongsToMany(models.Superhero, columnMapping)
  };
  return Power;
};