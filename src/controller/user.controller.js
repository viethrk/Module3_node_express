const renderPageUser = (req, res) => {
  res.render("user/index", {
    content: "Module 3 session 7 user",
    condition: new Date().getTime(),
  });
};

const renderNumber = (req, res) => {
  res.render("partials/component/render-number", {
    number: [1, 2, 3, 5],
  });
};

module.exports = { renderPageUser, renderNumber };
