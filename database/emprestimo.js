const { DataTypes } = require("sequelize");
const { connect } = require("./database");
const Livro = require("./livro");

const Emprestimo = connect.define("Emprestimo", {
  data_Devolucao: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      notNull: true,
      isDate: { msg: "Formato valido: YYYY-MM-DD", args: "YYYY-MM-DD" },
    },
  },
  situacao: {
    type: DataTypes.ENUM(["pendete", "devolvido", "atrasado"]),
    allowNull: false,
    validate: {
      notNull: true,
      isIn: ["pendente", "devolvido", "atrasado"],
    },
  },
});

Livro.hasMany(Emprestimo); //Um Livro tem vários emprestimos
Emprestimo.belongsTo(Livro); //Emprestimo pertence a livro

module.exports = Emprestimo;
