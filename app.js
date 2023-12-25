const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

// home server
const home = require("./server/home");
const getAllUser = require("./server/users/get-all-user");
const getUserById = require("./server/users/get-user-by-id");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  home(req, res);
});

app.get("/api/v1/users", (req, res) => {
  getAllUser(req, res);
});

app.get("/api/v1/users/:id", (req, res) => {
  getUserById(req, res);
});

app.post("/api/v1/users", (req, res) => {
  // get data from json => string
  const users = fs.readFileSync("./db/users.json", { encoding: "utf-8" });
  // string => json
  const usersJson = JSON.parse(users);
  usersJson.push(req.body);

  fs.writeFileSync("./db/users.json", JSON.stringify(usersJson), {
    encoding: "utf-8",
  });

  res.status(201).json(JSON.parse(req.body));
  res.end();
});

app.listen(8080, () => {
  console.log("server is running!!!!!!!!!!!");
});
