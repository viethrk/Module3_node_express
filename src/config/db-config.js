const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "session10",
  keepAliveInitialDelay: 10000,
  enableKeepAlive: true,
});

module.exports = connection;
