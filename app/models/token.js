'use strict';
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    value: DataTypes.STRING
  }, {});
  Token.associate = function (models) {
    Token.belongsTo(models.App)
  };
  return Token;
};