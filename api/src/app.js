const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routes = require("./routes");

//Express config.
const app = express();
app.set("port", process.env.PORT);

//Middlewares.
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes.
app.get("/", (req, res) => {
  res.redirect("/api");
});
app.use("/api/", routes);

//404 handler.
app.use(function (req, res, next) {
  res.status(404);
  res.send({ error: "Ups! No encontramos la página" });
});

module.exports = app;
