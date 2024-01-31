const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require("path");
const upload = require("./src/config/file-config");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/public/html/upload.html"));
});

app.post("/upload", upload.single("avataraaa"), (req, res) => {
  res.json({ message: "Successfully uploaded files" });
});

app.post("/upload-api", upload.array("files"), (req, res) => {
  console.log(req);
  res.json({ message: "Successfully upload-api files" });
});

app.listen(8080, () => {
  console.log("Server is running");
});
