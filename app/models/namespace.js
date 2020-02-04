'use strict';
module.exports = (sequelize, DataTypes) => {
  const Namespace = sequelize.define('Namespace', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Namespace.associate = function (models) {
    Namespace.belongsTo(models.App)
    Namespace.hasMany(models.Room)
  };
  return Namespace;
};