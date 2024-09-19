const mysql = require("mysql2");

require("dotenv").config;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cart_app",
  port: "3308",
});

db.connect((err) => {
  if (err) {
    return console.log(err);
  }
  return console.log("Database Connected");
});

module.exports = db;
