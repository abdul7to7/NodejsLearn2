const sequelize = require("sequelize");

const sq = new sequelize("nodecomplete", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sq;
