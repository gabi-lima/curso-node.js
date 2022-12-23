const path = require("path");
const express = require("express");
const router = express.Router();
const getProducts = require("../controllers/products");
const adminData = require("./admin");

router.get("/", getProducts.getProducts);

module.exports = router;
