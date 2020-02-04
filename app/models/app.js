'use strict';
module.exports = (sequelize, DataTypes) => {
  const App = sequelize.define('App', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {});
  App.associate = function (models) {
    App.hasMany(models.Namespace);
    App.belongsTo(models.User);
    App.hasOne(models.Token);
  };
  return App;
};