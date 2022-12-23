const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const user = [];
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", function (req, res) {
  res.render("user");
});

app.post("/", (req, res, next) => {
  user.push({ username: req.body.username });

  res.redirect("/users");
});

app.get("/users", (req, res, next) => {
  const userNa = user;
  res.render("users", { userN: userNa, path: "/users" });
});

app.listen(3000);
