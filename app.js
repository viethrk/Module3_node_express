const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const verifyToken = require("./src/middleware/verify.token");
const app = express();

const port = 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { user_name = "test", password = "password" } = req.body;
  const payload = {
    user_name,
    email: "mail@mail.com",
  };

  const token = jwt.sign(payload, "shhhhh", { expiresIn: 3600 });
  res.json({ token });
});

app.get("/verify", verifyToken, (req, res) => {
  res.json({ status: "OK", data: { products: [] } });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
