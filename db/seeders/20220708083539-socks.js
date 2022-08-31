module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Socks',
      [
        {
          color: 'Red',
          hex: '#FF0000',
          image_url: 'picture5.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: 'Blue',
          hex: '#9FC5E8',
          image_url: 'picture6.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: 'Yellow',
          hex: '#E2D616',
          image_url: 'picture7.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: 'Green',
          hex: '#11E707',
          image_url: 'picture8.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
