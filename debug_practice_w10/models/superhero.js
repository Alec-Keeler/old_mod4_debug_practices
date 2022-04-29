'use strict';
module.exports = (sequelize, DataTypes) => {
  const Superhero = sequelize.define('Superhero', {
    name: DataTypes.STRING,
    alias: DataTypes.STRING,
    comicUniverse: DataTypes.STRING
  }, {});
  Superhero.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'Superheropower',
      foreignKey: 'heroId',
      otherKey: 'powerId'
    }
    Superhero.belongsTomany(model.Power, columnMapping)
  };
  return Superhero;
};