const express = require("express");
const bodyParser = require("body-parser");
const architectRoute = require("./src/routes/architect");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/v1/architect", architectRoute);

app.listen(8080, () => {
  console.log("Server is running");
});
