const express = require("express");
const {
  getAllArchitect,
  getArchitechById,
  createAchitect,
} = require("../controller/architect-controller");
const architectRoute = express.Router();

// get all architect
architectRoute.get("/", (req, res) => {
  const architects = getAllArchitect();
  architects.then((data) => {
    res.status(200).json(data);
  });
});

// get by id
architectRoute.get("/:id", (req, res) => {
  const architect = getArchitechById(req.params.id);
  architect.then((data) => {
    console.log(data);
    res.status(200).json(data);
  });
});

architectRoute.post("/", (req, res) => {
  const dataRequest = req.body;

  const architect = createAchitect(dataRequest);

  architect.then((response) => {
    console.log(response);
    res.status(200).json({ id: response.insertId, ...dataRequest });
  });
});

module.exports = architectRoute;
