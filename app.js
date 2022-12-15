const http = require("http");
const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  console.log("another middleware");
  res.send("Olá, do express!");
});

app.listen(3000);
