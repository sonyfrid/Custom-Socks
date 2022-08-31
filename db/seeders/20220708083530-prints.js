module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Prints',
      [
        {
          prints_name: 'Sticker',
          prints_url: 'print1.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          prints_name: 'Tiger',
          prints_url: 'print2.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          prints_name: 'Cats',
          prints_url: 'print3.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          prints_name: 'Space',
          prints_url: 'print4.png',
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
