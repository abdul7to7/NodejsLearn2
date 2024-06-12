const sequelize = require("sequelize");

const sq = require("../util/database");

const Product = sq.define("product", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: sequelize.STRING,
  price: {
    type: sequelize.DOUBLE,
    allowNull: false,
  },
  description: {
    type: sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
