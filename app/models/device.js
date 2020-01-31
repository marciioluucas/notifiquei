'use strict';
module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('Device', {
    platform: DataTypes.STRING,
    alias: DataTypes.STRING
  }, {});
  Device.associate = function(models) {
    // associations can be defined here
  };
  return Device;
};