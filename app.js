// import module
const express = require("express");
const userRoute = require("./src/routes/user.route");

const port = 8080;
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("./src/public"));

app.get("/", (req, res) => {
  res.render("index", {
    content: "Module 3 session 7",
  });
});

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
