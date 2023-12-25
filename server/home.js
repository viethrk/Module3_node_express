module.exports = (req, res) => {
  res.write("<h1>write</h1>");
  res.end("<h1>end</h1>");
};
