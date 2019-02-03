'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostTag = sequelize.define('PostTag', {
    //postId: DataTypes.INTEGER,
    //tagId: DataTypes.INTEGER
  }, {});
  
  return PostTag;
};