const fs = require("fs");

module.exports = (req, res) => {
  const userId = req.params.id;
  // string
  const users = fs.readFileSync("./db/users.json", { encoding: "utf-8" });
  // string => json
  const usersJson = JSON.parse(users);
  let userFind = null;
  for (let i = 0; i < usersJson.length; i++) {
    if (userId == usersJson[i].id) {
      userFind = usersJson[i];
      break;
    }
  }
  if (!userFind) {
    res.status(404).json("Not found!!!");
  } else {
    res.status(200).json(userFind);
  }
  res.end();
};
