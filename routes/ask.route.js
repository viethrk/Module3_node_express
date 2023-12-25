const express = require("express");
const fs = require("fs");
const path = require("path");

const askRoute = express.Router();

askRoute.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

module.exports = askRoute;
