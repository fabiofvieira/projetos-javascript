'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users', {
      id:         { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      name:      { allowNull: false, type: DataTypes.STRING },
      email:      { allowNull: true, type: DataTypes.STRING, unique: true },
      password:    { allowNull: true, type: DataTypes.TEXT },
      createdAt:  { allowNull: false, type: DataTypes.DATE },
      updatedAt:  { allowNull: false, type: DataTypes.DATE },
    }, { charset: 'utf8mb4' })
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Users');
  }
};
