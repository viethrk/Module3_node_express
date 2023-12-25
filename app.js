const express = require("express");
const fs = require("fs");
const path = require("path");

const homeRoute = require("./routes/home.route");
const askRoute = require("./routes/ask.route");
const questionRoute = require("./routes/question-detail.route");
const homeApiRoute = require("./routes/api/home.api");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRoute);
app.use("/ask", askRoute);
app.use("/question-detail", questionRoute);
app.use("/api/v1/question", homeApiRoute);

app.listen(8080, () => {
  console.log("Server running port 8080");
});
