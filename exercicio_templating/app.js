const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.set("view engine", "ejs");
app.set("views", "views");
app.use(myLogger);

app.get("/", function (req, res) {
  res.render("user");
});

app.listen(3000);
