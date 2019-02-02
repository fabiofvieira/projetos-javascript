'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Posts', {
      id:         { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      title:      { allowNull: false, type: DataTypes.STRING },
      userId:     { allowNull: false, type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      slug:       { allowNull: true, type: DataTypes.STRING, unique: true },
      content:    { allowNull: true, type: DataTypes.TEXT },
      createdAt:  { allowNull: false, type: DataTypes.DATE },
      updatedAt:  { allowNull: false, type: DataTypes.DATE },
    }, {
      charset: 'utf8mb4'
    })
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Posts');
  }
};
