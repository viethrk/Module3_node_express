const checkUser = (req, res, next) => {
  const isLogin = false;

  if (!isLogin) {
    res.status(403);
    res.end("Access Denied!!!");
  }

  next();
};

module.exports = checkUser;
