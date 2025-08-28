'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [];
    for (let i = 1; i <= 25; i++) {
      items.push({
        productService: `Test Product ${i}`,
        inPrice: (Math.random() * 100).toFixed(2),
        price: (Math.random() * 200 + 100).toFixed(2),
        articleNo: `ART-${1000 + i}`,
        inStock: Math.floor(Math.random() * 100),
        unit: 'pcs',
        description: `This is a description for test product ${i}.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert('pricelist_items', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pricelist_items', null, {});
  }
};