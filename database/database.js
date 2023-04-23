const { Sequelize } = require("sequelize");

const connect = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

async function authenticate(connect) {
  try {
    await connect.authenticate();
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connect, authenticate };
