const fs = require("fs");

module.exports = (req, res) => {
  // get data from json => string
  const users = fs.readFileSync("./db/users.json", { encoding: "utf-8" });
  // await
  res.status(200).json(JSON.parse(users));
  res.end();
};
