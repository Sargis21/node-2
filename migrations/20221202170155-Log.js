module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('logs', { id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      log: Sequelize.JSON,
      createdAt: { allowNull: false, type: Sequelize.DATE},
      updatedAt: { allowNull: false, type: Sequelize.DATE}
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users');
  }
};
