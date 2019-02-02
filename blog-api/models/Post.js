module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  });

  Post.associate = (models) => {
      Post.belongsTo(models.User);
  }
  return Post;
}