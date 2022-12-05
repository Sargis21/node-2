module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      email: {type:Sequelize.STRING, allowNull: false},
      password: Sequelize.STRING,
      createdAt: { allowNull: false, type: Sequelize.DATE},
      updatedAt: { allowNull: false, type: Sequelize.DATE}
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users');
  }
};
