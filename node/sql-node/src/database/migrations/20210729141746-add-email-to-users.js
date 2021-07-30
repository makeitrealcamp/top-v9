'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'users',
          'email',
          {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          { transaction: t }
        )
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('users', 'email', { transaction: t })
      ])
    })
  }
};

