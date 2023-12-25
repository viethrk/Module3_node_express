const express = require("express");
const homeRoute = express.Router();
const fs = require("fs");
const path = require("path");

homeRoute.get("/", (req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    fs.readFileSync(path.join(__dirname, "../public/html/index.html"), {
      encoding: "utf-8",
    })
  );
  res.end;
});

module.exports = homeRoute;
