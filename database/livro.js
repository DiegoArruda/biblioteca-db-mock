const { DataTypes } = require("sequelize");
const Autor = require("./autor");
const { connect } = require("./database");

const Livro = connect.define("Livro", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      max: { msg: "O isbn deve ter entre 10 e 13 numeros", args: 17 },
      isUnique: (valor, proximo) => {
        Livro.findAll({
          where: { isbn: valor },
        })
          .then((livro) => {
            if (livro.length != 0) {
              proximo(new Error("isbn já está em uso"));
              proximo();
            }
          })
          .catch((err) => console.log(err));
      },
    },
  },
  paginas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
});

Autor.hasMany(Livro); //Autor tem vários livros
Livro.belongsTo(Autor); //Livro pertence a autor

module.exports = Livro;
