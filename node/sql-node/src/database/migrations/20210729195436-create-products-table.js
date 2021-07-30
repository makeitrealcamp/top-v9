'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'products',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        UserId: Sequelize.DataTypes.INTEGER,
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products')
  }
};
