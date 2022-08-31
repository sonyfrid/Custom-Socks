module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Combinations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      socks_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Socks',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      prints_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Prints',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      pictures_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pictures',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Combinations');
  },
};
