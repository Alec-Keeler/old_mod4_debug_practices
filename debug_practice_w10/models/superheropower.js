'use strict';
module.exports = (sequelize, DataTypes) => {
  const SuperheroPower = sequelize.define('SuperheroPower', {
    heroId: DataTypes.INTEGER,
    powerId: DataTypes.INTEGER
  }, {});
  SuperheroPower.associate = function(models) {
    // associations can be defined here
  };
  return SuperheroPower;
};