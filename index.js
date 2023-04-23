require("dotenv").config();
const express = require("express");
const { connect, authenticate } = require("./database/database");
authenticate(connect);

const app = express();
app.use(express.json);

app.listen(3000, () => {
  connect.sync();
  console.log("http://localhost:3000");
});
