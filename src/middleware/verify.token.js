const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authentication;

    const decoded = jwt.verify(token, "shhhhh");

    next();
  } catch (err) {
    res.status(403).json({ status: "ERROR", message: "Invalid token" });
  }
};

module.exports = verifyToken;
