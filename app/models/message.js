'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    text: DataTypes.STRING,
    callback: DataTypes.STRING
  }, {});
  Message.associate = function (models) {
    models.HasMany(models.Device)
  };
  return Message;
};