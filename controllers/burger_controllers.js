let burger = require("../models/burger");
let express = require("express");

let app = express();

module.exports = function(app) {
  app.get("/", (req, res) => {
    burger.getBurgers();

    res.render("index", { answer: ans });
  });

  app.post("/api/new", (req, res) => {
    console.log(req.body);
    burger.insertOne(req.body.burgerName);
  });

  app.put("/api/new", (req, res) => {
    burger.updateOne(req.body.burgerID);
  });
};
