module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    content: DataTypes.TEXT,
    UserId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  });

  Post.associate = (models) => {
      Post.belongsTo(models.User);
      Post.belongsTo(models.Category);
      Post.Tags = Post.belongsToMany(models.Tag, { through: models.PostTag });
  }
  return Post;
}