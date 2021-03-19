const express = require("express");

const items = require("./routes/items");
const path = require("path");

const routes = express.Router();

routes.get("/", function (req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

routes.use("/items", items);

module.exports = routes;
