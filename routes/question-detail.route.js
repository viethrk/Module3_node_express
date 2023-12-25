const express = require("express");
const questionRoute = express.Router();

questionRoute.get("/", (req, res) => {
  res.write("Home - questionRoute");
  res.end();
});

module.exports = questionRoute;
