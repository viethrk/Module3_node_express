// import module
const express = require("express");
const {
  renderPageUser,
  renderNumber,
} = require("../controller/user.controller");
const userRoute = express.Router();

userRoute.get("/", (req, res) => {
  renderPageUser(req, res);
});

userRoute.get("/api/number", (req, res) => {
  renderNumber(req, res);
});

module.exports = userRoute;
