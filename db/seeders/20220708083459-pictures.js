module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pictures',
      [
        {
          pic_name: 'Space',
          pic_url: 'picture1.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pic_name: 'Weed',
          pic_url: 'picture2.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pic_name: 'Ocean',
          pic_url: 'picture3.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pic_name: 'Fire',
          pic_url: 'picture4.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pic_name: 'Red',
          pic_url: 'picture5.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pic_name: 'Blue',
          pic_url: 'picture6.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pic_name: 'Yellow',
          pic_url: 'picture7.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pic_name: 'Green',
          pic_url: 'picture8.png',
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
