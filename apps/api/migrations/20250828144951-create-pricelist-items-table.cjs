'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pricelist_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productService: {
        type: Sequelize.STRING,
        allowNull: false
      },
      inPrice: {
        type: Sequelize.DECIMAL(10, 2)
      },
      price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      articleNo: {
        type: Sequelize.STRING
      },
      inStock: {
        type: Sequelize.INTEGER
      },
      unit: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pricelist_items');
  }
};
