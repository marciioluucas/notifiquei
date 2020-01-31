'use strict';
module.exports = (sequelize, DataTypes) => {
  const App = sequelize.define('App', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {});
  App.associate = function(models) {
    // associations can be defined here
  };
  return App;
};