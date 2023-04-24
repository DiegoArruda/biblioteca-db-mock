const { DataTypes } = require("sequelize");
const { connect } = require("./database");

const Autor = connect.define("Autor", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = Autor;
