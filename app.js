const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();

app.use(cookieParser("Pbv5jK5mklOFnIcTOzJFyKaas2l7d0u7"));

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "somesecret",
    cookie: { maxAge: 3600000 },
  })
);

app.get("/setCookie", (req, res) => {
  res.cookie("cookie-nomal", "rikkeiacademy");
  res.cookie("cookie-security", "rikkeiacademy", { signed: true });
  res.json({ ok: 1 });
});

app.get("/getCookie", (req, res) => {
  console.log("[ANONY] getCookie::::", req.cookies);
  console.log("[ANONY] getCookie::::signedCookies::::", req.signedCookies);
  res.json({ ok: req.cookies });
});

app.get("/clearCookie/:cookieName", (req, res) => {
  res.clearCookie(req.params.cookieName);
  res.json({ ok: 1 });
});

//set session
app.get("/set_session", (req, res) => {
  console.log("[ANONY] getSession:::: ", req.session);
  console.log("[ANONY] getSessionId:::: ", req.session.id);
  //set a object to session
  req.session.User = "123";

  return res.status(200).json({ status: "success" });
});

//set session
app.get("/get_session", (req, res) => {
  //check session
  if (req.session.User) {
    return res
      .status(200)
      .json({ status: "success", session: req.session.User });
  }
  return res.status(200).json({ status: "error", session: "No session" });
});

app.listen(8080, () => {
  console.log("Server is running");
});
