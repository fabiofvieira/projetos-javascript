'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Post)
  };
  return Category;
};